import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepsModule } from 'primeng/steps';
import { FileUploadModule } from 'primeng/fileupload';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StepsModule,
    InputTextModule,
    CalendarModule,
    ButtonModule,
    CardModule,
    FileUploadModule,
    DropdownModule,TableModule
  ],
  exports: [
    StepsModule,
    InputTextModule,
    CalendarModule,
    ButtonModule,
    CardModule,
    FileUploadModule,
    DropdownModule,TableModule
  ],
})
export class PrimengModule {}
