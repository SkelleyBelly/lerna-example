import { render } from "../testUtils";
import WelcomeMessage from "./WelcomeMessage";

describe("WelcomeMessage component", () => {
  it("should display a welcome message with the correct name", () => {
    const { getByText } = render(<WelcomeMessage name="Skelley" />);

    ["Hi Skelley,", "here's the quote you requested"].forEach((textSection) => {
      expect(getByText(textSection)).toBeDefined();
    });
  });
});
