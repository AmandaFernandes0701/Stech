import { z } from "zod";

const emailSchema = z
  .string()
  .nonempty("Email is required.")
  .email("Please enter a valid email.");

const passwordSchema = z
  .string()
  .nonempty("Password is required.")
  .min(6, "Password must be at least 6 characters long.")
  .max(20, "Password must be less than 20 characters long.")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
  .regex(/[0-9]/, "Password must contain at least one number.")
  .regex(
    /[^a-zA-Z0-9]/,
    "Password must contain at least one special character."
  );

export const validateEmail = (email) => {
  try {
    emailSchema.parse(email);
    return null;
  } catch (error) {
    return error.errors[0].message;
  }
};

export const validatePassword = (password) => {
  try {
    passwordSchema.parse(password);
    return null;
  } catch (error) {
    return error.errors[0].message;
  }
};
