const isValidPeselNumber = (pesel: string) => {
  const weight = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
  let sum = 0;
  const controlNumber = parseInt(pesel.substring(10, 11));

  for (let i = 0; i < weight.length; i++) {
    sum += parseInt(pesel.substring(i, i + 1)) * weight[i];
  }
  sum = sum % 10;
  return (10 - sum) % 10 === controlNumber;
};

const isValidPassportNumber = (passportNumber: string) => {
  // Check length.
  if (!passportNumber || passportNumber.length !== 9) {
    return false;
  }

  const upperNum = passportNumber.toUpperCase();
  const letterValues = [
    `0`,
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `A`,
    `B`,
    `C`,
    `D`,
    `E`,
    `F`,
    `G`,
    `H`,
    `I`,
    `J`,
    `K`,
    `L`,
    `M`,
    `N`,
    `O`,
    `P`,
    `Q`,
    `R`,
    `S`,
    `T`,
    `U`,
    `V`,
    `W`,
    `X`,
    `Y`,
    `Z`,
  ];

  const getLetterValue = (letter: string) => {
    for (let j = 0, max = letterValues.length; j < max; j++) {
      if (letter === letterValues[j]) {
        return j;
      }
    }
    return -1;
  };

  // Check series.
  for (let i = 0; i < 3; ++i) {
    if (getLetterValue(upperNum[i] as string) < 10) {
      return false;
    }
  }

  // Check number.
  for (let i = 3; i < 9; ++i) {
    if (
      getLetterValue(upperNum[i] as string) < 0 ||
      getLetterValue(upperNum[i] as string) > 9
    ) {
      return false;
    }
  }

  // Calculate checksum.
  let sum =
    7 * getLetterValue(upperNum[0] as string) +
    3 * getLetterValue(upperNum[1] as string) +
    Number(getLetterValue(upperNum[2] as string)) +
    7 * getLetterValue(upperNum[4] as string) +
    3 * getLetterValue(upperNum[5] as string) +
    Number(getLetterValue(upperNum[6] as string)) +
    7 * getLetterValue(upperNum[7] as string) +
    3 * getLetterValue(upperNum[8] as string);

  sum %= 10;

  if (sum !== getLetterValue(upperNum[3] as string)) {
    return false;
  }

  return true;
};

export { isValidPeselNumber, isValidPassportNumber };
