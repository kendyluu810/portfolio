import { Mail, Github, Linkedin, Instagram, Globe } from "lucide-react";
import { JSX } from "react";

type ContactCardProps = {
  platform?: string;
  url?: string;
};

const ContactCard = ({ platform = "", url = "" }: ContactCardProps) => {
  const key = platform.trim().toLowerCase();
  const isEmail = key === "email" || key === "gmail";

  const icon =
    isEmail ? (
      <Mail className="w-6 h-6 text-[#7F5AF0]" />
    ) : key === "github" ? (
      <Github className="w-6 h-6 text-[#7F5AF0]" />
    ) : key === "linkedin" ? (
      <Linkedin className="w-6 h-6 text-[#7F5AF0]" />
    ) : key === "instagram" ? (
      <Instagram className="w-6 h-6 text-[#7F5AF0]" />
    ) : (
      <Globe className="w-6 h-6 text-[#7F5AF0]" />
    );

  const rawHref = isEmail ? `mailto:${url}` : url;
  const href =
    !isEmail && rawHref && !/^https?:\/\//i.test(rawHref)
      ? `https://${rawHref}`
      : rawHref || "#";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#16161A] border border-gray-700/50 rounded-lg p-6 flex items-center gap-4 hover:border-[#7F5AF0] transition-all"
    >
      {icon}
      <div>
        <h3 className="text-lg font-semibold text-[#FFFFFE]">
          {platform || "Contact"}
        </h3>
        <p className="text-sm text-[#94A1B2] break-all">{url || "N/A"}</p>
      </div>
    </a>
  );
};

export default ContactCard;