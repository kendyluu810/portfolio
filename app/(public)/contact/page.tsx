import ContactCard from "@/components/ContactCard";
import { getContact } from "@/lib/sanity.queries";

export default async function ContactPage() {
  const contact = await getContact();
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Header */}
      <section>
        <h1 className="text-4xl md:text-5xl font-bold text-[#FFFFFE]">
          Contact
        </h1>
        <p className="mt-2 text-lg font-medium text-[#94A1B2]">
          Let's get in touch
        </p>
      </section>

      {/* Social Media Cards */}
      <section>
        <h2 className="text-xl font-semibold text-[#FFFFFE]">
          Find me on social media
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Gmail Card - Full Width */}
          <div className="md:col-span-2">
            <ContactCard platform="Gmail" url={`mailto:${contact.email}`} />
          </div>

          {/* Other Socials */}
          {contact.socials?.map((social: any, index: number) => (
            <ContactCard
              key={index}
              platform={social.platform}
              url={social.url}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
