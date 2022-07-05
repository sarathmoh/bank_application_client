import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  aim = "Your perfect banking Partner"
  accnum = "Enter account number"
  


//loginform model
  loginForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd :['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],
    
  })


  constructor(private router: Router, private ds: DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }


  // acnoChange(event:any){    
  //   this.acno=event.target.value
  //   console.log(this.acno);
  //     }

  // pswdChange(event:any){
  //   this.pswd=event.target.value
  //   console.log(this.pswd);
  //        }
  //login using two way binding ngmodel
  login() {

    var acno = this.loginForm.value.acno
    var pswd = this.loginForm.value.acno

   if (this.loginForm.valid){
     //call login in data service-asy
    this.ds.login(acno, pswd)
    .subscribe((result:any)=>{
      if (result) {
        localStorage.setItem('currentAcno',JSON.stringify(result.currentAcno))
        localStorage.setItem('currentUser',JSON.stringify(result.currentUser))
        localStorage.setItem("token",JSON.stringify(result.token))
        alert(result.message)
        this.router.navigateByUrl("dashboard")
  
      }
    },
    (result)=>{
      alert(result.error.message)
    })



    
  }
  else{
    alert("invalid form")
  }
  }
  //login using template referance variable
  // login(a:any,b:any){

  // console.log(a);

  //  user entered acno  and pswd
  //  var acno=a.value
  //  var pswd=b.value
  //  let database=this.database

  //  if (acno in database){

  //   if (pswd==database[acno]["password"]){
  //     alert("login successful")

  //   }
  //   else{
  //     alert("invalid password")
  //   }
  //  }
  //  else{
  //    alert("user doesnot exist")
  //  }
  // }

         
}