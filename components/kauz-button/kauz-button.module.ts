import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KauzButtonComponent } from './kauz-button.component';

@NgModule({
  declarations: [
    KauzButtonComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    KauzButtonComponent
  ]
})
export class KauzButtonModule { }
