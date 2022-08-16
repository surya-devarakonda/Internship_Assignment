import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddideaComponent } from './addidea/addidea.component';
import {ResponsesComponent} from './responses/responses.component';

const appRoutes: Routes = [

  {
      path: 'response' , component: ResponsesComponent
  },
  {
    path:'',component: AddideaComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
