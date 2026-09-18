import Link from 'next/link';
import { Shield, Clock, FileText, Lock, Globe, Eye } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | GlobalTrade Co.',
  description: 'Review the legal frameworks, data compliance structures, and privacy policy guidelines of GlobalTrade Co.',
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen font-sans">
      {/* Editorial Header Section */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white pt-12 pb-16 px-6 lg:px-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-blue-400 font-semibold tracking-wider uppercase text-xs sm:text-sm bg-blue-950/60 px-3 py-1 rounded-full border border-blue-900/50 w-fit">
            <Shield size={14} /> Legal Documentation
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold mt-4 mb-4 tracking-tight max-w-4xl">
            Privacy Policy & Data Security
          </h1>
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <span className="flex items-center gap-1.5"><Clock size={14} /> Effective Date: September 18, 2026</span>
            <span>•</span>
            <span>Version 2.4</span>
          </div>
        </div>
      </section>

      {/* Main Legal Content Splitscreen */}
      <section className="pt-10 pb-16 lg:pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Quick Navigation Links (Sticky) */}
          <div className="hidden lg:block lg:col-span-3 bg-white rounded-xl border border-slate-200/80 p-6 sticky top-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Document Sections</h3>
            <nav className="space-y-3 text-sm font-medium">
              <a href="#overview" className="block text-blue-600 hover:text-blue-700">1. Overview</a>
              <a href="#data-collection" className="block text-slate-600 hover:text-blue-600 transition-colors">2. Information We Collect</a>
              <a href="#data-usage" className="block text-slate-600 hover:text-blue-600 transition-colors">3. How We Use Data</a>
              <a href="#compliance" className="block text-slate-600 hover:text-blue-600 transition-colors">4. Global Compliance & AML</a>
              <a href="#security" className="block text-slate-600 hover:text-blue-600 transition-colors">5. Security Standards</a>
              <a href="#contact" className="block text-slate-600 hover:text-blue-600 transition-colors">6. Legal Enquiries</a>
            </nav>
          </div>

          {/* Right Column: Main Legal Content */}
          <div className="lg:col-span-9 space-y-10 bg-white rounded-2xl border border-slate-200/80 shadow-sm p-8 lg:p-12">
            
            {/* Section 1 */}
            <div id="overview" className="scroll-mt-6">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2 mb-4">
                <span className="text-blue-600 text-lg">1.</span> Corporate Commitment & Overview
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
              Butt Three Star Trading Company (SMC-Private) Limited is a trusted name in Pakistan’s import and export industry, built on quality, integrity, and strong international business relationships.
              Headquartered in Gulberg, Lahore, with operations based in Daska, Sialkot, we are a SECP-registered company with active FBR status, dealing in premium commodities including Rice, Wheat, Maize/Corn, Himalayan Pink Salt, Surgical Instruments, Cotton Towels, Cotton Bed Sheets, Meat & Meat Products, and General Merchandise.
            Under the leadership of our CEO, Majid Hussain Butt, we have built a reputation for reliability, transparency, and consistent quality across every shipment. Our team specializes in international trading, buyer and supplier sourcing, freight and logistics coordination, and export documentation — offering our partners a smooth, professional trading experience from inquiry to delivery.
              </p>
              <p className="text-slate-600 leading-relaxed">
                By entering into trading agreements, navigating our corporate portals, or initiating supply chain onboarding requests, you acknowledge the terms outlined in this framework.
              </p>
            </div>

            {/* Section 2 */}
            <div id="data-collection" className="scroll-mt-6 border-t border-slate-100 pt-8">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2 mb-4">
                <span className="text-blue-600 text-lg">2.</span> The Data Fields We Collect
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                To fulfill international supply contracts, ensure maritime shipping customs protocol tracking, and maintain risk mitigations, we process the following criteria:
              </p>
              <ul className="space-y-2 text-slate-600 list-disc list-inside pl-2">
                <li><strong className="text-slate-900">Corporate Credentials:</strong> Business registrations, trading licenses, tax identification keys (VAT/EIN), and registered entity address certificates.</li>
                <li><strong className="text-slate-900">Representative Verification:</strong> Legal name, verified electronic corporate mail, corporate numbers, passport copies for ultimate beneficial owners (UBO).</li>
                <li><strong className="text-slate-900">Financial Telemetry:</strong> Bank settlement wiring directions, letters of credit parameters, and institutional banking route identities.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div id="data-usage" className="scroll-mt-6 border-t border-slate-100 pt-8">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2 mb-4">
                <span className="text-blue-600 text-lg">3.</span> How We Process Operational Data
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                We handle parameters under strict operational frameworks to satisfy international trade execution, including:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex gap-3">
                  <div className="text-blue-600 shrink-0"><Globe size={20} /></div>
                  <div className="text-sm"><strong className="text-slate-900 block">Freight Logistics</strong> Transferring delivery parameters to custom brokers, ports, and verification agencies.</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex gap-3">
                  <div className="text-blue-600 shrink-0"><Lock size={20} /></div>
                  <div className="text-sm"><strong className="text-slate-900 block">Fraud Prevention</strong> Verifying counterparty creditworthiness to eliminate global financial risks.</div>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div id="compliance" className="scroll-mt-6 border-t border-slate-100 pt-8">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2 mb-4">
                <span className="text-blue-600 text-lg">4.</span> Global Compliance & AML Standards
              </h2>
              <p className="text-slate-600 leading-relaxed">
                As an international trading company, we must follow mandatory global legal compliance frameworks, including **Anti-Money Laundering (AML)** mandates, **Know Your Customer (KYC)** rules, and trade screening requirements. We share data with government institutions only when legally obligated by international trade laws or active judicial subpoenas.
              </p>
            </div>

            {/* Section 5 */}
            <div id="security" className="scroll-mt-6 border-t border-slate-100 pt-8">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2 mb-4">
                <span className="text-blue-600 text-lg">5.</span> Enterprise Data Security Standards
              </h2>
              <p className="text-slate-600 leading-relaxed">
                All data is encrypted using **AES-256 standards** during transmission and while stored at rest. Access to your company's credentials and trade history is restricted to essential compliance officers and authorized logistics handlers via audited access keys.
              </p>
            </div>

            {/* Section 6 */}
            <div id="contact" className="scroll-mt-6 border-t border-slate-100 pt-8">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2 mb-4">
                <span className="text-blue-600 text-lg">6.</span> Data Governance & Legal Enquiries
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                If your legal department requires information regarding data retention schedules, right-to-erasure workflows, or third-party port processing audits, please contact our dedicated compliance office.
              </p>
              
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wider">Compliance Registry Desk</h4>
                  <p className="text-sm text-slate-600 mt-1">Email: <a href="mailto:compliance@globaltradeco.com" className="text-blue-600 hover:underline">majidbutt730@gmail.com</a></p>
                </div>
                <Link href="/contact" className="text-xs bg-slate-900 hover:bg-slate-800 text-white font-medium px-4 py-2 rounded-lg transition-colors">
                  Submit Legal Request
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
