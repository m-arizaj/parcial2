import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PenguinsComponent } from './penguins.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PenguinsComponent],
  exports: [PenguinsComponent]
})
export class PenguinsModule { }
