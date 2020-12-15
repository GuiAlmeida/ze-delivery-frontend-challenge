import { useState, useEffect } from 'react';

const useForm = (callback, validate, initialValues = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = async (event) => {
    if (event) event.preventDefault();

    setIsSubmitting(true);
    setErrors(await validate(values));
  };

  const handleChange = (event) => {
    event.persist();

    setValues((value) => ({
      ...value,
      [event.target.name]: event.target.value
    }));
  };

  return {
    setValues,
    handleChange,
    handleSubmit,
    values,
    errors
  };
};

export default useForm;
