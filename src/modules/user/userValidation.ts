import { z } from "zod";

export const userValidationSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .min(3)
    .max(50),

  email: z
    .string({
      required_error: "ইemail is required",
    })
    .email("give a valid email"),

  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, "Password must be at least 6 characters long"),

  age: z
    .number({
      required_error: "Age is required",
      invalid_type_error: "Age must be a number",
    })
    .min(13, "Age must be at least 13"),

  phone: z
    .number({
      required_error: "Phone number is required",
    })
    .min(11, "Phone number must be at least 11 digits long"),

  photo: z.string().url("Photo must be a valid URL").optional().nullable(),

  role: z.enum(["customer", "admin"]).default("customer"),
});
