import PageBanner from "@/app/_components/PageBanner";

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact" />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10">
            <h2 className="mb-8 text-2xl font-bold text-primary">Send Us a Message</h2>

            <form className="space-y-5">
              <div>
                <label htmlFor="title" className="mb-1 block text-sm font-medium text-gray-700">
                  Title <span className="text-red-500">*</span>
                </label>
                <select
                  id="title"
                  required
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                >
                  <option value="">Please select</option>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Miss">Miss</option>
                  <option value="Ms">Ms</option>
                  <option value="Dr">Dr</option>
                </select>
              </div>

              <div>
                <label htmlFor="enquiry-type" className="mb-1 block text-sm font-medium text-gray-700">
                  Enquiry Type <span className="text-red-500">*</span>
                </label>
                <select
                  id="enquiry-type"
                  required
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                >
                  <option value="">Please select</option>
                  <option value="general">General Enquiries</option>
                  <option value="membership">Membership Enquiries</option>
                  <option value="website">Website &amp; Marketing Enquiries</option>
                </select>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="mb-1 block text-sm font-medium text-gray-700">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="first-name"
                    type="text"
                    required
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-900 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="mb-1 block text-sm font-medium text-gray-700">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="last-name"
                    type="text"
                    required
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-900 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-900 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-900 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={6}
                  required
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-900 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                />
                <p className="mt-1 text-xs text-gray-400">
                  Please include as much information as you can, so we are able to
                  help you as properly and as efficiently as we can.
                </p>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-secondary px-8 py-4 text-base font-bold text-white transition-colors hover:bg-secondary-dark sm:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-primary">
                <svg className="h-5 w-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                General Enquiries
              </h3>
              <a href="mailto:info@civicsocietygy.co.uk" className="text-secondary hover:text-secondary-dark">
                info@civicsocietygy.co.uk
              </a>
            </div>
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-primary">
                <svg className="h-5 w-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM3 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 019.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                </svg>
                Membership Enquiries
              </h3>
              <a href="mailto:memberships@civicsocietygy.co.uk" className="text-secondary hover:text-secondary-dark">
                memberships@civicsocietygy.co.uk
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
