import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourComponent } from './main/four/four.component';
import { MainComponent } from './main/main.component';
import { OneComponent } from './main/one/one.component';
import { ThreeComponent } from './main/three/three.component';
import { UserResolverService } from './main/three/user-resolver.service';
import { TwoComponent } from './main/two/two.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'one',
        component: OneComponent,
      },
      {
        path: 'two',
        component: TwoComponent,
      },
      {
        path: 'three',
        component: ThreeComponent,
        resolve: { users: UserResolverService },
      },
      {
        path: 'four',
        component: FourComponent,
      },
      {
        path: '',
        redirectTo: 'one',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WizardRoutingModule {}
