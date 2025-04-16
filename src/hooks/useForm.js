import { useState } from "react";

const useform = (initial) => {
    const [form, setForm] = useState(initial);

    const handleOnChange = (e) => {
        let { name, value } = e.target;
        setForm(
            {
                ...form,
                [name]: value
            }
        )
    }
    return { form, setForm, handleOnChange };
}

export default useform;