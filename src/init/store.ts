// Core
import { createStore } from 'redux';

// Instruments
import { rootReducer } from './rootReducer';

export const store = createStore(rootReducer);
