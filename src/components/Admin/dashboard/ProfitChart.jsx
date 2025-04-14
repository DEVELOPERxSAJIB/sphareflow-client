import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { DatePicker } from "./DatePicker";

const chartData = [
  { month: "January", totalOrders: 186, profit: 80 },
  { month: "February", totalOrders: 305, profit: 200 },
  { month: "March", totalOrders: 237, profit: 120 },
  { month: "April", totalOrders: 73, profit: 190 },
  { month: "May", totalOrders: 209, profit: 130 },
  { month: "June", totalOrders: 214, profit: 140 },
];

const chartConfig = {
  totalOrders: {
    label: "Total Orders",
    color: "#845ADF",
  },
  profit: {
    label: "Profit",
    color: "#845ADF",
  },
};

export function ProfitChart() {
  return (
    <Card className="shadow-sm border-none">
      <CardHeader>
        <CardTitle>
          <div className="box px-2 flex flex-row items-center justify-between bg-transparent shadow-none mt-0">
            <div className="box-header p-0 border-none flex">
              <div className="box-title flex pt-0.5 items-center">Earnings</div>
            </div>
            <DatePicker />
          </div>
        </CardTitle>
        <div className="flex items-center justify-center gap-8">
          <div className="flex flex-col items-center justify-center">
            <span className="mt-1 text-[1rem] font-semibold">58</span>
            <div className="mb-1 earning first-half">Total Orders</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="mt-1 text-[1rem] font-semibold">$1800</span>
            <div className="mb-1 earning top-gross">Top Gross</div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer className="max-h-[250px] w-full" config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Bar dataKey="totalOrders" fill="#F2EEFC" radius={4} />
            <Bar dataKey="profit" fill="#845ADF" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
