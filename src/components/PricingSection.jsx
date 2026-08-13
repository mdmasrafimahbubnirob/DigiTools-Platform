

export default function PricingSection() {
  return (
    <section className="pt-15 lg:pt-30 px-4 sm:px-6 lg:px-8 mb-15 lg:mb-30">
      <div className="max-w-6xl mx-auto">

        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-500 font-medium">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

          <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Starter</h3>
              <p className="text-sm text-slate-500 mt-1">Perfect for getting started</p>

              <div className="mt-6 mb-6">
                <span className="text-4xl font-extrabold text-slate-900">$0</span>
                <span className="text-slate-500 text-sm font-medium">/Month</span>
              </div>

              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span> Access to 10 free tools
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span> Basic templates
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span> Community support
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span> 1 project per month
                </li>
              </ul>
            </div>

            <button className="btn mt-8 w-full py-3 px-4 rounded-full text-white font-semibold bg-linear-to-r from-[#4f39f6] via-[#7226f8] to-[#9514fa] hover:opacity-95 transition-opacity">
              Get Started Free
            </button>
          </div>

          <div className="relative bg-linear-to-r from-[#4f39f6] via-[#7226f8] to-[#9514fa] rounded-2xl p-8 text-white flex flex-col justify-between shadow-xl">

            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
              Most Popular
            </div>

            <div>
              <h3 className="text-xl font-bold">Pro</h3>
              <p className="text-sm text-purple-100 mt-1">Best for professionals</p>

              <div className="mt-6 mb-6">
                <span className="text-4xl font-extrabold">$29</span>
                <span className="text-purple-100 text-sm font-medium">/Month</span>
              </div>

              <ul className="space-y-3 text-sm text-purple-50">
                <li className="flex items-center gap-2">
                  <span className="font-bold">✓</span> Access to all premium tools
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold">✓</span> Unlimited templates
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold">✓</span> Priority support
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold">✓</span> Unlimited projects
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold">✓</span> Cloud sync
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold">✓</span> Advanced analytics
                </li>
              </ul>
            </div>

            <button className="btn mt-8 w-full py-3 px-4 rounded-full font-semibold bg-white text-[#7226f8] hover:bg-slate-300 transition-colors">
              Start Pro Trial
            </button>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Enterprise</h3>
              <p className="text-sm text-slate-500 mt-1">For teams and businesses</p>

              <div className="mt-6 mb-6">
                <span className="text-4xl font-extrabold text-slate-900">$99</span>
                <span className="text-slate-500 text-sm font-medium">/Month</span>
              </div>

              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span> Everything in Pro
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span> Team collaboration
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span> Custom integrations
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span> Dedicated support
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span> SLA guarantee
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span> Custom branding
                </li>
              </ul>
            </div>

            <button className="btn mt-8 w-full py-3 px-4 rounded-xl text-white font-semibold bg-linear-to-r from-[#4f39f6] via-[#7226f8] to-[#9514fa] hover:opacity-95 transition-opacity">
              Contact Sales
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}