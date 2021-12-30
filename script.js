const submit = document.querySelector('.form-submit');

const validateUserName = value => value.toLowerCase().trim().length >= 5;

const validateEmail = value =>
  value.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

const validators = {
  username: input => validateUserName(input),
  email: input => validateEmail(input),
  password: value => {
    return false;
  },
  'password-confirm': value => {
    return false;
  },
};

resetValidation = item => item.classList.remove('valid', 'invalid');
updateValidation = (item, isValid) =>
  item.classList.add(isValid ? 'valid' : 'invalid');

validateItem = item => {
  const input = item.querySelector('input');

  resetValidation(item);
  updateValidation(item, validators[input.name](input.value));
};

submit.addEventListener('click', () =>
  document.querySelectorAll('.form-item').forEach(item => validateItem(item))
);
