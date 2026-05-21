"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07110B] text-white">
      {/* BACKGROUND */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,255,140,0.18),transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,255,140,0.10),transparent_30%)]" />
      </div>

      {/* HERO */}
      <section className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-6 pb-24 pt-12 md:grid-cols-2 md:px-10 lg:min-h-screen">
        {/* LEFT */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="mb-8 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm tracking-[0.28em] text-white/60 backdrop-blur">
            ПОСТРОЕНИЕ ОТДЕЛОВ ПРОДАЖ ПОД КЛЮЧ
          </div>

          <h1 className="max-w-3xl font-serif text-[64px] leading-[0.95] tracking-[-0.04em] text-white md:text-[92px]">
            Превращаем продажи в предсказуемую систему роста
          </h1>

          <p className="mt-10 max-w-2xl text-[24px] leading-[1.7] text-white/65">
            Выстраиваем отдел продаж, CRM, аналитику, скрипты,
            мотивацию и управление командой — чтобы бизнес рос за
            счёт системы, а не ручного контроля.
          </p>

          <div className="mt-14 flex flex-wrap gap-5">
            <button className="group flex items-center gap-3 rounded-full bg-white px-9 py-5 text-lg font-medium text-black transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(255,255,255,0.12)]">
              Получить диагностику
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button className="rounded-full border border-white/15 bg-white/5 px-9 py-5 text-lg text-white/90 backdrop-blur transition-all duration-300 hover:border-white/30 hover:bg-white/10">
              Смотреть кейс
            </button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative h-[620px] overflow-hidden rounded-[36px] bg-[#071F10]"
        >
          {/* PHOTO */}
          <img
            src="/hero-photo.png"
            alt="MB Consulting"
            className="h-full w-full object-contain object-center"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* FLOATING CARD */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-10 left-8 right-8 rounded-[32px] border border-white/10 bg-white/10 p-8 backdrop-blur-xl"
          >
            <div className="text-sm tracking-[0.35em] text-white/50">
              MB CONSULTING
            </div>

            <div className="mt-5 font-serif text-6xl text-white">
              18–25%
            </div>

            <p className="mt-4 max-w-sm text-xl leading-relaxed text-white/70">
              средний рост конверсий после внедрения системы продаж
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="relative border-t border-white/10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-24 md:grid-cols-3 md:px-10">
          {[
            {
              icon: TrendingUp,
              title: "Рост продаж",
              text: "Системно увеличиваем конверсии и управляемость отдела продаж.",
            },
            {
              icon: BarChart3,
              title: "Прозрачная аналитика",
              text: "CRM, отчёты, KPI и контроль цифр в одном контуре.",
            },
            {
              icon: ShieldCheck,
              title: "Операционная устойчивость",
              text: "Бизнес перестаёт зависеть от ручного контроля собственника.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="rounded-[30px] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
            >
              <item.icon className="h-8 w-8 text-[#8CFFB4]" />

              <h3 className="mt-8 text-2xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-lg leading-relaxed text-white/60">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CASE */}
      <section className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-[42px] border border-white/10 bg-white/[0.04] p-10 md:p-16 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="mb-6 text-sm tracking-[0.3em] text-white/45">
                  КЕЙС
                </div>

                <h2 className="font-serif text-5xl leading-tight text-white">
                  Как мы увеличили конверсию отдела продаж на 23%
                </h2>

                <p className="mt-8 text-xl leading-relaxed text-white/65">
                  Внедрили CRM, скрипты продаж, аналитику,
                  мотивацию менеджеров и систему контроля.
                  За 4 месяца компания получила стабильный рост
                  без увеличения рекламного бюджета.
                </p>
              </div>

              <div className="w-full max-w-md rounded-[32px] border border-white/10 bg-black/20 p-8">
                <div className="text-lg text-white/90">
                  “После внедрения системы мы впервые начали
                  видеть прогнозируемый рост и перестали
                  тушить пожары каждый день.”
                </div>

                <div className="mt-8">
                  <div className="font-medium text-white">
                    Александр М.
                  </div>

                  <div className="mt-1 text-white/45">
                    CEO производственной компании
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative border-t border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-28 text-center md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-5xl leading-tight text-white md:text-7xl">
              Построим систему продаж,
              <br />
              которая работает без хаоса
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-white/60">
              Проведём диагностику, покажем точки роста и
              подготовим план внедрения под ваш бизнес.
            </p>

            <button className="mt-14 rounded-full bg-white px-10 py-5 text-lg font-medium text-black transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(255,255,255,0.12)]">
              Обсудить проект
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}