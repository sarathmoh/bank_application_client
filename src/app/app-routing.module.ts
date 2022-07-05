import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegisterComponent } from './register/register.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  {
    path:'',component:LoginpageComponent
  },
  {
    path:'dashboard',component:DashboardComponent
  },
  
  {
    path:'register', component:RegisterComponent
  },
  {
    path:'transactions', component: TransactionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
