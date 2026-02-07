import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

const footerLinks = {
  services: [
    { label: 'ออกแบบเว็บไซต์', href: '/(website)/services/web-design' },
    { label: 'UI/UX Design', href: '/(website)/services/ui-ux' },
    { label: 'Branding', href: '/(website)/services/branding' },
    { label: 'พัฒนาระบบ', href: '/(website)/services/development' },
  ],
  company: [
    { label: 'เกี่ยวกับเรา', href: '/(website)/about' },
    { label: 'ทีมงาน', href: '/(website)/team' },
    { label: 'ร่วมงานกับเรา', href: '/(website)/careers' },
    { label: 'ข่าวสาร', href: '/(website)/news' },
  ],
  support: [
    { label: 'ติดต่อเรา', href: '/(website)/contact' },
    { label: 'FAQ', href: '/(website)/faq' },
    { label: 'นโยบายความเป็นส่วนตัว', href: '/(website)/privacy' },
    { label: 'ข้อกำหนดการใช้งาน', href: '/(website)/terms' },
  ],
}

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

export function WebsiteFooter() {
  return (
    <footer className="bg-muted border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/(website)" className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">W</span>
              </div>
              <span className="font-bold text-xl">Website</span>
            </Link>
            
            <p className="text-muted-foreground text-sm mb-6 max-w-sm">
              เราคือทีมงานมืออาชีพที่ให้บริการออกแบบและพัฒนาเว็บไซต์ 
              ด้วยเทคโนโลยีทันสมัยและดีไซน์ที่สวยงาม
            </p>
            
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contact@website.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+66 2 123 4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>กรุงเทพมหานคร, ประเทศไทย</span>
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="h-10 w-10 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-semibold mb-4">บริการ</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold mb-4">บริษัท</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="font-semibold mb-4">ช่วยเหลือ</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Website. สงวนลิขสิทธิ์ทั้งหมด
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <Link href="/(website)/privacy" className="hover:text-primary">นโยบายความเป็นส่วนตัว</Link>
            <Link href="/(website)/terms" className="hover:text-primary">ข้อกำหนดการใช้งาน</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
