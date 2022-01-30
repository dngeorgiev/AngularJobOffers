import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { JobApplication } from '../../models/job-application.model';

@Component({
  selector: 'app-job-application-item',
  templateUrl: './job-application-item.component.html',
  styleUrls: ['./job-application-item.component.scss']
})
export class JobApplicationItemComponent implements OnInit {

  @Input() jobApplication!: JobApplication;

  @Output() approved = new EventEmitter<JobApplication>();
  @Output() rejected = new EventEmitter<JobApplication>();

  constructor() { }

  ngOnInit(): void {
  }

  onApprove(): void {
    this.approved.emit(this.jobApplication);
  }

  onReject(): void {
    this.rejected.emit(this.jobApplication);
  }

}
