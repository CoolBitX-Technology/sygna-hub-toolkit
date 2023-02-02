
function notEmpty(val: unknown) {
  return !!val || 'Field is required';
}

export const useValidate = () => {
  return { notEmpty };
};
