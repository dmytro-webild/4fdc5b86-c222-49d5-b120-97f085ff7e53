import AboutTextSplit from '@/components/sections/about/AboutTextSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FeaturesDetailedSteps from '@/components/sections/features/FeaturesDetailedSteps';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import HeroSplitVerticalMarquee from '@/components/sections/hero/HeroSplitVerticalMarquee';
import MetricsIconCards from '@/components/sections/metrics/MetricsIconCards';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import TestimonialTrustCard from '@/components/sections/testimonial/TestimonialTrustCard';
import { Award, CheckCircle, Users } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroSplitVerticalMarquee
      tag="Expertiză și Calitate"
      title="GUARDIAN HOMESTYLE "
      description="Transformăm locuința dumneavoastră într-un spațiu sigur și modern. Tâmplărie PVC și aluminiu la standarde europene, fațade și soluții din sticlă securizată."
      primaryButton={{
        text: "SOLICITĂ O OFERTĂ",
        href: "#contact",
      }}
      secondaryButton={{
        text: "SUNĂ ACUM",
        href: "tel:+40748770135",
      }}
      leftItems={[
        {
          imageSrc: "https://images.pexels.com/photos/5900792/pexels-photo-5900792.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          imageSrc: "https://images.pexels.com/photos/35534776/pexels-photo-35534776.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          imageSrc: "https://images.pexels.com/photos/38558439/pexels-photo-38558439.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
      ]}
      rightItems={[
        {
          imageSrc: "https://images.pexels.com/photos/10874224/pexels-photo-10874224.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          imageSrc: "https://images.pexels.com/photos/1779826/pexels-photo-1779826.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          imageSrc: "https://images.pexels.com/photos/5691557/pexels-photo-5691557.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutTextSplit
      title="Două decenii de excelență în montaj"
      descriptions={[
        "Guardian Homestyle reprezintă standardul de aur în montajul sistemelor de tâmplărie. De 20 de ani, ne dedicăm timpul și expertiza pentru a oferi clienților soluții durabile, izolante și estetice.",
        "Echipa noastră de montatori profesioniști este pregătită pentru orice provocare, indiferent de complexitatea proiectului. De la fațade comerciale la amenajări rezidențiale, fiecare proiect primește aceeași atenție la detalii.",
        "Credem în relații de lungă durată cu clienții noștri, clădite pe transparență, onestitate și, mai presus de toate, calitatea desăvârșită a lucrărilor finalizate.",
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesDetailedSteps
      tag="Serviciile Noastre"
      title="Soluții complete pentru confortul dumneavoastră"
      description="Oferim o gamă largă de servicii specializate pentru a asigura un mediu sigur și eficient energetic pentru orice clădire."
      steps={[
        {
          tag: "PVC",
          title: "Tâmplărie PVC",
          subtitle: "Confort termic",
          description: "Ferestre și uși din profile PVC cu izolare superioară pentru eficiență energetică.",
          imageSrc: "https://images.pexels.com/photos/6970051/pexels-photo-6970051.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          tag: "Aluminiu",
          title: "Tâmplărie Aluminiu",
          subtitle: "Rezistență",
          description: "Profile moderne de aluminiu pentru un aspect elegant și o durabilitate maximă.",
          imageSrc: "https://images.pexels.com/photos/37434326/pexels-photo-37434326.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          tag: "Sticlă",
          title: "Balcoane și Terase",
          subtitle: "Design modern",
          description: "Închideri cu sticlă și aluminiu pentru spații protejate tot timpul anului.",
          imageSrc: "https://images.pexels.com/photos/38445405/pexels-photo-38445405.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="product" data-section="product">
    <SectionErrorBoundary name="product">
          <FeaturesImageBento
      tag="Portofoliu și Soluții"
      title="Aplicații profesionale pentru orice spațiu"
      description="Fie că este vorba despre clădiri comerciale sau locuințe, soluțiile noastre sunt adaptate pentru a maximiza estetica și funcționalitatea."
      items={[
        {
          title: "Tâmplărie PVC",
          description: "Eficiență energetică sporită.",
          imageSrc: "https://images.pexels.com/photos/33074590/pexels-photo-33074590.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Sisteme Aluminiu",
          description: "Design arhitectural modern.",
          imageSrc: "https://images.pexels.com/photos/33719829/pexels-photo-33719829.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Balcoane & Terase",
          description: "Confort în orice anotimp.",
          imageSrc: "https://images.pexels.com/photos/35408438/pexels-photo-35408438.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Sticlă Securizată",
          description: "Siguranță și eleganță vizuală.",
          imageSrc: "https://images.pexels.com/photos/19295041/pexels-photo-19295041.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Pereți Cortină",
          description: "Fațade pentru clădiri comerciale.",
          imageSrc: "https://images.pexels.com/photos/11229714/pexels-photo-11229714.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Montaj Certificat",
          description: "Garanția unei lucrări durabile.",
          imageSrc: "https://images.pexels.com/photos/8292802/pexels-photo-8292802.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Accesorii Premium",
          description: "Finisaje care fac diferența.",
          imageSrc: "https://images.pexels.com/photos/6436749/pexels-photo-6436749.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="partners" data-section="partners">
    <SectionErrorBoundary name="partners">
          <SocialProofMarquee
      tag="Branduri de încredere"
      title="Soluții de calitate cu parteneri de elită"
      description="Colaborăm cu producători de top pentru a garanta cele mai performante sisteme pentru proiectele dumneavoastră."
      names={[
        "Alumil",
        "Etem",
        "Aliplast",
        "Schüco",
        "Exalco",
        "Salamander",
        "Sisteme Premium",
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsIconCards
      tag="Experiență"
      title="Guardian Homestyle în cifre"
      description="20 de ani de experiență, mii de clienți mulțumiți și numeroase proiecte de succes în județul Prahova și nu numai."
      metrics={[
        {
          icon: Award,
          title: "Ani de Experiență",
          value: "20+",
        },
        {
          icon: Users,
          title: "Clienți Mulțumiți",
          value: "2500+",
        },
        {
          icon: CheckCircle,
          title: "Proiecte Finalizate",
          value: "4000+",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialTrustCard
      quote="Profesionalism desăvârșit. Echipa a montat ferestrele rapid și fără murdărie. Recomand cu încredere!"
      rating={5}
      author="Andrei Popescu"
      avatars={[
        {
          name: "Andrei P.",
          imageSrc: "https://images.pexels.com/photos/7552075/pexels-photo-7552075.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          name: "Maria I.",
          imageSrc: "https://images.pexels.com/photos/8899942/pexels-photo-8899942.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          name: "Ion G.",
          imageSrc: "https://images.pexels.com/photos/8470806/pexels-photo-8470806.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          name: "Elena D.",
          imageSrc: "https://images.pexels.com/photos/7578906/pexels-photo-7578906.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          name: "Vasile R.",
          imageSrc: "https://images.pexels.com/photos/8866770/pexels-photo-8866770.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Contactați-ne"
      text="Sunteți gata să începeți un proiect? Suntem aici pentru a vă oferi cea mai bună consultanță și o ofertă personalizată."
      primaryButton={{
        text: "SUNĂ LA 0748 770 135",
        href: "tel:+40748770135",
      }}
      secondaryButton={{
        text: "TRIMITE E-MAIL",
        href: "mailto:guardianhomestyle@gmail.com",
      }}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
