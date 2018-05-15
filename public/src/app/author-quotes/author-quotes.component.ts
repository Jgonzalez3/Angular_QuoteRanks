import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-author-quotes',
  templateUrl: './author-quotes.component.html',
  styleUrls: ['./author-quotes.component.css']
})
export class AuthorQuotesComponent implements OnInit {
  constructor(
    private _httpService: HttpService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { }
  paramId: any;
  author: any;

  ngOnInit() {
    this._route.params.subscribe((params: Params)=>{
    this.paramId = params['id'];
    console.log(params['id']);
    })
    this.getQuotesFromService();
  }
  getQuotesFromService(){
    let observable = this._httpService.getAuthor(this.paramId);
    observable.subscribe(data=>{
      console.log("Got Quotes", data);
      this.author = data['quotes'];
    })
  }
  deleteQuote(quoteid){
    let observable = this._httpService.deleteQuote(this.paramId, quoteid);
    observable.subscribe(data=>{
      console.log("Delete Data",data);
      console.log("Delete ERROR", data['error']);
      console.log("Delete ERROR", data['err']);
    })
    this.getQuotesFromService();
  }
  // Work on Methods below
  voteUp(quote, quoteid){
    console.log(quote.vote);
    quote.vote++;
    console.log(quote.vote);
    let observable = this._httpService.updateVote(this.paramId, quoteid, quote)
  }
  voteDown(quote, quoteid){
    console.log(quote.vote);
    quote.vote--;
    console.log(quote.vote);
    let observable = this._httpService.updateVote(this.paramId, quoteid, quote)
  }
}
