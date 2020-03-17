export default function validate(values) {
    let errors = {};

    if (!values.hiragana) {
        errors.hiragana = true;
    }

    if (!values.romaji) {
        errors.romaji = true;
    }

    if (!values.english) {
        errors.english = true;
    }

    if (!values.type) {
        errors.type = true;
    }

    return errors;
  };