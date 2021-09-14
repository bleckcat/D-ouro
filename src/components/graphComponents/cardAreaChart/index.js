import {
  Area,
  AreaChart,
  LabelList,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  YAxis,
} from "recharts";
import { renderLabel } from "../areaChartLabel";
import { RangeChartGradient } from "../chartsDefs";

const CardAreaChart = ({ cardIndex, rangeData, boardType }) => {
  return (
    <ResponsiveContainer width="99%" height="100%">
      <AreaChart
        width={200}
        height={520}
        data={rangeData}
        margin={{ right: 40 }}
      >
        <defs>
          <RangeChartGradient cardIndex={cardIndex} boardType={boardType} />
        </defs>
        <YAxis
          tick={{ fill: "#efefef", fontSize: 9 }}
          domain={[0, "dataMax + 100"]}
          width={32}
          interval="preserveStartEnd"
          scale="linear"
          stroke="#efefef"
        />
        <Area
          dataKey="market_values"
          stroke="#95a29f"
          fill={`url(#cardRangeGradient-${cardIndex})`}
        >
          <LabelList
            dataKey="market_values"
            content={(props) => renderLabel(props, cardIndex, boardType)}
          />
        </Area>
        <Area
          dataKey="market_values2"
          stroke="#95a29f"
          fill={`url(#cardRangeGradient-${cardIndex})`}
        >
          <LabelList
            dataKey="market_values2"
            content={(props) => renderLabel(props, cardIndex, boardType)}
          />
        </Area>
        <ReferenceLine
          y={75}
          label={{
            position: "top",
            value: "75",
            fill: "#FFF",
            fontSize: 10,
          }}
          stroke="#fff"
          strokeDasharray="3 3"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default CardAreaChart;
