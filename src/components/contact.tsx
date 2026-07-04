"use client";

import { useState } from "react";
import { ArrowUpRight, Loader2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormStatus = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    if (!name || !email || !subject || !message) {
      setStatus("error");
      setErrorMessage("All fields are required");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Something went wrong");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong"
      );
    }
  };

  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            03 — Get in touch
          </p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Let's build
            <br />
            <span className="text-muted-foreground">something together.</span>
          </h2>
          <p className="mt-6 max-w-xl text-muted-foreground">
            I'm currently open to freelance projects and full-time roles.
            Whether you have a question or just want to say hi — my inbox is always open.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-md px-6">
              <a href="mailto:levinjustin.salamat@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                levinjustin.salamat@gmail.com
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-md px-6">
              <a href="/resume.pdf" target="_blank" rel="noreferrer">
                Download CV <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-20 max-w-3xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={status === "loading"}
                className="h-12 rounded-lg border-border bg-background px-4 text-sm"
              />
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading"}
                className="h-12 rounded-lg border-border bg-background px-4 text-sm"
              />
            </div>
            <Input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              disabled={status === "loading"}
              className="h-12 rounded-lg border-border bg-background px-4 text-sm"
            />
            <Textarea
              placeholder="Tell me about your project..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={status === "loading"}
              className="min-h-[160px] resize-none rounded-lg border-border bg-background px-4 py-3 text-sm"
            />

            {status === "error" && (
              <p className="text-sm text-destructive">{errorMessage}</p>
            )}

            {status === "success" && (
              <p className="text-sm text-green-600 dark:text-green-400">
                Message sent! I'll get back to you soon.
              </p>
            )}

            <Button
              type="submit"
              size="lg"
              disabled={status === "loading"}
              className="w-full rounded-lg bg-foreground py-6 text-sm font-medium text-background hover:bg-foreground/90 disabled:opacity-50"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send message"
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
