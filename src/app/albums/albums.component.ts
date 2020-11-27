import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';


declare const  CheckBoxValue : any;
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  

  constructor(private route : Router) { }

  ngOnInit() {
    
  }

  Album(){
      
      alert('please select atleast 2 checkbox')
      this.route.navigate(['/photos']);
      
  }
 
}
