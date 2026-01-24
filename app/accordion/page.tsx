'use client'

import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function AccordionPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Accordion</h1>
          <p className="text-lg text-muted-foreground">
            A vertically stacked set of interactive headings that each reveal a section of content.
          </p>
        </div>

        {/* Default Accordion */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Default</h2>
          <p className="text-muted-foreground mb-6">
            The default accordion with single item expansion.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It&apos;s animated by default, but you can disable it if you prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Multiple Expansion */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Multiple Expansion</h2>
          <p className="text-muted-foreground mb-6">
            Allow multiple items to be expanded at the same time.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
                <AccordionContent>
                  Yes. Use type=&quot;multiple&quot; to allow multiple items to be open simultaneously.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How does it work?</AccordionTrigger>
                <AccordionContent>
                  Each item operates independently. Opening one doesn&apos;t close the others.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>When should I use this?</AccordionTrigger>
                <AccordionContent>
                  Use multiple expansion when users might need to compare content between sections.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Default Open */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Default Open</h2>
          <p className="text-muted-foreground mb-6">
            Set a default expanded item on initial render.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Accordion type="single" collapsible defaultValue="item-2" className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>First Section</AccordionTrigger>
                <AccordionContent>
                  This section is collapsed by default.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Second Section (Default Open)</AccordionTrigger>
                <AccordionContent>
                  This section is expanded by default using defaultValue=&quot;item-2&quot;.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Third Section</AccordionTrigger>
                <AccordionContent>
                  This section is also collapsed by default.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* FAQ Example */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">FAQ Example</h2>
          <p className="text-muted-foreground mb-6">
            A common use case for accordion - Frequently Asked Questions.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="faq-1">
                <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                <AccordionContent>
                  We accept all major credit cards (Visa, MasterCard, American Express), PayPal,
                  and bank transfers. For enterprise customers, we also offer invoice-based payments.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger>How can I cancel my subscription?</AccordionTrigger>
                <AccordionContent>
                  You can cancel your subscription at any time from your account settings.
                  Go to Settings &gt; Billing &gt; Cancel Subscription. Your access will continue
                  until the end of your current billing period.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <AccordionTrigger>Do you offer refunds?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer a 30-day money-back guarantee for all new subscriptions.
                  If you&apos;re not satisfied with our service, contact our support team within
                  30 days of your purchase for a full refund.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-4">
                <AccordionTrigger>How do I contact support?</AccordionTrigger>
                <AccordionContent>
                  You can reach our support team via email at support@example.com,
                  through our live chat feature available on our website, or by calling
                  our toll-free number 1-800-EXAMPLE during business hours.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Back to Home */}
        <div className="text-center pt-8">
          <Button asChild variant="outline">
            <a href="/">← Back to Home</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
