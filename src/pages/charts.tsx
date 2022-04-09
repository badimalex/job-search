import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

/*
  [
    {
      title: 'Middle React developer',
      rating: 6
    },
    {
      title: 'Middle Php developer',
      rating: 9
    },
    {
      title: 'Senior React developer',
      rating: 3
    },
    {
      title: 'fullstack React developer',
      rating: 5
    },
  ]

*/

type Rating = {
  title: string;
  value: number;
};

type Props = {
  data: Rating[];
};

export default function Invoices({ data }: Props) {

  const [vacancies, setVacancies] = React.useState<{name: string, value: number}[]>([
    { name: 'National Government Supervisor', value: 17.96 },
    { name: 'International Government Director', value: 76.72 },
    { name: 'Internal Design Representative', value: 41.69 },
    { name: 'National Engineer', value: 78.72 },
    { name: 'Real-Estate Administrator', value: 22.38 },
  ]);

  const [activeIndex, setActiveIndex] = React.useState(0);
  const chartRef = React.useRef(null);
  const salaryRef = React.useRef(null);
  //   columns: [
  //     ['data1', 30],
  //     ['data2', 120],
  // ],
  const columns = data.map((rating) => {
    return [rating.title, rating.value];
  });
  let chart;

  React.useEffect(() => {
    // chart = c3.generate({
    //   bindto: chartRef.current,
    //   data: {
    //     // eslint-disable-next-line
    //     // @ts-ignore
    //     columns: vacancies,
    //     type: 'pie',
    //     onclick: function(d, i) {
    //       console.log('onclick', d, i);
    //     },
    //     onmouseover: function(d, i) {
    //       console.log('onmouseover', d, i);
    //     },
    //     onmouseout: function(d, i) {
    //       console.log('onmouseout', d, i);
    //     },
    //   },
    // });
    // c3.generate({
    //   bindto: salaryRef.current,
    //   data: {
    //     columns: [
    //         ['Jan', 280],
    //         ['Feb', 180],
    //         ['Mar', 175],
    //         ['Apr', 165],
    //         ['Jun', 175],
    //         ['Jul', 135],
    //         ['Aug', 185],
    //         ['Sep', 125],
    //         ['Oct', 165],
    //         ['Nov', 195],
    //         ['Dec', 175],
    //     ],
    //     type: 'bar',
    //   },
    // })
  }, []);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <>
      <PieChart width={400} height={400}>
        <Pie

        activeIndex={activeIndex}
        onMouseEnter={(_, index) => {
          setActiveIndex(index);
        }} data={vacancies} dataKey="value" fill="#8884d8">
          {vacancies.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>

      <ul>
        {vacancies.map((vacancy) => (
          <li key={vacancy.name}>
            {vacancy.name}: {vacancy.value}
            <button
              onClick={() => {
                const newList = vacancies.map((obj) => {
                  if (obj.name == vacancy.name) {
                    return {
                      name: obj.name,
                      value: obj.value + 10
                    }
                  }
                  return obj;
                });
                setVacancies(newList);
              }}
            >
              +
            </button>
            <button>-</button>
          </li>
        ))}
        :
      </ul>
    </>
  );
}
