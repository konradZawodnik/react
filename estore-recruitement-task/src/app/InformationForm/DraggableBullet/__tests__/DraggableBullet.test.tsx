import { render } from "@testing-library/react";
import { DraggableBullet } from "../DraggableBullet";
import "@testing-library/jest-dom";

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

jest.mock("react-dnd", () => ({
  useDrag: jest
    .fn()
    .mockImplementation(() => [jest.fn(), jest.fn(), jest.fn()]),
}));

const index = 1;
const mockBullet = "testBullet";
const mockMoveBullet = jest.fn();
const mockHandleRemoveBullet = jest.fn();
const mockHandleChangeBullet = jest.fn();

describe("DraggableBullet", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <DraggableBullet
        index={index}
        bullet={mockBullet}
        moveBullet={mockMoveBullet}
        handleRemoveBullet={mockHandleRemoveBullet}
        handleChangeBullet={mockHandleChangeBullet}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
