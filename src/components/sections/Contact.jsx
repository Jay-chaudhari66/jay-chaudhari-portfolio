import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

import ContactInfo from "../ui/ContactInfo";
import ContactForm from "../ui/ContactForm";

import { portfolio } from "../../data/portfolio";

const Contact = () => {
  const { contact } = portfolio;

  return (
    <Section id="contact">
      <Container>

        <SectionTitle
          badge="LET'S CONNECT"
          title={contact.title}
          subtitle={contact.subtitle}
        />

       <div className="mt-16 grid items-start gap-10 lg:grid-cols-[1fr_1.2fr]">

          <ContactInfo />

          <ContactForm />

        </div>

      </Container>
    </Section>
  );
};

export default Contact;