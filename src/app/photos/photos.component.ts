import { Component, Input, OnInit } from '@angular/core'; 
import { Photo } from '../models/photo-model';
 
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  @ Input() photo:Photo

  constructor() { }

  ngOnInit(): void {
    console.log(this.photo)
  }

}
