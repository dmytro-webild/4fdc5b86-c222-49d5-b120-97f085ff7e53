import FooterMinimal from '@/components/sections/footer/FooterMinimal';
import NavbarDropdown from '@/components/ui/NavbarDropdown';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Mail, Phone } from "lucide-react";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Acasă",
    "href": "#hero"
  },
  {
    "name": "Despre Noi",
    "href": "#about"
  },
  {
    "name": "Servicii",
    "href": "#services"
  },
  {
    "name": "Contact",
    "href": "#contact"
  },
  {
    "name": "Product",
    "href": "#product"
  },
  {
    "name": "Partners",
    "href": "#partners"
  },
  {
    "name": "Metrics",
    "href": "#metrics"
  }
];

  return (
    <StyleProvider buttonVariant="arrow" siteBackground="noiseGradient" heroBackground="horizonGlow">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarDropdown
      logo="GUARDIAN HOMESTYLE"
      ctaButton={{
        text: "SOLICITĂ OFERTĂ",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterMinimal
      brand="GUARDIAN HOMESTYLE"
      copyright="© 2024 Guardian Homestyle. Filipeștii de Pădure, Strada Principală, Prahova. Tel: 0748770135 / 0757637999."
      socialLinks={[
        {
          icon: Phone,
          href: "tel:+40748770135",
        },
        {
          icon: Mail,
          href: "mailto:guardianhomestyle@gmail.com",
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
