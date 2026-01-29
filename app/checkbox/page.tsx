'use client'

import * as React from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Label } from '@/components/ui/label'
import {
  Check,
  Trash2,
  Plus,
  Search,
  Filter,
  ArrowUpDown,
  MoreHorizontal,
} from 'lucide-react'

export default function CheckboxShowcasePage() {
  const [checked, setChecked] = React.useState(false)
  const [indeterminate, setIndeterminate] = React.useState(true)
  const [selectedItems, setSelectedItems] = React.useState<string[]>([])
  const [tasks, setTasks] = React.useState([
    { id: 1, text: 'Review pull requests', completed: true },
    { id: 2, text: 'Write unit tests', completed: false },
    { id: 3, text: 'Update documentation', completed: false },
    { id: 4, text: 'Fix navigation bug', completed: true },
    { id: 5, text: 'Design new components', completed: false },
  ])

  const categories = [
    { id: 'tech', label: 'Technology', count: 24 },
    { id: 'design', label: 'Design', count: 18 },
    { id: 'business', label: 'Business', count: 12 },
    { id: 'marketing', label: 'Marketing', count: 8 },
  ]

  const features = [
    { id: 'notifications', label: 'Enable notifications', description: 'Receive push notifications' },
    { id: 'emails', label: 'Email updates', description: 'Get weekly email summaries' },
    { id: 'marketing', label: 'Marketing emails', description: 'Receive promotional content' },
  ]

  const permissions = [
    { id: 'read', label: 'Read access', description: 'View content and resources' },
    { id: 'write', label: 'Write access', description: 'Create and edit content' },
    { id: 'delete', label: 'Delete access', description: 'Remove content permanently' },
    { id: 'admin', label: 'Admin access', description: 'Full system control' },
  ]

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedItems(categories.map((cat) => cat.id))
    } else {
      setSelectedItems([])
    }
  }

  const handleSelectItem = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedItems([...selectedItems, id])
    } else {
      setSelectedItems(selectedItems.filter((item) => item !== id))
    }
  }

  const toggleTask = (id: number) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const allSelected = categories.length > 0 && selectedItems.length === categories.length
  const someSelected = selectedItems.length > 0 && selectedItems.length < categories.length

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Checkbox</h1>
          <p className="text-lg text-muted-foreground">
            A control that allows the user to toggle between checked and unchecked states.
          </p>
        </div>

        {/* Basic Checkboxes */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Basic Checkboxes</h2>
          <p className="text-muted-foreground mb-6">
            Different states of the checkbox component.
          </p>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-6">
                {/* Unchecked */}
                <div className="flex items-center space-x-2">
                  <Checkbox id="basic-unchecked" />
                  <Label htmlFor="basic-unchecked">Unchecked checkbox</Label>
                </div>

                {/* Checked */}
                <div className="flex items-center space-x-2">
                  <Checkbox id="basic-checked" defaultChecked />
                  <Label htmlFor="basic-checked">Checked checkbox</Label>
                </div>

                {/* Disabled */}
                <div className="flex items-center space-x-2">
                  <Checkbox id="basic-disabled" disabled />
                  <Label htmlFor="basic-disabled" className="text-muted-foreground">
                    Disabled checkbox
                  </Label>
                </div>

                {/* Disabled Checked */}
                <div className="flex items-center space-x-2">
                  <Checkbox id="basic-disabled-checked" defaultChecked disabled />
                  <Label htmlFor="basic-disabled-checked" className="text-muted-foreground">
                    Disabled checked checkbox
                  </Label>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Controlled Checkbox */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Controlled Checkbox</h2>
          <p className="text-muted-foreground mb-6">
            Checkbox with controlled state.
          </p>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="controlled"
                  checked={checked}
                  onCheckedChange={setChecked}
                />
                <Label htmlFor="controlled">
                  {checked ? 'Checked' : 'Unchecked'} - Click to toggle
                </Label>
              </div>
              <div className="mt-4 p-3 bg-muted rounded-lg">
                <p className="text-sm font-mono">
                  State: <span className="font-semibold">{checked.toString()}</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* With Label */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Label</h2>
          <p className="text-muted-foreground mb-6">
            Checkboxes with descriptive labels and additional information.
          </p>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox id="label-1" defaultChecked className="mt-1" />
                  <div className="grid gap-1.5 leading-none">
                    <Label htmlFor="label-1" className="font-medium">
                      Accept terms and conditions
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      I agree to the terms of service and privacy policy
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox id="label-2" className="mt-1" />
                  <div className="grid gap-1.5 leading-none">
                    <Label htmlFor="label-2" className="font-medium">
                      Subscribe to newsletter
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Receive weekly updates about new features and tips
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox id="label-3" defaultChecked className="mt-1" />
                  <div className="grid gap-1.5 leading-none">
                    <Label htmlFor="label-3" className="font-medium">
                      Enable data collection
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Help us improve by sharing anonymous usage data
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Indeterminate State */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Indeterminate State</h2>
          <p className="text-muted-foreground mb-6">
            Checkbox with indeterminate (partially checked) state.
          </p>
          <Card>
            <CardHeader>
              <CardTitle>Select All Items</CardTitle>
              <CardDescription>
                Use indeterminate state when some but not all items are selected
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="indeterminate"
                    checked={indeterminate}
                    onCheckedChange={(checked) => {
                      if (checked === 'indeterminate') {
                        setIndeterminate(true)
                      } else {
                        setIndeterminate(checked as boolean)
                      }
                    }}
                    // Note: Radix doesn't support indeterminate via checked prop
                    // You need to use the ref approach
                    ref={(ref) => {
                      if (ref) {
                        ref.indeterminate = indeterminate && !ref.checked
                      }
                    }}
                  />
                  <Label htmlFor="indeterminate">
                    {indeterminate ? 'Partially selected' : 'Select all'}
                  </Label>
                </div>
                <div className="pl-6 space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="item-1" defaultChecked />
                    <Label htmlFor="item-1">Item 1</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="item-2" />
                    <Label htmlFor="item-2">Item 2</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="item-3" defaultChecked />
                    <Label htmlFor="item-3">Item 3</Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Task List */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Task List</h2>
          <p className="text-muted-foreground mb-6">
            Interactive todo list with checkboxes.
          </p>
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Today's Tasks</CardTitle>
                  <CardDescription>
                    {tasks.filter((t) => t.completed).length} of {tasks.length} completed
                  </CardDescription>
                </div>
                <Badge variant="secondary">
                  {tasks.filter((t) => !t.completed).length} remaining
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <Checkbox
                      id={`task-${task.id}`}
                      checked={task.completed}
                      onCheckedChange={() => toggleTask(task.id)}
                    />
                    <Label
                      htmlFor={`task-${task.id}`}
                      className={`flex-1 cursor-pointer ${
                        task.completed ? 'line-through text-muted-foreground' : ''
                      }`}
                    >
                      {task.text}
                    </Label>
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => setTasks(tasks.filter((t) => t.id !== task.id))}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t">
                <Button variant="outline" className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Task
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Filter List */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Filter List</h2>
          <p className="text-muted-foreground mb-6">
            Select multiple items with select all functionality.
          </p>
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Filter by Category</CardTitle>
                  <CardDescription>
                    {selectedItems.length > 0
                      ? `${selectedItems.length} categor${selectedItems.length === 1 ? 'y' : 'ies'} selected`
                      : 'Select categories to filter'}
                  </CardDescription>
                </div>
                {selectedItems.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedItems([])}
                  >
                    Clear all
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 p-2 rounded-lg bg-muted/50">
                  <Checkbox
                    id="select-all"
                    checked={allSelected}
                    onCheckedChange={handleSelectAll}
                  />
                  <Label htmlFor="select-all" className="font-medium cursor-pointer">
                    Select All
                  </Label>
                </div>
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id={`cat-${category.id}`}
                        checked={selectedItems.includes(category.id)}
                        onCheckedChange={(checked) =>
                          handleSelectItem(category.id, checked as boolean)
                        }
                      />
                      <Label
                        htmlFor={`cat-${category.id}`}
                        className="cursor-pointer flex-1"
                      >
                        {category.label}
                      </Label>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </div>
                ))}
              </div>
              {selectedItems.length > 0 && (
                <div className="mt-4 pt-4 border-t">
                  <div className="flex flex-wrap gap-2">
                    {selectedItems.map((id) => {
                      const cat = categories.find((c) => c.id === id)
                      return (
                        <Badge key={id} variant="default">
                          {cat?.label}
                          <button
                            onClick={() => handleSelectItem(id, false)}
                            className="ml-1 hover:bg-primary/80 rounded-full p-0.5"
                          >
                            ×
                          </button>
                        </Badge>
                      )
                    })}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Settings */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Settings</h2>
          <p className="text-muted-foreground mb-6">
            Configure application preferences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <Card key={feature.id}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between space-x-4">
                    <div className="flex-1 space-y-1">
                      <Label htmlFor={feature.id} className="font-medium cursor-pointer">
                        {feature.label}
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                    <Checkbox id={feature.id} defaultChecked />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Permissions */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Permissions</h2>
          <p className="text-muted-foreground mb-6">
            Configure user access permissions.
          </p>
          <Card>
            <CardHeader>
              <CardTitle>Access Control</CardTitle>
              <CardDescription>Define what users can do in your application</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {permissions.map((permission, index) => (
                  <div
                    key={permission.id}
                    className={`flex items-start justify-between space-x-4 ${
                      index !== permissions.length - 1 ? 'pb-4 border-b' : ''
                    }`}
                  >
                    <div className="space-y-1">
                      <Label
                        htmlFor={permission.id}
                        className="font-medium cursor-pointer"
                      >
                        {permission.label}
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        {permission.description}
                      </p>
                    </div>
                    <Checkbox id={permission.id} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Bulk Actions */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Bulk Actions</h2>
          <p className="text-muted-foreground mb-6">
            Perform actions on selected items.
          </p>
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>File Manager</CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                  <Button variant="outline" size="sm">
                    <ArrowUpDown className="h-4 w-4 mr-2" />
                    Sort
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {['Documents', 'Images', 'Videos', 'Music', 'Archives'].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <Checkbox id={`file-${index}`} />
                    <Label htmlFor={`file-${index}`} className="flex-1 cursor-pointer">
                      {item}
                    </Label>
                    <Badge variant="secondary">{['Folder', 'Folder', 'Folder', 'Folder', 'ZIP'][index]}</Badge>
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
              {selectedItems.length > 0 && (
                <div className="mt-4 p-3 bg-muted rounded-lg flex items-center justify-between">
                  <span className="text-sm font-medium">
                    {selectedItems.length} item{selectedItems.length !== 1 ? 's' : ''} selected
                  </span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Download
                    </Button>
                    <Button variant="outline" size="sm">
                      Move
                    </Button>
                    <Button variant="destructive" size="sm">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Form Integration */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Form Integration</h2>
          <p className="text-muted-foreground mb-6">
            Checkboxes in a form context.
          </p>
          <Card>
            <CardHeader>
              <CardTitle>Sign Up Form</CardTitle>
              <CardDescription>Complete your registration</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <Checkbox id="terms" required />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="terms" className="font-medium">
                    I agree to the Terms of Service *
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    You must agree to continue
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox id="privacy" />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="privacy" className="font-medium">
                    Privacy Policy Agreement
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Read and accept our privacy policy
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox id="marketing" defaultChecked />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="marketing" className="font-medium">
                    Marketing Communications
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Receive product updates and offers (optional)
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t">
                <Button className="w-full">Complete Registration</Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Sizes */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Custom Sizes</h2>
          <p className="text-muted-foreground mb-6">
            Checkboxes with custom sizing.
          </p>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Checkbox id="size-sm" className="size-3" />
                  <Label htmlFor="size-sm">Small checkbox</Label>
                </div>
                <div className="flex items-center gap-4">
                  <Checkbox id="size-md" />
                  <Label htmlFor="size-md">Default checkbox</Label>
                </div>
                <div className="flex items-center gap-4">
                  <Checkbox id="size-lg" className="size-5" />
                  <Label htmlFor="size-lg">Large checkbox</Label>
                </div>
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
