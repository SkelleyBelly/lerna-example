import { Box } from "@material-ui/core";
import { Rating as RatingIcon } from "../Icons";

export interface RatingProps {
  value: number;
}

const Rating = ({ value }: RatingProps) => (
  <>
    {new Array(5).fill(null).map((_, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <Box key={index} mr={1} clone>
        <Box style={{ opacity: value > index ? 1 : 0.3, display: "inline" }}>
          <RatingIcon />
        </Box>
      </Box>
    ))}
  </>
);

export default Rating;
