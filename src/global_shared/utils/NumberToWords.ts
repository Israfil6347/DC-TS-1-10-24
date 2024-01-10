export const NumberToWords = (amount: number) => {
  const convertNumberToWords = (num: number) => {
    const units = [
      '',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
    ];
    const teens = [
      'ten',
      'eleven',
      'twelve',
      'thirteen',
      'fourteen',
      'fifteen',
      'sixteen',
      'seventeen',
      'eighteen',
      'nineteen',
    ];
    const tens = [
      '',
      '',
      'twenty',
      'thirty',
      'forty',
      'fifty',
      'sixty',
      'seventy',
      'eighty',
      'ninety',
    ];

    const numToString = (num: number): string => {
      if (num < 10) {
        return units[num];
      } else if (num >= 10 && num < 20) {
        return teens[num - 10];
      } else if (num >= 20 && num < 100) {
        const ten = Math.floor(num / 10);
        const unit = num % 10;
        return `${tens[ten]} ${units[unit]}`;
      } else if (num >= 100 && num < 1000) {
        const hundred = Math.floor(num / 100);
        const remaining = num % 100;
        return `${units[hundred]} hundred ${numToString(remaining)}`;
      } else if (num >= 1000 && num < 100000) {
        const thousand = Math.floor(num / 1000);
        const remaining = num % 1000;
        return `${numToString(thousand)} thousand ${numToString(remaining)}`;
      } else if (num >= 100000 && num < 10000000) {
        const lakh = Math.floor(num / 100000);
        const remaining = num % 100000;
        return `${numToString(lakh)} lac ${numToString(remaining)}`;
      } else if (num >= 10000000 && num < 1000000000) {
        const crore = Math.floor(num / 10000000);
        const remaining = num % 10000000;
        return `${numToString(crore)} crore ${numToString(remaining)}`;
      }
      return '';
    };

    return numToString(num);
  };

  const capitalizeFirstLetter = (sentence: string) => {
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
  };

  const words = convertNumberToWords(amount);
  const capitalizedWords = capitalizeFirstLetter(words);

  return capitalizedWords + ' taka only';
};

export const capitalizeAllWords = (sentence: string) => {
  const words = sentence?.toLowerCase().split(' ');

  for (let i = 0; i < words?.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  return words?.join(' ');
};
