'use client'

import { AspectRatio } from '@/components/ui/aspect-ratio'
import { ComponentLayout } from '@/components/component-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ImageIcon, Video, Image as ImageIcon2 } from 'lucide-react'

export default function AspectRatioShowcasePage() {
  return (
    <ComponentLayout>
      <div className="max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Aspect Ratio</h1>
          <p className="text-lg text-muted-foreground">
            Displays content within a desired ratio. Useful for responsive images, videos, and embeds.
          </p>
        </div>

        {/* Basic Ratios */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Common Ratios</h2>
          <p className="text-muted-foreground mb-6">
            Standard aspect ratios for different use cases.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 16:9 - Video */}
            <Card>
              <CardHeader>
                <CardTitle>16:9</CardTitle>
                <CardDescription>Standard video ratio</CardDescription>
              </CardHeader>
              <CardContent>
                <AspectRatio ratio={16 / 9}>
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center rounded-lg">
                    <Video className="h-12 w-12 text-white/80" />
                  </div>
                </AspectRatio>
              </CardContent>
            </Card>

            {/* 4:3 - Classic */}
            <Card>
              <CardHeader>
                <CardTitle>4:3</CardTitle>
                <CardDescription>Classic display ratio</CardDescription>
              </CardHeader>
              <CardContent>
                <AspectRatio ratio={4 / 3}>
                  <div className="w-full h-full bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center rounded-lg">
                    <ImageIcon2 className="h-12 w-12 text-white/80" />
                  </div>
                </AspectRatio>
              </CardContent>
            </Card>

            {/* 1:1 - Square */}
            <Card>
              <CardHeader>
                <CardTitle>1:1</CardTitle>
                <CardDescription>Square format</CardDescription>
              </CardHeader>
              <CardContent>
                <AspectRatio ratio={1}>
                  <div className="w-full h-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center rounded-lg">
                    <ImageIcon className="h-12 w-12 text-white/80" />
                  </div>
                </AspectRatio>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Photography Ratios */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Photography Ratios</h2>
          <p className="text-muted-foreground mb-6">
            Common ratios used in photography and social media.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 3:2 - DSLR */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">3:2</CardTitle>
                <CardDescription className="text-xs">DSLR cameras</CardDescription>
              </CardHeader>
              <CardContent>
                <AspectRatio ratio={3 / 2}>
                  <div className="w-full h-full bg-gradient-to-br from-amber-500 to-yellow-600 rounded-lg" />
                </AspectRatio>
              </CardContent>
            </Card>

            {/* 21:9 - Ultrawide */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">21:9</CardTitle>
                <CardDescription className="text-xs">Ultrawide cinema</CardDescription>
              </CardHeader>
              <CardContent>
                <AspectRatio ratio={21 / 9}>
                  <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg" />
                </AspectRatio>
              </CardContent>
            </Card>

            {/* 9:16 - Portrait */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">9:16</CardTitle>
                <CardDescription className="text-xs">Stories / Reels</CardDescription>
              </CardHeader>
              <CardContent>
                <AspectRatio ratio={9 / 16}>
                  <div className="w-full h-full bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg" />
                </AspectRatio>
              </CardContent>
            </Card>

            {/* 2.35:1 - Anamorphic */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">2.35:1</CardTitle>
                <CardDescription className="text-xs">Cinematic wide</CardDescription>
              </CardHeader>
              <CardContent>
                <AspectRatio ratio={2.35}>
                  <div className="w-full h-full bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg" />
                </AspectRatio>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Responsive Images */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Responsive Images</h2>
          <p className="text-muted-foreground mb-6">
            Images that maintain their aspect ratio while filling the container.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="overflow-hidden">
              <AspectRatio ratio={16 / 9}>
                <img
                  src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&auto=format&fit=crop"
                  alt="Mountain landscape"
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
              <CardHeader className="pt-4">
                <CardTitle className="text-base">Landscape</CardTitle>
                <CardDescription className="text-xs">16:9 aspect ratio</CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden">
              <AspectRatio ratio={4 / 3}>
                <img
                  src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop"
                  alt="Forest nature"
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
              <CardHeader className="pt-4">
                <CardTitle className="text-base">Nature</CardTitle>
                <CardDescription className="text-xs">4:3 aspect ratio</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Card Previews */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Card Previews</h2>
          <p className="text-muted-foreground mb-6">
            Common use case for content cards with media.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <AspectRatio ratio={16 / 9}>
                <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <span className="text-white font-semibold">Article Cover</span>
                </div>
              </AspectRatio>
              <CardContent className="pt-4">
                <h3 className="font-semibold mb-1">Blog Post Title</h3>
                <p className="text-sm text-muted-foreground">
                  A brief description of the article content goes here.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <AspectRatio ratio={16 / 9}>
                <div className="w-full h-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
                  <span className="text-white font-semibold">Product Image</span>
                </div>
              </AspectRatio>
              <CardContent className="pt-4">
                <h3 className="font-semibold mb-1">Product Name</h3>
                <p className="text-sm text-muted-foreground">
                  Product description and details.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <AspectRatio ratio={16 / 9}>
                <div className="w-full h-full bg-gradient-to-br from-fuchsia-500 to-pink-600 flex items-center justify-center">
                  <span className="text-white font-semibold">Video Thumbnail</span>
                </div>
              </AspectRatio>
              <CardContent className="pt-4">
                <h3 className="font-semibold mb-1">Video Title</h3>
                <p className="text-sm text-muted-foreground">
                  Video description and duration.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Avatar / Profile */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Avatar & Profile</h2>
          <p className="text-muted-foreground mb-6">
            Square and circular aspect ratios for avatars and profile pictures.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <div className="text-center">
              <div className="w-24 mx-auto mb-2">
                <AspectRatio ratio={1}>
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-2xl font-bold">
                    JD
                  </div>
                </AspectRatio>
              </div>
              <p className="text-sm text-muted-foreground">1:1 Circle</p>
            </div>

            <div className="text-center">
              <div className="w-24 mx-auto mb-2">
                <AspectRatio ratio={1}>
                  <div className="w-full h-full rounded-lg bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-2xl font-bold">
                    AS
                  </div>
                </AspectRatio>
              </div>
              <p className="text-sm text-muted-foreground">1:1 Square</p>
            </div>

            <div className="text-center">
              <div className="w-24 mx-auto mb-2">
                <AspectRatio ratio={1}>
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop"
                    alt="Avatar"
                    className="rounded-full object-cover w-full h-full"
                  />
                </AspectRatio>
              </div>
              <p className="text-sm text-muted-foreground">Avatar Image</p>
            </div>

            <div className="text-center">
              <div className="w-24 mx-auto mb-2">
                <AspectRatio ratio={1}>
                  <div className="w-full h-full rounded-full border-4 border-dashed border-muted flex items-center justify-center text-muted-foreground">
                    <ImageIcon className="h-8 w-8" />
                  </div>
                </AspectRatio>
              </div>
              <p className="text-sm text-muted-foreground">Placeholder</p>
            </div>
          </div>
        </section>

        {/* Video Embed */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Video Embeds</h2>
          <p className="text-muted-foreground mb-6">
            Responsive video containers for embeds and players.
          </p>
          <div className="max-w-3xl">
            <Card>
              <CardHeader>
                <CardTitle>YouTube Embed Style</CardTitle>
                <CardDescription>16:9 ratio perfect for video embeds</CardDescription>
              </CardHeader>
              <CardContent>
                <AspectRatio ratio={16 / 9}>
                  <div className="w-full h-full bg-black flex items-center justify-center rounded-lg">
                    <div className="text-center text-white">
                      <Video className="h-16 w-16 mx-auto mb-2 opacity-50" />
                      <p className="text-sm opacity-70">Video Player Placeholder</p>
                    </div>
                  </div>
                </AspectRatio>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Custom Ratios */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Custom Ratios</h2>
          <p className="text-muted-foreground mb-6">
            Any ratio can be defined using the ratio prop.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">5:4</CardTitle>
                <CardDescription className="text-xs">Large format photography</CardDescription>
              </CardHeader>
              <CardContent>
                <AspectRatio ratio={5 / 4}>
                  <div className="w-full h-full bg-gradient-to-br from-slate-500 to-slate-600 rounded-lg" />
                </AspectRatio>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">3:1</CardTitle>
                <CardDescription className="text-xs">Panoramic banner</CardDescription>
              </CardHeader>
              <CardContent>
                <AspectRatio ratio={3}>
                  <div className="w-full h-full bg-gradient-to-br from-rose-500 to-pink-600 rounded-lg" />
                </AspectRatio>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">4:5</CardTitle>
                <CardDescription className="text-xs">Portrait photography</CardDescription>
              </CardHeader>
              <CardContent>
                <AspectRatio ratio={4 / 5}>
                  <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-teal-600 rounded-lg" />
                </AspectRatio>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </ComponentLayout>
  )
}
