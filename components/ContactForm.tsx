// components/ContactForm.tsx
"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";

type State = "idle" | "sending" | "sent" | "error";

const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<State>("idle");

  const [nameError, setNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);

  const disabled = status === "sending";

  const validate = () => {
    let ok = true;

    // Name
    if (!name.trim()) {
      setNameError("Name is required.");
      ok = false;
    } else if (name.trim().length > 20) {
      setNameError("Max 20 characters.");
      ok = false;
    } else {
      setNameError(null);
    }

    // Email
    if (!email.trim()) {
      setEmailError("Email is required.");
      ok = false;
    } else if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address.");
      ok = false;
    } else {
      setEmailError(null);
    }

    // Message
    if (!message.trim()) {
      toast.error("Message is required.");
      ok = false;
    }

    return ok;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message,
        }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
      toast.success("Message sent successfully!");
    } catch {
      setStatus("error");
      toast.error("Failed to send message. Please try again.");
    } finally {
      // small reset so button text returns to normal
      setTimeout(() => setStatus("idle"), 600);
    }
  };

  const baseInput =
    "w-full rounded-md px-4 py-3 bg-white text-black placeholder-gray-500 outline-none ring-1 ring-white/40 focus:ring-2 focus:ring-white";
  const errorRing = "ring-red-500 focus:ring-red-500";
  const helpTextBase = "mt-1 text-sm";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* Name */}
      <div>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={name}
          onChange={(e) => {
            const v = e.target.value;
            if (v.length <= 20) setName(v);
            // show error only when exceeding or empty (submit handles empty)
            if (v.length > 20) setNameError("Max 20 characters.");
            else if (nameError) setNameError(null);
          }}
          maxLength={20}
          className={`${baseInput} ${nameError ? errorRing : ""}`}
          required
          autoComplete="name"
          aria-invalid={!!nameError}
          aria-describedby="name-help"
        />
        {nameError ? (
          <p id="name-help" className={`${helpTextBase} text-red-500`}>{nameError}</p>
        ) : null}
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => {
            const v = e.target.value;
            setEmail(v);
            // live validate but keep it subtle
            if (!v.trim()) setEmailError("Email is required.");
            else if (!isValidEmail(v)) setEmailError("Please enter a valid email address.");
            else setEmailError(null);
          }}
          className={`${baseInput} ${emailError ? errorRing : ""}`}
          required
          autoComplete="email"
          aria-invalid={!!emailError}
          aria-describedby="email-help"
        />
        {emailError ? (
          <p id="email-help" className={`${helpTextBase} text-red-500`}>{emailError}</p>
        ) : null}
      </div>

      {/* Message */}
      <div>
        <textarea
          name="message"
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full min-h-[120px] rounded-md px-4 py-3 bg-white text-black placeholder-gray-500 outline-none ring-1 ring-white/40 focus:ring-2 focus:ring-white resize-y"
          required
        />
      </div>

      <button
        type="submit"
        disabled={disabled}
        className="w-full rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 tracking-wide disabled:opacity-60"
      >
        {status === "sending" ? "SENDING..." : "SEND A MESSAGE"}
      </button>
    </form>
  );
}
