const numeralCodes = [
  ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
  ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
  ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
];

const convertToRomainNumber = (num: number) => {
  let numeral = "";
  const digits = num.toString().split("").reverse();
  for (let i = 0; i < digits.length; i++) {
    numeral = numeralCodes[i][parseInt(digits[i])] + numeral;
  }
  return numeral;
};

const peselDecode = (pesel: number) => {
  let year = parseInt(String(pesel).substring(0, 2), 10);
  let month = parseInt(String(pesel).substring(2, 4), 10) - 1;
  const day = parseInt(String(pesel).substring(4, 6), 10);
  let birthDate;
  if (month > 80) {
    year = year + 1800;
    month = month - 80;
  } else if (month >= 60) {
    year = year + 2200;
    month = month - 60;
  } else if (month >= 40) {
    year = year + 2100;
    month = month - 40;
  } else if (month >= 20) {
    year = year + 2000;
    month = month - 20;
  } else {
    year += 1900;
  }

  if (month >= 0 && month < 12 && month > 0 && month < 32) {
    birthDate = new Date();
    birthDate.setFullYear(year, month, day);
  } else {
    birthDate = undefined;
  }

  return {
    date: birthDate,
  };
};

export { convertToRomainNumber, peselDecode };
