import { useState } from 'react';

function useForm(valoresIniciais) {
  const [initialValues, setInitialValues] = useState(valoresIniciais);
  function setInitialValue(key, value) {
    setInitialValues({
      ...initialValues,
      [key]: value,
    });
  }

  function handleRegister(infosDoevento) {
    setInitialValue(infosDoevento.target.getAttribute('name'), infosDoevento.target.value);
  }

  function clearForm() {
    setInitialValues(valoresIniciais);
  }

  return {
    initialValues,
    handleRegister,
    clearForm,
  };
}

export default useForm;
