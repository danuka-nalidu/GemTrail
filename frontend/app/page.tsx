'use client'

import { motion } from 'motion/react'
import { ArrowRight, Check, Menu, X } from 'lucide-react'
import { useState } from 'react'

const navItems = ['Features', 'How it works', 'Security', 'Pricing']
const trustPoints = ['Admin-only access', 'Two-factor login', 'Your data never leaves your control']

function LogoMark() {
  return (
    <span className="relative flex size-8 items-center justify-center" aria-hidden="true">
      <span className="absolute inset-0 rotate-45 rounded-[7px] border border-white/80" />
      <span className="absolute size-3 rotate-45 rounded-[3px] bg-white shadow-[0_0_24px_rgba(255,255,255,0.8)]" />
      <span className="absolute left-[7px] top-[7px] h-px w-5 rotate-45 bg-black/60" />
    </span>
  )
}

const floatingGems = [
  { className: 'gem gem-cyan', delay: 0, duration: 6 },
  { className: 'gem gem-violet', delay: 1.2, duration: 7 },
  { className: 'gem gem-blue', delay: 2.1, duration: 5.5 },
  { className: 'gem gem-white', delay: 0.7, duration: 6.8 },
]

function GemField() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      <div className="gem-orbit gem-orbit-one" />
      <div className="gem-orbit gem-orbit-two" />
      {floatingGems.map((gem, index) => (
        <motion.span
          key={gem.className}
          className={`${gem.className} absolute`}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: [0.25, 0.9, 0.25], scale: [0.7, 1, 0.7], y: [10, -18, 10], rotate: [0, 35, 70] }}
          transition={{ duration: gem.duration, delay: gem.delay, repeat: Infinity, ease: 'easeInOut' }}
          style={{ left: `${12 + index * 25}%`, top: `${34 + (index % 2) * 24}%` }}
        />
      ))}
      <span className="gem-sparkle sparkle-one" />
      <span className="gem-sparkle sparkle-two" />
      <span className="gem-sparkle sparkle-three" />
    </div>
  )
}

function PrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <motion.a
      href="#features"
      whileHover={{ scale: 1.025, boxShadow: '0 0 34px rgba(255,255,255,0.18)' }}
      whileTap={{ scale: 0.98 }}
      className="group inline-flex h-12 items-center gap-3 rounded-full bg-white pl-5 pr-1.5 text-sm font-semibold text-black transition-shadow"
    >
      {children}
      <span className="flex size-9 items-center justify-center rounded-full bg-[#3054ff] text-white transition-transform duration-300 group-hover:rotate-[-45deg]">
        <ArrowRight aria-hidden="true" className="size-4" />
      </span>
    </motion.a>
  )
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white selection:bg-[#3054ff]/60">
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute left-[-12%] top-[16%] size-[34rem] rounded-full bg-blue-950/30 blur-[120px]" />
        <div className="absolute right-[-12%] top-[28%] size-[32rem] rounded-full bg-indigo-950/30 blur-[120px]" />
        <div className="absolute left-1/2 top-[30%] size-[24rem] -translate-x-1/2 rounded-full bg-[#3054ff]/10 blur-[140px]" />
      </div>

      <nav className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 lg:px-10" aria-label="Main navigation">
        <a href="#top" className="flex items-center gap-3" aria-label="GemTrail home">
          <LogoMark />
          <span className="text-[15px] font-semibold tracking-[-0.03em]">GemTrail</span>
        </a>
        <div className="hidden items-center gap-9 text-sm text-white/55 md:flex">
          {navItems.map((item) => <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`} className="transition-colors hover:text-white">{item}</a>)}
        </div>
        <div className="hidden items-center gap-5 text-sm md:flex">
          <a href="#demo" className="text-white/70 transition-colors hover:text-white">Book A Demo</a>
          <a href="#features" className="rounded-full bg-white px-5 py-2.5 font-semibold text-black transition-transform hover:scale-[1.03]">Get Started</a>
        </div>
        <button type="button" className="rounded-full p-2 text-white md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        {menuOpen && <div className="absolute left-5 right-5 top-16 flex flex-col gap-5 rounded-2xl border border-white/10 bg-[#111]/95 p-6 text-sm shadow-2xl backdrop-blur-xl md:hidden">
          {navItems.map((item) => <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`} onClick={() => setMenuOpen(false)} className="text-white/70">{item}</a>)}
          <a href="#demo" className="text-white/70">Book A Demo</a>
          <a href="#features" className="rounded-full bg-white px-5 py-3 text-center font-semibold text-black">Get Started</a>
        </div>}
      </nav>

      <section id="top" className="relative mx-auto flex min-h-[calc(100vh-76px)] max-w-7xl flex-col items-center justify-center px-6 pb-24 pt-16 text-center lg:px-10 lg:pt-6">
        <GemField />
        <div className="absolute inset-x-0 top-1/2 -z-0 mx-auto h-[36rem] max-w-5xl -translate-y-1/2 overflow-hidden rounded-full opacity-80" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(48,84,255,0.13),transparent_62%)]" />
          <div className="absolute left-1/2 top-1/2 size-56 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[3rem] border border-blue-300/10 bg-gradient-to-br from-blue-500/10 to-transparent shadow-[0_0_100px_rgba(48,84,255,0.16)] animate-[spin_22s_linear_infinite]" />
          <div className="absolute left-1/2 top-1/2 size-80 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[5rem] border border-indigo-400/[0.07] animate-[spin_30s_linear_infinite_reverse]" />
        </div>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }} className="relative z-10 font-serif text-2xl italic text-white/75 md:text-3xl">From rough to profit, stone by stone</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .12 }} className="relative z-10 mt-5 max-w-4xl text-6xl font-semibold leading-[0.95] tracking-[-0.065em] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-[#b4c0ff] sm:text-8xl lg:text-[8.5rem]">Track Every Stone</motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .22 }} className="relative z-10 mt-8 max-w-xl text-base leading-7 text-white/60 sm:text-lg">A private control room for gem exporters. Follow each stone from rough purchase to cutting, sale, and profit, with your data staying yours.</motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .32 }} className="relative z-10 mt-9 flex flex-col items-center gap-5 sm:flex-row">
          <PrimaryButton>Start Tracking Free</PrimaryButton>
          <a href="#how-it-works" className="group inline-flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-white">See How It Works <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></a>
        </motion.div>
        <div className="relative z-10 mt-20 grid w-full max-w-2xl gap-4 border-t border-white/10 pt-6 text-left sm:grid-cols-3 sm:gap-8">
          {trustPoints.map((point, index) => <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .42 + index * .08 }} key={point} className="flex items-center gap-2.5 text-xs text-white/50 sm:flex-col sm:items-start sm:gap-3"><span className="flex size-5 items-center justify-center rounded-full border border-white/15"><Check className="size-3 text-[#8ea0ff]" /></span>{point}</motion.div>)}
        </div>
      </section>
      <section id="features" className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10"><div className="mx-auto max-w-xl text-center"><p className="font-serif text-xl italic text-white/60">A clearer view of your business</p><h2 className="mt-3 text-4xl font-medium tracking-tight text-white/90">Built for the work behind every beautiful stone.</h2></div></section>
    </main>
  )
}
