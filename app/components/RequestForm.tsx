"use client";

import { useActionState } from "react";
import { submitRequest, type FormState } from "../actions";

const initialState: FormState = {
  success: false,
  message: "",
  errors: {},
  values: { fullName: "", email: "", topic: "", details: "" },
};

export default function RequestForm() {
  const [state, formAction, isPending] = useActionState(
    submitRequest,
    initialState
  );

  return (
    <form action={formAction} className="form" noValidate>
      <div className="field">
        <label htmlFor="fullName">ПІБ студента</label>
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
        <label htmlFor="topic">Тема консультації</label>
        {}
        <select
          id="topic"
          name="topic"
          key={state.values.topic}
          defaultValue={state.values.topic}
        >
          <option value="">Оберіть тему</option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="Next.js">Next.js</option>
        </select>
        {state.errors.topic && (
          <p className="field-error">{state.errors.topic[0]}</p>
        )}
      </div>

      <div className="field">
        <label htmlFor="details">Запитання до викладача</label>
        <textarea
          id="details"
          name="details"
          rows={5}
          defaultValue={state.values.details}
        />
        {state.errors.details && (
          <p className="field-error">{state.errors.details[0]}</p>
        )}
      </div>

      <button type="submit" disabled={isPending}>
        {isPending ? "Надсилання..." : "Надіслати"}
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