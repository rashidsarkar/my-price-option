import {
  LineChart as LnChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const LineChartComponent = () => {
  const mathMarksData = [
    { student: "Sarah Johnson", math: 85, accounting: 78, finance: 92 },
    { student: "Michael Smith", math: 78, accounting: 80, finance: 88 },
    { student: "Emily Davis", math: 92, accounting: 89, finance: 94 },
    { student: "Christopher Wilson", math: 65, accounting: 70, finance: 68 },
    { student: "Olivia Brown", math: 76, accounting: 82, finance: 80 },
    { student: "Daniel Lee", math: 88, accounting: 92, finance: 90 },
    { student: "Sophia Martinez", math: 72, accounting: 74, finance: 76 },
    { student: "Ethan Taylor", math: 95, accounting: 96, finance: 98 },
    { student: "Ava Anderson", math: 84, accounting: 88, finance: 90 },
    { student: "Matthew Moore", math: 90, accounting: 94, finance: 92 },
  ];

  return (
    <LnChart width={800} height={400} data={mathMarksData}>
      <XAxis dataKey="student" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="math" stroke="#8884d8" name="Math" />
      <Line
        type="monotone"
        dataKey="accounting"
        stroke="#82ca9d"
        name="Accounting"
      />
      <Line type="monotone" dataKey="finance" stroke="#ffc658" name="Finance" />
    </LnChart>
  );
};

export default LineChartComponent;
