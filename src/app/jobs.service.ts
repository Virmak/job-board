import { Injectable } from '@angular/core';
import { Job } from './interfaces/job';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  jobs: Job[] = [
    {
      id: 1,
      title: 'Web developer',
      description: '',
      type: 'Full-time',
      field: 'IT',
      experience: 2,
      education: '',
      location: 'Tunis'
    },
    {
      id: 2,
      title: 'Graphic designer',
      description: '',
      type: 'Full-time',
      field: 'IT',
      experience: 1,
      education: '',
      location: 'Sfax'
    }
  ]
  constructor() { }

  getJobs() {
    return this.jobs;
  }
}
