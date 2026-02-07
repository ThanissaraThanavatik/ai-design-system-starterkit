import Link from 'next/link'
import { ArrowRight, Check, Star, Zap, Shield, Users, TrendingUp, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const features = [
  {
    icon: Zap,
    title: 'ประสิทธิภาพสูง',
    description: 'เว็บไซต์ที่โหลดเร็ว ตอบสนองทันที ให้ผู้ใช้งานได้รับประสบการณ์ที่ดีที่สุด',
  },
  {
    icon: Shield,
    title: 'ความปลอดภัย',
    description: 'ระบบรักษาความปลอดภัยระดับสูง ปกป้องข้อมูลและธุรกิจของคุณ',
  },
  {
    icon: TrendingUp,
    title: 'เติบโตได้จริง',
    description: 'ออกแบบมาเพื่อสนับสนุนการเติบโตของธุรกิจอย่างยั่งยืน',
  },
  {
    icon: Award,
    title: 'คุณภาพระดับมืออาชีพ',
    description: 'ทีมงานผู้เชี่ยวชาญพร้อมส่งมอบงานที่มีคุณภาพสูงสุด',
  },
]

const stats = [
  { value: '1000+', label: 'โปรเจคสำเร็จ' },
  { value: '99%', label: 'ความพึงพอใจ' },
  { value: '24/7', label: 'ซัพพอร์ต' },
  { value: '15+', label: 'ปีประสบการณ์' },
]

const testimonials = [
  {
    name: 'คุณวิชัย',
    role: 'CEO, TechCorp',
    content: 'ทีมงานมืออาชีพมาก ส่งงานตรงเวลา และคุณภาพเกินคาด',
    rating: 5,
  },
  {
    name: 'คุณนภา',
    role: 'Marketing Director',
    content: 'เว็บไซต์ช่วยให้ยอดขายเพิ่มขึ้น 200% ภายใน 3 เดือน',
    rating: 5,
  },
  {
    name: 'คุณสมศักดิ์',
    role: 'Founder',
    content: 'บริการดีเยี่ยม ดูแลลูกค้าตลอดการใช้งาน แนะนำเลย',
    rating: 5,
  },
]

export default function SiteHomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium mb-6">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                ยินดีต้อนรับสู่ Business
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                พัฒนาธุรกิจของคุณ
                <br />
                <span className="text-primary">ให้เติบโต</span>
                <br />
                อย่างยั่งยืน
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
                เราคือพันธมิตรที่จะช่วยธุรกิจของคุณเติบโตในโลกดิจิทัล 
                ด้วยโซลูชันที่ครบครันและทีมงานมืออาชีพ
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="text-lg">
                  เริ่มต้นเลย
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  ดูผลงาน
                </Button>
              </div>

              <div className="mt-8 flex items-center justify-center lg:justify-start space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-primary mr-1" />
                  ฟรีคอนซัลต์
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-primary mr-1" />
                  รับประกันผลงาน
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-primary mr-1" />
                  ซัพพอร์ตตลอดชีพ
                </div>
              </div>
            </div>

            <div className="flex-1 w-full max-w-lg lg:max-w-none">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/0 rounded-3xl blur-3xl" />
                <div className="relative bg-card border rounded-2xl shadow-2xl overflow-hidden">
                  <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="h-24 w-24 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <span className="text-4xl">💼</span>
                      </div>
                      <p className="text-muted-foreground">Business Solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">ทำไมต้องเลือกเรา?</h2>
            <p className="text-lg text-muted-foreground">
              เรามุ่งมั่นพัฒนาโซลูชันที่ตอบโจทย์ธุรกิจของคุณ 
              ด้วยคุณสมบัติที่ครบครันและทันสมัย
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            พร้อมที่จะพัฒนาธุรกิจของคุณ?
          </h2>
          
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            ติดต่อเราวันนี้เพื่อรับคำปรึกษาฟรี 
            และเริ่มต้นการเติบโตที่ยั่งยืนสำหรับธุรกิจของคุณ
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg">
              ติดต่อเรา
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg border-primary-foreground/20 hover:bg-primary-foreground/10">
              ดูแพ็คเกจ
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">ลูกค้าของเราพูดอย่างไร?</h2>
            <p className="text-lg text-muted-foreground">
              ฟังความคิดเห็นจากลูกค้าที่ไว้วางใจให้เราดูแลธุรกิจของพวกเขา
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
                  
                  <p className="text-muted-foreground mb-6">"{testimonial.content}"</p>
                  
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <span className="font-semibold text-primary">{testimonial.name[0]}</span>
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
    </div>
  )
}
