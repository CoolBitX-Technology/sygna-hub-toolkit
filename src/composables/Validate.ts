import _ from "lodash";

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

export const useValidate = () => {
  return { notEmpty, isHost };
};
