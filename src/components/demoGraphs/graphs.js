import {
  AreaChart,
  Area,
  YAxis,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { StyledSVG } from "./styles";

export const DemonstrationCard = ({ data }) => {
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
      <StyledSVG>
        <circle fill="#37efba87" cx={cx} cy={cy} r="4" />
      </StyledSVG>
    );
  };

  return (
    <ResponsiveContainer width={"99%"} height="100%">
      <AreaChart width={200} height={60} data={data}>
        <defs>
          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#37EFBA" stopOpacity={0.4} />
            <stop offset="100%" stopColor="#37EFBA" stopOpacity={0} />
          </linearGradient>
        </defs>
        <YAxis padding={{ top: 8, bottom: 8 }} width={0} />
        <Area
          dataKey="value"
          stroke="#95a29f"
          fill="url(#colorValue)"
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
