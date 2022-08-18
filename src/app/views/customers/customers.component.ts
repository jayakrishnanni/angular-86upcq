import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  newsResponses: JSON | any;
  constructor(private api : ApiService) { }
  
  ngOnInit() {
     this.api.getNews()
     .subscribe((data: any)=> {
            this.newsResponses = data;
     })
  }

}