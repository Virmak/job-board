import { Component, OnInit } from '@angular/core';
import { JobsService } from '../jobs.service';
import { Job } from '../interfaces/job';

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.css']
})
export class JobSearchComponent implements OnInit {

  jobs: Job[];

  constructor(private jobsService: JobsService) { }

  ngOnInit() {
    this.jobs = this.jobsService.getJobs();
  }

}
