const TIERS = [
  { name: 'Starter', price: '__PRICE_STARTER__', description: 'For individuals', features: ['__STARTER_F1__', '__STARTER_F2__', '__STARTER_F3__'], cta: 'Get started', highlighted: false },
  { name: 'Pro', price: '__PRICE_PRO__', description: 'For growing teams', features: ['__PRO_F1__', '__PRO_F2__', '__PRO_F3__', '__PRO_F4__'], cta: '__CTA_TEXT__', highlighted: true },
  { name: 'Enterprise', price: 'Custom', description: 'For large orgs', features: ['__ENT_F1__', '__ENT_F2__', '__ENT_F3__'], cta: 'Contact us', highlighted: false },
]
export function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Simple pricing</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {TIERS.map((tier) => (
            <div key={tier.name} className={`p-6 rounded-xl border-2 ${tier.highlighted ? 'border-[__PRIMARY_COLOR__] shadow-lg' : 'border-gray-100'}`}>
              <h3 className="font-bold text-lg mb-1">{tier.name}</h3>
              <p className="text-gray-500 text-sm mb-4">{tier.description}</p>
              <p className="text-4xl font-bold mb-6">{tier.price}<span className="text-lg font-normal text-gray-400">/mo</span></p>
              <ul className="space-y-2 mb-6">
                {tier.features.map(f => <li key={f} className="text-sm text-gray-600 flex gap-2"><span className="text-green-500">✓</span>{f}</li>)}
              </ul>
              <a href="#waitlist" className={`block text-center py-2 rounded-lg font-medium text-sm transition ${tier.highlighted ? 'bg-[__PRIMARY_COLOR__] text-white hover:opacity-90' : 'border border-gray-200 hover:bg-gray-50'}`}>{tier.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
