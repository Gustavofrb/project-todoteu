import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ToolbarModule } from 'primeng/toolbar';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { HeaderService } from './services/header.service';
import { WeareComponentComponent } from './components/weare-component/weare-component.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, FirstComponentComponent, WeareComponentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    ToolbarModule,
    SidebarModule,
    FormsModule,
    InputTextModule
  ],
  providers: [HeaderService],
  bootstrap: [AppComponent],
})
export class AppModule {}
