import { Box } from "@mui/material";
import { styled } from "@mui/system";
//to access the css from many location to alighn and flex items proper place 
const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetween;
