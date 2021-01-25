import { Box } from "@material-ui/core";
import {Rating as RatingIcon} from '../Icons';

export interface RatingProps {
  value: 1 | 2 | 3 | 4 | 5;
}

const Rating = ({ value }: RatingProps) => (
  <>
    {new Array(5).fill(null).map((_, index) => (
      <Box key={index} mr={1} clone>
        <Box style={{ opacity: value > index ? 1 : 0.3, display: "inline" }}>
          <RatingIcon/>
        </Box>
      </Box>
    ))}
  </>
);

export default Rating;
