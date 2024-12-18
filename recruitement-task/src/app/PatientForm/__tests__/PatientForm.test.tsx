import { render } from "@testing-library/react";
import PatientForm from "../PatientForm";

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

it("renders patientForm unchanged", () => {
  const { container } = render(<PatientForm />);
  expect(container).toMatchSnapshot();
});
