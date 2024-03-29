import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WeareComponentComponent } from './components/weare-component/weare-component.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'quem-somos', component: WeareComponentComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
