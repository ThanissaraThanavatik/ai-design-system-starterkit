import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, Star, Leaf, Wind, Shield, Award, Phone, Mail, MapPin, Menu, X, Truck, BookOpen, AlarmClock, BatteryCharging, Heart, Quote, Send, ShoppingCart } from 'lucide-react'
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

      {/* Concept Section - From Figma node 5018:5782 */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: '732px' }}>
        {/* Background Image */}
        <Image
          src="/images/yadom/concept-bg-5024-404.png"
          alt="Yadom Concept Background"
          fill
          className="object-cover object-center z-0"
          sizes="100vw"
        />

        {/* White fade from top (Figma: gradient stops transparent→white, direction top) */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 50%)' }}
        />

        {/* White fade from bottom (Figma: gradient stops transparent→white, direction bottom) */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 50%)' }}
        />

        {/* Content: pinned bottom-left — Figma primaryAxisAlignItems: MAX, paddingLeft 144, paddingBottom 96 */}
        <div
          className="absolute inset-0 z-20 flex flex-col justify-end"
          style={{ paddingLeft: '144px', paddingRight: '144px', paddingBottom: '96px' }}
        >
          <div className="flex flex-col" style={{ gap: '24px' }}>
            {/* Text 1: Inter SemiBold 60px, white */}
            <h2
              className="text-white font-semibold leading-none"
              style={{
                fontSize: 'clamp(1.75rem, 4.17vw, 60px)',
                fontFamily: 'Inter, sans-serif',
                lineHeight: '1',
              }}
            >
              ไม่รู้ตัวเลยว่า...ยาดมกลายเป็น
            </h2>

            {/* Text 2: Inter SemiBold 72px, teal #009689 */}
            <h3
              className="font-semibold leading-none"
              style={{
                fontSize: 'clamp(2rem, 5vw, 72px)',
                fontFamily: 'Inter, sans-serif',
                color: '#009689',
                lineHeight: '1',
              }}
            >
              ส่วนหนึ่งของชีวิต
            </h3>
          </div>
        </div>
      </section>

      {/* Why You Use Our Product - From Figma node 5020:248 */}
      <section id="why-use" className="bg-white py-16 lg:py-24 px-4 lg:px-36">
        <div className="max-w-[1152px] mx-auto flex flex-col items-center gap-10">

          {/* Title Block — vertical stack, 24px gap, centered */}
          <div className="w-full flex flex-col items-center gap-6">
            <h2
              className="w-full text-6xl font-semibold text-center leading-none"
              style={{ color: '#009689', fontFamily: 'Inter, sans-serif', lineHeight: '60px' }}
            >
              ยาดม = ของคู่ใจไลฟ์สไตล์
            </h2>
            <p
              className="w-full text-2xl font-medium text-center"
              style={{ color: '#737373', fontFamily: 'Inter, sans-serif', lineHeight: '32px' }}
            >
              พกติดตัวไปทุกที่ พร้อมช่วยให้คุณ รีเฟรชตัวเอง ได้ทุกสถานการณ์
            </p>
          </div>

          {/* Row 1 — 3 cards, horizontal, 40px gap */}
          <div className="w-full flex flex-col md:flex-row gap-10">
            {/* Card 1 — รถติด (truck-02) */}
            <div className="flex-1 bg-white border border-[#E5E5E5] rounded-2xl p-6 flex flex-col items-center gap-4 shadow-md">
              <div className="w-16 h-16 bg-[#7ECFBD] rounded-2xl flex items-center justify-center shrink-0">
                <Truck className="w-12 h-12 text-white" strokeWidth={2} />
              </div>
              <h3
                className="w-full text-2xl font-semibold text-center"
                style={{ color: '#1E293A', fontFamily: 'Inter, sans-serif', lineHeight: '32px' }}
              >
                รถติด
              </h3>
              <p
                className="text-base font-normal text-center"
                style={{ color: '#636E72', fontFamily: 'Inter, sans-serif', lineHeight: '24px' }}
              >
                เปิดฝายาดมอย่าง ระมัดระวัง
              </p>
            </div>

            {/* Card 2 — เรียนหนัก (book-open-01) */}
            <div className="flex-1 bg-white border border-[#E5E5E5] rounded-2xl p-6 flex flex-col items-center gap-4 shadow-md">
              <div className="w-16 h-16 bg-[#7ECFBD] rounded-2xl flex items-center justify-center shrink-0">
                <BookOpen className="w-12 h-12 text-white" strokeWidth={2} />
              </div>
              <h3
                className="w-full text-2xl font-semibold text-center"
                style={{ color: '#1E293A', fontFamily: 'Inter, sans-serif', lineHeight: '32px' }}
              >
                เรียนหนัก
              </h3>
              <p
                className="text-base font-normal text-center"
                style={{ color: '#636E72', fontFamily: 'Inter, sans-serif', lineHeight: '24px' }}
              >
                อ่านหนังสือยาว ๆ สมองงง
              </p>
            </div>

            {/* Card 3 — ทำงานเครียด (leaf) */}
            <div className="flex-1 bg-white border border-[#E5E5E5] rounded-2xl p-6 flex flex-col items-center gap-4 shadow-md">
              <div className="w-16 h-16 bg-[#7ECFBD] rounded-2xl flex items-center justify-center shrink-0">
                <Leaf className="w-12 h-12 text-white" strokeWidth={2} />
              </div>
              <h3
                className="w-full text-2xl font-semibold text-center"
                style={{ color: '#1E293A', fontFamily: 'Inter, sans-serif', lineHeight: '32px' }}
              >
                ทำงานเครียด
              </h3>
              <p
                className="text-base font-normal text-center"
                style={{ color: '#636E72', fontFamily: 'Inter, sans-serif', lineHeight: '24px' }}
              >
                พร้อมทำงานหรือ เดินทางต่อ
              </p>
            </div>
          </div>

          {/* Row 2 — 3 cards, horizontal, 40px gap */}
          <div className="w-full flex flex-col md:flex-row gap-10">
            {/* Card 4 — ง่วงระหว่างวัน (clock-snooze) */}
            <div className="flex-1 bg-white border border-[#E5E5E5] rounded-2xl p-6 flex flex-col items-center gap-4 shadow-md">
              <div className="w-16 h-16 bg-[#7ECFBD] rounded-2xl flex items-center justify-center shrink-0">
                <AlarmClock className="w-12 h-12 text-white" strokeWidth={2} />
              </div>
              <h3
                className="w-full text-2xl font-semibold text-center"
                style={{ color: '#1E293A', fontFamily: 'Inter, sans-serif', lineHeight: '32px' }}
              >
                ง่วงระหว่างวัน
              </h3>
              <p
                className="text-base font-normal text-center"
                style={{ color: '#636E72', fontFamily: 'Inter, sans-serif', lineHeight: '24px' }}
              >
                ชั่วโมงบ่าย ๆ ง่วงมาก ๆ
              </p>
            </div>

            {/* Card 5 — ต้องการพักสมอง (battery-charging-01) */}
            <div className="flex-1 bg-white border border-[#E5E5E5] rounded-2xl p-6 flex flex-col items-center gap-4 shadow-md">
              <div className="w-16 h-16 bg-[#7ECFBD] rounded-2xl flex items-center justify-center shrink-0">
                <BatteryCharging className="w-12 h-12 text-white" strokeWidth={2} />
              </div>
              <h3
                className="w-full text-2xl font-semibold text-center"
                style={{ color: '#1E293A', fontFamily: 'Inter, sans-serif', lineHeight: '32px' }}
              >
                ต้องการพักสมอง
              </h3>
              <p
                className="text-base font-normal text-center"
                style={{ color: '#636E72', fontFamily: 'Inter, sans-serif', lineHeight: '24px' }}
              >
                Break เบา ๆ ชาร์จพลัง
              </p>
            </div>

            {/* Card 6 — แค่อยากสูด (annotation-heart) */}
            <div className="flex-1 bg-white border border-[#E5E5E5] rounded-2xl p-6 flex flex-col items-center gap-4 shadow-md">
              <div className="w-16 h-16 bg-[#7ECFBD] rounded-2xl flex items-center justify-center shrink-0">
                <Heart className="w-12 h-12 text-white" strokeWidth={2} />
              </div>
              <h3
                className="w-full text-2xl font-semibold text-center"
                style={{ color: '#1E293A', fontFamily: 'Inter, sans-serif', lineHeight: '32px' }}
              >
                แค่อยากสูด
              </h3>
              <p
                className="text-base font-normal text-center"
                style={{ color: '#636E72', fontFamily: 'Inter, sans-serif', lineHeight: '24px' }}
              >
                ไม่มีเหตุผล แค่ชอบ!
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Our Products Section - Exact Figma Design (Node 5021-220) */}
      <section className="w-full bg-[#f2fbf9] py-24 px-4 sm:px-6 lg:px-36">
        {/* Title Block */}
        <div className="flex flex-col gap-6 mb-10 max-w-[1152px] mx-auto">
          <h2
            className="text-center"
            style={{
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(2rem, 5vw, 60px)',
              lineHeight: '1',
              color: '#009689',
            }}
          >
            สินค้าของเรา
          </h2>
          <p
            className="text-center"
            style={{
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              fontWeight: 500,
              fontSize: 'clamp(1rem, 2vw, 24px)',
              lineHeight: '1.5',
              color: '#636e72',
            }}
          >
            เลือกยาดมที่เหมาะกับไลฟ์สไตล์ของคุณ
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1152px] mx-auto">
          {/* Product Card 1: Classic Bottle */}
          <div className="bg-white rounded-lg overflow-hidden shadow-[0_2px_4px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-xl transition-shadow duration-300">
            {/* Product Image */}
            <div className="relative w-full aspect-[270/256] bg-gradient-to-br from-teal-200/20 to-orange-200/20 overflow-hidden">
              <Image
                src="/images/yadom/products/product-1-classic.png"
                alt="ยาดมขวดคลาสสิก"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/5" />
            </div>

            {/* Product Info */}
            <div className="p-6 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h3
                  className="font-semibold"
                  style={{
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    fontSize: '24px',
                    color: '#2d3436',
                  }}
                >
                  ยาดมขวดคลาสสิก
                </h3>
                <p
                  className="text-base"
                  style={{
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    color: '#636e72',
                  }}
                >
                  กลิ่นหอมสดชื่น สูตรดั้งเดิม
                </p>
              </div>

              {/* Price & Button */}
              <div className="flex items-center justify-between">
                <span
                  className="font-semibold"
                  style={{
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    fontSize: '30px',
                    color: '#009689',
                  }}
                >
                  ฿59
                </span>
                <button
                  className="flex items-center gap-2 bg-[#009689] hover:bg-[#00897d] text-white py-2 px-4 rounded-2xl transition-colors shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                  style={{
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span className="text-base font-semibold">สั่งซื้อ</span>
                </button>
              </div>
            </div>
          </div>

          {/* Product Card 2: Pocket Size */}
          <div className="bg-white rounded-lg overflow-hidden shadow-[0_2px_4px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-xl transition-shadow duration-300">
            {/* Product Image */}
            <div className="relative w-full aspect-[270/256] bg-gradient-to-br from-teal-200/20 to-orange-200/20 overflow-hidden">
              <Image
                src="/images/yadom/products/product-2-pocket.png"
                alt="ยาดมพกพา"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/5" />
            </div>

            {/* Product Info */}
            <div className="p-6 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h3
                  className="font-semibold"
                  style={{
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    fontSize: '24px',
                    color: '#2d3436',
                  }}
                >
                  ยาดมพกพา
                </h3>
                <p
                  className="text-base"
                  style={{
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    color: '#636e72',
                  }}
                >
                  ขนาดพกพา ใส่กระเป๋าได้
                </p>
              </div>

              {/* Price & Button */}
              <div className="flex items-center justify-between">
                <span
                  className="font-semibold"
                  style={{
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    fontSize: '30px',
                    color: '#009689',
                  }}
                >
                  ฿39
                </span>
                <button
                  className="flex items-center gap-2 bg-[#009689] hover:bg-[#00897d] text-white py-2 px-4 rounded-2xl transition-colors shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                  style={{
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span className="text-base font-semibold">สั่งซื้อ</span>
                </button>
              </div>
            </div>
          </div>

          {/* Product Card 3: Premium */}
          <div className="bg-white rounded-lg overflow-hidden shadow-[0_2px_4px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-xl transition-shadow duration-300">
            {/* Product Image */}
            <div className="relative w-full aspect-[270/256] bg-gradient-to-br from-teal-200/20 to-orange-200/20 overflow-hidden">
              <Image
                src="/images/yadom/products/product-3-premium.png"
                alt="ยาดมพรีเมียม"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/5" />
            </div>

            {/* Product Info */}
            <div className="p-6 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h3
                  className="font-semibold"
                  style={{
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    fontSize: '24px',
                    color: '#2d3436',
                  }}
                >
                  ยาดมพรีเมียม
                </h3>
                <p
                  className="text-base"
                  style={{
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    color: '#636e72',
                  }}
                >
                  สูตรพิเศษ ขัดเกลา
                </p>
              </div>

              {/* Price & Button */}
              <div className="flex items-center justify-between">
                <span
                  className="font-semibold"
                  style={{
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    fontSize: '30px',
                    color: '#009689',
                  }}
                >
                  ฿99
                </span>
                <button
                  className="flex items-center gap-2 bg-[#009689] hover:bg-[#00897d] text-white py-2 px-4 rounded-2xl transition-colors shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                  style={{
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span className="text-base font-semibold">สั่งซื้อ</span>
                </button>
              </div>
            </div>
          </div>

          {/* Product Card 4: Gift Set */}
          <div className="bg-white rounded-lg overflow-hidden shadow-[0_2px_4px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-xl transition-shadow duration-300">
            {/* Product Image */}
            <div className="relative w-full aspect-[270/256] bg-gradient-to-br from-teal-200/20 to-orange-200/20 overflow-hidden">
              <Image
                src="/images/yadom/products/product-4-gift.png"
                alt="ชุดของขวัญ"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/5" />
            </div>

            {/* Product Info */}
            <div className="p-6 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h3
                  className="font-semibold"
                  style={{
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    fontSize: '24px',
                    color: '#2d3436',
                  }}
                >
                  ชุดของขวัญ
                </h3>
                <p
                  className="text-base"
                  style={{
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    color: '#636e72',
                  }}
                >
                  แพ็คเกจพรีเมียม
                </p>
              </div>

              {/* Price & Button */}
              <div className="flex items-center justify-between">
                <span
                  className="font-semibold"
                  style={{
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    fontSize: '30px',
                    color: '#009689',
                  }}
                >
                  ฿199
                </span>
                <button
                  className="flex items-center gap-2 bg-[#009689] hover:bg-[#00897d] text-white py-2 px-4 rounded-2xl transition-colors shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                  style={{
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  }}
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span className="text-base font-semibold">สั่งซื้อ</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Enhanced Design */}
      <section id="reviews" className="py-20 lg:py-28 bg-gradient-to-b from-[#fafafa] to-white relative overflow-hidden">
        {/* Subtle decorative leaf pattern */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#009689] blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#009689] blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#009689]/30"></div>
              <Badge
                variant="outline"
                className="border-[#009689]/30 text-[#009689] bg-[#009689]/5 px-4 py-1.5 rounded-full text-sm font-medium"
              >
                รีวิว
              </Badge>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#009689]/30"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a0a0a] mb-4 tracking-tight">
              ลูกค้าพูดถึง Yadom
            </h2>
            <p className="text-lg text-[#525252] leading-relaxed">
              ความคิดเห็นจากลูกค้าที่ใช้จริง
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.name}
                className="group border border-[#e5e5e5]/60 bg-white rounded-2xl p-6 lg:p-8 hover:shadow-xl hover:shadow-[#009689]/5 hover:border-[#009689]/20 transition-all duration-300 relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Decorative accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#009689]/5 to-transparent rounded-bl-full transition-transform duration-500 group-hover:scale-150"></div>

                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Quote className="h-12 w-12 text-[#009689]" fill="currentColor" />
                </div>

                <CardContent className="p-0 relative z-10">
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-[#f59e0b] text-[#f59e0b] drop-shadow-sm"
                        style={{ animationDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>

                  {/* Review Content */}
                  <p className="text-[#525252] mb-6 text-base leading-relaxed font-medium">
                    "{testimonial.content}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#009689]/15 to-[#009689]/5 flex items-center justify-center ring-2 ring-white shadow-sm">
                      <span className="font-bold text-[#009689] text-base">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-[#0a0a0a] text-base">{testimonial.name}</div>
                      <div className="text-sm text-[#737373] mt-0.5">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-[#009689]" />
              <span className="text-sm text-[#737373]">รีวิวจริง 100%</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-[#e5e5e5]"></div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-[#f59e0b] text-[#f59e0b]" />
              <span className="text-sm text-[#737373]">เรตติ้งเฉลี่ย 4.9/5</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-[#e5e5e5]"></div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#737373]">จากลูกค้ากว่า 10,000 ราย</span>
            </div>
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

      {/* Newsletter Signup Section - Exact Figma Design (Node 5021-870) */}
      <section
        className="relative w-full mx-auto"
        style={{
          maxWidth: '1440px',
          backgroundColor: '#DDF9F2',
          paddingTop: '96px',
          paddingBottom: '96px',
          paddingLeft: '144px',
          paddingRight: '144px',
        }}
      >
        <div className="flex flex-col items-center gap-10 max-w-[1152px] mx-auto">
          {/* Heading */}
          <h2
            className="w-full text-center"
            style={{
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(2rem, 5vw, 60px)',
              lineHeight: '1',
              letterSpacing: '0em',
              color: '#009689',
            }}
          >
            รับข่าวสาร โปรโมชั่น และสูตรสดชื่นจากยาดม
          </h2>

          {/* Subheading */}
          <p
            className="w-full text-center"
            style={{
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              fontWeight: 500,
              fontSize: 'clamp(1rem, 2vw, 24px)',
              lineHeight: '32px',
              letterSpacing: '0em',
              color: '#364153',
            }}
          >
            สมัครรับข่าวสารเพื่อรับข้อเสนอพิเศษและเคลลับสุขภาพดี
          </p>

          {/* Input Section */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Email Input */}
            <input
              type="email"
              placeholder="กรอกอีเมลของคุณ"
              className="w-full sm:max-w-[448px] h-10 bg-white border border-[#E5E7EB] rounded-md px-3 shadow-sm outline-none focus:border-[#009689] focus:ring-2 focus:ring-[#009689]/20 transition-all"
              style={{
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '20px',
                letterSpacing: '0em',
                color: '#737373',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
              }}
            />

            {/* Submit Button */}
            <button
              className="flex items-center gap-2 h-10 px-4 bg-[#009689] hover:bg-[#00897d] text-white rounded-full font-semibold transition-colors whitespace-nowrap"
              style={{
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '24px',
                letterSpacing: '0em',
              }}
            >
              <Send className="h-6 w-6" strokeWidth={2} />
              <span>สมัครเลย</span>
            </button>
          </div>

          {/* Privacy Text */}
          <p
            className="w-full text-center"
            style={{
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              fontWeight: 500,
              fontSize: 'clamp(0.875rem, 1.5vw, 24px)',
              lineHeight: '32px',
              letterSpacing: '0em',
              color: '#364153',
            }}
          >
            เราเคารพความเป็นส่วนตัวของคุณ และจะไม่แชร์ข้อมูลของคุณกับบุคคลที่สาม
          </p>
        </div>
      </section>

      {/* Footer - Exact Figma Design (Node 5023:228) */}
      <footer id="contact" className="bg-[#009689]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 pb-8">
            {/* Column 1: Brand (Yadom) */}
            <div>
              <h4 className="text-xl font-semibold text-white leading-[28px] mb-6" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
                Yadom
              </h4>
              <p className="text-base font-normal text-[#FFFEFE] leading-6 mb-6">
                ผลิตภัณฑ์ยาดมคุณภาพจากธรรมชาติ<br />
                เพื่อความสดชื่นของคุณทุกเวลา
              </p>
            </div>

            {/* Column 2: Quick Links (ลิงก์ด่วน) */}
            <div>
              <h4 className="text-xl font-semibold text-white leading-[28px] mb-6" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
                ลิงก์ด่วน
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="#home" className="text-base font-normal text-[#FFFEFE] leading-6 hover:text-white transition-colors">
                    หน้าแรก
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="text-base font-normal text-[#FFFEFE] leading-6 hover:text-white transition-colors">
                    สินค้า
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-base font-normal text-[#FFFEFE] leading-6 hover:text-white transition-colors">
                    เกี่ยวกับเรา
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-base font-normal text-[#FFFEFE] leading-6 hover:text-white transition-colors">
                    ติดต่อเรา
                  </Link>
                </li>
                <li>
                  <Link href="#privacy" className="text-base font-normal text-[#FFFEFE] leading-6 hover:text-white transition-colors">
                    นโยบายความเป็นส่วนตัว
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Info (ติดต่อเรา) */}
            <div>
              <h4 className="text-xl font-semibold text-white leading-[28px] mb-6" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
                ติดต่อเรา
              </h4>
              <ul className="space-y-4">
                <li className="text-base font-normal text-[#FFFEFE] leading-6">
                  123 ถนนสุขุมวิท<br />
                  แขวงคลองเตย กรุงเทพฯ 10110
                </li>
                <li className="text-base font-normal text-[#FFFEFE] leading-6">
                  02-123-4567
                </li>
                <li className="text-base font-normal text-[#FFFEFE] leading-6">
                  info@yadom.com
                </li>
              </ul>
            </div>

            {/* Column 4: Follow Us (ติดตามเรา) */}
            <div>
              <h4 className="text-xl font-semibold text-white leading-[28px] mb-6" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
                ติดตามเรา
              </h4>
              <div className="flex items-center gap-6 mb-6">
                {/* Social Media Icons - Placeholder for social icons */}
                <Link href="#" className="h-8 w-8 flex items-center justify-center text-white hover:text-white/80 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </Link>
                <Link href="#" className="h-8 w-8 flex items-center justify-center text-white hover:text-white/80 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </Link>
                <Link href="#" className="h-8 w-8 flex items-center justify-center text-white hover:text-white/80 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </Link>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-normal text-[#FFFEFE] leading-5">
                  เปิดให้บริการ จันทร์-ศุกร์
                </p>
                <p className="text-sm font-normal text-[#FFFEFE] leading-5">
                  เวลา 9:00 - 18:00 น.
                </p>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="pt-6 pb-4 border-t border-white/20">
            <p className="text-sm font-normal text-[#FFFEFE] leading-5 text-center md:text-left">
              © 2026 ยาดม สดชื่น. สงวนลิขสิทธิ์.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
