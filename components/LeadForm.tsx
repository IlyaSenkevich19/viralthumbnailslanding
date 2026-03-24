"use client";

import { useState, useRef } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  DollarSign,
  MousePointerClick,
  Paintbrush,
  FlaskConical,
  Sparkles,
  Users,
  Shield,
  Loader2,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CustomSelect from "@/components/ui/CustomSelect";

const subscriberOptions = [
  "Under 1,000",
  "1,000 – 5,000",
  "5,000 – 15,000",
  "15,000 – 30,000",
  "30,000+",
];

const uploadsPerWeek = ["1–2 videos", "3–4 videos", "5+ videos"];

const painCards = [
  { id: "time", icon: <Clock className="h-5 w-5" />, label: "Takes too long" },
  {
    id: "cost",
    icon: <DollarSign className="h-5 w-5" />,
    label: "Designers cost too much",
  },
  {
    id: "ctr",
    icon: <MousePointerClick className="h-5 w-5" />,
    label: "My CTR is low",
  },
  {
    id: "design",
    icon: <Paintbrush className="h-5 w-5" />,
    label: "I can't design",
  },
  {
    id: "testing",
    icon: <FlaskConical className="h-5 w-5" />,
    label: "Can't A/B test",
  },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FieldErrors = {
  pain?: string;
  subscribers?: string;
  uploads?: string;
  email?: string;
};

export default function LeadForm() {
  const [pain, setPain] = useState("");
  const [subscribers, setSubscribers] = useState("");
  const [uploads, setUploads] = useState("");
  const [email, setEmail] = useState("");
  const [channelUrl, setChannelUrl] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  function validate(): FieldErrors {
    const e: FieldErrors = {};
    if (!pain) e.pain = "Please select your biggest problem";
    if (!subscribers) e.subscribers = "Please select subscriber range";
    if (!uploads) e.uploads = "Please select upload frequency";
    if (!email.trim()) e.email = "Email is required";
    else if (!EMAIL_RE.test(email)) e.email = "Enter a valid email address";
    return e;
  }

  function handleBlur(field: string) {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate());
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);
    setTouched({
      pain: true,
      subscribers: true,
      uploads: true,
      email: true,
    });

    if (Object.keys(validationErrors).length > 0) return;

    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setSubmitted(true);
  }

  const hasError = (field: keyof FieldErrors) =>
    touched[field] && errors[field];

  if (submitted) {
    return (
      <SectionWrapper id="lead-form">
        <div className="relative overflow-hidden rounded-3xl border border-success/30 bg-bg-card p-1">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-success/10 via-transparent to-accent/5" />
          <div className="relative flex flex-col items-center px-6 py-16 text-center sm:py-20">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-success/10">
              <CheckCircle2 className="h-10 w-10 text-success" />
            </div>
            <h3 className="mt-6 text-2xl font-bold text-text-primary sm:text-3xl">
              You&apos;re in! Your account is ready.
            </h3>
            <p className="mx-auto mt-3 max-w-md text-text-muted">
              We&apos;ve created your account and are generating your first 3 AI
              thumbnails right now. Access them instantly in your dashboard.
            </p>

            <a
              href="/dashboard"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-accent px-8 py-4 text-lg font-medium text-white shadow-lg shadow-accent/20 transition-all hover:scale-[1.02] hover:bg-accent-hover hover:shadow-xl hover:shadow-accent/30 active:scale-[0.98]"
            >
              Go to Dashboard
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>

            <div className="mt-8 flex flex-col gap-3 text-sm text-text-dim sm:flex-row sm:gap-6">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-success" />
                No credit card charged
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-success" />
                Cancel anytime
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-success" />
                Full access for 7 days
              </span>
            </div>
          </div>
        </div>
      </SectionWrapper>
    );
  }

  const inputBase =
    "w-full rounded-lg border bg-bg px-4 py-3 text-sm text-text-primary placeholder:text-text-dim outline-none transition-all duration-200";
  const inputDefault = `${inputBase} border-border focus:border-accent focus:ring-2 focus:ring-accent/20`;
  const inputError = `${inputBase} border-red-500/60 focus:border-red-500 focus:ring-2 focus:ring-red-500/20`;

  return (
    <SectionWrapper id="lead-form">
      <ScrollReveal>
        <div className="relative overflow-hidden rounded-3xl p-[1px]">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent via-accent-amber/60 to-accent opacity-30" />

          <div className="relative rounded-[23px] bg-bg-card">
            <div className="grid gap-0 lg:grid-cols-2">
              {/* Left — value proposition */}
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  <Sparkles className="h-3.5 w-3.5" />
                  Free — no card required
                </div>

                <h2 className="mt-5 text-2xl font-bold text-text-primary sm:text-3xl lg:text-4xl">
                  Get 3 AI Thumbnails for Your Channel — Free
                </h2>
                <p className="mt-4 text-text-muted">
                  Answer 4 quick questions and get instant access to the AI
                  generator. No long sales calls — just fill the form and start
                  creating thumbnails immediately.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Personalized to your channel and niche",
                    "Instant access to the AI generator",
                    "No design skills needed",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-success" />
                      <span className="text-sm text-text-muted">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-3 rounded-xl border border-border/50 bg-bg/50 px-4 py-3">
                  <Users className="h-5 w-5 text-accent" />
                  <span className="text-sm text-text-muted">
                    <span className="font-semibold text-text-primary">
                      2,500+
                    </span>{" "}
                    creators already signed up this month
                  </span>
                </div>
              </div>

              {/* Right — form */}
              <div className="border-t border-border/50 p-8 sm:p-10 lg:border-t-0 lg:border-l lg:p-12">
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  noValidate
                >
                  {/* 1. Pain — clickable cards */}
                  <fieldset className="relative pb-2">
                    <legend className="mb-3 text-sm font-medium text-text-primary">
                      What&apos;s your biggest thumbnail problem?{" "}
                      <span className="text-accent">*</span>
                    </legend>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                      {painCards.map((p) => (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => {
                            setPain(p.id);
                            setTouched((prev) => ({ ...prev, pain: true }));
                            setErrors((prev) => {
                              const next = { ...prev };
                              delete next.pain;
                              return next;
                            });
                          }}
                          className={`flex items-center gap-2 rounded-lg border px-3 py-2.5 text-left text-xs font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/30 ${
                            pain === p.id
                              ? "border-accent bg-accent/10 text-accent shadow-sm shadow-accent/10"
                              : hasError("pain")
                                ? "border-red-500/40 bg-bg text-text-muted"
                                : "border-border bg-bg text-text-muted hover:border-border-hover hover:text-text-primary"
                          }`}
                        >
                          {p.icon}
                          {p.label}
                        </button>
                      ))}
                    </div>
                    {hasError("pain") && (
                      <p className="absolute mt-1 flex items-center gap-1 text-xs text-red-400">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        {errors.pain}
                      </p>
                    )}
                  </fieldset>

                  {/* 2. Subscribers */}
                  <div className="relative pb-2">
                    <label className="mb-2 block text-sm font-medium text-text-primary">
                      Subscriber count{" "}
                      <span className="text-accent">*</span>
                    </label>
                    <CustomSelect
                      value={subscribers}
                      onChange={(val) => {
                        setSubscribers(val);
                        setTouched((prev) => ({ ...prev, subscribers: true }));
                        setErrors((prev) => {
                          const next = { ...prev };
                          delete next.subscribers;
                          return next;
                        });
                      }}
                      onBlur={() => handleBlur("subscribers")}
                      options={subscriberOptions}
                      placeholder="Select range"
                      hasError={!!hasError("subscribers")}
                    />
                    {hasError("subscribers") && (
                      <p className="absolute mt-1 flex items-center gap-1 text-xs text-red-400">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        {errors.subscribers}
                      </p>
                    )}
                  </div>

                  {/* 3. Videos per week */}
                  <div className="relative pb-2">
                    <label className="mb-2 block text-sm font-medium text-text-primary">
                      How many videos per week?{" "}
                      <span className="text-accent">*</span>
                    </label>
                    <CustomSelect
                      value={uploads}
                      onChange={(val) => {
                        setUploads(val);
                        setTouched((prev) => ({ ...prev, uploads: true }));
                        setErrors((prev) => {
                          const next = { ...prev };
                          delete next.uploads;
                          return next;
                        });
                      }}
                      onBlur={() => handleBlur("uploads")}
                      options={uploadsPerWeek}
                      placeholder="Select frequency"
                      hasError={!!hasError("uploads")}
                    />
                    {hasError("uploads") && (
                      <p className="absolute mt-1 flex items-center gap-1 text-xs text-red-400">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        {errors.uploads}
                      </p>
                    )}
                  </div>

                  {/* 4. Email */}
                  <div className="relative pb-2">
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-text-primary"
                    >
                      Your email{" "}
                      <span className="text-accent">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (touched.email) {
                          const val = e.target.value;
                          if (EMAIL_RE.test(val)) {
                            setErrors((prev) => {
                              const next = { ...prev };
                              delete next.email;
                              return next;
                            });
                          }
                        }
                      }}
                      onBlur={() => handleBlur("email")}
                      className={
                        hasError("email") ? inputError : inputDefault
                      }
                    />
                    {hasError("email") && (
                      <p className="absolute mt-1 flex items-center gap-1 text-xs text-red-400">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* 5. Channel URL (optional) */}
                  <div>
                    <label
                      htmlFor="channel-url"
                      className="mb-2 block text-sm font-medium text-text-primary"
                    >
                      Channel URL{" "}
                      <span className="font-normal text-text-dim">
                        (optional)
                      </span>
                    </label>
                    <input
                      id="channel-url"
                      type="url"
                      placeholder="https://youtube.com/@yourchannel"
                      value={channelUrl}
                      onChange={(e) => setChannelUrl(e.target.value)}
                      className={inputDefault}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className={`inline-flex w-full items-center justify-center rounded-xl px-8 py-4 text-lg font-medium transition-all duration-200 ${
                      submitting
                        ? "cursor-wait bg-accent/60 text-white/70"
                        : "cursor-pointer bg-accent text-white shadow-lg shadow-accent/20 hover:scale-[1.02] hover:bg-accent-hover hover:shadow-xl hover:shadow-accent/30 active:scale-[0.98]"
                    }`}
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Creating your account...
                      </>
                    ) : (
                      <>
                        Get Instant Access
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>

                  <p className="flex items-center justify-center gap-1.5 text-center text-xs text-text-dim">
                    <Shield className="h-3.5 w-3.5" />
                    We never spam. Unsubscribe anytime.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
