import { Typography } from "@material-ui/core";

export interface WelcomeMessageProps {
    name: string;
}

const WelcomeMessage = ({name}: WelcomeMessageProps) => (
  <>
    <Typography variant="body1" color="secondary" display="inline">
      {`Hi ${name}, `}
    </Typography>
    <Typography variant="body1" color="textPrimary" display="inline">
      here's the quote you requested
    </Typography>
  </>
);

export default WelcomeMessage;
