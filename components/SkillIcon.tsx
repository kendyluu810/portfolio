const SkillIcon = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => (
  <div className="group relative flex justify-center">
    <div className="text-4xl text-[#94A1B2] transition-transform duration-300 group-hover:scale-110 group-hover:text-[#7F5AF0]">
      {children}
    </div>
    <span className="absolute -top-10 scale-0 rounded bg-gray-800 px-2 py-1 text-xs text-white group-hover:scale-100 transition-all duration-200 ease-in-out">
      {title}
    </span>
  </div>
);

export default SkillIcon;