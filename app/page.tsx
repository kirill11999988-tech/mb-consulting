"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const funnel = [
  ["Лиды", "Нет понятного аватара квал-лида"],
  ["Квалификация", "Менеджеры тратят время не на тех клиентов"],
  ["Встреча", "Нет единого стандарта дожима"],
  ["Сделка", "CRM и скрипты не помогают закрывать"],
  ["Управление", "Решения принимаются по ощущениям"],
];

const beforeAfter = [
  ["До", "Ручной контроль, хаотичная CRM, слабая отчётность и зависимость от отдельных менеджеров."],
  ["После", "Роли, KPI, аналитика, мотивация и контроль собраны в единую систему продаж."],
];

const steps = [
  ["01", "Диагностика", "Находим потери в воронке, CRM, команде и управлении."],
  ["02", "Архитектура", "Проектируем структуру отдела, KPI, роли и систему контроля."],
  ["03", "Внедрение", "Настраиваем процессы, обучаем команду и запускаем систему."],
  ["04", "Рост", "Контролируем цифры и улучшаем конверсии на каждом этапе."],
];

export default function Home() {
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      setForm({ name: "", contact: "", niche: "", problem: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-[#03190C] text-white overflow-hidden">
      <section className="relative px-6 py-8 md:px-12 lg:px-20">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,#03190C_0%,#03190C_55%,#0B2D18_100%)]" />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.14, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute -right-40 top-10 h-[650px] w-[650px] rounded-full bg-white blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl">
          <header className="flex items-center justify-between border-b border-white/10 pb-6">
            <div>
              <div className="font-serif text-2xl tracking-wide">MB Consulting</div>
              <div className="mt-1 text-xs uppercase tracking-[0.3em] text-white/45">
                sales architecture
              </div>
            </div>

            <a
              href="#lead"
              className="rounded-full border border-white/20 px-5 py-3 text-sm text-white/80 transition hover:bg-white hover:text-[#03190C]"
            >
              Оставить заявку
            </a>
          </header>

          <div className="grid min-h-[82vh] gap-20 py-20 md:grid-cols-[1fr_1fr] md:items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8 }}
            >
              <p className="mb-7 max-w-xl text-sm uppercase tracking-[0.28em] text-white/45">
                Построение отделов продаж под ключ
              </p>

              <h1 className="max-w-4xl font-serif text-4xl leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
                Превращаем продажи в предсказуемую систему роста
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/68">
                Выстраиваем отдел продаж, CRM, аналитику, скрипты, мотивацию и
                управление командой — чтобы бизнес рос за счёт системы, а не
                ручного контроля.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#lead"
                  className="rounded-full bg-white px-8 py-4 text-center font-medium text-[#03190C] transition hover:scale-[1.02]"
                >
                  Получить диагностику
                </a>

                <a
                  href="#case"
                  className="rounded-full border border-white/20 px-8 py-4 text-center text-white/80 transition hover:bg-white/10"
                >
                  Смотреть кейс
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative h-[760px] overflow-hidden rounded-[42px] bg-[#071F10]"
            >
              <img
                src="/hero-photo.png"
                alt="MB Consulting"
                className="absolute bottom-0 left-1/2 w-[88%] max-w-none -translate-x-1/2 object-contain"
              />

              <div className="absolute inset-0 bg-black/25" />

              <div className="absolute bottom-8 left-8 right-8">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="max-w-md rounded-[30px] border border-white/15 bg-white/10 p-7 backdrop-blur-xl"
                >
                  <div className="text-sm uppercase tracking-[0.3em] text-white/60">
                    MB CONSULTING
                  </div>

                  <div className="mt-5 font-serif text-6xl text-white">18–25%</div>

                  <p className="mt-4 text-lg leading-8 text-white/75">
                    средний рост конверсий после внедрения системы продаж
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatedSection className="bg-[#F6F3EC] px-6 py-24 text-[#03190C] md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <SectionLabel dark>Диагностика потерь</SectionLabel>

          <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
            Деньги теряются не “в продажах”, а в конкретных этапах воронки
          </h2>

          <div className="mt-14 grid gap-px overflow-hidden border border-[#03190C]/10 bg-[#03190C]/10 md:grid-cols-5">
            {funnel.map(([title, text], index) => (
              <motion.div
                key={title}
                whileHover={{ y: -6 }}
                className="bg-[#F6F3EC] p-7 transition"
              >
                <div className="font-serif text-5xl text-[#03190C]/20">
                  0{index + 1}
                </div>

                <h3 className="mt-10 text-2xl font-medium">{title}</h3>
                <p className="mt-5 leading-7 text-[#03190C]/65">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Трансформация</SectionLabel>

          <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
            Мы не “улучшаем скрипты”. Мы собираем управляемую систему продаж
          </h2>

          <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
            {beforeAfter.map(([title, text]) => (
              <div key={title} className="bg-[#03190C] p-8 md:p-10">
                <div className="text-sm uppercase tracking-[0.28em] text-white/35">
                  {title}
                </div>

                <p className="mt-8 max-w-xl text-2xl leading-10 text-white/78">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        id="case"
        className="bg-white px-6 py-24 text-[#03190C] md:px-12 lg:px-20"
      >
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div className="md:sticky md:top-8 md:self-start">
            <SectionLabel dark>Кейс</SectionLabel>

            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">
              +18% к конверсии из лида в договор
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#03190C]/65">
              Результат первого месяца после пересборки процессов, CRM и
              системы управления отделом.
            </p>
          </div>

          <div className="border border-[#03190C]/10">
            <CaseRow
              left="До проекта"
              right="CRM велась формально, показатели не были оцифрованы, менеджеры не дожимали клиентов."
            />

            <CaseRow
              left="Что сделали"
              right="Пересобрали воронку, скрипты, роли и внедрили систему контроля показателей."
            />

            <CaseRow
              left="Результат"
              right="Конверсии выросли без увеличения рекламного бюджета."
            />

            <div className="bg-[#F6F3EC] p-8 md:p-10">
              <div className="text-sm uppercase tracking-[0.28em] text-[#03190C]/45">
                Отзыв клиента
              </div>

              <blockquote className="mt-6 font-serif text-3xl leading-tight text-[#03190C]">
                “После внедрения стало понятно, где мы теряем клиентов и как
                управлять отделом не на ощущениях, а по цифрам.”
              </blockquote>

              <p className="mt-5 text-[#03190C]/55">
                Из интервью с клиентом проекта
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-[#F6F3EC] px-6 py-24 text-[#03190C] md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <SectionLabel dark>Процесс</SectionLabel>

          <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
            От диагностики до работающей системы продаж
          </h2>

          <div className="mt-14 grid gap-px overflow-hidden border border-[#03190C]/10 bg-[#03190C]/10 md:grid-cols-4">
            {steps.map(([num, title, text]) => (
              <div key={num} className="bg-[#F6F3EC] p-7">
                <div className="font-serif text-5xl text-[#03190C]/20">
                  {num}
                </div>

                <h3 className="mt-10 text-2xl font-medium">{title}</h3>
                <p className="mt-5 leading-7 text-[#03190C]/65">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="lead" className="px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel>Следующий шаг</SectionLabel>

            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">
              Разберём вашу систему продаж и покажем точки роста
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
              На встрече определим ограничения, приоритеты внедрения и план
              действий.
            </p>
          </div>

          <motion.form
            whileHover={{ y: -4 }}
            onSubmit={handleSubmit}
            className="border border-white/12 bg-white p-6 text-[#03190C] md:p-8"
          >
            <div className="grid gap-5">
              <Input
                label="Имя"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                required
              />

              <Input
                label="Телефон или Telegram"
                value={form.contact}
                onChange={(v) => setForm({ ...form, contact: v })}
                required
              />

              <Input
                label="Ниша бизнеса"
                value={form.niche}
                onChange={(v) => setForm({ ...form, niche: v })}
              />

              <label className="grid gap-2 text-sm font-medium">
                Что сейчас не устраивает?
                <textarea
                  value={form.problem}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      problem: e.target.value,
                    })
                  }
                  rows={4}
                  className="resize-none border border-[#03190C]/15 bg-[#F6F3EC] px-4 py-3 outline-none transition focus:border-[#03190C]"
                />
              </label>
            </div>

            <button
              disabled={status === "loading"}
              className="mt-7 w-full bg-[#03190C] px-7 py-4 font-medium text-white transition hover:opacity-90 disabled:opacity-60"
            >
              {status === "loading" ? "Отправляем..." : "Оставить заявку"}
            </button>

            {status === "success" && (
              <p className="mt-4 text-sm text-[#03190C]">Заявка отправлена.</p>
            )}

            {status === "error" && (
              <p className="mt-4 text-sm text-red-600">Ошибка отправки.</p>
            )}
          </motion.form>
        </div>
      </AnimatedSection>
    </main>
  );
}

function AnimatedSection({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className: string;
  id?: string;
}) {
  return (
    <motion.section
      id={id}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.7 }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

function SectionLabel({
  children,
  dark,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={`text-sm uppercase tracking-[0.28em] ${
        dark ? "text-[#03190C]/45" : "text-white/35"
      }`}
    >
      {children}
    </div>
  );
}

function CaseRow({ left, right }: { left: string; right: string }) {
  return (
    <div className="grid border-b border-[#03190C]/10 last:border-b-0 md:grid-cols-[0.35fr_0.65fr]">
      <div className="border-b border-[#03190C]/10 p-6 text-sm uppercase tracking-[0.2em] text-[#03190C]/45 md:border-b-0 md:border-r">
        {left}
      </div>

      <div className="p-6 text-lg leading-8 text-[#03190C]/75">{right}</div>
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
        className="border border-[#03190C]/15 bg-[#F6F3EC] px-4 py-3 outline-none transition focus:border-[#03190C]"
      />
    </label>
  );
}