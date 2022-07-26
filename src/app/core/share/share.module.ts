import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PrimengModule } from './primeng/primeng.module';
import { OnlyNumberDirective } from './directives/only-number.directive';
import { OnlyLetterDirective } from './directives/only-letter.directive';

@NgModule({
  declarations: [OnlyNumberDirective, OnlyLetterDirective],
  imports: [CommonModule, FormsModule, PrimengModule],
  exports: [OnlyNumberDirective,OnlyLetterDirective, FormsModule, PrimengModule],
})
export class ShareModule {}
