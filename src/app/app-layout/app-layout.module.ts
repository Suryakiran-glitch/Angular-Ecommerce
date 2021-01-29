import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, HeroComponent],
  imports: [
    CommonModule,
  ],
  exports : [
    HeaderComponent,
    FooterComponent,
    HeroComponent
  ]
})
export class AppLayoutModule { }
