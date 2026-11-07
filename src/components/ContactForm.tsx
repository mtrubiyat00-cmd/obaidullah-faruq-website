 "use client";
import { FormEvent, useState } from "react";
export default function ContactForm() {
  const [status, setStatus] = useState<{ type: "success" | "error" | ""; message: string }>({ type: "", message: "" });
  const [busy, setBusy] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setBusy(true); setStatus({ type: "", message: "" });
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Your inquiry could not be sent. Please try again later.");
      form.reset(); setStatus({ type: "success", message: "Your inquiry has been submitted." });
    } catch (error) {
      setStatus({ type: "error", message: error instanceof Error ? error.message : "An unexpected error occurred." });
    } finally { setBusy(false); }
  }
  return <form className="contact-form" onSubmit={submit}>
    <div className="form-row"><label>Full name<input name="name" autoComplete="name" required maxLength={100} /></label>
      <label>Email address<input type="email" name="email" autoComplete="email" required maxLength={254} /></label></div>
    <div className="form-row"><label>Phone number <span className="optional">(optional)</span><input name="phone" autoComplete="tel" maxLength={40} /></label>
      <label>Inquiry category<select name="category" defaultValue="General inquiry"><option>General inquiry</option><option>Professional consultation</option><option>Speaking or publication</option><option>Other</option></select></label></div>
    <label>Message<textarea name="message" rows={5} required minLength={10} maxLength={3000} placeholder="Please provide a brief, general description. Do not include confidential or sensitive case information." /></label>
    <div className="honeypot" aria-hidden="true"><label>Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <label className="privacy-check"><input type="checkbox" name="acknowledgement" value="yes" required /> I understand that submitting this form does not create an attorney-client relationship.</label>
    <button className="button button-primary" type="submit" disabled={busy}>{busy ? "Submitting…" : "Submit inquiry"}</button>
    {status.message && <p role="status" className={`form-status ${status.type}`}>{status.message}</p>}
    <p className="form-small">Please do not send confidential documents or sensitive legal information through this form. See our <a href="/privacy-policy">Privacy Policy</a>.</p>
  </form>;
}
