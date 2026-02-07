import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, Star, Leaf, Wind, Shield, Award, Phone, Mail, MapPin, Menu, X } from 'lucide-react'
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

// Yadom Product Features
const features = [
  {
    icon: Leaf,
    title: 'สมุนไพรธรรมชาติ',
    description: 'ผสมผสานสมุนไพรไทยแท้ 8 ชนิด ที่คัดสรรมาอย่างดี เพื่อประสิทธิภาพสูงสุด',
  },
  {
    icon: Wind,
    title: 'หายใจสะดวก',
    description: 'ช่วยให้จมูกโล่ง หายใจคล่อง ลดอาการคัดจมูกและน้ำมูกไหลได้ทันที',
  },
  {
    icon: Shield,
    title: 'ปลอดภัย ไร้สารเคมี',
    description: 'ไม่มีสารเคมีตกค้าง ผ่านการรับรองมาตรฐาน GMP และ อย.',
  },
  {
    icon: Award,
    title: 'แบรนด์ขายดีอันดับ 1',
    description: 'คว้ารางวัลสินค้ายอดนิยมต่อเนื่อง 5 ปีซ้อน ไว้วางใจได้',
  },
]

// Customer Reviews
const testimonials = [
  {
    name: 'คุณสมชาย',
    role: 'พนักงานออฟฟิศ',
    content: 'ใช้มาหลายยี่ห้อแล้ว แต่ Yadom คือที่สุด หายใจสะดวกขึ้นจริงๆ ติดกระเป๋าไว้ตลอด',
    rating: 5,
    avatar: 'ส',
  },
  {
    name: 'คุณมานี',
    role: 'แม่บ้าน',
    content: 'ลูกชอบมาก กลิ่นหอมไม่แรงเกินไป ใช้ดีจนต้องซื้อตุนไว้ที่บ้านเลยค่ะ',
    rating: 5,
    avatar: 'ม',
  },
  {
    name: 'คุณวิชัย',
    role: 'คนขับรถ',
    content: 'ขับรถไกลๆ ต้องมีติดรถไว้เลย ช่วยให้ตื่นตัว หายใจสะดวกตลอดทาง',
    rating: 5,
    avatar: 'ว',
  },
]

// Product Benefits
const benefits = [
  '✓ สมุนไพร 100% จากธรรมชาติ',
  '✓ ไม่มีสารเคมีตกค้าง',
  '✓ ผ่าน อย. รับรองคุณภาพ',
  '✓ กลิ่นหอมสดชื่น',
  '✓ ผ่อนคลาย ลดเครียด',
  '✓ ใช้ได้ทุกวัน ปลอดภัย',
]

export default function HomepageTest() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold text-[#009689]">Yadom</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="#home" className="text-base font-medium text-[#009689]">
                หน้าแรก
              </Link>
              <Link href="#features" className="text-base font-medium text-[#0a0a0a] hover:text-[#009689] transition-colors">
                จุดเด่น
              </Link>
              <Link href="#reviews" className="text-base font-medium text-[#0a0a0a] hover:text-[#009689] transition-colors">
                รีวิว
              </Link>
              <Link href="#contact" className="text-base font-medium text-[#0a0a0a] hover:text-[#009689] transition-colors">
                ติดต่อเรา
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button 
                className="bg-[#009689] hover:bg-[#00897d] text-white font-medium px-4 py-2 rounded-md shadow-[0_1px_2px_0_rgb(0_0_0_/_0.1)]"
              >
                สั่งซื้อสินค้า
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Banner - Exact design from Figma node 5024-369 */}
      <section id="home" className="relative w-full overflow-hidden">
        <div className="relative w-full aspect-[1440/860]">
          {/* Layer 1: Gradient Background (Bottom) */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 23.5%, rgba(0,150,137,1) 100%)'
            }}
          />

          {/* Layer 2: Background Image (Middle) */}
          <Image
            src="/images/yadom/hero-banner-5024-372.png"
            alt="Yadom Herbal Inhaler Banner"
            fill
            className="object-cover object-center z-10"
            priority
            sizes="100vw"
          />

          {/* Layer 3: Text Content (Top) */}
          <div className="absolute inset-0 z-20">
            {/* Line 1: ทำไมเรา */}
            <div 
              className="absolute"
              style={{
                left: '8%',
                top: '28%',
              }}
            >
              <h1 
                className="text-white font-semibold leading-none"
                style={{
                  fontSize: 'clamp(2rem, 8vw, 8rem)',
                  fontFamily: 'Inter, sans-serif',
                  lineHeight: '1',
                  letterSpacing: '0',
                }}
              >
                ทำไมเรา
              </h1>
            </div>

            {/* Line 2: "ติดยาดม" */}
            <div 
              className="absolute"
              style={{
                left: '8%',
                top: '42%',
              }}
            >
              <h2 
                className="text-white font-semibold leading-none"
                style={{
                  fontSize: 'clamp(2rem, 8vw, 8rem)',
                  fontFamily: 'Inter, sans-serif',
                  lineHeight: '1',
                  letterSpacing: '0',
                }}
              >
                "ติดยาดม"
              </h2>
            </div>
            
            {/* Line 3: ได้ขนาดนี้? */}
            <div 
              className="absolute"
              style={{
                left: '54.6%',
                top: '56%',
              }}
            >
              <h3 
                className="text-white font-semibold leading-none"
                style={{
                  fontSize: 'clamp(2rem, 8vw, 8rem)',
                  fontFamily: 'Inter, sans-serif',
                  lineHeight: '1',
                  letterSpacing: '0',
                }}
              >
                ได้ขนาดนี้?
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-[#009689]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            <div>
              <div className="text-3xl lg:text-4xl font-bold">1M+</div>
              <div className="text-sm opacity-90 mt-1">ขวดขายแล้ว</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold">98%</div>
              <div className="text-sm opacity-90 mt-1">ลูกค้าพึงพอใจ</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold">50+</div>
              <div className="text-sm opacity-90 mt-1">ปีแห่งความเชี่ยวชาญ</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold">24/7</div>
              <div className="text-sm opacity-90 mt-1">จัดส่งทั่วไทย</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 lg:py-24 bg-[#fafafa]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="outline" className="mb-3 border-[#009689] text-[#009689]">จุดเด่น</Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0a0a0a] mb-3">
              ทำไมต้อง Yadom?
            </h2>
            <p className="text-base text-[#525252]">
              ผลิตภัณฑ์ยาดมสมุนไพรคุณภาพสูง ที่คนไทยไว้วางใจ
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {features.map((feature, index) => (
              <Card key={feature.title} className="border border-[#e5e5e5] shadow-sm hover:shadow-md transition-shadow bg-white">
                <CardHeader className="pb-3">
                  <div className="h-12 w-12 rounded-xl bg-[#009689]/10 flex items-center justify-center mb-3">
                    <feature.icon className="h-6 w-6 text-[#009689]" />
                  </div>
                  <CardTitle className="text-lg text-[#0a0a0a]">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-[#525252] leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Concept Section - From Figma node 5024-404 */}
      <section className="relative w-full overflow-hidden py-16 lg:py-24">
        {/* Background Image */}
        <Image
          src="/images/yadom/concept-bg-5024-404.png"
          alt="Yadom Concept Background"
          fill
          className="object-cover object-center z-0"
          sizes="100vw"
        />
        
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.3) 0%, rgba(0,150,137,0.2) 50%, rgba(0,150,137,0.4) 100%)'
          }}
        />
        
        {/* Content Container */}
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center">
            {/* Text 1: "ไม่รู้ตัวเลยว่า...ยาดมกลายเป็น" */}
            <h2 
              className="text-white font-semibold mb-2"
              style={{
                fontSize: 'clamp(1.75rem, 5vw, 3.75rem)',
                fontFamily: 'Inter, sans-serif',
                textShadow: '0 2px 4px rgba(0,0,0,0.1)',
              }}
            >
              ไม่รู้ตัวเลยว่า...ยาดมกลายเป็น
            </h2>
            
            {/* Text 2: "ส่วนหนึ่งของชีวิต" */}
            <h3 
              className="font-bold"
              style={{
                fontSize: 'clamp(2.5rem, 8vw, 6rem)',
                fontFamily: 'Inter, sans-serif',
                color: '#009689',
                lineHeight: '1.1',
              }}
            >
              ส่วนหนึ่งของชีวิต
            </h3>
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Product Image */}
            <div className="flex-1 w-full max-w-md">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#009689]/10 to-transparent rounded-3xl" />
                <Card className="relative border border-[#e5e5e5] shadow-sm overflow-hidden">
                  <div className="aspect-[4/3] bg-[#fafafa] flex items-center justify-center p-6">
                    <Image
                      src="/images/yadom/5024-728.png"
                      alt="Yadom Product Details"
                      width={400}
                      height={300}
                      className="object-contain"
                    />
                  </div>
                </Card>
              </div>
            </div>

            {/* Product Info */}
            <div className="flex-1">
              <Badge className="mb-3 bg-[#009689]/10 text-[#009689] border-[#009689]/20">ส่วนผสม</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0a0a0a] mb-4">
                สมุนไพรไทย 8 ชนิด
              </h2>
              <p className="text-base text-[#525252] mb-6">
                ผสมผสานสมุนไพรไทยคุณภาพสูง ที่มีสรรพคุณช่วยให้หายใจสะดวก 
                ลดอาการคัดจมูก และผ่อนคลายอย่างเป็นธรรมชาติ
              </p>

              <div className="space-y-3 mb-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center text-sm text-[#525252]">
                    <Check className="h-4 w-4 text-[#009689] mr-3 flex-shrink-0" />
                    <span>{benefit.replace('✓ ', '')}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-[#009689] hover:bg-[#00897d] text-white font-medium px-6 h-11 rounded-md shadow-[0_1px_2px_0_rgb(0_0_0_/_0.1)]">
                สั่งซื้อเลย
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="py-16 lg:py-24 bg-[#fafafa]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="outline" className="mb-3 border-[#009689] text-[#009689]">รีวิว</Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0a0a0a] mb-3">
              ลูกค้าพูดถึง Yadom
            </h2>
            <p className="text-base text-[#525252]">
              ความคิดเห็นจากลูกค้าที่ใช้จริง
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="border border-[#e5e5e5] shadow-sm bg-white">
                <CardContent className="pt-5">
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#f59e0b] text-[#f59e0b]" />
                    ))}
                  </div>
                  
                  <p className="text-[#525252] mb-4 text-sm leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-[#009689]/10 flex items-center justify-center mr-3">
                      <span className="font-semibold text-[#009689] text-sm">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <div className="font-medium text-sm text-[#0a0a0a]">{testimonial.name}</div>
                      <div className="text-xs text-[#737373]">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 bg-[#009689] text-white overflow-hidden">
            <CardContent className="py-12 px-6 lg:px-12">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="text-center lg:text-left">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                    พร้อมหายใจสะดวกขึ้นหรือยัง?
                  </h2>
                  <p className="text-base opacity-90">
                    สั่งซื้อวันนี้ รับส่วนลดพิเศษ 20% + จัดส่งฟรี
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="lg" className="bg-white text-[#009689] hover:bg-[#f5f5f5] font-medium h-11 px-6 rounded-md">
                    สั่งซื้อเลย
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="h-11 px-6 border-white/30 text-white hover:bg-white/10 rounded-md"
                  >
                    ติดต่อเรา
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 border-t border-[#e5e5e5] bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl font-semibold text-[#009689]">Yadom</span>
              </div>
              <p className="text-sm text-[#525252] mb-4">
                ยาดมสมุนไพรคุณภาพสูง ที่คนไทยไว้วางใจมากว่า 50 ปี
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-[#0a0a0a] mb-3 text-sm">เมนู</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#home" className="text-sm text-[#525252] hover:text-[#009689]">หน้าแรก</Link>
                </li>
                <li>
                  <Link href="#features" className="text-sm text-[#525252] hover:text-[#009689]">จุดเด่น</Link>
                </li>
                <li>
                  <Link href="#reviews" className="text-sm text-[#525252] hover:text-[#009689]">รีวิว</Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-[#0a0a0a] mb-3 text-sm">ติดต่อเรา</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-[#525252]">
                  <Phone className="h-4 w-4 mr-2 text-[#009689]" />
                  02-xxx-xxxx
                </li>
                <li className="flex items-center text-sm text-[#525252]">
                  <Mail className="h-4 w-4 mr-2 text-[#009689]" />
                  contact@yadom.com
                </li>
                <li className="flex items-start text-sm text-[#525252]">
                  <MapPin className="h-4 w-4 mr-2 text-[#009689] mt-0.5" />
                  กรุงเทพมหานคร
                </li>
              </ul>
            </div>

            {/* Social / Legal */}
            <div>
              <h4 className="font-semibold text-[#0a0a0a] mb-3 text-sm">ถูกต้องตามกฎหมาย</h4>
              <p className="text-xs text-[#737373] mb-3">
                เลขที่จดแจ้ง อย. xx-xxxxxxxxx
              </p>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-[#009689]" />
                <span className="text-xs text-[#525252]">ผ่าน อย. รับรอง</span>
              </div>
            </div>
          </div>

          <Separator className="mb-6 bg-[#e5e5e5]" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-[#737373]">
              © 2024 Yadom. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-xs text-[#737373] hover:text-[#009689]">นโยบายความเป็นส่วนตัว</Link>
              <Link href="#" className="text-xs text-[#737373] hover:text-[#009689]">เงื่อนไขการใช้งาน</Link>
              <Link href="#" className="text-xs text-[#737373] hover:text-[#009689]">ติดต่อเรา</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
