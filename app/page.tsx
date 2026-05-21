"use client";

import React, { useState } from "react";

const services = [
  "Аудит воронки, CRM и текущей работы отдела",
  "Проектирование структуры отдела продаж",
  "Скрипты, регламенты и стандарты коммуникации",
  "KPI, аналитика и управленческая отчётность",
  "Найм, онбординг и обучение менеджеров",
  "Система мотивации для менеджеров и РОПа",
];

const problems = [
  "Собственник вручную контролирует продажи",
  "CRM ведётся хаотично или формально",
  "Менеджеры не дожимают клиентов до сделки",
  "Нет прозрачной аналитики по воронке",
  "Команда зависит от одного сильного сотрудника",
  "Реклама дорожает, а конверсия не растёт",
];

const steps = [
  ["01", "Диагностика", "Разбираем воронку, CRM, команду, роли, мотивацию и управленческие ограничения."],
  ["02", "Архитектура", "Проектируем структуру отдела, зоны ответственности, KPI, отчётность и стандарты работы."],
  ["03", "Внедрение", "Настраиваем процессы, обучаем команду, внедряем регулярный контроль и управленческий ритм."],
  ["04", "Рост", "Отслеживаем конверсии, устраняем потери и доводим систему до предсказуемого результата."],
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
    <main className="min-h-screen bg-[#03190C] text-white">
      <section className="relative min-h-screen overflow-hidden px-6 py-8 md:px-12 lg:px-20">
        <div className="absolute inset-0 bg-[linear-gradient(110deg,#03190C_0%,#03190C_48%,#092915_100%)]" />
        <div className="absolute -right-32 top-20 h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-white/10" />

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

          <div className="grid gap-16 py-20 md:grid-cols-[1.2fr_0.8fr] md:items-end lg:py-28">
            <div>
              <p className="mb-8 max-w-xl text-sm uppercase tracking-[0.28em] text-white/45">
                Построение отделов продаж под ключ
              </p>

              <h1 className="max-w-5xl font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
                Отдел продаж, который не требует ручного управления собственника
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/68">
                Проектируем и внедряем систему продаж: CRM, команда, скрипты,
                аналитика, мотивация и контроль — в единую управляемую модель роста.
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
                  Смотреть результат
                </a>
              </div>
            </div>

            <div className="border-l border-white/10 pl-6 md:pl-10">
              <div className="text-sm uppercase tracking-[0.28em] text-white/35">
                Операционный фокус
              </div>

              <div className="mt-8 space-y-8">
                <Metric value="18–25%" label="средний рост конверсий в проектах" />
                <Metric value="0 ₽" label="дополнительного рекламного бюджета" />
                <Metric value="End-to-end" label="внедрение, обучение и контроль" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F6F3EC] px-6 py-24 text-[#03190C] md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-sm uppercase tracking-[0.28em] text-[#03190C]/45">
                Проблема
              </div>

              <h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight md:text-6xl">
                Продажи часто растут не от системы, а от героизма отдельных людей
              </h2>
            </div>

            <div className="grid gap-px overflow-hidden border border-[#03190C]/10 bg-[#03190C]/10 md:grid-cols-2">
              {problems.map((item) => (
                <div key={item} className="bg-[#F6F3EC] p-6 text-lg leading-7">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="approach" className="px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="border-b border-white/10 pb-12">
            <div className="text-sm uppercase tracking-[0.28em] text-white/35">
              Что внедряем
            </div>

            <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
              Собираем отдел продаж как управляемый актив бизнеса
            </h2>
          </div>

          <div className="grid border-b border-white/10 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={service}
                className="border-t border-white/10 py-8 md:odd:border-r md:odd:border-white/10 md:odd:pr-10 md:even:pl-10"
              >
                <div className="text-sm text-white/35">0{index + 1}</div>
                <div className="mt-4 text-2xl leading-8 text-white/86">
                  {service}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="case" className="bg-white px-6 py-24 text-[#03190C] md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="text-sm uppercase tracking-[0.28em] text-[#03190C]/45">
                Кейс
              </div>

              <h2 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">
                +18% к конверсии из квалифицированного лида в договор
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#03190C]/65">
                Результат первого месяца после пересборки процессов, воронки,
                скриптов и управленческой отчётности.
              </p>
            </div>

            <div className="border border-[#03190C]/10">
              <CaseRow left="До проекта" right="CRM велась формально, показатели не были оцифрованы, менеджеры не дожимали клиентов." />
              <CaseRow left="Что сделали" right="Пересобрали скрипты, разграничили роли, внедрили отчётность, наняли и ввели менеджеров." />
              <CaseRow left="Результат" right="Дважды обновили максимум по договорам без увеличения рекламного бюджета." />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F6F3EC] px-6 py-24 text-[#03190C] md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-sm uppercase tracking-[0.28em] text-[#03190C]/45">
            Процесс
          </div>

          <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
            От диагностики до отдела, который работает по стандартам
          </h2>

          <div className="mt-14 grid gap-px overflow-hidden border border-[#03190C]/10 bg-[#03190C]/10 md:grid-cols-4">
            {steps.map(([num, title, text]) => (
              <div key={num} className="bg-[#F6F3EC] p-7">
                <div className="font-serif text-5xl text-[#03190C]/20">{num}</div>
                <h3 className="mt-10 text-2xl font-medium">{title}</h3>
                <p className="mt-5 leading-7 text-[#03190C]/65">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="lead" className="px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="text-sm uppercase tracking-[0.28em] text-white/35">
              Следующий шаг
            </div>

            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">
              Разберём вашу систему продаж и покажем точки роста
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
              На встрече определим ограничения, приоритеты внедрения и план
              действий с понятными показателями.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="border border-white/12 bg-white p-6 text-[#03190C] md:p-8"
          >
            <div className="grid gap-5">
              <Input label="Имя" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
              <Input label="Телефон или Telegram" value={form.contact} onChange={(v) => setForm({ ...form, contact: v })} required />
              <Input label="Ниша бизнеса" value={form.niche} onChange={(v) => setForm({ ...form, niche: v })} />

              <label className="grid gap-2 text-sm font-medium">
                Что сейчас не устраивает в продажах?
                <textarea
                  value={form.problem}
                  onChange={(e) => setForm({ ...form, problem: e.target.value })}
                  rows={4}
                  className="resize-none border border-[#03190C]/15 bg-[#F6F3EC] px-4 py-3 outline-none focus:border-[#03190C]"
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
                Заявка отправлена. Мы скоро свяжемся с вами.
              </p>
            )}

            {status === "error" && (
              <p className="mt-4 text-sm text-red-600">
                Не удалось отправить заявку. Попробуйте ещё раз.
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-b border-white/10 pb-6">
      <div className="font-serif text-5xl">{value}</div>
      <div className="mt-3 max-w-xs text-sm leading-6 text-white/55">{label}</div>
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
        className="border border-[#03190C]/15 bg-[#F6F3EC] px-4 py-3 outline-none focus:border-[#03190C]"
      />
    </label>
  );
}