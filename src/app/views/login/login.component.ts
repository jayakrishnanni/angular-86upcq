import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  newsResponses: JSON | any;
  constructor(private api : ApiService) { }

  ngOnInit() {
      this.api.getNews()
     .subscribe((data: any)=> {
            this.newsResponses = data;
     })
  }

}