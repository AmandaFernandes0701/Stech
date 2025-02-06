export const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!email) {return "Email is required.";}
  if (!emailRegex.test(email)) {return "Please enter a valid email.";}
  return null;
};

export const validatePassword = (password) => {
  if (!password) {return "Password is required.";}
  if (password.length < 6)
    {return "Password must be at least 6 characters long.";}
  return null;
};
