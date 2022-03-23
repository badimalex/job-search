import axios from './axios';
import Job from '../types/Job';
import { AxiosPromise } from 'axios';
import Resume from '../types/Resume';
import { FilterType } from '../init/useResumes';

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

export const getJobs = (): AxiosPromise<Job[]> => {
  return axios.get('/');
};

export const getResumes = (
  queryParams: FilterType = { level: '', tags: [] }
): AxiosPromise<Resume[]> => {
  return axios.get('/resumes', {
    params: queryParams
  });
};
