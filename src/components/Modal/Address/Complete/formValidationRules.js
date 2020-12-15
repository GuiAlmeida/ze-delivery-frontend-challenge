export default function validate(values) {
  const errors = {};

  if (!values.streetNumber) {
    errors.streetNumber = true;
  }

  if (!values.addressName) {
    errors.addressName = true;
  }

  return errors;
}
