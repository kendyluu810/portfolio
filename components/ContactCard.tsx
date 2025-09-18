import { Mail, Github, Linkedin, Instagram, Globe } from "lucide-react";
import { JSX } from "react";

type ContactCardProps = {
  platform: string;
  url: string;
};

const iconMap: Record<string, JSX.Element> = {
  Gmail: <Mail className="w-6 h-6 text-[#7F5AF0]" />,
  Github: <Github className="w-6 h-6 text-[#7F5AF0]" />,
  Linkedin: <Linkedin className="w-6 h-6 text-[#7F5AF0]" />,
  Instagram: <Instagram className="w-6 h-6 text-[#7F5AF0]" />,
  Website: <Globe className="w-6 h-6 text-[#7F5AF0]" />,
};

const ContactCard = ({ platform, url }: ContactCardProps) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#16161A] border border-gray-700/50 rounded-lg p-6 flex items-center gap-4 hover:border-[#7F5AF0] transition-all"
  >
    {iconMap[platform] ?? <Globe className="w-6 h-6 text-[#7F5AF0]" />}
    <div>
      <h3 className="text-lg font-semibold text-[#FFFFFE]">{platform}</h3>
      <p className="text-sm text-[#94A1B2] break-all">{url}</p>
    </div>
  </a>
);

export default ContactCard;
