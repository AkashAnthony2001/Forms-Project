import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  
firstname = new FormControl('',[Validators.required]);
lastname = new FormControl('',[Validators.required]);
email = new FormControl('',[Validators.required,Validators.email]);
password = new FormControl('',[Validators.required,]);
confirm = new FormControl('',[Validators.required]);
state = new FormControl('',[Validators.required]);
male = new FormControl('',Validators.required);
female = new FormControl('',Validators.required);
others = new FormControl('',Validators.required);
phone = new FormControl('',[Validators.required]);
agree = new FormControl('',Validators.required);

places = ["AndhraPradesh","ArunachalPradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","HimachalPradesh","Jharkhand","Karnataka","Kerala","MadhyaPradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","TamilNadu","Telangana","Tripura","UttarPradesh","Uttarakhand","WestBengal"]


signUp !: FormGroup;

ngOnInit(){
  this.signUp=new FormGroup({
'firstname' : new FormControl('',[Validators.required]),
'lastname' : new FormControl('',[Validators.required]),
'email' : new FormControl('',[Validators.required,Validators.email]),
'password' : new FormControl('',[Validators.required,]),
'confirm' : new FormControl('',[Validators.required]),
'state' : new FormControl('',[Validators.required]),
'male' : new FormControl('',Validators.required),
'female' : new FormControl('',Validators.required),
'others' : new FormControl('',Validators.required),
'phone' : new FormControl('',[Validators.required]),
'agree' : new FormControl('',Validators.required)
  });
}

submit(){
  console.log(this.firstname,this.lastname,this.email,this.password,this.confirm,this.male,this.female,this.others,this.phone,this.agree)
}
}
