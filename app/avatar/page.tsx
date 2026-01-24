'use client'

import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function AvatarPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Avatar</h1>
          <p className="text-lg text-muted-foreground">
            An image element with a fallback for representing the user.
          </p>
        </div>

        {/* Default Avatar */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Default</h2>
          <p className="text-muted-foreground mb-6">
            Basic avatar with image and fallback.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">shadcn</p>
                <p className="text-sm text-muted-foreground">@shadcn</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sizes */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
          <p className="text-muted-foreground mb-6">
            Avatars in different sizes.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex items-end gap-4">
              <div className="text-center">
                <Avatar className="size-6">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback className="text-xs">CN</AvatarFallback>
                </Avatar>
                <p className="text-xs text-muted-foreground mt-2">xs</p>
              </div>
              <div className="text-center">
                <Avatar className="size-8">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback className="text-xs">CN</AvatarFallback>
                </Avatar>
                <p className="text-xs text-muted-foreground mt-2">sm</p>
              </div>
              <div className="text-center">
                <Avatar className="size-10">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback className="text-sm">CN</AvatarFallback>
                </Avatar>
                <p className="text-xs text-muted-foreground mt-2">md</p>
              </div>
              <div className="text-center">
                <Avatar className="size-12">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className="text-xs text-muted-foreground mt-2">lg</p>
              </div>
              <div className="text-center">
                <Avatar className="size-16">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback className="text-lg">CN</AvatarFallback>
                </Avatar>
                <p className="text-xs text-muted-foreground mt-2">xl</p>
              </div>
              <div className="text-center">
                <Avatar className="size-20">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback className="text-xl">CN</AvatarFallback>
                </Avatar>
                <p className="text-xs text-muted-foreground mt-2">2xl</p>
              </div>
            </div>
          </div>
        </section>

        {/* Fallback */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Fallback</h2>
          <p className="text-muted-foreground mb-6">
            Avatar fallback when image is not available.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex items-center gap-4">
              <Avatar className="size-12">
                <AvatarImage src="/broken-image.jpg" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar className="size-12">
                <AvatarImage src="/broken-image.jpg" alt="User" />
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
              <Avatar className="size-12">
                <AvatarImage src="/broken-image.jpg" alt="User" />
                <AvatarFallback>XY</AvatarFallback>
              </Avatar>
              <Avatar className="size-12">
                <AvatarImage src="/broken-image.jpg" alt="User" />
                <AvatarFallback>ZZ</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </section>

        {/* Custom Colors */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Custom Colors</h2>
          <p className="text-muted-foreground mb-6">
            Avatars with custom background colors.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex items-center gap-4">
              <Avatar className="size-12">
                <AvatarFallback className="bg-red-500 text-white">RD</AvatarFallback>
              </Avatar>
              <Avatar className="size-12">
                <AvatarFallback className="bg-blue-500 text-white">BL</AvatarFallback>
              </Avatar>
              <Avatar className="size-12">
                <AvatarFallback className="bg-green-500 text-white">GR</AvatarFallback>
              </Avatar>
              <Avatar className="size-12">
                <AvatarFallback className="bg-yellow-500 text-white">YL</AvatarFallback>
              </Avatar>
              <Avatar className="size-12">
                <AvatarFallback className="bg-purple-500 text-white">PR</AvatarFallback>
              </Avatar>
              <Avatar className="size-12">
                <AvatarFallback className="bg-pink-500 text-white">PK</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </section>

        {/* Avatar Group */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Avatar Group</h2>
          <p className="text-muted-foreground mb-6">
            Stacked avatars for showing multiple users.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex -space-x-3">
              <Avatar className="size-10 border-2 border-background">
                <AvatarImage src="https://github.com/shadcn.png" alt="User 1" />
                <AvatarFallback>U1</AvatarFallback>
              </Avatar>
              <Avatar className="size-10 border-2 border-background">
                <AvatarImage src="https://github.com/vercel.png" alt="User 2" />
                <AvatarFallback>U2</AvatarFallback>
              </Avatar>
              <Avatar className="size-10 border-2 border-background">
                <AvatarImage src="https://github.com/nextjs.png" alt="User 3" />
                <AvatarFallback>U3</AvatarFallback>
              </Avatar>
              <Avatar className="size-10 border-2 border-background">
                <AvatarImage src="https://github.com/tailwindlabs.png" alt="User 4" />
                <AvatarFallback>U4</AvatarFallback>
              </Avatar>
              <Avatar className="size-10 border-2 border-background">
                <AvatarFallback className="bg-muted text-muted-foreground text-xs">+5</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </section>

        {/* With Status Indicator */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Status Indicator</h2>
          <p className="text-muted-foreground mb-6">
            Avatars with online/offline status indicators.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex items-center gap-6">
              {/* Online */}
              <div className="relative">
                <Avatar className="size-12">
                  <AvatarImage src="https://github.com/shadcn.png" alt="Online user" />
                  <AvatarFallback>ON</AvatarFallback>
                </Avatar>
                <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-background" />
              </div>

              {/* Away */}
              <div className="relative">
                <Avatar className="size-12">
                  <AvatarImage src="https://github.com/vercel.png" alt="Away user" />
                  <AvatarFallback>AW</AvatarFallback>
                </Avatar>
                <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-yellow-500 ring-2 ring-background" />
              </div>

              {/* Busy */}
              <div className="relative">
                <Avatar className="size-12">
                  <AvatarImage src="https://github.com/nextjs.png" alt="Busy user" />
                  <AvatarFallback>BS</AvatarFallback>
                </Avatar>
                <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-red-500 ring-2 ring-background" />
              </div>

              {/* Offline */}
              <div className="relative">
                <Avatar className="size-12">
                  <AvatarImage src="https://github.com/tailwindlabs.png" alt="Offline user" />
                  <AvatarFallback>OF</AvatarFallback>
                </Avatar>
                <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-gray-400 ring-2 ring-background" />
              </div>
            </div>
            <div className="flex items-center gap-6 mt-4 text-sm text-muted-foreground">
              <span>Online</span>
              <span>Away</span>
              <span>Busy</span>
              <span>Offline</span>
            </div>
          </div>
        </section>

        {/* With Border */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Border</h2>
          <p className="text-muted-foreground mb-6">
            Avatars with different border styles.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex items-center gap-4">
              <Avatar className="size-12 ring-2 ring-primary">
                <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                <AvatarFallback>U1</AvatarFallback>
              </Avatar>
              <Avatar className="size-12 ring-2 ring-green-500">
                <AvatarImage src="https://github.com/vercel.png" alt="User" />
                <AvatarFallback>U2</AvatarFallback>
              </Avatar>
              <Avatar className="size-12 ring-2 ring-offset-2 ring-offset-background ring-blue-500">
                <AvatarImage src="https://github.com/nextjs.png" alt="User" />
                <AvatarFallback>U3</AvatarFallback>
              </Avatar>
              <Avatar className="size-12 border-2 border-dashed border-muted-foreground">
                <AvatarFallback className="text-muted-foreground">+</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </section>

        {/* Square Avatar */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Square Avatar</h2>
          <p className="text-muted-foreground mb-6">
            Avatars with rounded corners instead of circular.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex items-center gap-4">
              <Avatar className="size-12 rounded-md">
                <AvatarImage src="https://github.com/shadcn.png" alt="User" className="rounded-md" />
                <AvatarFallback className="rounded-md">CN</AvatarFallback>
              </Avatar>
              <Avatar className="size-12 rounded-lg">
                <AvatarImage src="https://github.com/vercel.png" alt="User" className="rounded-lg" />
                <AvatarFallback className="rounded-lg">VC</AvatarFallback>
              </Avatar>
              <Avatar className="size-12 rounded-xl">
                <AvatarImage src="https://github.com/nextjs.png" alt="User" className="rounded-xl" />
                <AvatarFallback className="rounded-xl">NX</AvatarFallback>
              </Avatar>
            </div>
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
