import React, { FC } from 'react';

interface Props {
  title: string;
  company: string;
  salary: number;
}

const JobItem: FC<Props> = ({ title, company, salary }) => {
  return (
    <div>
      <h1>{title}</h1>
      <span>from {salary} rubles</span>
      <p>{company}</p>
    </div>
  );
};

export default JobItem;
