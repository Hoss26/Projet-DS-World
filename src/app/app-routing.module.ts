import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { PaysComponent } from './components/pays/pays.component';
import { ContinentsComponent } from './components/continents/continents.component';
import { ErrorComponent } from './components/error/error.component';


const routes : Routes = [
  {path:'', component: HomeComponent},
  {path:'Home', component: HomeComponent},
  {path:'Pays', component:PaysComponent},
  {path:'Details', component: DetailsComponent},
  {path:'Continents', component: ContinentsComponent},
  {path:'**', component: ErrorComponent}
]


@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
