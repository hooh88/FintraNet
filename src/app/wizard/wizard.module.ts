import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WizardRoutingModule } from './wizard-routing.module';
import { ShareModule } from '../core/share/share.module';

import { MainComponent } from './main/main.component';
import { OneComponent } from './main/one/one.component';
import { TwoComponent } from './main/two/two.component';
import { ThreeComponent } from './main/three/three.component';
import { FourComponent } from './main/four/four.component';

@NgModule({
  declarations: [
    MainComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FourComponent,
  ],
  imports: [
    CommonModule,
    ShareModule,
    WizardRoutingModule,
  ],
})
export class WizardModule {}
