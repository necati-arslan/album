import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../models/comment-model';
 
@Component({
  selector: 'app-commnets',
  templateUrl: './commnets.component.html',
  styleUrls: ['./commnets.component.css']
})
export class CommnetsComponent implements OnInit {

  @ Input() comment:Comment
  constructor() { }

  ngOnInit(): void {
  }

}
