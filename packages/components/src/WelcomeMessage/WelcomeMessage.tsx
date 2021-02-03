import { Typography } from "@material-ui/core";
import { FC } from "react";

export interface WelcomeMessageProps {
  name: string;
}

const WelcomeMessage: FC<WelcomeMessageProps> = ({
  name,
}: WelcomeMessageProps) => (
  <>
    <Typography variant="body1" color="secondary" display="inline">
      {`Hi ${name}, `}
    </Typography>
    <Typography variant="body1" color="textPrimary" display="inline">
      here&apos;s the quote you requested
    </Typography>
  </>
);

export default WelcomeMessage;
