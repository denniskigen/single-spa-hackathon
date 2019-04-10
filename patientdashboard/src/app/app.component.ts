import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'patientdashboard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit {
  title = 'patientdashboard';
  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      if (params.patient_uuid) {
        console.log('Fetch Patient info for patient', params.patient_uuid);
      }
    });
  }
  constructor(private activeRoute: ActivatedRoute) {
  }
  ngOnDestroy() {
    console.log('destroying patientdashboard');
  }
}
