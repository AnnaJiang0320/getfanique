'use client';
import React, { useState } from 'react';
import { 
  CheckCircle, 
  Clock, 
  Truck, 
  Paintbrush, 
  Zap, 
  ChevronRight, 
  Send,
  MessageCircle,
  Factory,
  Upload,
  BarChart2,
  Users
} from 'lucide-react';

export default function HomePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        body: formData,
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-brand-dark font-sans text-white overflow-x-hidden">
      {/* Sticky Header */}
      <nav className="sticky top-0 z-50 bg-brand-dark/95 backdrop-blur-md border-b border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center shadow-lg transform -rotate-3 group cursor-pointer">
              <span className="text-white font-black text-xl italic group-hover:rotate-6 transition">G</span>
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase italic">GETFANIQUE</span>
          </div>
          
          <div className="hidden lg:flex items-center space-x-10 font-black text-xs uppercase tracking-[0.2em] text-gray-400">
            <a href="#products" className="hover:text-orange-500 transition">Products</a>
            <a href="#industries" className="hover:text-orange-500 transition">Industries</a>
            <a href="#process" className="hover:text-orange-500 transition">Process</a>
            <a href="#cases" className="hover:text-orange-500 transition">Cases</a>
            <a href="#about" className="hover:text-orange-500 transition">Factory</a>
            <button className="bg-orange-600 text-white px-8 py-3 rounded-xl hover:shadow-2xl hover:-translate-y-1 transition duration-300 flex items-center gap-2 group">
              GET QUOTE <ChevronRight size={16} className="group-hover:translate-x-1 transition" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-12 lg:pt-24 pb-24 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img src="https://sc02.alicdn.com/kf/A63cbcba391c94532bc13a0fb09683a4eo.png" className="w-full h-full object-cover" alt="Hero Background" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-3 bg-white/5 px-5 py-2 rounded-full mb-8 border border-white/10">
                <span className="flex h-2 w-2 rounded-full bg-orange-600 animate-pulse"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 italic">Direct Event Fan Manufacturer</span>
              </div>
              
              <h1 className="text-6xl lg:text-[5.5rem] font-black leading-[0.9] mb-8 tracking-tighter uppercase italic">
                Custom Event <br />
                <span className="text-orange-600">Fans Factory</span>
              </h1>
              
              <p className="text-xl text-gray-400 mb-12 max-w-xl leading-relaxed font-medium">
                Direct factory manufacturing of custom folding fans, clack fans and promotional hand fans for global concerts, music festivals, and high-impact brand activations.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                {[
                  { label: "MOQ From", val: "100 pcs" },
                  { label: "Free Mockup", val: "24 Hours" },
                  { label: "Production", val: "7-15 Days" },
                  { label: "Shipping", val: "Worldwide" }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <span className="text-xs font-black uppercase tracking-widest text-gray-500 italic">{item.label}</span>
                    <span className="text-xl font-black italic">{item.val}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-5">
                <button className="bg-white text-brand-dark px-12 py-6 rounded-2xl font-black text-lg hover:shadow-[0_20px_50px_rgba(255,255,255,0.1)] hover:-translate-y-1 transition duration-300 uppercase tracking-widest italic">
                  Get Factory Pricing
                </button>
                <button className="bg-transparent border-2 border-white text-white px-12 py-6 rounded-2xl font-black text-lg hover:bg-white/5 transition uppercase tracking-widest italic">
                  Request Sample
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 sticky top-28">
              <div className="bg-[#1a1a1a] p-10 rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/5">
                <div className="flex justify-between items-center mb-10">
                    <h3 className="text-2xl font-black italic uppercase tracking-tighter">Get a Quote</h3>
                    <div className="bg-yellow-500 text-brand-dark px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-sm">
                      ⚡ Factory Direct
                    </div>
                </div>
                
                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="mx-auto text-green-500 mb-4" size={48} />
                    <h4 className="text-2xl font-black italic uppercase">Thank You!</h4>
                    <p className="text-gray-400 font-bold mt-2">Our team will contact you via WhatsApp shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-5">
                      <input type="text" name="name" placeholder="Full Name" required className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:ring-2 focus:ring-orange-600 font-bold text-sm text-white" />
                      <input type="text" name="company" placeholder="Company" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:ring-2 focus:ring-orange-600 font-bold text-sm text-white" />
                    </div>
                    
                    <input type="email" name="email" placeholder="Business Email" required className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:ring-2 focus:ring-orange-600 font-bold text-sm text-white" />
                    
                    <div className="grid grid-cols-2 gap-5">
                      <input type="text" name="whatsapp" placeholder="WhatsApp Number" required className="w-full bg-white/5 border-2 border-orange-600/20 rounded-2xl p-5 focus:ring-2 focus:ring-orange-600 font-bold text-sm text-white" />
                      <input type="text" name="country" placeholder="Country" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:ring-2 focus:ring-orange-600 font-bold text-sm text-white" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-5">
                      <select name="product" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:ring-2 focus:ring-orange-600 font-bold text-sm text-gray-400 appearance-none">
                        <option value="">Product Choice</option>
                        <option value="Folding Fans">Folding Fans</option>
                        <option value="Clack Fans">Clack Fans</option>
                        <option value="Hand Fans">Hand Fans</option>
                      </select>
                      <input type="text" name="quantity" placeholder="Qty (Min 100)" required className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:ring-2 focus:ring-orange-600 font-bold text-sm text-white" />
                    </div>
                    
                    <div className="relative">
                      <div className="absolute top-5 left-5 text-gray-500 pointer-events-none">
                        <Upload size={18} />
                      </div>
                      <input type="file" name="artwork" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 pl-12 font-bold text-xs text-gray-500 file:hidden" />
                      <span className="absolute left-12 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-xs pointer-events-none">Upload Artwork (PDF, AI, JPG)</span>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-orange-600 text-white py-6 rounded-2xl font-black text-xl hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-xl uppercase italic tracking-[0.1em] flex items-center justify-center gap-3 disabled:opacity-50"
                    >
                      {isSubmitting ? 'SENDING...' : 'GET FACTORY PRICING'} <Send size={20} />
                    </button>
                    
                    <p className="text-[10px] text-center text-gray-500 font-bold uppercase tracking-widest mt-4">
                      Instant Response via WhatsApp within 12 hours
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="products" className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter italic leading-none mb-6">Crowd <br /><span className="text-orange-600">Engagement</span> Solutions</h2>
              <p className="text-gray-400 font-medium text-lg italic">Engineered for visibility. Built for high-energy event atmospheres.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: "Custom Folding Fans", moq: "100 pcs", material: "Bamboo / Silk / Plastic", use: "Corporate & Luxury Events", image: "https://sc02.alicdn.com/kf/A21acb3d2af9a48db8d50b5f70874f1397.png" },
              { title: "Custom Clack Fans", moq: "100 pcs", material: "Durable Fabric + Heavy Plastic", use: "Festivals, Raves & Clubs", image: "https://sc02.alicdn.com/kf/A5997abec01d84ebba65a68cd47af3761t.png" },
              { title: "Promotional Hand Fans", moq: "100 pcs", material: "Budget Paper / PP Plastic", use: "Brand Activations & Rallies", image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&w=800&q=80" },
              { title: "Sports Event Fans", moq: "500 pcs", material: "Oversized Plastic Paddle", use: "Stadiums & Cheering", image: "https://images.unsplash.com/photo-1540747913346-19e3adca174f?auto=format&fit=crop&w=800&q=80" },
              { title: "Political Campaign Fans", moq: "1000 pcs", material: "High Volume Coated Cardboard", use: "Rallies & Elections", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80" },
              { title: "Wedding Fans", moq: "100 pcs", material: "Sandalwood / Lace / Silk", use: "Elegant Guest Favors", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80" }
            ].map((p, i) => (
              <div key={i} className="group bg-[#1a1a1a] p-10 rounded-[2.5rem] border border-white/5 hover:border-orange-500/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition duration-500">
                <div className="h-64 bg-white/5 rounded-3xl mb-10 overflow-hidden relative group">
                    <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition duration-1000" alt={p.title} />
                    <div className="absolute top-6 left-6">
                       <span className="bg-orange-600 text-white text-[10px] font-black uppercase px-3 py-1 rounded-md shadow-lg">MOQ {p.moq}</span>
                    </div>
                </div>
                <h3 className="text-3xl font-black mb-4 tracking-tighter italic">{p.title}</h3>
                <div className="space-y-4 mb-10">
                   <p className="text-xs font-bold text-gray-500 uppercase tracking-widest leading-relaxed">
                     <span className="text-white block mb-1">Materials</span> {p.material}
                   </p>
                   <p className="text-xs font-bold text-gray-500 uppercase tracking-widest leading-relaxed">
                     <span className="text-white block mb-1">Best For</span> {p.use}
                   </p>
                </div>
                <button className="w-full border-2 border-white text-white py-4 rounded-2xl font-black text-sm uppercase italic tracking-widest group-hover:bg-white group-hover:text-brand-dark transition duration-300">
                  Get Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-24 bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter italic mb-8">Industries We Serve</h2>
            <p className="text-orange-500 text-xl font-bold uppercase tracking-widest italic">Audience Engagement at Scale</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <Zap />, label: "Music Festivals" },
              { icon: <MessageCircle />, label: "Concerts" },
              { icon: <Users />, label: "Raves" },
              { icon: <BarChart2 />, label: "Sports Events" },
              { icon: <CheckCircle />, label: "Brand Activations" },
              { icon: <Factory />, label: "Political Campaigns" },
              { icon: <CheckCircle />, label: "Corporate Events" },
              { icon: <CheckCircle />, label: "Weddings" }
            ].map((industry, i) => (
              <div key={i} className="flex flex-col items-center text-center group cursor-pointer">
                <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-all duration-500 scale-90 group-hover:scale-110">
                    {React.cloneElement(industry.icon as React.ReactElement, { size: 40, className: "group-hover:text-white text-orange-500 transition" })}
                </div>
                <span className="text-xl font-black uppercase tracking-tighter italic group-hover:text-orange-500 transition">{industry.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Section */}
      <section id="about" className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="rounded-[4rem] bg-white/5 h-[600px] shadow-inner relative overflow-hidden group border border-white/5">
                 <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover group-hover:scale-105 transition duration-[2000ms]" alt="Factory Facility" />
                 <div className="absolute inset-0 bg-brand-dark/40 flex items-center justify-center">
                    <Factory size={100} className="text-orange-600 opacity-10" />
                 </div>
              </div>
             
             <div>
                <h2 className="text-6xl font-black italic uppercase tracking-tighter mb-10 leading-none">Manufacturing <br />Capacity</h2>
                <div className="grid grid-cols-2 gap-10 mb-12">
                   {[
                     { val: "20M+", label: "Fans Per Year" },
                     { val: "300+", label: "Skilled Workers" },
                     { val: "10+", label: "Years Experience" },
                     { val: "50+", label: "Countries Served" }
                   ].map((metric, i) => (
                     <div key={i} className="border-l-4 border-orange-600 pl-6">
                        <span className="text-5xl font-black italic block mb-2 text-white">{metric.val}</span>
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">{metric.label}</span>
                     </div>
                   ))}
                </div>
                <p className="text-lg text-gray-400 leading-relaxed font-medium italic mb-10">
                   Our vertically integrated facility in China manages everything from raw material processing to high-definition printing and final assembly, ensuring event deadlines are met with zero compromise on quality.
                </p>
                <button className="bg-white text-brand-dark px-10 py-5 rounded-2xl font-black uppercase tracking-widest italic hover:bg-gray-200 transition">
                  Learn About Our Facility
                </button>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050505] text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.4em] text-gray-700 italic">
              <p>© 2026 GetFanique Manufacturing • Crowd Engagement Products</p>
           </div>
        </div>
      </footer>
    </div>
  );
}
