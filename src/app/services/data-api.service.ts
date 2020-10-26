import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import {  first, map, take } from 'rxjs/operators';
import { Photo } from '../models/photo-model';
import { User } from '../models/users-model';
import { Comment } from '../models/comment-model';

@Injectable({
  providedIn: 'root'
}) 
export class DataApiService {

  constructor(private http: HttpClient) { }

  getAlbums():Observable<User[]>{
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/albums')
    .pipe(map(snaps=>{
        return this.arrangeData(snaps);
    })
    )
  }

  getPhotoByUserId(userId):Observable<Photo[]>{
    return this.http.get<Photo[]>(`https://jsonplaceholder.typicode.com/photos?albumId=${userId}`)
    .pipe(map(snaps=>snaps.slice(0,10)));
  }

  getCommentByUserId(userId):Observable<Comment[]>{
    return this.http.get<Comment[]>(`https://jsonplaceholder.typicode.com/comments?postId=${userId}`)
  }


  private arrangeData(snaps):User[]{
    const newSnaps = snaps.reduce((obj, item) => {
      obj[item.userId] ? null : (obj[item.userId] = { ...item });
      return obj;
    }, {});
      const snapsArray:any = Object.values(newSnaps);

      return snapsArray;
  }


}
