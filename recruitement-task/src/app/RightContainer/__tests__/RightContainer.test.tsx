import { render } from "@testing-library/react";
import RightContainer from "../RightContainer";

it("renders rightContainer unchanged", () => {
  const { container } = render(<RightContainer />);
  expect(container).toMatchSnapshot();
});
