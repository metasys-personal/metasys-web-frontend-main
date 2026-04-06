import ContactForm from "@/app/components/common/contact-form";
import NavbarNew from "@/app/components/navbar/navbar";

export default function ContactPage() {
  return (
    <>
     <NavbarNew />
    <main className="min-h-screen bg-[#191919] text-white pt-28 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 text-center">
          Contact Us
        </h1>
        <p className="text-gray-400 mb-16 text-center ">
          Have a question or want to learn more about working with Metasys?
          Fill out the form below and we’ll get back to you.
        </p>

        <ContactForm />
      </div>
    </main>
    </>
  );
}
