import Link from 'next/link';
import { Mail, MapPin, Phone, Clock, FileText, ArrowRight, ShieldCheck, Globe } from 'lucide-react';
import Breadcrumb from '../Common/Breadcrumb';

export const metadata = {
  title: 'About Us & Corporate Overview | GlobalTrade Co.',
  description: 'Learn about GlobalTrade Co., our global distribution network, and official corporate credentials.',
};

export default function AboutPage() {
  return (
    <>
    <Breadcrumb title={"About Us"} pages={["About Us"]} />
    <div className="bg-slate-50 text-slate-800 min-h-screen font-sans">
     

      {/* Main Splitscreen Section - Adjusted pt-8 for a seamless transition */}
      <section className="pt-10 pb-16 lg:pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Corporate Directory & Contact Details */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200/80 shadow-sm p-8 lg:p-10 sticky top-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">Corporate Registry</h2>
            <p className="text-sm text-slate-500 mb-8">Official trading identity, headquarters address, and communication channels.</p>
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl h-11 w-11 flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm uppercase tracking-wider">Global Headquarters</h3>
                  <p className="text-slate-600 mt-1 text-sm sm:text-base leading-relaxed">
                    Gulberg III Lahore Pakistan<br />
                    District Lahore
                  </p>
                </div>
              </div>

              {/* Email Communications */}
              <div className="flex gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl h-11 w-11 flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm uppercase tracking-wider">Email Communications</h3>
                  <p className="text-slate-600 mt-1 text-sm sm:text-base font-medium">
                    <a href="mailto:trade@globaltradeco.com" className="hover:text-blue-600 transition-colors">majidbutt730@gmail.com</a>
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">Response within 1 business cycle.</p>
                </div>
              </div>

              {/* Direct Telephone */}
              <div className="flex gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl h-11 w-11 flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm uppercase tracking-wider">Direct Trading Desk</h3>
                  <p className="text-slate-600 mt-1 text-sm sm:text-base font-medium">
                    <a href="tel:+12125550190" className="hover:text-blue-600 transition-colors">+923219959819</a>
                  </p>
                </div>
              </div>

              {/* Operations Hours */}
              <div className="flex gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl h-11 w-11 flex items-center justify-center shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm uppercase tracking-wider">Market Hours</h3>
                  <p className="text-slate-600 mt-1 text-sm sm:text-base">
                    Mon — Fri: 08:00 – 6:00 (pkt)
                  </p>
                </div>
              </div>

              <hr className="border-slate-100 my-6" />

              {/* Regulatory Box */}
              <div className="flex gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="text-slate-400 shrink-0 mt-0.5">
                  <FileText size={18} />
                </div>
                <div className="text-xs text-slate-500 leading-relaxed">
                  <span className="font-semibold text-slate-700 block mb-1">Regulatory Information</span>
                  Registered Entity: Butt Three star Traders(SMC-Private) Limited<br />
                  Registration No: J179983-1<br />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Video Grid & Core Numbers */}
          <div className="lg:col-span-7 space-y-8">
            {/* The Video Container Aspect Grid */}
            <div className="bg-slate-950 rounded-2xl shadow-lg overflow-hidden border border-slate-800 group relative">
              <div className="aspect-video w-full bg-slate-900 relative">
                <iframe
                  className="w-full h-full absolute inset-0"
                  src="https://www.youtube.com/embed/FlW-tZBMpAM?rel=0&amp;controls=1&amp;showinfo=0;autoplay=1;mute=1" 
                  title="GlobalTrade Corporate Profile Video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-5 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <p className="text-xs text-blue-400 font-semibold tracking-wider uppercase">Corporate Overview</p>
                  <h3 className="text-white text-sm font-medium mt-0.5">Watch: Operations & Supply Chain Network</h3>
                </div>
                <span className="text-xs bg-slate-800 text-slate-400 px-2 py-1 rounded">0:29 Mins</span>
              </div>
            </div>

            {/* Quick Summary Grid Under Video */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="text-blue-600 mb-3"><Globe size={24} /></div>
                <h4 className="font-bold text-slate-900 mb-1">Global Trade Network</h4>
                <p className="text-sm text-slate-600 leading-relaxed">Operating clear logistics pathways through 45+ country customs ports globally.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="text-blue-600 mb-3"><ShieldCheck size={24} /></div>
                <h4 className="font-bold text-slate-900 mb-1">Full Compliance</h4>
                <p className="text-sm text-slate-600 leading-relaxed">Strict adherence to international shipping laws, tracking protocols, and trade sanctions.</p>
              </div>
            </div>

            {/* Accompanying Editorial Copy */}
            <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
              <h3 className="text-xl font-bold text-slate-900 tracking-tight pt-2">Our Operational Strategy</h3>
              <p className="leading-relaxed">
                By integrating localized legal knowledge with highly adaptive freight and dry bulk solutions, we remove traditional structural roadblocks for businesses scaling across global lines.
              </p>
              <p className="leading-relaxed">
                Whether managing regular raw material flow or fast-tracking commercial components, our trading desk provides end-to-end transparency, reducing pricing risks in real time.
              </p>
            </div>

            {/* CTA Component */}
            <div className="pt-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-blue-600 text-white font-medium px-6 py-3.5 rounded-xl hover:bg-blue-700 transition-colors shadow-sm shadow-blue-500/10 group text-sm sm:text-base"
              >
                Initiate Commercial Inquiry 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
    </>
  );
}
