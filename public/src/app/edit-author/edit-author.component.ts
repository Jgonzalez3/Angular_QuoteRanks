import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }
  author: any;
  authorname: any;
  paramId: any;

  ngOnInit() {
    this._route.params.subscribe((params: Params)=>{
      this.paramId = params['id'];
      console.log(params['id']);
      })
    this.getAuthorFromService();
  }
  getAuthorFromService(){
    let observable = this._httpService.getAuthor(this.paramId);
    observable.subscribe(data=>{
      console.log("AuthorData", data);
      this.authorname = data['quotes']['name'];
      this.author = data['quotes'];

      console.log(this.author);
    })
  }
  editAuthor(){
    // this.author.name = this.newauthor.name;
    let observable = this._httpService.updateAuthor(this.paramId, this.author);
    observable.subscribe(data=>{
      console.log("Data Edit", data);
    })
    this.redirectHome();
  }
  redirectHome(){
    this._router.navigate(['/']);
  }
}
