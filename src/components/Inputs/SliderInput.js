import { Slider, Typography } from "@material-ui/core";
import React from "react";

const SliderInput = ({ label, value }) => {
  const marks = [
    {
      value: 0,
      label: "S1",
    },
    {
      value: 1,
      label: "S2",
    },
    {
      value: 2,
      label: "S3",
    },
    {
      value: 3,
      label: "S4",
    },
  ];

  return (
    <>
      <Typography id="discrete-slider-custom">{label}</Typography>
      <Slider
        value={value}
        aria-labelledby="discrete-slider-custom"
        min={0}
        max={marks.length - 1}
        step={1}
        valueLabelDisplay="off"
        marks={marks}
      />
    </>
  );
};
export default SliderInput;
