/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShoppingCart, HardHat, ShieldCheck, Hammer, Instagram, Facebook, Twitter } from 'lucide-react';

const PRINTFUL_STORE_URL = "https://shopfloorclothing.printful.me/";

export default function App() {
  return (
    <div className="min-h-screen bg-steel-900 font-sans selection:bg-brand-orange selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-steel-900/90 backdrop-blur-md border-b border-steel-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HardHat className="text-brand-orange w-8 h-8" />
            <span className="font-display font-bold text-2xl tracking-wider text-white uppercase">
              Shop Floor
            </span>
          </div>
          <a
            href={PRINTFUL_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand-orange hover:bg-orange-600 text-white px-6 py-2.5 font-bold uppercase tracking-wide transition-colors duration-200"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="hidden sm:inline">Shop Now</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=2000"
            alt="Welder working with sparks"
            className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-steel-900 via-steel-900/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-steel-900/80 via-transparent to-steel-900/80" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display font-bold text-6xl sm:text-7xl md:text-9xl tracking-tighter text-white uppercase leading-none mb-6 text-balance drop-shadow-2xl"
          >
            Shop Floor<br /> <span className="text-brand-orange">Clothing</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto mb-10 font-light"
          >
            Built for the people who build everything.
          </motion.p>
          
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <a
              href={PRINTFUL_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-orange hover:bg-orange-600 text-white px-10 py-5 text-xl font-display font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95"
            >
              Shop Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Made on the Shop Floor */}
      <section className="py-24 sm:py-32 px-4 bg-steel-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white uppercase mb-8 tracking-wide">
            Made on the <span className="text-brand-orange">Shop Floor</span>
          </h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto mb-8" />
          <p className="text-xl sm:text-2xl text-gray-400 font-light leading-relaxed">
            "Shop Floor Clothing is inspired by the machinists, welders, operators, fabricators, maintenance technicians, and builders who keep the world running."
          </p>
        </div>
      </section>

      {/* Section 2: Features */}
      <section className="py-24 px-4 bg-steel-800 border-y border-steel-700">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {[
              {
                icon: HardHat,
                title: "Built for Blue Collar",
                desc: "Rugged materials that stand up to grease, grit, and the daily grind of the modern tradesman."
              },
              {
                icon: ShieldCheck,
                title: "Premium Quality",
                desc: "Double-stitched seams and heavyweight cotton blends designed to outlast the toughest shifts."
              },
              {
                icon: Hammer,
                title: "Designed by Builders",
                desc: "Functional fits and authentic styling created for the people actually doing the heavy lifting."
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="bg-steel-900 p-8 sm:p-10 border border-steel-700 hover:border-brand-orange/50 transition-colors group"
              >
                <feature.icon className="w-12 h-12 text-brand-orange mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-display text-2xl font-bold text-white uppercase tracking-wide mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Parallax / Banner */}
      <section className="relative py-32 sm:py-48 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
            src="https://images.unsplash.com/photo-1565439390234-fc0b38edb550?auto=format&fit=crop&q=80&w=2000"
            alt="CNC Machine in operation"
            className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-steel-900/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-steel-900 border-b border-transparent bottom-0 h-32 scale-y-[-1] origin-bottom z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-steel-800 to-transparent h-32 z-10"></div>
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 sm:p-16 border-4 border-brand-orange backdrop-blur-sm bg-steel-900/70"
          >
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-7xl tracking-tight text-white uppercase leading-none">
              Manufacturing isn't a job.<br/>
              <span className="text-brand-orange">It's a craft.</span>
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-steel-900 border-t border-steel-800 pt-16 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <HardHat className="text-brand-orange w-8 h-8" />
                <span className="font-display font-bold text-2xl tracking-wider text-white uppercase">
                  Shop Floor
                </span>
              </div>
              <p className="text-gray-400 max-w-sm">
                Premium blue-collar apparel built for machinists, welders, fabricators, and those who keep the world turning.
              </p>
            </div>
            <div className="flex flex-col md:items-end justify-center">
              <a
                href={PRINTFUL_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-steel-800 hover:bg-steel-700 border border-steel-600 text-white px-8 py-4 font-display font-bold uppercase tracking-widest transition-colors w-fit mb-6"
              >
                Visit Store
              </a>
              <div className="flex gap-4">
                <a href="#" className="p-2 bg-steel-800 rounded-full text-gray-400 hover:text-white hover:bg-brand-orange transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-steel-800 rounded-full text-gray-400 hover:text-white hover:bg-brand-orange transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-steel-800 rounded-full text-gray-400 hover:text-white hover:bg-brand-orange transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-steel-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Shop Floor Clothing. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
