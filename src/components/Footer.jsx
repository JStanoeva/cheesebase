import React from "react";
import {
  Pizza,
  ShieldCheck,
  Award,
  CheckCircle,
  Twitter,
  Github,
  MessageCircle,
} from "lucide-react";

const footerLinks = {
  delights: [
    { href: "#", text: "The Big Cheese DB" },
    { href: "#", text: "Gouda Auth" },
    { href: "#", text: "Swiss Storage" },
    { href: "#", text: "Realtime Roquefort" },
    { href: "#", text: "Edam Edge Functions" },
    { href: "#", text: "Golden Pricing" },
    { href: "#", text: "Curd Week News" },
    { href: "#", text: "AI Cheesemongers" },
  ],
  resources: [
    { href: "#", text: "Support the Curd" },
    { href: "#", text: "System Status" },
    { href: "#", text: "Become a Cheese Partner" },
    { href: "#", text: "Brand Assets / Logos" },
    { href: "#", text: "Security & Compliance" },
    { href: "#", text: "Aged Documentation" },
    { href: "#", text: "FAQ (Fondue Answers Quickly)" },
  ],
  devotees: [
    { href: "#", text: "Cheesebase UI Kit" },
    { href: "#", text: "Changelog (The Crumb Trail)" },
    { href: "#", text: "Open Curd Projects" },
    { href: "#", text: "SupaCheesed Examples" },
    { href: "#", text: "RSS Feed (Fresh Curds)" },
  ],
  creamery: [
    { href: "#", text: "Blog o' Cheese" },
    { href: "#", text: "Careers in Cheese" },
    { href: "#", text: "About Cheesebase" },
    { href: "#", text: "Events & Webinars" },
    { href: "#", text: "Terms of Curdvice" },
    { href: "#", text: "Privacy Policy" },
    { href: "#", text: "Cookie Settings" },
    { href: "#", text: "Our Cheesy Team" },
  ],
};

const FooterLinkColumn = React.memo(({ title, links }) => (
  <div className="footer-link-column">
    <h4>{title}</h4>
    <ul>
      {links.map((link) => (
        <li key={link.text}>
          <a href={link.href}>{link.text}</a>
        </li>
      ))}
    </ul>
  </div>
));
FooterLinkColumn.displayName = "FooterLinkColumn";

const Footer = React.memo(() => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-gray-400 pt-12" style={{ backgroundColor: "#000000" }}>
      <div className="border-b" style={{ borderColor: "#111111" }}>
        <div className="container mx-auto px-6 py-3 flex flex-wrap justify-center text-xs space-x-4 sm:space-x-6">
          <span className="inline-flex items-center">
            <ShieldCheck className="w-3 h-3 mr-1.5 text-green-400" /> Your data is Gouda with us.
            <a href="#" className="ml-1 hover:text-yellow-400 underline">More on Cheese Security</a>
          </span>
          <span className="inline-flex items-center">
            <Award className="w-3 h-3 mr-1.5 text-yellow-400" /> Parmesan Privacy Certified
          </span>
          <span className="inline-flex items-center">
            <CheckCircle className="w-3 h-3 mr-1.5 text-blue-400" /> Roquefort Reliability Assured
          </span>
        </div>
      </div>
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-1 mb-6 md:mb-0 flex flex-col items-start">
            <a href="#" className="text-2xl font-bold text-yellow-400 flex items-center mb-4">
              <Pizza className="inline-block mr-2" />
              <span>Cheesebase</span>
            </a>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:col-span-4">
            <FooterLinkColumn title="Cheesy Delights" links={footerLinks.delights} />
            <FooterLinkColumn title="Resources" links={footerLinks.resources} />
            <FooterLinkColumn title="For Devotees" links={footerLinks.devotees} />
            <FooterLinkColumn title="The Creamery" links={footerLinks.creamery} />
          </div>
        </div>
      </div>
      <div className="border-t" style={{ borderColor: "#111111" }}>
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="mb-2 md:mb-0 w-full text-center md:w-auto md:text-left">
            © <span>{currentYear}</span> Cheesebase Inc. All rights reserved.
            <br className="sm:hidden" /> Long live the Cheese Republic!
          </p>
          <p className="w-full text-center md:w-auto md:text-right flex items-center justify-center md:justify-end">
            <span className="mr-2">Powered by pure cheesiness</span>
            <MessageCircle className="w-5 h-5 text-yellow-400 hidden sm:inline-block" />
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";
export default Footer;
