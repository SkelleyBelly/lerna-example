import { Box, Typography } from "@material-ui/core";
import { FC } from "react";

export interface WelcomeMessageProps {
  name: string;
}

const WelcomeMessage: FC<WelcomeMessageProps> = ({
  name,
}: WelcomeMessageProps) => (
  <Typography variant="body1">
    <Box color="secondary.main" component="span">
      {`Hi ${name}, `}
    </Box>
    <Box color="text.primary" component="span">
      here&apos;s the quote you requested
    </Box>
  </Typography>
);

export default WelcomeMessage;
