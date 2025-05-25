import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  Cell,
} from "recharts";

// Custom triangle bar shape
const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return (
    <path
      d={`M${x},${y + height} 
         L${x + width / 2},${y} 
         L${x + width},${y + height} 
         Z`}
      stroke="none"
      fill={fill}
    />
  );
};

// Some nice colors (you can add more or change them)
const COLORS = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#ff7f50",
  "#8dd1e1",
  "#a4de6c",
  "#d0ed57",
  "#d885a3",
];

const PagesToRead = () => {
  const books = useLoaderData();

  // Filter only read books
  const readBooks = books.filter((book) => book.status === "read");

  return (
    <div className="p-8 bg-gray-50 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">
        Pages Read Summary
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={readBooks}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bookName" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="totalPages"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {readBooks.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
            <LabelList dataKey="totalPages" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PagesToRead;
