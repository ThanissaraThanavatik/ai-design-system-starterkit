import Link from 'next/link'
import { ArrowRight, Check, Star, Zap, Shield, Users, TrendingUp, Award, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance ensuring your applications run at peak efficiency with minimal load times.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security protocols protecting your data with advanced encryption and compliance standards.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Growth',
    description: 'Built to scale with your business, from startup to enterprise without compromising performance.',
  },
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Recognized industry leader with multiple awards for innovation and customer satisfaction.',
  },
]

const stats = [
  { value: '10K+', label: 'Active Users' },
  { value: '99.9%', label: 'Uptime' },
  { value: '24/7', label: 'Support' },
  { value: '150+', label: 'Countries' },
]

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO, TechVentures',
    content: 'This platform transformed how we build products. The speed and reliability are unmatched in the industry.',
    rating: 5,
  },
  {
    name: 'Marcus Johnson',
    role: 'Product Lead, InnovateCorp',
    content: 'Incredible developer experience. We shipped our product 3x faster than with our previous stack.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder, StartupX',
    content: 'The best investment we made for our startup. Customer support is phenomenal and the features are top-notch.',
    rating: 5,
  },
]

const pricingPlans = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    description: 'Perfect for side projects and learning',
    features: ['5 Projects', 'Basic Analytics', 'Community Support', '1GB Storage'],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: 'per month',
    description: 'For professional developers and small teams',
    features: ['Unlimited Projects', 'Advanced Analytics', 'Priority Support', '100GB Storage', 'Custom Domains', 'API Access'],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'tailored',
    description: 'For large organizations with specific needs',
    features: ['Everything in Pro', 'Dedicated Support', 'SLA Guarantee', 'Unlimited Storage', 'Custom Integrations', 'On-premise Option'],
    cta: 'Contact Sales',
    popular: false,
  },
]

export default function HomepageTest() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 text-center lg:text-left">
              <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 inline-block"></span>
                Now with AI-powered features
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
                Build faster with
                <span className="text-primary block mt-2">intelligent tools</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
                The complete platform for building, deploying, and scaling modern applications. 
                Trusted by thousands of developers worldwide.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Button size="lg" className="text-lg h-14 px-8">
                  Start Building Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg h-14 px-8">
                  View Documentation
                </Button>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-primary mr-2" />
                  No credit card required
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-primary mr-2" />
                  Free forever plan
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-primary mr-2" />
                  Cancel anytime
                </div>
              </div>
            </div>

            <div className="flex-1 w-full max-w-lg lg:max-w-none">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-primary/10 rounded-3xl blur-3xl" />
                <Card className="relative border-0 shadow-2xl overflow-hidden">
                  <div className="aspect-[4/3] bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="h-32 w-32 rounded-3xl bg-primary/20 flex items-center justify-center mx-auto mb-6 ring-8 ring-primary/10">
                        <Zap className="h-16 w-16 text-primary" />
                      </div>
                      <p className="text-muted-foreground font-medium">Interactive Demo</p>
                      <p className="text-sm text-muted-foreground mt-2">Experience the power</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-12 border-y bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground mb-8">Trusted by innovative teams worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-50">
            {['Acme Corp', 'GlobalTech', 'InnovateLab', 'FutureScale', 'CloudNine'].map((company) => (
              <div key={company} className="text-lg font-semibold text-muted-foreground">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">Features</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Everything you need to succeed</h2>
            <p className="text-lg text-muted-foreground">
              Powerful features that help you build, deploy, and scale with confidence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <Card key={feature.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Loved by developers</h2>
            <p className="text-lg text-muted-foreground">
              See what our community has to say about their experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">"{testimonial.content}"</p>
                  
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <span className="font-bold text-primary text-lg">{testimonial.name[0]}</span>
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">Pricing</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Simple, transparent pricing</h2>
            <p className="text-lg text-muted-foreground">
              Choose the plan that fits your needs. No hidden fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <Card 
                key={plan.name} 
                className={`border-0 shadow-lg relative ${plan.popular ? 'ring-2 ring-primary' : ''}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? 'default' : 'outline'}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 bg-primary text-primary-foreground overflow-hidden">
            <CardContent className="py-16 px-8 lg:px-16">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to get started?</h2>
                  
                  <p className="text-lg opacity-90 max-w-xl">
                    Join thousands of developers building the future. Start for free today.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" variant="secondary" className="text-lg px-8">
                    Start Building Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="text-lg px-8 border-primary-foreground/20 hover:bg-primary-foreground/10"
                  >
                    Contact Sales
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">B</span>
              </div>
              <span className="font-bold text-xl">Brand</span>
            </div>
            
            <p className="text-sm text-muted-foreground">
              © 2024 Brand. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Terms</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
