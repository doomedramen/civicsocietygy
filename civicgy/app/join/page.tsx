import PageBanner from "@/app/_components/PageBanner";

export default function JoinPage() {
  return (
    <>
      <PageBanner title="Become a Member" />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12 rounded-xl bg-cream p-8 sm:p-10">
            <h2 className="mb-6 text-2xl font-bold text-primary">Membership Details</h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Membership costs just <strong>&pound;10 a year</strong>. You can pay
              by cheque or by BACS &mdash; whichever suits you best. Details for
              both are below.
            </p>

            <div className="mt-8 space-y-6">
              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <h3 className="mb-2 text-lg font-bold text-primary">By Cheque</h3>
                <p className="text-gray-600">
                  The cheque must be payable to <strong>Civic Society of Great Yarmouth</strong>.
                  It can be posted to our Treasurer:
                </p>
                <address className="mt-3 not-italic text-gray-600">
                  Susan Page<br />
                  Flat 1, 84 North Denes Road<br />
                  Great Yarmouth<br />
                  NR30 4LW
                </address>
                <p className="mt-3 text-sm text-gray-500">
                  Please make sure your name is attached in the envelope so we know
                  who it was who paid. Cheques can also be handed in to our
                  Chairman/Treasurer at our events.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <h3 className="mb-2 text-lg font-bold text-primary">By BACS</h3>
                <p className="text-gray-600">
                  Pay by BACS to Civic Society of Great Yarmouth:
                </p>
                <div className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  <div>
                    <p className="text-xs font-semibold uppercase text-gray-400">Sort Code</p>
                    <p className="text-lg font-mono font-bold text-primary">30-99-97</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-gray-400">Account Number</p>
                    <p className="text-lg font-mono font-bold text-primary">31018468</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10">
            <h2 className="mb-8 text-2xl font-bold text-primary">Membership Application Form</h2>

            <form className="space-y-6">
              <fieldset>
                <legend className="mb-4 text-lg font-semibold text-primary">
                  Step 1: Your Details
                </legend>
                <div className="space-y-4">
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

                  <div>
                    <label htmlFor="address-line1" className="mb-1 block text-sm font-medium text-gray-700">
                      Address Line 1 <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="address-line1"
                      type="text"
                      required
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-900 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div>
                      <label htmlFor="city" className="mb-1 block text-sm font-medium text-gray-700">
                        City <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="city"
                        type="text"
                        required
                        className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-900 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="county" className="mb-1 block text-sm font-medium text-gray-700">
                        County
                      </label>
                      <input
                        id="county"
                        type="text"
                        className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-900 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="postcode" className="mb-1 block text-sm font-medium text-gray-700">
                        Postcode <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="postcode"
                        type="text"
                        required
                        className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-900 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                      />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-900 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="mobile" className="mb-1 block text-sm font-medium text-gray-700">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="mobile"
                        type="tel"
                        required
                        className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-900 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                      />
                    </div>
                  </div>
                </div>
              </fieldset>

              <fieldset>
                <legend className="mb-4 text-lg font-semibold text-primary">
                  Step 2: Charity Gift Aid Declaration
                </legend>
                <div className="rounded-lg bg-cream p-6">
                  <p className="mb-4 text-sm font-medium text-secondary">
                    Boost your donation by 25p of Gift Aid for every &pound;1 you donate.
                  </p>
                  <p className="mb-4 text-sm text-gray-600">
                    Gift Aid is reclaimed by the charity from the tax you pay for
                    the current tax year. Your address is needed to identify you as a
                    current UK taxpayer.
                  </p>
                  <div className="space-y-3">
                    <label className="flex items-start gap-3">
                      <input
                        type="radio"
                        name="gift-aid"
                        value="yes"
                        className="mt-1 h-4 w-4 text-secondary focus:ring-secondary"
                      />
                      <span className="text-sm text-gray-700">
                        Yes, I want my donation to be Gift Aided. I am a UK taxpayer
                        and understand that if I pay less Income Tax and/or Capital
                        Gains Tax in the current tax year than the amount of Gift Aid
                        claimed on all my donations it is my responsibility to pay
                        any difference.
                      </span>
                    </label>
                    <label className="flex items-start gap-3">
                      <input
                        type="radio"
                        name="gift-aid"
                        value="no"
                        className="mt-1 h-4 w-4 text-secondary focus:ring-secondary"
                      />
                      <span className="text-sm text-gray-700">
                        No, I do not want my donation to be Gift Aided.
                      </span>
                    </label>
                  </div>
                  <p className="mt-6 text-xs leading-relaxed text-gray-500">
                    Please notify the Civic Society of Great Yarmouth if you: want
                    to cancel this declaration, change your name or home address, or
                    no longer pay sufficient tax on your income and/or capital gains.
                    If you pay Income Tax at the higher or additional rate and want
                    to receive the additional tax relief due to you, you must include
                    all your Gift Aid donations on your Self-Assessment tax return or
                    ask HM Revenue and Customs to adjust your tax code.
                  </p>
                </div>
              </fieldset>

              <button
                type="submit"
                className="w-full rounded-lg bg-secondary px-8 py-4 text-base font-bold text-white transition-colors hover:bg-secondary-dark sm:w-auto"
              >
                Submit Membership Form
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
