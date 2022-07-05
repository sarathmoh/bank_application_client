import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { DeleteconfirmComponent } from './deleteconfirm/deleteconfirm.component';
import { HighlightDirective } from './directives/highlight.directive';
import { AnimationComponent } from './animation/animation.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    DashboardComponent,
    RegisterComponent,
    TransactionsComponent,
    DeleteconfirmComponent,
    HighlightDirective,
    AnimationComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
