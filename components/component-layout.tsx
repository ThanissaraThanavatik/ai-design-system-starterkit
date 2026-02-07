import { Sidebar } from '@/components/navigation/sidebar'
import { Breadcrumb } from '@/components/navigation/breadcrumb'
import { BackToTop } from '@/components/navigation/back-to-top'

interface ComponentLayoutProps {
  children: React.ReactNode
  className?: string
}

export function ComponentLayout({ children, className }: ComponentLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      
      <main className={"flex-1 md:pl-72"}>
        <div className={"container mx-auto py-8 px-4 sm:px-6 lg:px-8"}>
          <div className="mb-6">
            <Breadcrumb />
          </div>
          
          {children}
        </div>
        
        <BackToTop />
      </main>
    </div>
  )
}
