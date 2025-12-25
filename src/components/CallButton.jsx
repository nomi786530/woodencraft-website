import { FiPhone } from "react-icons/fi";

export default function CallButton() {
  return (
    <a
      href="tel:+971556724192"
      aria-label="Call us"
      className="fixed bottom-24 right-6 z-50 group"
    >
      {/* Pulse Ring */}
      <span
        className="
          absolute inset-0
          rounded-full
          bg-[#8b5e3c]/40
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
          bg-[#8b5e3c]
          text-white
          rounded-full
          shadow-lg
          transition-transform duration-300
          group-hover:scale-105
        "
      >
        <FiPhone size={24} />
      </span>
    </a>
  );
}
