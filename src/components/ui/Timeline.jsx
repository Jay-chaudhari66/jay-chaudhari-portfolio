import TimelineCard from "./TimelineCard";

const Timeline = ({ items }) => {
  return (
    <div className="relative mx-auto max-w-5xl">
      {/* Vertical Line */}
      <div className="absolute left-3 top-0 h-full w-[2px] bg-white/10" />

      <div className="space-y-10">
        {items.map((item, index) => (
          <TimelineCard
            key={index}
            {...item}
            delay={index * 0.15}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;