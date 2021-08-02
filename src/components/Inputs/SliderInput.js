import { Slider, Typography } from "@material-ui/core";
import React from "react";

const SliderInput = () => {
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

  const valuetext = (value) => {
    return `${value}°C`;
  };

  return (
    <>
      <Typography id="discrete-slider-custom">Custom marks</Typography>
      <Slider
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        min={0}
        max={3}
        step={1}
        valueLabelDisplay="off"
        marks={marks}
      />
    </>
  );
};
export default SliderInput;
