export const validateName = ($field) => {
  if (!$field || !$field.value.trim()) {
    !$field.ClassList.add("is-invalid");
    !$field.ClassList.remove("is-valid");
    return false;
  }
  const regex = /^[a-zA-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑñ\s]+$/;
  if (!regex.test($field.value)) {
    $field.classList.add("is-invalid");
    $field.classList.remove("is-valid");
    return false;
  }

  $field.classList.remove("is-invalid");
  $field.classList.add("is-valid");

  return true;
};

export const validateLastName = ($field) => {
  if (!$field || !$field.value.trim()) {
    !$field.ClassList.add("is-invalid");
    !$field.ClassList.remove("is-valid");
    return false;
  }
  const regex = /^[a-zA-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑñ\s]+$/;
  if (!regex.test($field.value)) {
    $field.classList.add("is-invalid");
    $field.classList.remove("is-valid");
    return false;
  }

  $field.classList.remove("is-invalid");
  $field.classList.add("is-valid");

  return true;
};

export const validateProfile = ($field) => {
  if (!$field || !$field.value.trim()) {
    !$field.ClassList.add("is-invalid");
    !$field.ClassList.remove("is-valid");
    return false;
  }
  const regex = /^[a-zA-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑñ\s]+$/;
  if (!regex.test($field.value)) {
    $field.classList.add("is-invalid");
    $field.classList.remove("is-valid");
    return false;
  }

  $field.classList.remove("is-invalid");
  $field.classList.add("is-valid");

  return true;
};
