import React from 'react';
import {
  PieChart, Pie, Cell
} from 'recharts';

export default function Invoices() {
  const [vacancies] = React.useState<
  { name: string; value: number }[]
  >([
    { name: 'National Government Supervisor', value: 17.96 },
    { name: 'International Government Director', value: 76.72 },
    { name: 'Internal Design Representative', value: 41.69 },
    { name: 'National Engineer', value: 78.72 },
    { name: 'Real-Estate Administrator', value: 22.38 },
  ]);

  const [activeIndex, setActiveIndex] = React.useState(0);

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
          }}
          data={vacancies}
          dataKey="value"
          fill="#8884d8"
        >
          {vacancies.map((entry, index) => {
            const key = `cell-${index}`;
            return <Cell key={key} fill={COLORS[index % COLORS.length]} />;
          })}
        </Pie>
      </PieChart>

      <ul>
        {vacancies.map((vacancy) => (
          <li key={vacancy.name}>
            {vacancy.name}
            :
            {vacancy.value}
          </li>
        ))}
        :
      </ul>
    </>
  );
}
