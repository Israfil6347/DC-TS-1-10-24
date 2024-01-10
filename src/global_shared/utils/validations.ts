export function isValidEmail(email: string) {
  return email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+([.]{1})+[a-z]{2,}$/);
}

export function isPasswordStrong(password: string) {
  return password.match(
    // /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
    /^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).+$/
  );
}

export function isLessThenMinimumLength(value: string, minLength: number) {
  return value.length < minLength;
}

export function isGreaterThenMaximumLength(value: string, maxLength: number) {
  return value.length > maxLength;
}

export function isAccountStartsWithTOrL(accountNumber: string) {
  const trimmedAccountNumber = accountNumber.trim();
  return (
    /\d/.test(trimmedAccountNumber) &&
    /^(t-|T-|l-|L-)/.test(trimmedAccountNumber)
  );
}

export function isNumeric(str: string) {
  const pattern = '^[0-9]*$';
  return str.match(pattern);
}

export function isNumberBetween(x: number, min: number, max: number) {
  return x >= min && x <= max;
}

export function isEmpty(strValue: string) {
  if (strValue?.length > 0) {
    return false;
  } else {
    return true;
  }
}

export function isValidMobileNumber(val: string) {
  return val.match(
    /(^(([+]{1}|[0]{2})([0-9]{2}))([0]{1})([-]{1})([0-9]{4})([-]{1})?([0-9]{6}))$/
  );
}

export function isNegativeNumber(Input: number) {
  if (Input < 1) {
    return true;
  } else {
    return false;
  }
}
export function isType(input: number) {
  if (!Number.isInteger(Number(input))) {
    return true;
  } else {
    return false;
  }
}
