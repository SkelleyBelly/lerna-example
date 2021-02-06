// import { screen } from "@testing-library/react";
import { render } from "@hasura-prototype/components";
import { MockedProvider, MockedProviderProps } from "@apollo/client/testing";
import App from "./App";
import { GetAllQuotesDocument } from "./__generated__/query";

const mockQuote = {
  Company: {
    id: "mock_id_1",
    name: "Mock Company",
    rating: 4,
  },
  id: "mock_quote_1",
  monthly: 500,
  selected: true,
  setup: 250,
  term: 5,
  total: 5000,
};

const apolloMocks: MockedProviderProps["mocks"] = [
  {
    request: {
      query: GetAllQuotesDocument,
    },
    result: {
      data: {
        Quotes: [mockQuote],
      },
    },
  },
];

describe("App component", () => {
  it("should render the main screen", async () => {
    const {
      Company: { name: companyName },
    } = mockQuote;

    const { findByText, getByText, getAllByText, getByLabelText } = render(
      <MockedProvider mocks={apolloMocks}>
        <App />
      </MockedProvider>
    );

    // await the company name - query has completed
    expect(await findByText(companyName)).toBeDefined();

    // navbar has rendered
    ["Quotes", "Activity", "Market", "Settings"].forEach((buttonText) => {
      expect(getByText(buttonText)).toBeDefined();
    });

    // table components
    ["$500", "$250", "5", "$5,000"].forEach((cellText) => {
      expect(getByText(cellText)).toBeDefined();
    });

    // checkbox
    expect(getByLabelText("Select Quote")).toBeChecked();

    // total (shown in 2 counters)
    expect(getAllByText("5,000")).toHaveLength(2);
  });
});
