import {
  AreaChart,
  Area,
  YAxis,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { DemoChartDef } from "../graphComponents/chartsDefs";
import { StyledSVG } from "./styles";

export const DemonstrationCard = ({ data, color }) => {
  const CustomizedLabel = (props) => {
    const { x, y, value } = props;
    return (
      <text x={x} y={y} dy={-6} fill="#fff" fontSize={10} textAnchor="middle">
        {value}
      </text>
    );
  };

  const CustomizedDot = (props) => {
    const { cx, cy } = props;
    if (!props.payload.name) {
      return null;
    }

    return (
      <StyledSVG color={color}>
        <circle
          fill={color === "primary" ? "#37EFBA" : "#f50057"}
          cx={cx}
          cy={cy}
          r="4"
        />
      </StyledSVG>
    );
  };

  return (
    <ResponsiveContainer width={"99%"} height="100%">
      <AreaChart width={200} height={60} data={data}>
        <defs>
          <DemoChartDef color={color} />
        </defs>
        <YAxis padding={{ top: 8, bottom: 8 }} width={0} />
        <Area
          dataKey="value"
          stroke="#95a29f"
          fill={`url(#colorValue-${color})`}
          fillOpacity={1}
          dot={<CustomizedDot />}
        >
          <LabelList
            dataKey="name"
            position="bottom"
            content={CustomizedLabel}
          />
        </Area>
      </AreaChart>
    </ResponsiveContainer>
  );
};
