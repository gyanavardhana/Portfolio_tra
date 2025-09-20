
import { useEffect } from "react";
import Layout from "@/components/Layout";
import ContactHeader from "@/components/contact/ContactHeader";
import ContactForm from "@/components/contact/ContactForm";


const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <section className="pt-24 pb-16 min-h-screen flex items-center">
        <div className="container mx-auto px-4 max-w-6xl">
            <ContactForm />
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
