import { Component, OnInit } from '@angular/core';
import { AlbumsComponent } from '../albums/albums.component';
import { AllServiceService } from '../all-service.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public ShowUsersData = [] ;

  constructor(private UserData : AllServiceService) { }

  ngOnInit(): void {
      this.UserData.GetuserData().subscribe(data => this.ShowUsersData= data);
      
  }

  redirect()
  {
    
  }
}
