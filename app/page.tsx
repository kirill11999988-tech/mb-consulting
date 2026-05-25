"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const pains = [
  [
    "Лиды обрабатываются часами",
    "Реклама дорожает, а заявки тухнут ещё до первого звонка.",
  ],
  [
    "CRM существует для отчётности",
    "Менеджеры заполняют поля. Руководитель всё равно ничего не видит.",
  ],
  [
    "Продажи держатся на 1–2 “звёздах”",
    "Один сотрудник уходит — и выручка падает.",
  ],
  [
    "Собственник сам тушит пожары",
    "Если без вас продажи останавливаются — системы нет.",
  ],
  [
    "Нет управляемости",
    "Вы не понимаете, где теряются сделки, почему падает конверсия и кто реально приносит деньги.",
  ],
];

const changes = [
  [
    "Управляемая воронка",
    "Вы видите, где теряются деньги.",
  ],
  [
    "KPI, которые влияют на выручку",
    "Не “активность ради активности”.",
  ],
  [
    "CRM, которой пользуются",
    "А не саботируют.",
  ],
  [
    "Контроль без микроменеджмента",
    "Собственник перестаёт жить в звонках и чатах.",
  ],
  [
    "Масштабируемый отдел продаж",
    "Рост без зависимости от конкретных людей.",
  ],
];

const antiMarket = [
  [
    "CRM ≠ система продаж",
    "Большинство компаний просто делают хаос “цифровым”.",
  ],
  [
    "Скрипты не спасают слабый процесс",
    "Если лиды обрабатываются хаотично — скрипт бесполезен.",
  ],
  [
    "Нельзя масштабировать ручное управление",
    "Пока собственник контролирует всё сам — бизнес упирается в потолок.",
  ],
  [
    "Нельзя улучшить то, что не измеряется",
    "Если нет цифр — нет управления.",
  ],
];

const steps = [
  [
    "01",
    "Диагностика",
    "Находим, где бизнес теряет деньги прямо сейчас.",
  ],
  [
    "02",
    "Архитектура системы",
    "Строим воронку, KPI, структуру, процессы и CRM-логику.",
  ],
  [
    "03",
    "Внедрение",
    "Не “рекомендации в PDF”, а внедрение в реальный бизнес.",
  ],
  [
    "04",
    "Контроль и масштабирование",
    "Чтобы система работала без постоянного ручного управления.",
  ],
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
              <div className="font-serif text-2xl tracking-wide">
                MB Consulting
              </div>
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
                  href="#pains"
                  className="rounded-full border border-white/20 px-8 py-4 text-center text-white/80 transition hover:bg-white/10"
                >
                  Где теряются деньги
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative h-[720px] overflow-hidden rounded-[42px] bg-[#071F10]"
            >
              <img
                src="/hero-photo.png"
                alt="MB Consulting"
                className="absolute left-1/2 top-1/2 w-[108%] max-w-none -translate-x-1/2 -translate-y-[54%] object-contain"
              />

              <div className="absolute inset-0 bg-black/22" />

              <div className="absolute bottom-8 left-8 right-8">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="max-w-[420px] rounded-[30px] border border-white/15 bg-white/10 p-7 backdrop-blur-xl"
                >
                  <div className="text-sm uppercase tracking-[0.3em] text-white/60">
                    MB CONSULTING
                  </div>

                  <div className="mt-5 font-serif text-5xl text-white">
                    Убираем хаос из продаж
                  </div>

                  <p className="mt-4 text-lg leading-8 text-white/75">
                    Возвращаем контроль над выручкой
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatedSection
        id="pains"
        className="bg-[#F6F3EC] px-6 py-24 text-[#03190C] md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          

          <h2 className="mt-5 max-w-5xl font-serif text-4xl leading-tight md:text-6xl">
            Большинство компаний теряют деньги не в маркетинге. А внутри отдела
            продаж.
          </h2>

          <div className="mt-14 grid gap-px overflow-hidden border border-[#03190C]/10 bg-[#03190C]/10 md:grid-cols-2">
            {pains.map(([title, text], index) => (
              <motion.div
                key={title}
                whileHover={{ y: -4 }}
                className={`bg-[#F6F3EC] p-7 md:p-8 ${
                  index === 4 ? "md:col-span-2" : ""
                }`}
              >
                <div className="text-sm uppercase tracking-[0.22em] text-[#03190C]/35">
                  Проблема 0{index + 1}
                </div>

                <h3 className="mt-8 text-2xl font-medium leading-tight">
                  {title}
                </h3>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-[#03190C]/65">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <SectionLabel>Что мы делаем</SectionLabel>

            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">
              Мы не “обучаем продажам”.
            </h2>

            <p className="mt-6 max-w-xl text-2xl leading-10 text-white/78">
              Мы строим систему, в которой бизнес не теряет деньги.
            </p>
          </div>

          <div className="border-l border-white/10 pl-8 md:pl-12">
            <p className="text-xl leading-9 text-white/70">
              Большинство “экспертов по продажам” дают мотивацию, продают
              скрипты, внедряют CRM или проводят тренинги. И через 2 месяца всё
              возвращается обратно.
            </p>

            <div className="my-10 h-px w-full bg-white/10" />

            <p className="font-serif text-3xl leading-tight text-white md:text-4xl">
              Потому что проблема не в скриптах.
            </p>

            <p className="mt-6 text-xl leading-9 text-white/70">
              Проблема — в отсутствии системы управления продажами.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white px-6 py-24 text-[#03190C] md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <SectionLabel dark>Что меняется после внедрения</SectionLabel>

          <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
            Продажи становятся управляемой системой, а не набором героических
            усилий.
          </h2>

          <div className="mt-14 grid gap-px overflow-hidden border border-[#03190C]/10 bg-[#03190C]/10 md:grid-cols-5">
            {changes.map(([title, text], index) => (
              <motion.div
                key={title}
                whileHover={{ y: -6 }}
                className="bg-white p-7 transition"
              >
                <div className="font-serif text-5xl text-[#03190C]/20">
                  0{index + 1}
                </div>

                <h3 className="mt-10 text-2xl font-medium leading-tight">
                  {title}
                </h3>

                <p className="mt-5 leading-7 text-[#03190C]/65">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-[#F6F3EC] px-6 py-24 text-[#03190C] md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            

            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">
              Почему большинство внедрений не работают
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden border border-[#03190C]/10 bg-[#03190C]/10">
            {antiMarket.map(([title, text]) => (
              <div key={title} className="bg-[#F6F3EC] p-7 md:p-8">
                <h3 className="text-2xl font-medium leading-tight">{title}</h3>
                <p className="mt-4 text-lg leading-8 text-[#03190C]/65">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
        

          <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
            Как происходит наша работа:
          </h2>

          <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-4">
            {steps.map(([num, title, text]) => (
              <motion.div
                key={num}
                whileHover={{ y: -6 }}
                className="bg-[#03190C] p-7"
              >
                <div className="font-serif text-5xl text-white/20">{num}</div>

                <h3 className="mt-10 text-2xl font-medium leading-tight">
                  {title}
                </h3>

                <p className="mt-5 leading-7 text-white/62">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        id="lead"
        className="bg-[#F6F3EC] px-6 py-24 text-[#03190C] md:px-12 lg:px-20"
      >
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionLabel dark>Следующий шаг</SectionLabel>

            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">
              Ваш бизнес уже теряет деньги внутри отдела продаж.
            </h2>

            <p className="mt-6 max-w-xl text-2xl leading-10 text-[#03190C]/75">
              Вопрос только в том — видите вы это или нет.
            </p>

            <div className="mt-10 border-l border-[#03190C]/15 pl-6">
              <p className="text-lg leading-8 text-[#03190C]/65">
                Проведём аудит и покажем: где теряются лиды, почему падает
                конверсия, что мешает масштабированию и какие изменения дадут
                рост.
              </p>
            </div>
          </div>

          <motion.form
            whileHover={{ y: -4 }}
            onSubmit={handleSubmit}
            className="border border-[#03190C]/10 bg-white p-6 text-[#03190C] md:p-8"
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
              <p className="mt-4 text-sm text-[#03190C]">
                Заявка отправлена.
              </p>
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
