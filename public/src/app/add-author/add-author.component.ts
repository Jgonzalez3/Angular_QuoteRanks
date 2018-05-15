import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
  newauthor = {name: "", quotes: []};
  errors: any;
  constructor(
    private _httpService: HttpService,
    private _router:Router
  ) { }

  ngOnInit() {
  }
  createAuthor(){
    console.log(this.newauthor);
    let observable = this._httpService.createAuthor(this.newauthor);
    observable.subscribe(data=>{
      console.log("DataCreate:", data);
      console.log("ERROR", data['error']);
      console.log("Create Message", data['message']);
    })
    this.redirectHome();
  }
  redirectHome(){
    this._router.navigate(['/']);
  }
}
