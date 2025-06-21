import React from "react";
import { ShieldPlus, Terminal, Save, Network } from "lucide-react";

const gridFeaturesData = [
  {
    id: 1,
    icon: ShieldPlus,
    title: "Secure & Stretchy Structures",
    description:
      "Combine flexible, stretchable components with finely-grated access control. Build robust and secure foundations for your cheesy applications.",
    span: "md:col-span-8",
  },
  {
    id: 2,
    icon: Terminal,
    title: "Cheddar CLI",
    description:
      "Sharp, powerful, and mature command-line tools to manage your cheesy stack with delightful ease.",
    span: "md:col-span-4",
  },
  {
    id: 3,
    icon: Save,
    title: "Brie Backups",
    description:
      "Smooth, creamy, and reliable data protection. Your precious data, preserved like the finest Brie.",
    span: "md:col-span-4",
  },
  {
    id: 4,
    icon: Network,
    title: "Global Logic & Luscious APIs",
    description:
      "Deploy salty serverless functions worldwide and craft bold, flavorful API queries. Get exactly the data you crave, with global reach.",
    span: "md:col-span-8",
  },
];

// eslint-disable-next-line no-unused-vars
const GridCard = React.memo(({ icon: IconComponent, title, description, span }) => (
  <a href="#" className={`grid-card rounded-xl p-8 flex flex-col ${span}`}>
    <div className="icon-container text-yellow-400 mb-6">
      <IconComponent className="w-10 h-10" />
    </div>
    <h3 className="text-2xl font-semibold mb-3">{title}</h3>
    <p className="mb-4 flex-grow">{description}</p>
  </a>
));
GridCard.displayName = "GridCard";

const GridFeaturesSection = React.memo(() => (
  <section id="grid-features" className="py-16 md:py-24">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {gridFeaturesData.map((feature) => (
          <GridCard
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            span={feature.span}
          />
        ))}
      </div>
    </div>
  </section>
));

GridFeaturesSection.displayName = "GridFeaturesSection";
export default GridFeaturesSection;
