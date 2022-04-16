import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import Charts from './pages/charts';
import Resumes from './pages/resumes';
import Vacancies from './pages/vacancies';
import reportWebVitals from './reportWebVitals';
import { store } from './init/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Vacancies />} />
          <Route path="/resumes" element={<Resumes />} />
          <Route path="/charts" element={<Charts data={[]} />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
