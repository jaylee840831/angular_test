import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessBarComponent } from './process-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    ProcessBarComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [ProcessBarComponent]
})
export class ProcessBarModule { }
