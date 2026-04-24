#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

const manifest = JSON.parse(process.argv[2] || '{}')
const tokens = {
  '__PROJECT_NAME__': manifest.name || 'My Project',
  '__PROJECT_SLUG__': (manifest.name || 'my-project').toLowerCase().replace(/\s+/g, '-'),
  '__TAGLINE__': manifest.tagline || manifest.description || 'The best tool for your needs',
  '__SUBTITLE__': manifest.subtitle || manifest.description || 'Start building today.',
  '__CTA_TEXT__': manifest.ctaText || 'Get early access',
  '__PRIMARY_COLOR__': manifest.primaryColor || '#2563EB',
  '__CATEGORY__': manifest.category || 'Now in Beta',
  '__FEATURE_1_TITLE__': (manifest.features?.[0]?.title) || 'Fast',
  '__FEATURE_1_DESC__': (manifest.features?.[0]?.description) || 'Built for speed',
  '__FEATURE_2_TITLE__': (manifest.features?.[1]?.title) || 'Secure',
  '__FEATURE_2_DESC__': (manifest.features?.[1]?.description) || 'Enterprise-grade security',
  '__FEATURE_3_TITLE__': (manifest.features?.[2]?.title) || 'Scalable',
  '__FEATURE_3_DESC__': (manifest.features?.[2]?.description) || 'Grows with your team',
  '__FEATURE_4_TITLE__': (manifest.features?.[3]?.title) || 'Analytics',
  '__FEATURE_4_DESC__': (manifest.features?.[3]?.description) || 'Insights at a glance',
  '__FEATURE_5_TITLE__': (manifest.features?.[4]?.title) || 'Integrations',
  '__FEATURE_5_DESC__': (manifest.features?.[4]?.description) || 'Works with your stack',
  '__FEATURE_6_TITLE__': (manifest.features?.[5]?.title) || 'Support',
  '__FEATURE_6_DESC__': (manifest.features?.[5]?.description) || 'We have your back',
  '__PRICE_STARTER__': manifest.priceStarter || '$0',
  '__PRICE_PRO__': manifest.pricePro || '$29',
  '__STARTER_F1__': 'Up to 3 projects',
  '__STARTER_F2__': 'Basic analytics',
  '__STARTER_F3__': 'Email support',
  '__PRO_F1__': 'Unlimited projects',
  '__PRO_F2__': 'Advanced analytics',
  '__PRO_F3__': 'Priority support',
  '__PRO_F4__': 'Custom integrations',
  '__ENT_F1__': 'Unlimited everything',
  '__ENT_F2__': 'Dedicated support',
  '__ENT_F3__': 'SLA guarantee',
}

function replaceInFile(filePath) {
  if (!fs.existsSync(filePath)) return
  let content = fs.readFileSync(filePath, 'utf8')
  for (const [token, value] of Object.entries(tokens)) {
    content = content.replaceAll(token, value)
  }
  fs.writeFileSync(filePath, content)
}

function walkDir(dir) {
  if (!fs.existsSync(dir)) return
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory() && !['node_modules', '.next', '.git'].includes(entry.name)) {
      walkDir(fullPath)
    } else if (entry.isFile() && /\.(ts|tsx|js|jsx|json|css|md|env\.example)$/.test(entry.name)) {
      replaceInFile(fullPath)
    }
  }
}

walkDir(process.cwd())

// Write .env.local
const envContent = `RESEND_API_KEY=\nRESEND_AUDIENCE_ID=\nNEXT_PUBLIC_APP_URL=https://yourproject.vercel.app\n`
fs.writeFileSync('.env.local', envContent)

console.log('✅ Template customized for:', tokens['__PROJECT_NAME__'])
