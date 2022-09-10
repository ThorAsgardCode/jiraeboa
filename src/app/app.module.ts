import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CenterContentComponent } from './center-content/center-content.component';
import { FooterContentComponent } from './footer-content/footer-content.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    CenterContentComponent,
    FooterContentComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
