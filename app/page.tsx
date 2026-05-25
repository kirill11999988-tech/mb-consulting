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
    "Вы не понимаете: где теряются сделки, почему падает конверсия и кто реально приносит деньги.",
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
    "Система контроля без микроменеджмента",
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
    <main className="min-h-screen overflow-hidden bg-[#03190C] text-white">
      {/* HERO */}
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
              <div className="font-serif text-xl tracking-wide md:text-2xl">
                MB Consulting
              </div>

              <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-white/45 md:text-xs">
                sales architecture
              </div>
            </div>

            <a
              href="#lead"
              className="rounded-full border border-white/20 px-4 py-2 text-xs text-white/80 transition hover:bg-white hover:text-[#03190C] md:px-5 md:py-3 md:text-sm"
            >
              Оставить заявку
            </a>
          </header>

          <div className="grid min-h-[82vh] grid-cols-1 gap-14 py-14 md:gap-20 md:py-20 lg:grid-cols-[1fr_1fr] lg:items-center">
            {/* LEFT */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8 }}
            >
              <p className="mb-6 max-w-xl text-xs uppercase tracking-[0.28em] text-white/45 md:mb-7 md:text-sm">
                Построение отделов продаж под ключ
              </p>

              <h1 className="max-w-4xl font-serif text-4xl leading-[1.02] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Превращаем продажи в предсказуемую систему роста
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/68 md:mt-8 md:text-lg">
                Выстраиваем отдел продаж, CRM, аналитику, скрипты,
                мотивацию и управление командой — чтобы бизнес рос
                за счёт системы, а не ручного контроля.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row md:mt-10">
                <a
                  href="#lead"
                  className="rounded-full bg-white px-8 py-4 text-center text-sm font-medium text-[#03190C] transition hover:scale-[1.02] md:text-base"
                >
                  Получить диагностику
                </a>

                <a
                  href="#pains"
                  className="rounded-full border border-white/20 px-8 py-4 text-center text-sm text-white/80 transition hover:bg-white/10 md:text-base"
                >
                  Где теряются деньги
                </a>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative h-[460px] overflow-hidden rounded-[32px] bg-[#071F10] sm:h-[560px] md:h-[720px] md:rounded-[42px]"
            >
              <img
                src="/hero-photo.png"
                alt="MB Consulting"
                className="absolute left-1/2 top-1/2 w-[120%] max-w-none -translate-x-1/2 -translate-y-[54%] object-contain sm:w-[112%] md:w-[108%]"
              />

              <div className="absolute inset-0 bg-black/22" />

              <div className="absolute bottom-5 left-5 right-5 md:bottom-8 md:left-8 md:right-8">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="max-w-full rounded-[24px] border border-white/15 bg-white/10 p-5 backdrop-blur-xl md:max-w-[420px] md:rounded-[30px] md:p-7"
                >
                  <div className="text-[10px] uppercase tracking-[0.3em] text-white/60 md:text-sm">
                    MB CONSULTING
                  </div>

                  <div className="mt-4 font-serif text-4xl text-white md:mt-5 md:text-5xl">
                    18–25%
                  </div>

                  <p className="mt-3 text-base leading-7 text-white/75 md:mt-4 md:text-lg md:leading-8">
                    средний рост конверсий после внедрения системы продаж
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* БОЛЬ */}
      <AnimatedSection
        id="pains"
        className="bg-[#F6F3EC] px-6 py-20 text-[#03190C] md:px-12 md:py-24 lg:px-20"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-28">
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-[#03190C]/35">
              Боль
            </div>

            <h2 className="mt-5 font-serif text-4xl leading-[1.02] sm:text-5xl md:text-6xl">
              Большинство компаний теряют деньги не в маркетинге.
              <span className="text-[#6F8D71]">
                {" "}
                А внутри отдела продаж.
              </span>
            </h2>
          </div>

          <div className="space-y-8 md:space-y-10">
            {pains.map(([title, text], index) => (
              <div
                key={title}
                className="border-t border-[#03190C]/10 pt-6 md:pt-8"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-medium leading-tight md:text-3xl">
                      {title}
                    </h3>

                    <p className="mt-4 max-w-2xl text-base leading-8 text-[#03190C]/65 md:text-lg">
                      {text}
                    </p>
                  </div>

                  <div className="hidden font-serif text-3xl text-[#03190C]/20 md:block">
                    0{index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ПОЗИЦИОНИРОВАНИЕ */}
      <AnimatedSection className="px-6 py-20 md:px-12 md:py-24 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-xs uppercase tracking-[0.28em] text-white/35">
            Позиционирование
          </div>

          <h2 className="mt-5 max-w-5xl font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
            Мы не “обучаем продажам”.
            <br />
            Мы перестраиваем систему, из-за которой бизнес теряет деньги.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
            <div className="space-y-4 text-base leading-8 text-white/60 md:text-lg">
              <p>Большинство “экспертов по продажам”:</p>
              <p>дают мотивацию</p>
              <p>продают скрипты</p>
              <p>внедряют CRM</p>
              <p>проводят тренинги</p>
            </div>

            <div className="space-y-6 text-lg leading-8 text-white/75 md:text-xl md:leading-9">
              <p>И через 2 месяца всё возвращается обратно.</p>

              <p>Потому что проблема не в скриптах.</p>

              <p className="text-[#A7C3A9]">
                Проблема — в отсутствии системы управления продажами.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ЧТО МЕНЯЕТСЯ */}
      <AnimatedSection className="bg-white px-6 py-20 text-[#03190C] md:px-12 md:py-24 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-xs uppercase tracking-[0.28em] text-[#03190C]/35">
            Что меняется после внедрения
          </div>

          <h2 className="mt-5 max-w-5xl font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
            Продажи становятся управляемой системой
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-[#03190C]/10 bg-[#03190C]/10 md:grid-cols-2 xl:grid-cols-5">
            {changes.map(([title, text], index) => (
              <motion.div
                key={title}
                whileHover={{ y: -6 }}
                className="bg-white p-7"
              >
                <div className="font-serif text-5xl text-[#03190C]/20">
                  0{index + 1}
                </div>

                <h3 className="mt-8 text-2xl font-medium leading-tight">
                  {title}
                </h3>

                <p className="mt-5 leading-7 text-[#03190C]/65">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* АНТИРЫНОК */}
      <AnimatedSection className="bg-[#F6F3EC] px-6 py-20 text-[#03190C] md:px-12 md:py-24 lg:px-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-[#03190C]/35">
              Антирыночный блок
            </div>

            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
              Почему большинство внедрений продаж не работают
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden border border-[#03190C]/10 bg-[#03190C]/10">
            {antiMarket.map(([title, text]) => (
              <div key={title} className="bg-[#F6F3EC] p-7 md:p-8">
                <h3 className="text-2xl font-medium leading-tight">
                  {title}
                </h3>

                <p className="mt-4 text-base leading-8 text-[#03190C]/65 md:text-lg">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ПРОЦЕСС */}
      <AnimatedSection className="px-6 py-20 md:px-12 md:py-24 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-xs uppercase tracking-[0.28em] text-white/35">
            Как происходит работа
          </div>

          <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
            Не рекомендации в PDF. А внедрение в реальный бизнес.
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-4">
            {steps.map(([num, title, text]) => (
              <motion.div
                key={num}
                whileHover={{ y: -6 }}
                className="bg-[#03190C] p-7"
              >
                <div className="font-serif text-5xl text-white/20">
                  {num}
                </div>

                <h3 className="mt-8 text-2xl font-medium leading-tight">
                  {title}
                </h3>

                <p className="mt-5 leading-7 text-white/62">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection
        id="lead"
        className="bg-[#F6F3EC] px-6 py-20 text-[#03190C] md:px-12 md:py-24 lg:px-20"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-[#03190C]/35">
              Следующий шаг
            </div>

            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
              Ваш бизнес уже теряет деньги внутри отдела продаж.
            </h2>

            <p className="mt-6 max-w-xl text-xl leading-10 text-[#03190C]/75">
              Вопрос только в том — видите вы это или нет.
            </p>

            <div className="mt-10 border-l border-[#03190C]/15 pl-6">
              <p className="text-base leading-8 text-[#03190C]/65 md:text-lg">
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
              {status === "loading"
                ? "Отправляем..."
                : "Оставить заявку"}
            </button>

            {status === "success" && (
              <p className="mt-4 text-sm text-[#03190C]">
                Заявка отправлена.
              </p>
            )}

            {status === "error" && (
              <p className="mt-4 text-sm text-red-600">
                Ошибка отправки.
              </p>
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