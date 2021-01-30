import {
  Navbar,
  WelcomeMessage,
  MetricBar,
  ProgressBar,
  Table,
} from "@hasura-prototype/components";
import { Box } from "@material-ui/core";
import {
  useGetAllQuotesQuery,
  GetAllQuotesQuery,
  useSetSelectedMutation,
} from "./__generated__/query";

const mapData = (data: GetAllQuotesQuery["Quotes"]) =>
  data.map(
    ({
      id,
      Company: { name, rating },
      monthly,
      selected,
      setup,
      term,
      total,
    }: any) => ({
      id,
      company: name,
      rating,
      monthly,
      selected,
      setup,
      term,
      total,
    })
  );

const getStats = (data: GetAllQuotesQuery["Quotes"]) => {
  const [total, selected, max] = data.reduce(
    (
      [accTotal, accSelected, accMax]: any,
      { total: currTotal, selected: currSelected }: any
    ) => {
      const currMax = Math.max(accMax, currTotal);

      if (currSelected) {
        return [accTotal + currTotal, accSelected + 1, currMax];
      }
      return [accTotal, accSelected, currMax];
    },
    [0, 0, 0]
  );

  const avgEstimate = total / (selected || 1);
  const savingFromMax = avgEstimate
    ? Math.round(((max - avgEstimate) / max) * 100)
    : 0;

  return { total, selected, max, savingFromMax, avgEstimate };
};

const App = () => {
  const { data: queryData } = useGetAllQuotesQuery();

  const [mutate] = useSetSelectedMutation();

  if (!queryData) {
    return null;
  }

  const data = mapData(queryData.Quotes);

  const { total, avgEstimate, savingFromMax, selected } = getStats(
    queryData.Quotes
  );

  return (
    <Box display="flex" height="100%" overflow="hidden">
      <Navbar />
      <Box flex={1} overflow="auto">
        <Box mx={15} my={10}>
          <WelcomeMessage name="Nathan" />
        </Box>
        <MetricBar
          oldBillValue={total}
          avgEstimateValue={avgEstimate}
          savingValue={savingFromMax}
        />
        <Box mx={6} my={8}>
          <ProgressBar value={(selected / data.length) * 100} />
        </Box>
        <Box mx={6} mb={20}>
          <Table
            data={data}
            onToggle={(index) =>
              mutate({
                variables: {
                  id: data[index].id,
                  selected: !data[index].selected,
                },
              })
            }
          />
        </Box>
      </Box>
    </Box>
  );
};

export default App;
