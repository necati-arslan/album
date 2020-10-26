import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/users-model';
import { DataApiService } from '../services/data-api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataApi:DataApiService ) { }
 
  albums$:Observable<User[]>

  ngOnInit(): void {

    this.albums$= this.dataApi.getAlbums()
   // this.dataApi.getAlbums().subscribe(x=>{console.log(x)})
  }

 

}
