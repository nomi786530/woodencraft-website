import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/971553809056"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Pulse Ring */}
      <span
        className="
          absolute inset-0
          rounded-full
          bg-[#25D366]/40
          animate-ping
          group-hover:hidden
        "
      />

      {/* Button */}
      <span
        className="
          relative
          flex items-center justify-center
          w-14 h-14
          bg-[#25D366]
          text-white
          rounded-full
          shadow-lg
          transition-transform duration-300
          group-hover:scale-105
        "
      >
        <FaWhatsapp size={26} />
      </span>
    </a>
  );
}
