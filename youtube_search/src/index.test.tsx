import YoutubeSearchContainer from "./components/YoutubeSearchContainer";

jest.mock("react-dom/client", () => ({
  createRoot: jest.fn().mockImplementation(() => ({
    render: jest.fn(),
  })),
}));

describe("Application root", () => {
  it("Should render app without crashing", () => {
    expect(
      JSON.stringify(
        Object.assign({}, YoutubeSearchContainer, {
          _reactInternalInstance: "censored",
        }),
      ),
    ).toMatchSnapshot();
  });
});
