import { AxiosPromise } from 'axios';
import axios from './axios';
import Job from '../types/Job';
import Resume, { FilterType } from '../types/Resume';

/*
  /
  => {
    activity: ['front','back','qa'],
    level: ['senior','middle'],
    salary: 2000,
    is_salary: true,
    currency: 'USD',
    currency: 'EUR',
  }
*/

export const getJobs = (): AxiosPromise<{ list: Job[] }> => axios.get('/jobs');

export const getResumes = (
  queryParams: FilterType = { level: '', tags: [] }
): AxiosPromise<Resume[]> => axios.get('/resumes', {
  params: queryParams
});
