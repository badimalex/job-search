import React, { FC } from 'react';

interface Props {
  title: string;
  company: string;
  salary: number;
}

// eslint-disable-next-line react/function-component-definition
const JobItem: FC<Props> = ({ title, company, salary }) => (
  <div>
    {' '}
    <h1>{title}</h1>
    <span>
      from
      {salary}
      {' '}
      rubles
    </span>
    <p>{company}</p>
  </div>
);

export default JobItem;
