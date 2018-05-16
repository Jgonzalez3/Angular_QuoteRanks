import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }
  paramId: any;
  newquote = {quote: "", vote: 0};
  author: any;

  ngOnInit() {
    this._route.params.subscribe((params: Params)=>{
      this.paramId = params['id'];
      console.log(params['id']);
    })
    this.getAuthorFromService();
  }
  getAuthorFromService(){
    let observable = this._httpService.getAuthor(this.paramId);
    observable.subscribe(data => {
      console.log("Data", data);
      this.author = data['quotes'];
      console.log(this.author);
    })
  }
  createQuote(){
    console.log(this.newquote)
    let observable = this._httpService.createQuote(this.newquote, this.paramId);
    observable.subscribe(data => {
      console.log("Data", data);
      console.log("Any Errors", data['error']);
      this.redirectAuthorQuotes();
    })
  }
  redirectAuthorQuotes(){
    this._router.navigate(['/quotes/'+ this.paramId])
  }
}
