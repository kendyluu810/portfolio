import React from "react";
import Image from "next/image";

type TechBadgeProps = {
  name: string;
  icon: string; // path to icon
};

const TechBadge: React.FC<TechBadgeProps> = ({ name, icon }) => {
  return (
    <div className="flex flex-col items-center space-y-1">
      {/* Badge container */}
      <div
        className="flex items-center gap-2 rounded-full px-4 py-2"
        style={{ backgroundColor: "#16161A" }}
      >
        <Image src={icon} alt={name} width={20} height={20} />
        <span className="text-sm font-medium" style={{ color: "#FFFFFE" }}>
          {name}
        </span>
      </div>
    </div>
  );
};

export default TechBadge;
