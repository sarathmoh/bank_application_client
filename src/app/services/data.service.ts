import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const options = {
  headers: new HttpHeaders
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser: any
  currentAcno: any

  database: any = {
    1000: { acno: 1000, uname: "neer", password: 1000, balance: 5000, transaction: [] },
    1001: { acno: 1001, uname: "june", password: 1001, balance: 4000, transaction: [] },
    1002: { acno: 1002, uname: "may", password: 1002, balance: 3000, transaction: [] }
  }
  transaction: any;

  constructor(private http: HttpClient) {
    this.getDetails()
  }

  //to save data in local storage

  saveDetails() {
    localStorage.setItem("database", JSON.stringify(this.database))
    if (this.currentAcno) {
      localStorage.setItem("currentAcno", JSON.stringify(this.currentAcno))
    }
    if (this.currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(this.currentUser))
    }

  }

  //to get data from localStorage

  getDetails() {
    if (localStorage.getItem("database")) {
      this.database = JSON.parse(localStorage.getItem("database") || '')
    }
    if (localStorage.getItem("currentAcno")) {
      this.currentAcno = JSON.parse(localStorage.getItem("currentAcno") || '')
    }
    if (localStorage.getItem("currentUser")) {
      this.currentUser = JSON.parse(localStorage.getItem("currentUser") || '')
    }
  }

  register(uname: any, acno: any, password: any) {
    //req body
    const data = {
      uname,
      acno,
      password
    }
    //register api call
    return this.http.post('https://shrouded-island-12180.herokuapp.com/register', data)

  }
  //login
  login(acno: any, pswd: any) {
    //req body
    const data = {
      acno,
      pswd
    }
    //login api call
    return this.http.post('https://shrouded-island-12180.herokuapp.com/login', data)


  }

  //token management
  getOptions() {
    //to fetch oken from local storage
    const token = JSON.parse(localStorage.getItem("token") || '')

    //create http header 
    let headers = new HttpHeaders()
    // add token to header
    if (token) {
      headers = headers.append('x-access-token', token)
      options.headers = headers

    }
    return options
  }



  //deposit
  deposit(acno: any, pswd: any, amt: any) {
    //req body
    const data = {
      acno,
      pswd,
      amt
    }
    //deposit api call
    return this.http.post('https://shrouded-island-12180.herokuapp.com/deposit', data, this.getOptions())
  }


  //withdrawal

  withdraw(acno: any, pswd: any, amt: any) {
    //req body
    const data = {
      acno,
      pswd,
      amt
    }
    //withdraw api call
    return this.http.post('https://shrouded-island-12180.herokuapp.com/withdraw', data, this.getOptions())
   




  }


  //transaction history

  transactions(acno: any) {
    //req body
    const data = {
      acno
    }
    
    //transaction api call
    return this.http.post('https://shrouded-island-12180.herokuapp.com/transactions', data,this.getOptions())

  }


  onDelete(acno:any){
    //onDelete API call
    return this.http.delete('https://shrouded-island-12180.herokuapp.com/onDelete/'+acno,this.getOptions())
  }

}


