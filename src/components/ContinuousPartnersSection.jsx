import React from "react";
import {
  Award,
  Building2,
  Lightbulb,
  ShieldCheck,
  Cpu,
  Rocket,
  Bot,
  Laptop2,
  PackageCheck,
  BarChartBig,
  DatabaseZap,
  CloudCog,
  Binary,
  AppWindow,
  Lock,
  ServerCrash,
} from "lucide-react";

const partnersRow1 = [
  { id: "p1-1", icon: Award, name: "Parmesan Programmers" },
  { id: "p1-2", icon: Building2, name: "Gouda Group Global" },
  { id: "p1-3", icon: Lightbulb, name: "Brie Brilliant Solutions" },
  { id: "p1-4", icon: ShieldCheck, name: "Cheddar Champions Co." },
  { id: "p1-5", icon: Cpu, name: "Mozzarella Makers" },
  { id: "p1-6", icon: Rocket, name: "Feta Forward Tech" },
  { id: "p1-7", icon: Bot, name: "Roquefort Robotics" },
  { id: "p1-8", icon: Laptop2, name: "Swiss Software Systems" },
];
const partnersRow2 = [
  { id: "p2-1", icon: PackageCheck, name: "Provolone Platforms" },
  { id: "p2-2", icon: BarChartBig, name: "Colby Code Crafters" },
  { id: "p2-3", icon: DatabaseZap, name: "Edam Engineering" },
  { id: "p2-4", icon: CloudCog, name: "Havarti Hosting Hub" },
  { id: "p2-5", icon: Binary, name: "Limburger Logic Ltd." },
  { id: "p2-6", icon: AppWindow, name: "Muenster Microservices" },
  { id: "p2-7", icon: Lock, name: "Ricotta Security Inc." },
  { id: "p2-8", icon: ServerCrash, name: "Asiago APIs" },
];

const duplicatedPartnersRow1 = [...partnersRow1, ...partnersRow1];
const duplicatedPartnersRow2 = [...partnersRow2, ...partnersRow2];

// eslint-disable-next-line no-unused-vars
const ContinuousPartnerCard = React.memo(({ icon: IconComponent, name }) => (
  <div className="continuous-carousel-card">
    <IconComponent className="w-6 h-6" />
    <span>{name}</span>
  </div>
));
ContinuousPartnerCard.displayName = "ContinuousPartnerCard";

const ContinuousPartnersSection = React.memo(() => (
  <section id="continuous-partners" className="py-16 md:py-24 bg-theme-translucent-dark">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: "#f5f5f5" }}>
        Proudly Partnered with the <span className="text-yellow-400">Cream of the Crop</span>!
      </h2>
    </div>
    <div className="continuous-carousel-container">
      <div className="continuous-carousel-viewport">
        <div className="continuous-carousel-track">
          {duplicatedPartnersRow1.map((partner, index) => (
            <ContinuousPartnerCard key={`${partner.id}-${index}`} icon={partner.icon} name={partner.name} />
          ))}
        </div>
      </div>
      <div className="continuous-carousel-viewport mt-4">
        <div className="continuous-carousel-track continuous-carousel-row-2">
          {duplicatedPartnersRow2.map((partner, index) => (
            <ContinuousPartnerCard key={`${partner.id}-${index}`} icon={partner.icon} name={partner.name} />
          ))}
        </div>
      </div>
    </div>
  </section>
));

ContinuousPartnersSection.displayName = "ContinuousPartnersSection";
export default ContinuousPartnersSection;
