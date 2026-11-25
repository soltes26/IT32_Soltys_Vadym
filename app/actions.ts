"use server";

import { z } from "zod";

const schema = z.object({
  fullName: z.string().trim().min(2, "ПІБ: мінімум 2 символи"),
  email: z.string().trim().pipe(z.email("Некоректний email")),
  topic: z.enum(["HTML", "CSS", "Next.js"], "Оберіть тему консультації"),
  details: z.string().trim().min(10, "Запитання: мінімум 10 символів"),
});

type Values = {
  fullName: string;
  email: string;
  topic: string;
  details: string;
};

export type FormState = {
  success: boolean;
  message: string;
  errors: {
    fullName?: string[];
    email?: string[];
    topic?: string[];
    details?: string[];
  };
  values: Values;
};

export async function submitRequest(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const values: Values = {
    fullName: String(formData.get("fullName") ?? ""),
    email: String(formData.get("email") ?? ""),
    topic: String(formData.get("topic") ?? ""),
    details: String(formData.get("details") ?? ""),
  };

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const result = schema.safeParse(values);

  if (!result.success) {
    return {
      success: false,
      message: "Виправте помилки у формі",
      errors: z.flattenError(result.error).fieldErrors,
      values,
    };
  }

  return {
    success: true,
    message: "Запит на консультацію перевірено!",
    errors: {},
    values: { fullName: "", email: "", topic: "", details: "" },
  };
}