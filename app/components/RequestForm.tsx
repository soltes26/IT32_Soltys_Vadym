"use client";

import { useActionState } from "react";
import { submitOrder, type FormState } from "../actions";

export default function RequestForm({
  defaultProduct,
}: {
  defaultProduct: string;
}) {
  const initialState: FormState = {
    success: false,
    message: "",
    errors: {},
    values: {
      fullName: "",
      email: "",
      product: defaultProduct,
      quantity: "1",
      address: "",
    },
  };

  const [state, formAction, isPending] = useActionState(
    submitOrder,
    initialState
  );

  return (
    <form action={formAction} className="form" noValidate>
      <div className="field">
        <label htmlFor="fullName">Ім&apos;я</label>
        <input
          id="fullName"
          name="fullName"
          defaultValue={state.values.fullName}
        />
        {state.errors.fullName && (
          <p className="field-error">{state.errors.fullName[0]}</p>
        )}
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          defaultValue={state.values.email}
        />
        {state.errors.email && (
          <p className="field-error">{state.errors.email[0]}</p>
        )}
      </div>

      <div className="field">
        <label htmlFor="product">Товар</label>
        <input
          id="product"
          name="product"
          defaultValue={state.values.product}
        />
        {state.errors.product && (
          <p className="field-error">{state.errors.product[0]}</p>
        )}
      </div>

      <div className="field">
        <label htmlFor="quantity">Кількість</label>
        <input
          id="quantity"
          name="quantity"
          type="number"
          min={1}
          max={10}
          defaultValue={state.values.quantity}
        />
        {state.errors.quantity && (
          <p className="field-error">{state.errors.quantity[0]}</p>
        )}
      </div>

      <div className="field">
        <label htmlFor="address">Адреса доставки</label>
        <textarea
          id="address"
          name="address"
          rows={3}
          defaultValue={state.values.address}
        />
        {state.errors.address && (
          <p className="field-error">{state.errors.address[0]}</p>
        )}
      </div>

      <button type="submit" className="button" disabled={isPending}>
        {isPending ? "Надсилання..." : "Оформити замовлення"}
      </button>

      <p
        aria-live="polite"
        className={state.success ? "message success" : "message failure"}
      >
        {!isPending && state.message}
      </p>
    </form>
  );
}