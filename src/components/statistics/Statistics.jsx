import { useLoaderData } from "react-router-dom";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { getStoredData } from "../utility/LocalStorage";

const Statistics = () => {
  const totalData = useLoaderData().length;
  const donatedData = getStoredData().length;
  const remData = totalData - donatedData;

  const data = [{ value: remData }, { value: donatedData }];

  const COLORS = ["#FF444A", "#00C49F"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };

  return (
    <div className="h-80 md:h-96 w-80 md:w-96 mx-auto">
      <ResponsiveContainer width="100%" height="100%" className="pt-16">
        <PieChart width={500} height={500}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="flex gap-5 md:gap-10 justify-center py-16">
        <div className="flex items-center gap-2">
          <p className="text-sm md:text-base">Your Donation</p>
          <p className="w-10 h-2 bg-[#00C49F] mt-1"></p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-sm md:text-base">Total Donation</p>
          <p className="w-10 h-2 bg-[#FF444A] mt-1"></p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
