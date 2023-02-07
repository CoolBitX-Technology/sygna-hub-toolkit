function notEmpty(val: unknown) {
  return !!val || 'Field is required';
}

function isHost(val: string) {
  if (val === 'localhost') {
    return true;
  }

  const domainRegex = /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/mis;
  if (domainRegex.exec(val)) {
    return true
  }

  const ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
  if (ipRegex.exec(val)) {
    return true
  }

  return 'This is not valid host'
}

function isStrongPassword(val: string) {
  const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
  return !!regex.exec(val) || 'Should contain at least 6 letters, at least 1 number, at least 1 upper case and at least 1 special character';
}

export const useValidate = () => {
  return { notEmpty, isHost, isStrongPassword };
};
