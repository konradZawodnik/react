import { render } from "@testing-library/react";
import LeftContainer from "../LeftContainer";

it("renders LeftContainer unchanged", () => {
  const { container } = render(<LeftContainer />);
  expect(container).toMatchSnapshot();
});
