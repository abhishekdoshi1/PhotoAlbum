import { Component, OnInit , ViewChild} from '@angular/core';

declare const carousel: any;
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {


  constructor() { }

  ngOnInit() {

    carousel();
  }

  product: any[] = [
    {url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaPqnnRO7XyUYe9NK-5ZGs7JEnzFQxsC2z5w&usqp=CAU'},
    {url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFWqKHq_pRFOK4H75F2qLW_F6XDv_0WC7YkA&usqp=CAU'},
    {url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTfeC6BaFQ2_B_Y7Or1yyAq_rb7yHyY_cf7A&usqp=CAU'},
    {url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm6nyGU8Ib8waoV8b42wQJQ8awb1HqgUNdwA&usqp=CAU'},
    {url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmbWhxLGrHj8_wR6vWNB5wZq6XzHRpyJ8-Yw&usqp=CAU'},
    {url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5a56OaiV6b6M5Mei3_L4EAAMxFFQok6zjRQ&usqp=CAU'},
    {url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTueK2Rhw05c1cfy3bUsk6iBT_2LkR71Y6NpA&usqp=CAU'},
    {url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpSLZW37UFSpEIiT_-vsXPffv_0ymV0LdvYA&usqp=CAU'},
    {url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTirKY2W00aCdAHTjopSBN4kYHAT1uzYVpPoA&usqp=CAU'},
    {url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRskE0paxxr29Py6levJdrgYqbj5hB-1B3Wgg&usqp=CAU'},
    {url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvTXaYZjMfrPWvliGW94SEku3muRxLzKq-3Q&usqp=CAU'},
    {url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvTXaYZjMfrPWvliGW94SEku3muRxLzKq-3Q&usqp=CAU'},  
    ] 

    
}
