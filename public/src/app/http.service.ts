import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getAuthors(){
    return this._http.get('/authors')
  }
  getAuthor(id){
    return this._http.get('/author/' + id)
  }
  createAuthor(newAuthor){
    console.log(newAuthor);
    return this._http.post('/author', newAuthor)
  }
  createQuote(author, id){
    return this._http.put('/quote/'+ id, author)
  }
  updateAuthor(id, author){
    return this._http.put('/author/edit/'+ id, author)
  }
  updateVote(id, quoteid, quote){
    return this._http.put("/vote/"+ id + "/" + quoteid, quote)
  }
  deleteQuote(id, quoteid){
    console.log(id, quoteid)
    return this._http.delete('/quote/'+ id + '/'+ quoteid);
  }
}
