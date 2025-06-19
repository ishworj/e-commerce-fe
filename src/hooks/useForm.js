import { useEffect, useState } from "react";
import { validator } from "../utils/validatePassword";

const handleOnChange = ({ e, form, setForm }) => {
  const { name, value } = e.target;

  if (name === "fullName") {
    console.log(name, value, 2000)
    let fName = value.split(" ")[0];
    let lName = value.split(" ")[1] ?? "";

    console.log(fName, lName)
    setForm({
      ...form,
      fName,
      lName,
      [name]: value
    })
  }
  else {
    setForm({
      ...form,
      [name]: value,
    });

  }
};

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);
  const [passwordErrors, setPasswordErrors] = useState([]);

  //only when password and confirm password changes.
  useEffect(() => {
    const errorArg = validator(form.password, form.confirmPassword);
    setPasswordErrors(errorArg);
  }, [form.password, form.confirmPassword]);

  return {
    form,
    setForm,
    passwordErrors,
    handleOnChange: (e) => handleOnChange({ e, form, setForm }),
  };
};

export default useForm;
