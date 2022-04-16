import Job from '../types/Job';

export const SET_JOBS = 'SET_JOBS';

export type SetJobsAction = {
  type: typeof SET_JOBS;
  payload: Job[];
};

interface State {
  list: Job[];
}

const initialState = {
  list: [],
};

type Action = SetJobsAction;

export type JobState = {
  list: Job[];
};

export function setJobs(payload: Job[]): Action {
  return {
    type: SET_JOBS,
    payload,
  };
}

// eslint-disable-next-line @typescript-eslint/default-param-last
export const jobs = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case SET_JOBS: {
      return {
        list: action.payload,
      };
    }
    default:
      return state;
  }
};
