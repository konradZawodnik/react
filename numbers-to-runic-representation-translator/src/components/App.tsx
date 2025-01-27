import React, { useState, ChangeEvent, FormEvent } from "react";

const runicMapping: { [key: number]: string } = {
  1: "ᚠ",
  2: "ᚡ",
  3: "ᚢ",
  4: "ᚣ",
  5: "ᚤ",
  6: "ᚥ",
  7: "ᚦ",
  8: "ᚧ",
  9: "ᚨ",
  10: "ᚱ",
  20: "ᚲ",
  30: "ᚳ",
  40: "ᚴ",
  50: "ᚵ",
  60: "ᚶ",
  70: "ᚷ",
  80: "ᚸ",
  90: "ᚹ",
  100: "ᚺ",
  200: "ᚻ",
  300: "ᚼ",
  400: "ᚽ",
  500: "ᚾ",
  600: "ᚿ",
  700: "ᛀ",
  800: "ᛁ",
  900: "ᛂ",
  1000: "ᛃ",
  2000: "ᛄ",
  3000: "ᛅ",
  4000: "ᛆ",
  5000: "ᛇ",
  6000: "ᛈ",
  7000: "ᛉ",
  8000: "ᛊ",
  9000: "ᛋ",
};

const generateRunes = (num: number): string => {
  return num
    .toString()
    .split("")
    .map((digit) => runicMapping[parseInt(digit)])
    .join("");
};

const App: React.FC = () => {
  const [number, setNumber] = useState<string>("");
  const [runeOutput, setRuneOutput] = useState<string>("");
  const [svgData, setSvgData] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setNumber(event.target.value);
  };

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    const num = parseInt(number);
    if (num <= 9999 && num > 0) {
      const runicStr = generateRunes(num);
      setRuneOutput(runicStr);
      setSvgData(createSvg(runicStr));
    } else {
      return;
    }
  };

  const createSvg = (runes: string): string => {
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="500" height="100">
        <text x="10" y="40" font-family="Arial" font-size="30" fill="black">${runes}</text>
      </svg>
    `;
    return svg;
  };

  const handleDownload = (): void => {
    const blob = new Blob([svgData], { type: "image/svg+xml" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "runes.svg";
    link.click();
  };

  return (
    <div className="App min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-96">
        <h1 className="text-2xl font-bold text-center mb-6">
          Decimal to Runic Translator
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="number"
            value={number}
            onChange={handleChange}
            max="9999"
            min="1"
            placeholder="Enter a number"
            className="w-full p-2 border border-gray-300 rounded-md text-lg"
          />
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Translate
          </button>
        </form>

        {runeOutput && (
          <>
            <h2 className="text-xl font-semibold mt-6">
              Runic Representation:
            </h2>
            <div className="text-center text-3xl mt-2">{runeOutput}</div>

            <h2 className="text-xl font-semibold mt-6">SVG Image:</h2>
            <div className="mt-2">
              <div dangerouslySetInnerHTML={{ __html: svgData }} />
              <button
                onClick={handleDownload}
                className="mt-4 w-full p-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                Download SVG
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
