'use client'

import * as React from 'react'
import { useState, useMemo } from 'react'
import {
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Search,
  Filter,
  Download,
  Plus,
  Trash2,
  Edit,
  Eye,
  Copy,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

// Sample data
const invoices = [
  { invoice: 'INV001', status: 'Paid', method: 'Credit Card', amount: 250.00 },
  { invoice: 'INV002', status: 'Pending', method: 'PayPal', amount: 150.00 },
  { invoice: 'INV003', status: 'Unpaid', method: 'Bank Transfer', amount: 350.00 },
  { invoice: 'INV004', status: 'Paid', method: 'Credit Card', amount: 450.00 },
  { invoice: 'INV005', status: 'Paid', method: 'PayPal', amount: 550.00 },
  { invoice: 'INV006', status: 'Pending', method: 'Bank Transfer', amount: 200.00 },
  { invoice: 'INV007', status: 'Unpaid', method: 'Credit Card', amount: 300.00 },
]

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', lastActive: '2 hours ago' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Active', lastActive: '5 mins ago' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Viewer', status: 'Inactive', lastActive: '3 days ago' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor', status: 'Active', lastActive: '1 hour ago' },
  { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'Viewer', status: 'Pending', lastActive: 'Never' },
  { id: 6, name: 'Diana Miller', email: 'diana@example.com', role: 'Admin', status: 'Active', lastActive: '30 mins ago' },
  { id: 7, name: 'Edward Davis', email: 'edward@example.com', role: 'Editor', status: 'Inactive', lastActive: '1 week ago' },
  { id: 8, name: 'Fiona Garcia', email: 'fiona@example.com', role: 'Viewer', status: 'Active', lastActive: '10 mins ago' },
]

const products = [
  { id: 'PRD001', name: 'Laptop Pro', category: 'Electronics', price: 1299.99, stock: 45, status: 'In Stock' },
  { id: 'PRD002', name: 'Wireless Mouse', category: 'Electronics', price: 29.99, stock: 150, status: 'In Stock' },
  { id: 'PRD003', name: 'USB-C Hub', category: 'Accessories', price: 49.99, stock: 0, status: 'Out of Stock' },
  { id: 'PRD004', name: 'Mechanical Keyboard', category: 'Electronics', price: 149.99, stock: 23, status: 'Low Stock' },
  { id: 'PRD005', name: 'Monitor Stand', category: 'Accessories', price: 79.99, stock: 67, status: 'In Stock' },
  { id: 'PRD006', name: 'Webcam HD', category: 'Electronics', price: 89.99, stock: 5, status: 'Low Stock' },
  { id: 'PRD007', name: 'Desk Lamp', category: 'Office', price: 39.99, stock: 0, status: 'Out of Stock' },
  { id: 'PRD008', name: 'Ergonomic Chair', category: 'Office', price: 399.99, stock: 12, status: 'In Stock' },
]

const tasks = [
  { id: 'TASK-8782', title: 'You can\'t compress the program...', status: 'In Progress', priority: 'Medium' },
  { id: 'TASK-7878', title: 'Try to calculate the EXE feed...', status: 'Backlog', priority: 'Low' },
  { id: 'TASK-7839', title: 'We need to bypass the neural TCP...', status: 'Todo', priority: 'High' },
  { id: 'TASK-5562', title: 'The SAS interface is down...', status: 'Backlog', priority: 'High' },
  { id: 'TASK-8686', title: 'I\'ll parse the wireless SSL protocol...', status: 'Canceled', priority: 'Medium' },
  { id: 'TASK-1280', title: 'Use the digital TLS panel...', status: 'Done', priority: 'High' },
  { id: 'TASK-7262', title: 'The UTF8 application is down...', status: 'Done', priority: 'Low' },
  { id: 'TASK-1138', title: 'Generating the driver won\'t do...', status: 'In Progress', priority: 'Medium' },
]

type SortDirection = 'asc' | 'desc' | null

export default function DataTablePage() {
  // Selection state
  const [selectedUsers, setSelectedUsers] = useState<number[]>([])

  // Sorting state
  const [sortColumn, setSortColumn] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<SortDirection>(null)

  // Filter state
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(5)

  // Toggle all selection
  const toggleAllUsers = () => {
    if (selectedUsers.length === users.length) {
      setSelectedUsers([])
    } else {
      setSelectedUsers(users.map(u => u.id))
    }
  }

  // Toggle single selection
  const toggleUser = (id: number) => {
    setSelectedUsers(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  // Sorting handler
  const handleSort = (column: string) => {
    if (sortColumn === column) {
      if (sortDirection === 'asc') {
        setSortDirection('desc')
      } else if (sortDirection === 'desc') {
        setSortColumn(null)
        setSortDirection(null)
      }
    } else {
      setSortColumn(column)
      setSortDirection('asc')
    }
  }

  // Sorted products
  const sortedProducts = useMemo(() => {
    if (!sortColumn || !sortDirection) return products
    return [...products].sort((a, b) => {
      const aVal = a[sortColumn as keyof typeof a]
      const bVal = b[sortColumn as keyof typeof b]
      if (typeof aVal === 'number' && typeof bVal === 'number') {
        return sortDirection === 'asc' ? aVal - bVal : bVal - aVal
      }
      return sortDirection === 'asc'
        ? String(aVal).localeCompare(String(bVal))
        : String(bVal).localeCompare(String(aVal))
    })
  }, [sortColumn, sortDirection])

  // Filtered tasks
  const filteredTasks = useMemo(() => {
    return tasks.filter(task => {
      const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.id.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesStatus = statusFilter === 'all' || task.status === statusFilter
      return matchesSearch && matchesStatus
    })
  }, [searchTerm, statusFilter])

  // Paginated data
  const paginatedUsers = useMemo(() => {
    const start = (currentPage - 1) * pageSize
    return users.slice(start, start + pageSize)
  }, [currentPage, pageSize])

  const totalPages = Math.ceil(users.length / pageSize)

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Paid':
      case 'Active':
      case 'Done':
      case 'In Stock':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">{status}</Badge>
      case 'Pending':
      case 'In Progress':
      case 'Low Stock':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">{status}</Badge>
      case 'Unpaid':
      case 'Inactive':
      case 'Canceled':
      case 'Out of Stock':
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">{status}</Badge>
      case 'Todo':
      case 'Backlog':
        return <Badge variant="secondary">{status}</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'High':
        return <Badge variant="destructive">{priority}</Badge>
      case 'Medium':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">{priority}</Badge>
      case 'Low':
        return <Badge variant="secondary">{priority}</Badge>
      default:
        return <Badge variant="outline">{priority}</Badge>
    }
  }

  const SortIcon = ({ column }: { column: string }) => {
    if (sortColumn !== column) return <ArrowUpDown className="ml-2 h-4 w-4" />
    if (sortDirection === 'asc') return <ArrowUp className="ml-2 h-4 w-4" />
    return <ArrowDown className="ml-2 h-4 w-4" />
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Data Table</h1>
          <p className="text-lg text-muted-foreground">
            Powerful table component for displaying and managing data.
          </p>
        </div>

        {/* Basic Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Basic Table</h2>
          <p className="text-muted-foreground mb-6">
            A simple table displaying invoice data.
          </p>
          <div className="border rounded-lg bg-card">
            <Table>
              <TableCaption>A list of your recent invoices.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.invoice}>
                    <TableCell className="font-medium">{invoice.invoice}</TableCell>
                    <TableCell>{getStatusBadge(invoice.status)}</TableCell>
                    <TableCell>{invoice.method}</TableCell>
                    <TableCell className="text-right">${invoice.amount.toFixed(2)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}>Total</TableCell>
                  <TableCell className="text-right">
                    ${invoices.reduce((sum, inv) => sum + inv.amount, 0).toFixed(2)}
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        </section>

        {/* Table with Selection */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Selection</h2>
          <p className="text-muted-foreground mb-6">
            Table with row selection using checkboxes.
          </p>
          <div className="border rounded-lg bg-card">
            <div className="flex items-center justify-between p-4 border-b">
              <div className="text-sm text-muted-foreground">
                {selectedUsers.length} of {users.length} row(s) selected.
              </div>
              {selectedUsers.length > 0 && (
                <Button variant="destructive" size="sm">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete Selected
                </Button>
              )}
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">
                    <Checkbox
                      checked={selectedUsers.length === users.length}
                      onCheckedChange={toggleAllUsers}
                    />
                  </TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.slice(0, 5).map((user) => (
                  <TableRow
                    key={user.id}
                    data-state={selectedUsers.includes(user.id) ? 'selected' : undefined}
                  >
                    <TableCell>
                      <Checkbox
                        checked={selectedUsers.includes(user.id)}
                        onCheckedChange={() => toggleUser(user.id)}
                      />
                    </TableCell>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>{getStatusBadge(user.status)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Table with Sorting */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Sorting</h2>
          <p className="text-muted-foreground mb-6">
            Click on column headers to sort the data.
          </p>
          <div className="border rounded-lg bg-card">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">ID</TableHead>
                  <TableHead>
                    <Button
                      variant="ghost"
                      onClick={() => handleSort('name')}
                      className="-ml-4"
                    >
                      Name
                      <SortIcon column="name" />
                    </Button>
                  </TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>
                    <Button
                      variant="ghost"
                      onClick={() => handleSort('price')}
                      className="-ml-4"
                    >
                      Price
                      <SortIcon column="price" />
                    </Button>
                  </TableHead>
                  <TableHead>
                    <Button
                      variant="ghost"
                      onClick={() => handleSort('stock')}
                      className="-ml-4"
                    >
                      Stock
                      <SortIcon column="stock" />
                    </Button>
                  </TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">{product.id}</TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>${product.price.toFixed(2)}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>{getStatusBadge(product.status)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Table with Filtering */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Filtering</h2>
          <p className="text-muted-foreground mb-6">
            Search and filter table data.
          </p>
          <div className="border rounded-lg bg-card">
            <div className="flex items-center gap-4 p-4 border-b">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search tasks..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[180px]">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="Backlog">Backlog</SelectItem>
                  <SelectItem value="Todo">Todo</SelectItem>
                  <SelectItem value="In Progress">In Progress</SelectItem>
                  <SelectItem value="Done">Done</SelectItem>
                  <SelectItem value="Canceled">Canceled</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Task</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Priority</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTasks.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={4} className="h-24 text-center">
                      No results found.
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredTasks.map((task) => (
                    <TableRow key={task.id}>
                      <TableCell className="font-medium">{task.id}</TableCell>
                      <TableCell className="max-w-[300px] truncate">{task.title}</TableCell>
                      <TableCell>{getStatusBadge(task.status)}</TableCell>
                      <TableCell>{getPriorityBadge(task.priority)}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
            <div className="p-4 border-t text-sm text-muted-foreground">
              Showing {filteredTasks.length} of {tasks.length} tasks
            </div>
          </div>
        </section>

        {/* Table with Actions */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Actions</h2>
          <p className="text-muted-foreground mb-6">
            Table with row actions using dropdown menu.
          </p>
          <div className="border rounded-lg bg-card">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="font-semibold">Users</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
                <Button size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  Add User
                </Button>
              </div>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Active</TableHead>
                  <TableHead className="w-[70px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.slice(0, 5).map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{user.role}</Badge>
                    </TableCell>
                    <TableCell>{getStatusBadge(user.status)}</TableCell>
                    <TableCell className="text-muted-foreground">{user.lastActive}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            View details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit user
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Copy className="mr-2 h-4 w-4" />
                            Copy email
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete user
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Table with Pagination */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Pagination</h2>
          <p className="text-muted-foreground mb-6">
            Navigate through pages of data.
          </p>
          <div className="border rounded-lg bg-card">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{user.role}</Badge>
                    </TableCell>
                    <TableCell>{getStatusBadge(user.status)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="flex items-center justify-between px-4 py-4 border-t">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Rows per page</span>
                <Select value={String(pageSize)} onValueChange={(v) => { setPageSize(Number(v)); setCurrentPage(1) }}>
                  <SelectTrigger className="w-[70px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="20">20</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  Page {currentPage} of {totalPages}
                </span>
                <div className="flex gap-1">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentPage(1)}
                    disabled={currentPage === 1}
                  >
                    <ChevronsLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentPage(totalPages)}
                    disabled={currentPage === totalPages}
                  >
                    <ChevronsRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Striped Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Striped Table</h2>
          <p className="text-muted-foreground mb-6">
            Alternating row colors for better readability.
          </p>
          <div className="border rounded-lg bg-card">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice, index) => (
                  <TableRow
                    key={invoice.invoice}
                    className={index % 2 === 0 ? 'bg-muted/50' : ''}
                  >
                    <TableCell className="font-medium">{invoice.invoice}</TableCell>
                    <TableCell>{getStatusBadge(invoice.status)}</TableCell>
                    <TableCell>{invoice.method}</TableCell>
                    <TableCell className="text-right">${invoice.amount.toFixed(2)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
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
