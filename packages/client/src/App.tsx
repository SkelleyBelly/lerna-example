import {
  Navbar,
  WelcomeMessage,
  MetricBar,
  ProgressBar,
  Table,
} from "@hasura-prototype/components";
import { Box } from "@material-ui/core";
import { useState } from "react";

const initialData = [
  {
    company: "AT&T",
    rating: 5 as const,
    term: 5,
    setup: 50,
    monthly: 950,
    total: 72000,
    selected: false,
  },
  {
    company: "Comcast",
    rating: 4 as const,
    term: 12,
    setup: 0,
    monthly: 1050,
    total: 98000,
    selected: true,
  },
  {
    company: "Sprint",
    rating: 2 as const,
    term: 5,
    setup: 450,
    monthly: 1005,
    total: 83500,
    selected: true,
  },
  {
    company: "Level(3)",
    rating: 5 as const,
    term: 20,
    setup: 450,
    monthly: 999,
    total: 91000,
    selected: false,
  },
  {
    company: "Verizon",
    rating: 5 as const,
    term: 5,
    setup: 2500,
    monthly: 1100,
    total: 105000,
    selected: true,
  },
  {
    company: "Cox",
    rating: 3 as const,
    term: 10,
    setup: 399,
    monthly: 1350,
    total: 135000,
    selected: false,
  },
];

const App = () => {
  const [data, setData] = useState(initialData);

  const handleToggle = (index: number) => {
    setData((currentData) => {
      const newData = [...currentData];
      newData[index].selected = !currentData[index].selected;
      return newData;
    });
  };

  return (
    <Box display="flex" height="100%" overflow="hidden">
      <Navbar />
      <Box flex={1} overflow="auto">
        <Box mx={15} my={10}>
          <WelcomeMessage name="Nathan" />
        </Box>
        <MetricBar
          oldBillValue={50000}
          avgEstimateValue={40000}
          savingValue={20}
        />
        <Box mx={6} my={8}>
          <ProgressBar value={50} />
        </Box>
        <Box mx={6} mb={20}>
          <Table data={data} onToggle={handleToggle} />
        </Box>
      </Box>
    </Box>
  );
};

export default App;
