import React, { useContext } from "react";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
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
  const data = quizData.map((d) => new ChartData(d.name, d.total));

  return (
    <div className="flex items-center justify-center mt-10">
      <ComposedChart width={500} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Area type="monotone" dataKey="area" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="total" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="wave" stroke="#ff7300" />
      </ComposedChart>
    </div>
  );
};

export default Chart;
