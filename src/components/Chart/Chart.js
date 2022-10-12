import React, { useContext } from "react";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { quizContext } from "../../Layouts/Main";

class ChartData {
  constructor(name, total) {
    this.name = name;
    this.total = total;
    this.wave = total;
    this.area = total;
  }
}

const Chart = () => {
  const quizData = useContext(quizContext);
  const data = quizData.map(
    (program) => new ChartData(program.name, program.total)
  );

  return (
    <div
      style={{ width: "100%", height: 400 }}
      className="flex items-center justify-center mt-10"
    >
      <ResponsiveContainer>
        <ComposedChart
          width={400}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#f5f5f5" />
          <Area
            type="monotone"
            dataKey="area"
            fill="#8884d8"
            stroke="#8884d8"
          />
          <Bar dataKey="total" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="wave" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
