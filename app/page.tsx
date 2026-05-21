"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  LineChart,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";

const services = [
  "Аудит текущей воронки, CRM и работы менеджеров",
  "Проектирование структуры отдела продаж и зон ответственности",
  "Скрипты, регламенты, стандарты коммуникации",
  "Внедрение аналитики, KPI и управленческой отчётности",
  "Найм, онбординг, обучение и коучинг менеджеров",
  "Система мотивации для менеджеров и РОПа",
];

const pains = [
  "Собственник вручную контролирует продажи",
  "CRM ведётся хаотично или формально",
  "Менеджеры не дожимают клиентов до сделки",
  "Нет понятных цифр по воронке и конверсиям",
  "Команда зависит от одного сильного сотрудника",
  "Рекламный бюджет растёт, а продажи — нет",
];

const steps = [
  [
    "01",
    "Диагностика",
    "Разбираем текущую систему продаж, воронку, CRM, команду и управленческие ограничения.",
  ],
  [
    "02",
    "Архитектура",
    "Проектируем структуру отдела, роли, KPI, отчётность, скрипты и стандарты работы.",
  ],
  [
    "03",
    "Внедрение",
    "Настраиваем процессы, обучаем команду, внедряем контроль и регулярные управленческие ритмы.",
  ],
  [
    "04",
    "Рост",
    "Отслеживаем конверсии, устраняем потери и доводим систему до предсказуемого результата.",
  ],
];

export default function MBConsultingLanding() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    niche: "",
    problem: "",
  });

  const [status, setStatus] = useState("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setStatus("loading");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

      setStatus("success");

      setForm({
        name: "",
        contact: "",
        niche: "",
        problem: "",
      });
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-[#002B12] text-white">
      <section className="relative overflow-hidden px-6 py-8 md:px-12 lg:px-20">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,#ffffff_0,transparent_28%),linear-gradient(135deg,transparent_0%,#001A0B_70%)]" />

        <div className="relative mx-auto max-w-7xl">
          <header className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#002B12] font-serif text-xl font-bold">
                M
              </div>

              <div>
                <p className="font-serif text-xl leading-none">
                  MB Consulting
                </p>

                <p className="text-xs text-white/60">
                  strategy · sales · growth
                </p>
              </div>
            </div>

            <a
              href="#lead"
              className="hidden rounded-full border border-white/20 px-5 py-3 text-sm text-white/90 transition hover:bg-white hover:text-[#002B12] md:inline-flex"
            >
              Оставить заявку
            </a>
          </header>

          <div className="grid gap-12 py-20 md:grid-cols-[1.15fr_0.85fr] md:items-center lg:py-28">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/70">
                Построение отделов продаж под ключ
              </p>

              <h1 className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">
                Превращаем продажи в предсказуемую систему роста
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72">
                Выстраиваем отдел продаж, CRM, аналитику, скрипты,
                мотивацию и управление командой — чтобы бизнес рос не
                за счёт хаоса и ручного контроля, а за счёт системы.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#lead"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-medium text-[#002B12] transition hover:scale-[1.02]"
                >
                  Получить диагностику
                  <ArrowRight size={18} />
                </a>

                <a
                  href="#approach"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-white/85 transition hover:bg-white/10"
                >
                  Как мы работаем
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="rounded-[2rem] border border-white/12 bg-white/[0.06] p-6 shadow-2xl backdrop-blur"
            >
              <div className="rounded-[1.5rem] bg-[#001A0B] p-7">
                <p className="text-sm uppercase tracking-[0.3em] text-white/45">
                  Средний фокус внедрения
                </p>

                <div className="mt-8 grid gap-5">
                  <Metric
                    label="Рост конверсий"
                    value="18–25%"
                  />

                  <Metric
                    label="Без увеличения рекламного бюджета"
                    value="0 ₽"
                  />

                  <Metric
                    label="Формат работы"
                    value="End-to-end"
                  />
                </div>

                <div className="mt-8 rounded-2xl border border-white/10 p-5 text-sm leading-6 text-white/65">
                  Меньше хаоса в продажах. Больше прозрачности,
                  управляемости и прогнозируемого результата.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-[#062313] md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[#002B12]/50">
                Когда пора внедрять систему
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
                Продажи не должны держаться на ручном управлении
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {pains.map((pain) => (
                <div
                  key={pain}
                  className="rounded-2xl border border-[#002B12]/10 bg-[#F7F7F2] p-5 text-[#062313]/80"
                >
                  <CheckCircle2
                    className="mb-4 text-[#002B12]"
                    size={22}
                  />

                  {pain}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="approach"
        className="px-6 py-20 md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.25em] text-white/45">
              Что внедряем
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              Собираем отдел продаж как управляемый актив бизнеса
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {services.map((service, i) => (
              <div
                key={service}
                className="rounded-[1.5rem] border border-white/12 bg-white/[0.06] p-6"
              >
                <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#002B12]">
                  {[
                    BarChart3,
                    Users,
                    ShieldCheck,
                    LineChart,
                    Zap,
                    CheckCircle2,
                  ].map((Icon, index) =>
                    index === i ? (
                      <Icon key={index} size={20} />
                    ) : null
                  )}
                </div>

                <p className="text-lg leading-7 text-white/82">
                  {service}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F7F2] px-6 py-20 text-[#062313] md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.25em] text-[#002B12]/50">
            Процесс
          </p>

          <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
            От диагностики до отдела, который работает по стандартам
          </h2>

          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {steps.map(([num, title, text]) => (
              <div
                key={num}
                className="rounded-[1.5rem] border border-[#002B12]/10 bg-white p-6 shadow-sm"
              >
                <p className="font-serif text-5xl text-[#002B12]/20">
                  {num}
                </p>

                <h3 className="mt-8 text-xl font-semibold">
                  {title}
                </h3>

                <p className="mt-4 leading-7 text-[#062313]/65">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="lead"
        className="px-6 py-20 md:px-12 lg:px-20"
      >
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/45">
              Следующий шаг
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              Разберём вашу ситуацию и покажем точки роста
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/68">
              На встрече определим ограничения в продажах,
              приоритеты внедрения и план действий с понятными
              показателями.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-white/12 bg-white p-6 text-[#062313] shadow-2xl md:p-8"
          >
            <div className="grid gap-4">
              <Input
                label="Имя"
                value={form.name}
                onChange={(v) =>
                  setForm({ ...form, name: v })
                }
                required
              />

              <Input
                label="Телефон или Telegram"
                value={form.contact}
                onChange={(v) =>
                  setForm({ ...form, contact: v })
                }
                required
              />

              <Input
                label="Ниша бизнеса"
                value={form.niche}
                onChange={(v) =>
                  setForm({ ...form, niche: v })
                }
              />

              <label className="grid gap-2 text-sm font-medium">
                Что сейчас не устраивает в продажах?

                <textarea
                  value={form.problem}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      problem: e.target.value,
                    })
                  }
                  rows={4}
                  className="resize-none rounded-2xl border border-[#002B12]/15 bg-[#F7F7F2] px-4 py-3 outline-none focus:border-[#002B12]"
                />
              </label>
            </div>

            <button
              disabled={status === "loading"}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#002B12] px-7 py-4 font-medium text-white transition hover:scale-[1.01] disabled:opacity-60"
            >
              {status === "loading"
                ? "Отправляем..."
                : "Оставить заявку"}

              <ArrowRight size={18} />
            </button>

            {status === "success" && (
              <p className="mt-4 text-sm text-[#002B12]">
                Заявка отправлена. Мы скоро свяжемся с вами.
              </p>
            )}

            {status === "error" && (
              <p className="mt-4 text-sm text-red-600">
                Не удалось отправить заявку. Попробуйте ещё
                раз.
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}

function Metric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-end justify-between border-b border-white/10 pb-4">
      <span className="text-white/55">{label}</span>

      <span className="font-serif text-4xl">{value}</span>
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
  required,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium">
      {label}

      <input
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-2xl border border-[#002B12]/15 bg-[#F7F7F2] px-4 py-3 outline-none focus:border-[#002B12]"
      />
    </label>
  );
}