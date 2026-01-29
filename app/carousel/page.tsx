'use client'

import * as React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Heart,
  ShoppingCart,
  Eye,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import Autoplay from 'embla-carousel-autoplay'

export default function CarouselShowcasePage() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const products = [
    { id: 1, name: 'Wireless Headphones', price: '$199', rating: 4.8, reviews: 234, image: 'bg-gradient-to-br from-purple-500 to-pink-500' },
    { id: 2, name: 'Smart Watch', price: '$299', rating: 4.9, reviews: 567, image: 'bg-gradient-to-br from-blue-500 to-cyan-500' },
    { id: 3, name: 'Laptop Stand', price: '$89', rating: 4.7, reviews: 123, image: 'bg-gradient-to-br from-green-500 to-emerald-500' },
    { id: 4, name: 'USB-C Hub', price: '$49', rating: 4.6, reviews: 89, image: 'bg-gradient-to-br from-orange-500 to-red-500' },
    { id: 5, name: 'Wireless Mouse', price: '$79', rating: 4.8, reviews: 345, image: 'bg-gradient-to-br from-indigo-500 to-purple-500' },
  ]

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechCorp',
      content: 'This product has completely transformed how we work. The quality and attention to detail is outstanding.',
      avatar: 'bg-gradient-to-br from-pink-500 to-rose-500',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Designer, Creative Studio',
      content: 'Absolutely love it! The design is beautiful and the functionality exceeds all expectations.',
      avatar: 'bg-gradient-to-br from-blue-500 to-cyan-500',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      content: 'Best investment we made this year. Highly recommend to anyone looking for quality.',
      avatar: 'bg-gradient-to-br from-green-500 to-emerald-500',
      rating: 5,
    },
  ]

  const features = [
    {
      id: 1,
      title: 'Lightning Fast',
      description: 'Optimized performance for the best experience',
      icon: '⚡',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      id: 2,
      title: 'Secure',
      description: 'Enterprise-grade security built in',
      icon: '🔒',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      id: 3,
      title: 'Scalable',
      description: 'Grows with your business needs',
      icon: '📈',
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 4,
      title: '24/7 Support',
      description: 'Always here when you need us',
      icon: '💬',
      color: 'from-purple-500 to-pink-500',
    },
  ]

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Carousel</h1>
          <p className="text-lg text-muted-foreground">
            A responsive carousel component for displaying multiple items.
          </p>
        </div>

        {/* Basic Carousel */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Basic Carousel</h2>
          <p className="text-muted-foreground mb-6">
            Simple carousel with navigation arrows.
          </p>
          <div className="flex justify-center">
            <Carousel className="w-full max-w-xs">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-6">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-4xl font-semibold">{index + 1}</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* Multiple Items */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Multiple Items</h2>
          <p className="text-muted-foreground mb-6">
            Display multiple items per slide.
          </p>
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {Array.from({ length: 10 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-3xl font-semibold">{index + 1}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        {/* Product Carousel */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Product Carousel</h2>
          <p className="text-muted-foreground mb-6">
            Showcase products with image, title, and pricing.
          </p>
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {products.map((product) => (
                <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4">
                  <div className="p-1">
                    <Card className="overflow-hidden">
                      <div className={cn('aspect-square', product.image)} />
                      <CardContent className="p-4">
                        <h3 className="font-semibold mb-2">{product.name}</h3>
                        <div className="flex items-center gap-1 mb-2">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{product.rating}</span>
                          <span className="text-xs text-muted-foreground">
                            ({product.reviews})
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold">{product.price}</span>
                          <Button size="sm" variant="outline">
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            Add
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        {/* Testimonials */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
          <p className="text-muted-foreground mb-6">
            Display customer reviews and feedback.
          </p>
          <Carousel className="w-full max-w-3xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <div className="p-6">
                    <Card>
                      <CardContent className="p-8 text-center">
                        <Quote className="h-8 w-8 mx-auto mb-4 text-muted-foreground" />
                        <p className="text-lg mb-6">{testimonial.content}</p>
                        <div className="flex items-center justify-center gap-4">
                          <div className={cn('w-12 h-12 rounded-full', testimonial.avatar)} />
                          <div className="text-left">
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                        <div className="flex justify-center gap-1 mt-4">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        {/* Feature Cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Feature Cards</h2>
          <p className="text-muted-foreground mb-6">
            Highlight key features with icons and descriptions.
          </p>
          <Carousel
            opts={{
              align: 'start',
            }}
            className="w-full"
          >
            <CarouselContent>
              {features.map((feature) => (
                <CarouselItem key={feature.id} className="md:basis-1/2 lg:basis-1/4">
                  <div className="p-2">
                    <Card className="border-2 hover:border-primary/50 transition-colors">
                      <CardContent className="p-6 text-center">
                        <div
                          className={cn(
                            'w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center text-3xl mx-auto mb-4',
                            feature.color
                          )}
                        >
                          {feature.icon}
                        </div>
                        <h3 className="font-semibold mb-2">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        {/* Image Gallery */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Image Gallery</h2>
          <p className="text-muted-foreground mb-6">
            Photo gallery with larger images.
          </p>
          <Carousel className="w-full max-w-2xl mx-auto">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-2">
                    <Card className="overflow-hidden">
                      <div
                        className={cn(
                          'aspect-[16/9]',
                          [
                            'bg-gradient-to-br from-purple-500 to-pink-500',
                            'bg-gradient-to-br from-blue-500 to-cyan-500',
                            'bg-gradient-to-br from-green-500 to-emerald-500',
                            'bg-gradient-to-br from-orange-500 to-red-500',
                            'bg-gradient-to-br from-indigo-500 to-purple-500',
                          ][index]
                        )}
                      />
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        {/* Sizes */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
          <p className="text-muted-foreground mb-6">
            Different sizes for different use cases.
          </p>
          <div className="space-y-8">
            {/* Small */}
            <div>
              <p className="text-sm text-muted-foreground mb-3">Small</p>
              <Carousel className="w-full max-w-xs">
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="basis-1/3">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-4">
                            <span className="text-lg font-semibold">{index + 1}</span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="size-6" />
                <CarouselNext className="size-6" />
              </Carousel>
            </div>

            {/* Medium */}
            <div>
              <p className="text-sm text-muted-foreground mb-3">Medium</p>
              <Carousel className="w-full max-w-md">
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="basis-1/2">
                      <div className="p-2">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-2xl font-semibold">{index + 1}</span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

            {/* Large */}
            <div>
              <p className="text-sm text-muted-foreground mb-3">Large</p>
              <Carousel className="w-full max-w-lg">
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                      <div className="p-4">
                        <Card>
                          <CardContent className="flex aspect-[2/1] items-center justify-center p-8">
                            <span className="text-4xl font-semibold">{index + 1}</span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="size-12" />
                <CarouselNext className="size-12" />
              </Carousel>
            </div>
          </div>
        </section>

        {/* With Indicators */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Indicators</h2>
          <p className="text-muted-foreground mb-6">
            Carousel with dot indicators showing current position.
          </p>
          <div className="flex justify-center">
            <Carousel setApi={setApi} className="w-full max-w-md">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-6">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-4xl font-semibold">{index + 1}</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                className={cn(
                  'w-2 h-2 rounded-full transition-all',
                  current === index + 1 ? 'w-8 bg-primary' : 'bg-muted'
                )}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
        </section>

        {/* Auto-play */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Auto-play</h2>
          <p className="text-muted-foreground mb-6">
            Automatically advances slides every 3 seconds.
          </p>
          <div className="flex justify-center">
            <Carousel
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
              className="w-full max-w-md"
            >
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-6">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <div className="text-center">
                            <span className="text-4xl font-semibold block mb-2">
                              {index + 1}
                            </span>
                            <span className="text-sm text-muted-foreground">Auto-play</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* Action Cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Action Cards</h2>
          <p className="text-muted-foreground mb-6">
            Cards with action buttons.
          </p>
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {Array.from({ length: 6 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4">
                  <div className="p-1">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="font-semibold mb-2">Card Title {index + 1}</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Description of the card content goes here.
                        </p>
                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1">
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Heart className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        {/* Status Cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Status Cards</h2>
          <p className="text-muted-foreground mb-6">
            Cards with status badges.
          </p>
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {[
                { status: 'Active', variant: 'default' as const, color: 'bg-green-500' },
                { status: 'Pending', variant: 'secondary' as const, color: 'bg-yellow-500' },
                { status: 'In Progress', variant: 'outline' as const, color: 'bg-blue-500' },
                { status: 'Completed', variant: 'default' as const, color: 'bg-emerald-500' },
                { status: 'Archived', variant: 'secondary' as const, color: 'bg-gray-500' },
              ].map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4">
                  <div className="p-1">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className={cn('w-10 h-10 rounded-lg', item.color)} />
                          <Badge variant={item.variant}>{item.status}</Badge>
                        </div>
                        <h3 className="font-semibold mb-2">Project {index + 1}</h3>
                        <p className="text-sm text-muted-foreground">
                          Status: {item.status}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
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
