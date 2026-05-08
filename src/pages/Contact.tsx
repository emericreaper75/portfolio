import { ContactSection } from '../components/ContactSection';

export function Contact() {
  return (
    <div className="flex-1">
      <div className="bg-[#080808] border-b border-[#1A1A1A] p-12">
        <h1 className="text-[60px] md:text-[80px] font-black text-white tracking-tighter italic leading-none">
          CONTACT<span className="text-brand-cyan">.</span>
        </h1>
        <p className="system-label text-brand-cyan mt-4 opacity-60">UPLINK_ESTABLISHMENT // COMMS_PROTOCOL</p>
      </div>
      <ContactSection />
    </div>
  );
}
