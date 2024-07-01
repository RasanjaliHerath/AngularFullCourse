import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AppNavbar ,HeaderComponent,FormsModule,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularFullCourse';
  title1: string = 'This load dynamically'
  imgUrl: string = 'https://techpearl.com/wp-content/uploads/2021/11/Host-Angular-Web-App-In-AWS-CLOUDFRONT-1-1024x576.png'
  imgUrl1: string = 'https://th.bing.com/th/id/OIP.5vkdhKnN0Tv3I1OtFbLsogHaDH?w=1000&h=420&rs=1&pid=ImgDetMain'
  isDisabled : boolean = true;
  isActive: boolean = true;
  fruitName: string = 'Apple';
  userName:string = 'john Doe';
  textValue:string = "Value is coming from component";


  buttonclick(){
    console.log('Button clicked');
  }

  onKeyup(){
    console.log(this.textValue);
  }

  keyEnter(){
    console.log('key Pressed');
  }
  KeyEnter(event:any){
    console.log(event.Keycode);
    if(event.Keycode == 13){
      console.log('Enter key Pressed');
    }
  }

  keyupFiltering(){
    console.log('keyUp Filtering');
  }

    keyupfiltering(user:HTMLInputElement){
      console.log(user.value);
    }

    updateUserName(username: HTMLInputElement)
    {
        this.userName = username.value;
        console.log(this.userName);
    }

    isLoggedIn:boolean = false; //true,false
    UserName:string = 'John Doe';

    isAdmin: boolean = false;
    isMember: boolean = false;
    isGuest: boolean = true;

}
