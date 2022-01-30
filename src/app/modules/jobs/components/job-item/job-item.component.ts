// Import Angular modules
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/_services/auth.service';
import { User } from 'src/app/modules/users/models/user.model';

// Import services

// Import models
import { Job } from '../../models/job.model';

@Component({
  selector: 'app-job-item',
  templateUrl: './job-item.component.html',
  styleUrls: ['./job-item.component.scss']
})
export class JobItemComponent implements OnInit {

  currentUser!: User;
  @Input() job!: Job;

  @Output() deleteClicked = new EventEmitter<number>();
  @Output() applyClicked = new EventEmitter<number>();
  @Output() likeClicked = new EventEmitter<number>();

  hasPermissions: boolean = false;

  constructor(
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.currentUser = this.authService.getLoggedUserFromLocalStorage();
    this.hasPermissions = this.authService.hasPermissions('admin');
  }

  onDelete(): void {
    this.deleteClicked.emit(this.job.id);
  }

  onLike(): void {
    this.likeClicked.emit(this.job.id);
  }

  onApply(): void {
    this.applyClicked.emit(this.job.id);
  }
}
