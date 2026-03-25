import { Zap, Shield, BarChart3, Users, Globe, Sparkles } from 'lucide-react'
const FEATURES = [
  { icon: Zap, title: '__FEATURE_1_TITLE__', description: '__FEATURE_1_DESC__' },
  { icon: Shield, title: '__FEATURE_2_TITLE__', description: '__FEATURE_2_DESC__' },
  { icon: BarChart3, title: '__FEATURE_3_TITLE__', description: '__FEATURE_3_DESC__' },
  { icon: Users, title: '__FEATURE_4_TITLE__', description: '__FEATURE_4_DESC__' },
  { icon: Globe, title: '__FEATURE_5_TITLE__', description: '__FEATURE_5_DESC__' },
  { icon: Sparkles, title: '__FEATURE_6_TITLE__', description: '__FEATURE_6_DESC__' },
]
export function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Everything you need</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <Icon size={24} className="text-[__PRIMARY_COLOR__] mb-3" strokeWidth={1.5} />
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-gray-500 text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
