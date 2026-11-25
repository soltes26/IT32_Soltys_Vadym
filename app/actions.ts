"use server";

import { z } from "zod";


const schema = z.object({
  fullName: z.string().trim().min(2, "Ім'я: мінімум 2 символи"),
  email: z.string().trim().pipe(z.email("Некоректний email")),
  product: z.string().trim().min(2, "Вкажіть назву товару"),
  quantity: z.coerce
    .number("Введіть число")
    .int("Кількість має бути цілим числом")
    .min(1, "Мінімальна кількість: 1")
    .max(10, "Максимальна кількість: 10"),
  address: z.string().trim().min(10, "Адреса: мінімум 10 символів"),
});

type Values = {
  fullName: string;
  email: string;
  product: string;
  quantity: string;
  address: string;
};

export type FormState = {
  success: boolean;
  message: string;
  errors: Partial<Record<keyof Values, string[]>>;
  values: Values;
};

export async function submitOrder(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const values: Values = {
    fullName: String(formData.get("fullName") ?? ""),
    email: String(formData.get("email") ?? ""),
    product: String(formData.get("product") ?? ""),
    quantity: String(formData.get("quantity") ?? ""),
    address: String(formData.get("address") ?? ""),
  };

  const result = schema.safeParse(values);

  if (!result.success) {
    return {
      success: false,
      message: "Виправте помилки у формі",
      errors: z.flattenError(result.error).fieldErrors,
      values,
    };
  }

  const { fullName, product, quantity } = result.data;

  return {
    success: true,
    message: `Дякуємо, ${fullName}! Замовлення прийнято: ${product}, кількість: ${quantity}.`,
    errors: {},
    values: {
      fullName: "",
      email: "",
      product: "",
      quantity: "1",
      address: "",
    },
  };
}