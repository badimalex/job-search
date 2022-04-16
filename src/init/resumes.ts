import Resume from '../types/Resume';

export const SET_RESUME = 'SET_RESUME';

export type SetResumesAction = {
  type: typeof SET_RESUME;
  payload: Resume[];
};

interface State {
  list: Resume[];
}

const initialState = {
  list: [],
};

type Action = SetResumesAction;

export type ResumeState = {
  list: Resume[];
};

export function setResumes(payload: Resume[]): Action {
  return {
    type: SET_RESUME,
    payload,
  };
}

// eslint-disable-next-line @typescript-eslint/default-param-last
export const resumes = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case SET_RESUME: {
      return {
        list: action.payload,
      };
    }
    default:
      return state;
  }
};
