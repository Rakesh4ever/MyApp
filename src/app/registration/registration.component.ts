import { Component } from '@angular/core';
import { RestServiceService } from '../rest-service.service';
import { User } from './user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
   temp="Hello from registreation";
 users!: any;
   constructor(private userService:RestServiceService){}

  ngOnInit(){
    this.userService.getUsers().subscribe(data=>this.users=data );
  }


}
