export const formatToBDTMoney = (amount: number) => {
  const resultd = amount?.toLocaleString('en-US');
  return 'BDT ' + resultd;
};

export const formatToTkSymbolMoney = (amount: number) => {
  const resultd = amount?.toLocaleString('en-US');
  return resultd + ' ৳';
};

export function getWordsCount(text: string) {
  return text.trim().split(/\s+/).length;
}

export const getFormattedAccountNumber = (userInputAccountNumber: string) => {
  var formattedAccountNumber = '';
  if (userInputAccountNumber.includes('-')) {
    var arrayName = userInputAccountNumber.split('-');
    if (arrayName[0].toLowerCase().includes('t')) {
      formattedAccountNumber = 'T' + '-' + arrayName[1].trim().padStart(7, '0');
    } else if (arrayName[0].toLowerCase().includes('l')) {
      formattedAccountNumber = 'L' + '-' + arrayName[1].trim().padStart(7, '0');
    }
  } else {
    formattedAccountNumber = userInputAccountNumber.trim().padStart(7, '0');
  }

  return formattedAccountNumber;
};

export const titleCase = (str: string) => {
  return str?.toLowerCase().replace(/\b\w/g, (s) => s?.toUpperCase());
};
