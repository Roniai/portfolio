export const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-center mb-5 lg:mb-16">
      <h2 className="text-purple-700 font-bold text-[clamp(2rem,6vw,5rem)] md:text-5xl ">
        {title}
      </h2>
    </div>
  );
};
