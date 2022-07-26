import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from './../../../../app/core/services/util.service';
import { AppModelStepTwo, AppStatus } from './app.model';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss'],
})
export class TwoComponent implements OnInit {
  model = new AppModelStepTwo();
  minDateValue = new Date();
  maxDateValue: Date;
  status : Array<AppStatus>;

  constructor(private util: UtilService,private router: Router) {
    this.maxDateValue = util.addDays(5);
  }

  ngOnInit(): void {
    this.status = [
      { name: 'status 1', code: '1' },
      { name: 'status 2', code: '2' },
      { name: 'status 3', code: '3' },
      { name: 'status 4', code: '4' }
    ];
  }
  nextPage() {
    this.router.navigate(['wizard/three'])
  }
}
