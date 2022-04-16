// Core
import { combineReducers } from 'redux';

// Reducers
import { jobs } from './jobs';
import { resumes } from './resumes';

export const rootReducer = combineReducers({
  resumes,
  jobs,
});

export type AppState = ReturnType<typeof rootReducer>;
