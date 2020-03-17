import { useState, useEffect } from 'react';


const useForm = (submitForm, validate, initValue) => {

    const [values, setValues] = useState(initValue);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            submitForm();
        }
      }, [errors, isSubmitting]);

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        setIsSubmitting(true);
        setErrors(validate(values));
    };

    const handleChange = (event) => {
        event.persist();
        setIsSubmitting(false);
        setValues(values => ({ ...values, [event.target.name]: event.target.value }));
        if(errors[event.target.name]){
            setErrors(validate({ ...values, [event.target.name]: event.target.value }));
        }
    };

    const handleClearValues = () => {
        setValues({});
        setIsSubmitting(false)
    }

    return {
        handleClearValues,
        handleChange,
        handleSubmit,
        values,
        errors
    }
};

export default useForm;