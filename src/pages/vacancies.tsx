import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import React from 'react';
import styled from 'styled-components';
import JobItem from '../components/JobItem';
import SearchInput from '../components/SearchInput';
import SortSearch from '../components/SortSearch';
import { useJobs } from '../init/useJobs';
import MainLayout from '../layouts/main';
import CompanyRating from './charts';

const SearchPanel = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const Content = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const Main = styled.div`
  flex: 1 1;
  min-width: 0;
`;

const Sidebar = styled.div`
  flex: none;
  order: 1;
  width: 300px;
`;

function App() {
  const { list } = useJobs();

  const ratings = list.map((job) => ({
    title: job.title,
    value: Number(job.rating),
  }));

  return (
    <MainLayout>
      <Content>
        <Main>
          <SearchPanel>
            <SearchInput />
            <SortSearch />
          </SearchPanel>

          {list.map((job) => (
            <JobItem
              key={job.id}
              title={job.title}
              salary={job.salary}
              company={job.company}
            />
          ))}
        </Main>
        <Sidebar>
          <CompanyRating data={ratings} />
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Frontend" />
            <FormControlLabel control={<Checkbox />} label="Backend" />
            <FormControlLabel control={<Checkbox />} label="Applications" />
            <FormControlLabel
              control={<Checkbox />}
              label="Software development"
            />
            <FormControlLabel control={<Checkbox />} label="Testing" />
            <FormControlLabel control={<Checkbox />} label="Administration" />
          </FormGroup>
        </Sidebar>
      </Content>
    </MainLayout>
  );
}

export default App;
