'use client'

import { useState } from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'

export default function PaginationShowcasePage() {
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Pagination</h1>
          <p className="text-lg text-muted-foreground">
            A navigation component that allows users to browse through pages of content.
          </p>
        </div>

        {/* Basic Example */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Basic Pagination</h2>
          <p className="text-muted-foreground mb-6">
            A simple pagination component with page numbers and navigation arrows.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex justify-center">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">4</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">5</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </section>

        {/* With Ellipsis */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Ellipsis</h2>
          <p className="text-muted-foreground mb-6">
            Pagination with ellipsis for large page counts.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex justify-center">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">10</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </section>

        {/* Sizes */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
          <p className="text-muted-foreground mb-6">
            Pagination components in different sizes.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-8">
            {/* Small */}
            <div>
              <p className="text-sm text-muted-foreground mb-3">Small</p>
              <div className="flex justify-center">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" size="sm" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" size="sm">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" size="sm" isActive>2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" size="sm">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" size="sm" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>

            {/* Default */}
            <div>
              <p className="text-sm text-muted-foreground mb-3">Default</p>
              <div className="flex justify-center">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>

            {/* Large */}
            <div>
              <p className="text-sm text-muted-foreground mb-3">Large</p>
              <div className="flex justify-center">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" size="lg" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" size="lg">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" size="lg" isActive>2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" size="lg">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" size="lg" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          </div>
        </section>

        {/* Disabled State */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Disabled State</h2>
          <p className="text-muted-foreground mb-6">
            Pagination with disabled navigation buttons.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-3">First page (Previous disabled)</p>
              <div className="flex justify-center">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious className="pointer-events-none opacity-50" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-3">Last page (Next disabled)</p>
              <div className="flex justify-center">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext className="pointer-events-none opacity-50" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          </div>
        </section>

        {/* Variants */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Variants</h2>
          <p className="text-muted-foreground mb-6">
            Pagination with different button styles.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            {/* Outline */}
            <div>
              <p className="text-sm text-muted-foreground mb-3">Outline style</p>
              <div className="flex justify-center">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" variant="outline" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" variant="outline">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" variant="outline" isActive>2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" variant="outline">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" variant="outline" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>

            {/* Ghost */}
            <div>
              <p className="text-sm text-muted-foreground mb-3">Ghost style (default)</p>
              <div className="flex justify-center">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" variant="ghost" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" variant="ghost">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" variant="ghost" isActive>2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" variant="ghost">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" variant="ghost" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>

            {/* Secondary */}
            <div>
              <p className="text-sm text-muted-foreground mb-3">Secondary style</p>
              <div className="flex justify-center">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" variant="secondary" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" variant="secondary">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" variant="secondary" isActive>2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" variant="secondary">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" variant="secondary" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Example */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Interactive Example</h2>
          <p className="text-muted-foreground mb-6">
            A fully functional pagination with state management.
          </p>
          <Card className="border rounded-lg">
            <CardHeader>
              <CardTitle>Product List</CardTitle>
              <CardDescription>
                Browse through our product catalog
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Mock data display */}
              <div className="space-y-4 mb-6">
                <p className="text-sm text-muted-foreground">
                  Showing page {currentPage} of 10
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="border rounded-lg p-4 bg-muted/50"
                    >
                      <div className="aspect-video bg-muted rounded-md mb-3" />
                      <div className="h-4 bg-muted rounded w-3/4 mb-2" />
                      <div className="h-3 bg-muted rounded w-1/2" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Pagination */}
              <div className="flex justify-center">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                        className={currentPage === 1 ? 'pointer-events-none opacity-50 cursor-pointer' : 'cursor-pointer'}
                      />
                    </PaginationItem>
                    {currentPage > 3 && (
                      <>
                        <PaginationItem>
                          <PaginationLink
                            onClick={() => setCurrentPage(1)}
                            className="cursor-pointer"
                          >
                            1
                          </PaginationLink>
                        </PaginationItem>
                        {currentPage > 4 && (
                          <PaginationItem>
                            <PaginationEllipsis />
                          </PaginationItem>
                        )}
                      </>
                    )}
                    {Array.from({ length: 5 }).map((_, i) => {
                      const pageNum = currentPage - 2 + i
                      if (pageNum < 1 || pageNum > 10) return null
                      return (
                        <PaginationItem key={pageNum}>
                          <PaginationLink
                            onClick={() => setCurrentPage(pageNum)}
                            isActive={pageNum === currentPage}
                            className="cursor-pointer"
                          >
                            {pageNum}
                          </PaginationLink>
                        </PaginationItem>
                      )
                    })}
                    {currentPage < 8 && (
                      <>
                        {currentPage < 7 && (
                          <PaginationItem>
                            <PaginationEllipsis />
                          </PaginationItem>
                        )}
                        <PaginationItem>
                          <PaginationLink
                            onClick={() => setCurrentPage(10)}
                            className="cursor-pointer"
                          >
                            10
                          </PaginationLink>
                        </PaginationItem>
                      </>
                    )}
                    <PaginationItem>
                      <PaginationNext
                        onClick={() => setCurrentPage(Math.min(10, currentPage + 1))}
                        className={currentPage === 10 ? 'pointer-events-none opacity-50 cursor-pointer' : 'cursor-pointer'}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Positioned Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Positioning</h2>
          <p className="text-muted-foreground mb-6">
            Pagination positioned at different locations.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-6">
            {/* Left aligned */}
            <div>
              <p className="text-sm text-muted-foreground mb-3">Left aligned</p>
              <div className="flex justify-start">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>

            {/* Center aligned (default) */}
            <div>
              <p className="text-sm text-muted-foreground mb-3">Center aligned</p>
              <div className="flex justify-center">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>

            {/* Right aligned */}
            <div>
              <p className="text-sm text-muted-foreground mb-3">Right aligned</p>
              <div className="flex justify-end">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          </div>
        </section>

        {/* With Page Info */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Page Info</h2>
          <p className="text-muted-foreground mb-6">
            Pagination with additional page information display.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                Showing 1-10 of 100 results
              </p>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">4</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">5</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Go to</span>
                <input
                  type="number"
                  min="1"
                  max="10"
                  className="w-16 h-9 px-2 text-sm border rounded-md bg-background"
                  placeholder="1"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Compact Mode */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Compact Mode</h2>
          <p className="text-muted-foreground mb-6">
            Minimal pagination for smaller spaces.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-3">With Previous/Next only</p>
              <div className="flex justify-center">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <span className="text-sm">Page 1 of 10</span>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-3">Icon only</p>
              <div className="flex justify-center">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                    </PaginationItem>
                    <PaginationItem>
                      <span className="text-sm mx-4">1 / 10</span>
                    </PaginationItem>
                    <PaginationItem>
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          </div>
        </section>

        {/* Real-World Example */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Real-World Example</h2>
          <p className="text-muted-foreground mb-6">
            Complete data table with pagination.
          </p>
          <Card className="border rounded-lg">
            <CardHeader>
              <CardTitle>Users</CardTitle>
              <CardDescription>
                Manage your team members and their account permissions
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Table */}
              <div className="w-full overflow-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="h-10 px-4 text-left font-medium">Name</th>
                      <th className="h-10 px-4 text-left font-medium">Email</th>
                      <th className="h-10 px-4 text-left font-medium">Role</th>
                      <th className="h-10 px-4 text-left font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['John Doe', 'john@example.com', 'Admin', 'Active'],
                      ['Jane Smith', 'jane@example.com', 'User', 'Active'],
                      ['Bob Johnson', 'bob@example.com', 'User', 'Inactive'],
                      ['Alice Brown', 'alice@example.com', 'Admin', 'Active'],
                      ['Charlie Wilson', 'charlie@example.com', 'User', 'Active'],
                    ].map(([name, email, role, status], i) => (
                      <tr key={i} className="border-b">
                        <td className="p-4 font-medium">{name}</td>
                        <td className="p-4 text-muted-foreground">{email}</td>
                        <td className="p-4">{role}</td>
                        <td className="p-4">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            status === 'Active'
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                              : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400'
                          }`}>
                            {status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination with info */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4 pt-4 border-t">
                <p className="text-sm text-muted-foreground">
                  Showing 1-5 of 50 users
                </p>
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious className="pointer-events-none opacity-50" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">4</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">5</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">10</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </CardContent>
          </Card>
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
