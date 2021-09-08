import { Box, Slider, Typography } from "@material-ui/core";
import React from "react";

const SliderInput = (props) => {
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
      <Typography id="discrete-slider-custom" variant="caption">
        {props.label.toUpperCase()}
      </Typography>
      <Slider
        {...props}
        aria-labelledby="discrete-slider-custom"
        min={0}
        max={marks.length - 1}
        step={1}
        valueLabelDisplay="off"
        marks={marks}
      />
      {/* <Box textAlign="center" color="secondary.main">
        <Typography variant="caption" gutterBottom>
          Necessário ajustar
        </Typography>
      </Box> */}
    </>
  );
};
export default SliderInput;
