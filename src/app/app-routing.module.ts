import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreditcardPaymetComponent } from './creditcard-paymet/creditcard-paymet.component';


const routes: Routes = [
{path: 'payment', component: CreditcardPaymetComponent},
{path : 'mainPage' , component: AppComponent} ,
{path : '**' , component: AppComponent} ,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
