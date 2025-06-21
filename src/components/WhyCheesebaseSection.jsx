import React from "react";
import { Smile, Rocket, ShieldCheck } from "lucide-react";

const whyCheesebaseData = [
  {
    id: 1,
    icon: Smile,
    title: "Delightfully Simple (No Kidding!)",
    description:
      "So easy to use, you'll brie-ze through development. Our intuitive APIs make building a pure joy, not a chore.",
  },
  {
    id: 2,
    icon: Rocket,
    title: "Blazingly Feta (Faster than a Crumble!)",
    description:
      'Optimized for speed. Your apps will load faster than you can say "provolone!" Get ready for warp-speed cheesiness.',
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: "Secure & Scalable (Like a Fortress of Fondue!)",
    description:
      "Robust security and effortless scaling. As dependable as a well-aged Parmesan wheel, ready for any feast.",
  },
];

// eslint-disable-next-line no-unused-vars
const InfoCard = React.memo(({ icon: IconComponent, title, description }) => (
  <div className="info-card p-8 rounded-xl flex flex-col">
    <div className="icon-container text-yellow-400 mb-4">
      <IconComponent className="w-10 h-10" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
));
InfoCard.displayName = "InfoCard";

const WhyCheesebaseSection = React.memo(() => (
  <section id="why-cheesebase" className="py-16 md:py-24">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: "#f5f5f5" }}>
        Why Go <span className="text-yellow-400">Full Cheese</span> with Cheesebase?
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {whyCheesebaseData.map((item) => (
          <InfoCard key={item.id} icon={item.icon} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  </section>
));

WhyCheesebaseSection.displayName = "WhyCheesebaseSection";
export default WhyCheesebaseSection;
