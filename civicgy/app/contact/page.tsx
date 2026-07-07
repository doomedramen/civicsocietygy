import PageBanner from "@/app/_components/PageBanner";
import Section from "@/app/_components/Section";
import { FormField, TextInput, TextareaInput, SelectInput, FormGrid } from "@/app/_components/FormField";
import { Card } from "@/app/_components/Card";

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact" />

      <Section width="sm">
        <Card padding="lg">
          <h2 className="mb-8 text-2xl font-bold text-primary">Send Us a Message</h2>

          <form className="space-y-5">
            <FormField label="Title" name="title" required>
              <SelectInput name="title" required>
                <option value="">Please select</option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Ms">Ms</option>
                <option value="Dr">Dr</option>
              </SelectInput>
            </FormField>

            <FormField label="Enquiry Type" name="enquiry-type" required>
              <SelectInput name="enquiry-type" required>
                <option value="">Please select</option>
                <option value="general">General Enquiries</option>
                <option value="membership">Membership Enquiries</option>
                <option value="website">Website &amp; Marketing Enquiries</option>
              </SelectInput>
            </FormField>

            <FormGrid>
              <FormField label="First Name" name="first-name" required>
                <TextInput name="first-name" required />
              </FormField>
              <FormField label="Last Name" name="last-name" required>
                <TextInput name="last-name" required />
              </FormField>
            </FormGrid>

            <FormGrid>
              <FormField label="Email Address" name="email" required>
                <TextInput name="email" type="email" required />
              </FormField>
              <FormField label="Phone Number" name="phone">
                <TextInput name="phone" type="tel" />
              </FormField>
            </FormGrid>

            <FormField
              label="Message"
              name="message"
              required
              hint="Please include as much information as you can, so we are able to help you as properly and as efficiently as we can."
            >
              <TextareaInput name="message" required />
            </FormField>

            <button
              type="submit"
              className="w-full rounded-lg bg-secondary px-8 py-4 text-base font-bold text-white transition-colors hover:bg-secondary-dark sm:w-auto"
            >
              Send Message
            </button>
          </form>
        </Card>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <Card>
            <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-primary">
              <svg className="h-5 w-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              General Enquiries
            </h3>
            <a href="mailto:info@civicsocietygy.co.uk" className="text-secondary hover:text-secondary-dark">
              info@civicsocietygy.co.uk
            </a>
          </Card>
          <Card>
            <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-primary">
              <svg className="h-5 w-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM3 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 019.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
              </svg>
              Membership Enquiries
            </h3>
            <a href="mailto:memberships@civicsocietygy.co.uk" className="text-secondary hover:text-secondary-dark">
              memberships@civicsocietygy.co.uk
            </a>
          </Card>
        </div>
      </Section>
    </>
  );
}
