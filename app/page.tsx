"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Bot,
  LineChart,
  MessageSquareMore,
  ShieldCheck,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#04110A] text-white">
      {/* BACKGROUND */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#0d3b24,transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#11391f,transparent_35%)]" />
      </div>

      {/* HERO */}
      <section className="relative z-10">
        <div className="mx-auto grid min-h-screen max-w-[1600px] grid-cols-1 items-center gap-20 px-6 py-20 lg:grid-cols-2 lg:px-16">
          
          {/* LEFT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
          >
            <div className="mb-10 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm uppercase tracking-[0.35em] text-white/55 backdrop-blur-xl">
              Построение отделов продаж под ключ
            </div>

            <h1 className="max-w-[760px] font-serif text-[72px] leading-[0.95] tracking-[-0.04em] text-white md:text-[108px]">
              Превращаем продажи в предсказуемую систему роста
            </h1>

            <p className="mt-10 max-w-[760px] text-[26px] leading-[1.7] text-white/60">
              Выстраиваем отдел продаж, CRM, аналитику, скрипты,
              мотивацию и управление командой — чтобы бизнес рос
              за счёт системы, а не ручного контроля.
            </p>

            <div className="mt-14 flex flex-wrap gap-5">
              <button className="group flex items-center gap-3 rounded-full bg-white px-10 py-5 text-lg font-medium text-black transition hover:scale-[1.03]">
                Получить диагностику
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </button>

              <button className="rounded-full border border-white/15 px-10 py-5 text-lg text-white/80 backdrop-blur-xl transition hover:border-white/40 hover:bg-white/5">
                Смотреть кейс
              </button>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative flex h-[820px] items-center justify-center"
          >
            <div className="relative h-[820px] w-[760px] overflow-hidden rounded-[46px] bg-[#071F10]">

              {/* PHOTO */}
              <img
                src="/hero-photo.png"
                alt="MB Consulting"
                className="
                  absolute
                  left-1/2
                  top-1/2
                  w-[1020px]
                  max-w-none
                  -translate-x-1/2
                  -translate-y-[44%]
                  object-contain
                "
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/20" />

              {/* GLASS CARD */}
              <div className="absolute bottom-10 left-10">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="
                    max-w-[470px]
                    rounded-[34px]
                    border
                    border-white/15
                    bg-white/10
                    p-8
                    backdrop-blur-2xl
                  "
                >
                  <div className="text-sm uppercase tracking-[0.35em] text-white/60">
                    MB CONSULTING
                  </div>

                  <div className="mt-5 font-serif text-6xl text-white">
                    18–25%
                  </div>

                  <p className="mt-5 text-xl leading-9 text-white/75">
                    средний рост конверсий после внедрения
                    системы продаж
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST BLOCK */}
      <section className="relative z-10 border-t border-white/5">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-6 px-6 py-24 md:grid-cols-3 lg:px-16">
          
          {[
            {
              title: "CRM + аналитика",
              text: "Полная прозрачность в продажах и контроль KPI в реальном времени.",
              icon: <BarChart3 className="h-7 w-7" />,
            },
            {
              title: "AI и автоматизация",
              text: "Сокращаем рутину и внедряем AI-инструменты в процессы команды.",
              icon: <Bot className="h-7 w-7" />,
            },
            {
              title: "Рост прибыли",
              text: "Помогаем увеличить конверсию и масштабировать отдел продаж.",
              icon: <LineChart className="h-7 w-7" />,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="rounded-[32px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl"
            >
              <div className="mb-8 inline-flex rounded-2xl border border-white/10 bg-white/5 p-4 text-white">
                {item.icon}
              </div>

              <h3 className="text-3xl font-semibold">{item.title}</h3>

              <p className="mt-5 text-lg leading-8 text-white/60">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CASE */}
      <section className="relative z-10">
        <div className="mx-auto max-w-[1500px] px-6 py-28 lg:px-16">
          
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[40px] border border-white/10 bg-white/[0.03] p-14 backdrop-blur-xl"
          >
            <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
              
              <div>
                <div className="mb-6 text-sm uppercase tracking-[0.3em] text-white/40">
                  Кейс
                </div>

                <h2 className="max-w-[700px] font-serif text-6xl leading-[1.05]">
                  Увеличили конверсию отдела продаж на 24%
                </h2>

                <p className="mt-8 max-w-[700px] text-xl leading-9 text-white/60">
                  Перестроили CRM, внедрили скрипты, систему контроля
                  менеджеров и автоматическую аналитику.
                </p>

                <div className="mt-10 space-y-5">
                  {[
                    "CRM + аналитика",
                    "Система контроля менеджеров",
                    "AI-автоматизация коммуникаций",
                    "Новая система мотивации",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 text-lg text-white/80"
                    >
                      <CheckCircle2 className="h-5 w-5 text-[#8FE388]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-[32px] border border-white/10 bg-black/20 p-10">
                <div>
                  <div className="text-sm uppercase tracking-[0.3em] text-white/40">
                    Отзыв клиента
                  </div>

                  <p className="mt-8 text-2xl leading-10 text-white/85">
                    “Команда MB Consulting выстроила нам полноценную
                    систему продаж. Руководители наконец начали видеть
                    цифры, а отдел стал управляемым.”
                  </p>
                </div>

                <div className="mt-12 flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-white/10" />

                  <div>
                    <div className="text-lg font-medium">
                      Алексей Смирнов
                    </div>

                    <div className="text-white/50">
                      CEO / FinTech компания
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative z-10 border-t border-white/5">
        <div className="mx-auto max-w-[1500px] px-6 py-28 lg:px-16">
          
          <div className="mb-20">
            <div className="text-sm uppercase tracking-[0.3em] text-white/40">
              Что внедряем
            </div>

            <h2 className="mt-6 max-w-[800px] font-serif text-6xl leading-[1.05]">
              Система продаж, а не набор хаотичных действий
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            
            {[
              {
                title: "CRM + аналитика",
                icon: <BarChart3 className="h-7 w-7" />,
              },
              {
                title: "AI-инструменты",
                icon: <Bot className="h-7 w-7" />,
              },
              {
                title: "Скрипты и контроль",
                icon: <MessageSquareMore className="h-7 w-7" />,
              },
              {
                title: "Регламенты и KPI",
                icon: <ShieldCheck className="h-7 w-7" />,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="rounded-[30px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl"
              >
                <div className="mb-8 inline-flex rounded-2xl border border-white/10 bg-white/5 p-4">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-semibold">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 border-t border-white/5">
        <div className="mx-auto max-w-[1200px] px-6 py-32 text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-sm uppercase tracking-[0.3em] text-white/40">
              Следующий шаг
            </div>

            <h2 className="mx-auto mt-6 max-w-[900px] font-serif text-6xl leading-[1.05]">
              Разберём вашу систему продаж и покажем точки роста
            </h2>

            <p className="mx-auto mt-8 max-w-[700px] text-xl leading-9 text-white/60">
              Проведём диагностику бизнеса, покажем слабые места
              и подготовим план масштабирования.
            </p>

            <button className="mt-14 rounded-full bg-white px-12 py-5 text-lg font-medium text-black transition hover:scale-[1.03]">
              Записаться на консультацию
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}