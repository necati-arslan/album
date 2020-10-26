import { Component, OnInit, AfterViewInit, ElementRef, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../models/photo-model';
import { User } from '../models/users-model';
import { tap } from 'rxjs/operators';

import { DataApiService } from '../services/data-api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModelContentComponent } from '../model-content/model-content.component';
declare const Swiper: any;

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit {
 
  @Input() album: User;
  photos$:Observable<Photo[]>;
 
 
  constructor(
    private dataApi: DataApiService,
    private elementRef: ElementRef,
    private modalService: NgbModal
  ) {}


  

  

  ngOnInit(): void {
   this.photos$= this.dataApi.getPhotoByUserId(this.album.userId);
 
   
 
  
  }

  

  open(data,type) {

    const modalRef = this.modalService.open(ModelContentComponent);
    data={
      data:data,
      type
    }
      modalRef.componentInstance.data = data;
  }
  
}
