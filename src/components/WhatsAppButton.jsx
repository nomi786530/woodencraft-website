import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/971556724192"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 z-50
        bg-[#25D366]
        text-white
        p-4
        rounded-full
        shadow-lg
        hover:scale-105
        transition-transform
      "
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
