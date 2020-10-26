import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataApiService } from '../services/data-api.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment-model';
import { Photo } from '../models/photo-model';

@Component({
  selector: 'app-model-content',
  templateUrl: './model-content.component.html',
  styleUrls: ['./model-content.component.css']
})
export class ModelContentComponent implements OnInit {
  @Input() public data;

  comments$:Observable<Comment[]>
  photos$:Observable<Photo[]>

  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  constructor(private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private dataApi: DataApiService,
    ) { }
 
  ngOnInit(): void {
    console.log(this.data)

    this.comments$=this.dataApi.getCommentByUserId(this.data.data);
    this.photos$=this.dataApi.getPhotoByUserId(this.data.data).pipe(tap(x=>console.log(x)));
    this.dataApi.getPhotoByUserId(this.data.data).subscribe(x=>{console.log(x)})
  }

 

}
