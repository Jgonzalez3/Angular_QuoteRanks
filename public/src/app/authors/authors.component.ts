import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors: any[];
  constructor(
    private _httpService: HttpService,
    private _router: Router
) { }

  ngOnInit() {
    this.getAuthorsFromService();
  }
  getAuthorsFromService(){
    let observable = this._httpService.getAuthors();
    observable.subscribe(data=>{
      console.log("Authors Data", data);
      this.authors = data['authors'];
    })
  }
  redirectCreateAuthor(){
    this._router.navigate(['/new']);
  }
}
