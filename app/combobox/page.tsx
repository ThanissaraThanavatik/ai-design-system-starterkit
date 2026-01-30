'use client'

import * as React from 'react'
import { useState } from 'react'
import { Check, ChevronsUpDown, Search, Plus, User, MapPin, Building, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Badge } from '@/components/ui/badge'

const frameworks = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt.js', label: 'Nuxt.js' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
]

const languages = [
  { value: 'en', label: 'English', flag: '🇺🇸' },
  { value: 'th', label: 'Thai', flag: '🇹🇭' },
  { value: 'ja', label: 'Japanese', flag: '🇯🇵' },
  { value: 'ko', label: 'Korean', flag: '🇰🇷' },
  { value: 'zh', label: 'Chinese', flag: '🇨🇳' },
  { value: 'de', label: 'German', flag: '🇩🇪' },
  { value: 'fr', label: 'French', flag: '🇫🇷' },
]

const statuses = [
  { value: 'backlog', label: 'Backlog', color: 'bg-gray-500' },
  { value: 'todo', label: 'Todo', color: 'bg-blue-500' },
  { value: 'in-progress', label: 'In Progress', color: 'bg-yellow-500' },
  { value: 'done', label: 'Done', color: 'bg-green-500' },
  { value: 'cancelled', label: 'Cancelled', color: 'bg-red-500' },
]

const users = [
  { value: 'user1', label: 'John Doe', email: 'john@example.com', avatar: 'JD' },
  { value: 'user2', label: 'Jane Smith', email: 'jane@example.com', avatar: 'JS' },
  { value: 'user3', label: 'Bob Johnson', email: 'bob@example.com', avatar: 'BJ' },
  { value: 'user4', label: 'Alice Brown', email: 'alice@example.com', avatar: 'AB' },
]

const countries = [
  { value: 'th', label: 'Thailand', continent: 'Asia' },
  { value: 'jp', label: 'Japan', continent: 'Asia' },
  { value: 'kr', label: 'South Korea', continent: 'Asia' },
  { value: 'us', label: 'United States', continent: 'North America' },
  { value: 'ca', label: 'Canada', continent: 'North America' },
  { value: 'uk', label: 'United Kingdom', continent: 'Europe' },
  { value: 'de', label: 'Germany', continent: 'Europe' },
  { value: 'fr', label: 'France', continent: 'Europe' },
]

export default function ComboboxPage() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')

  const [languageOpen, setLanguageOpen] = useState(false)
  const [languageValue, setLanguageValue] = useState('')

  const [statusOpen, setStatusOpen] = useState(false)
  const [statusValue, setStatusValue] = useState('')

  const [userOpen, setUserOpen] = useState(false)
  const [userValue, setUserValue] = useState('')

  const [countryOpen, setCountryOpen] = useState(false)
  const [countryValue, setCountryValue] = useState('')

  const [multiOpen, setMultiOpen] = useState(false)
  const [multiValues, setMultiValues] = useState<string[]>([])

  const [asyncOpen, setAsyncOpen] = useState(false)
  const [asyncValue, setAsyncValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [asyncResults, setAsyncResults] = useState<typeof frameworks>([])

  const handleAsyncSearch = (search: string) => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      const filtered = frameworks.filter((f) =>
        f.label.toLowerCase().includes(search.toLowerCase())
      )
      setAsyncResults(filtered)
      setIsLoading(false)
    }, 500)
  }

  const toggleMultiValue = (val: string) => {
    setMultiValues((prev) =>
      prev.includes(val)
        ? prev.filter((v) => v !== val)
        : [...prev, val]
    )
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Combobox</h1>
          <p className="text-lg text-muted-foreground">
            Autocomplete input and command palette with a list of suggestions.
          </p>
        </div>

        {/* Basic Combobox */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Default</h2>
          <p className="text-muted-foreground mb-6">
            A basic combobox with search functionality.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-[200px] justify-between"
                >
                  {value
                    ? frameworks.find((framework) => framework.value === value)?.label
                    : 'Select framework...'}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search framework..." />
                  <CommandList>
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup>
                      {frameworks.map((framework) => (
                        <CommandItem
                          key={framework.value}
                          value={framework.value}
                          onSelect={(currentValue) => {
                            setValue(currentValue === value ? '' : currentValue)
                            setOpen(false)
                          }}
                        >
                          <Check
                            className={cn(
                              'mr-2 h-4 w-4',
                              value === framework.value ? 'opacity-100' : 'opacity-0'
                            )}
                          />
                          {framework.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            {value && (
              <p className="text-sm text-muted-foreground mt-4">
                Selected: {frameworks.find((f) => f.value === value)?.label}
              </p>
            )}
          </div>
        </section>

        {/* With Icons/Flags */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Icons</h2>
          <p className="text-muted-foreground mb-6">
            Combobox items can include icons or flags for visual context.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Popover open={languageOpen} onOpenChange={setLanguageOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={languageOpen}
                  className="w-[200px] justify-between"
                >
                  {languageValue ? (
                    <span className="flex items-center gap-2">
                      <span>{languages.find((l) => l.value === languageValue)?.flag}</span>
                      {languages.find((l) => l.value === languageValue)?.label}
                    </span>
                  ) : (
                    'Select language...'
                  )}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search language..." />
                  <CommandList>
                    <CommandEmpty>No language found.</CommandEmpty>
                    <CommandGroup>
                      {languages.map((language) => (
                        <CommandItem
                          key={language.value}
                          value={language.value}
                          onSelect={(currentValue) => {
                            setLanguageValue(currentValue === languageValue ? '' : currentValue)
                            setLanguageOpen(false)
                          }}
                        >
                          <Check
                            className={cn(
                              'mr-2 h-4 w-4',
                              languageValue === language.value ? 'opacity-100' : 'opacity-0'
                            )}
                          />
                          <span className="mr-2">{language.flag}</span>
                          {language.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </section>

        {/* Status Selector */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Status Selector</h2>
          <p className="text-muted-foreground mb-6">
            A combobox with colored status indicators.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Popover open={statusOpen} onOpenChange={setStatusOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={statusOpen}
                  className="w-[200px] justify-between"
                >
                  {statusValue ? (
                    <span className="flex items-center gap-2">
                      <span
                        className={cn(
                          'h-2 w-2 rounded-full',
                          statuses.find((s) => s.value === statusValue)?.color
                        )}
                      />
                      {statuses.find((s) => s.value === statusValue)?.label}
                    </span>
                  ) : (
                    'Set status...'
                  )}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search status..." />
                  <CommandList>
                    <CommandEmpty>No status found.</CommandEmpty>
                    <CommandGroup>
                      {statuses.map((status) => (
                        <CommandItem
                          key={status.value}
                          value={status.value}
                          onSelect={(currentValue) => {
                            setStatusValue(currentValue === statusValue ? '' : currentValue)
                            setStatusOpen(false)
                          }}
                        >
                          <Check
                            className={cn(
                              'mr-2 h-4 w-4',
                              statusValue === status.value ? 'opacity-100' : 'opacity-0'
                            )}
                          />
                          <span className={cn('mr-2 h-2 w-2 rounded-full', status.color)} />
                          {status.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </section>

        {/* User Selector */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">User Selector</h2>
          <p className="text-muted-foreground mb-6">
            Select users with avatar and email display.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Popover open={userOpen} onOpenChange={setUserOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={userOpen}
                  className="w-[280px] justify-between"
                >
                  {userValue ? (
                    <span className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                        {users.find((u) => u.value === userValue)?.avatar}
                      </span>
                      {users.find((u) => u.value === userValue)?.label}
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Assign to...
                    </span>
                  )}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[280px] p-0">
                <Command>
                  <CommandInput placeholder="Search users..." />
                  <CommandList>
                    <CommandEmpty>No user found.</CommandEmpty>
                    <CommandGroup>
                      {users.map((user) => (
                        <CommandItem
                          key={user.value}
                          value={user.value}
                          onSelect={(currentValue) => {
                            setUserValue(currentValue === userValue ? '' : currentValue)
                            setUserOpen(false)
                          }}
                          className="flex items-center gap-2"
                        >
                          <Check
                            className={cn(
                              'h-4 w-4',
                              userValue === user.value ? 'opacity-100' : 'opacity-0'
                            )}
                          />
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                            {user.avatar}
                          </span>
                          <div className="flex flex-col">
                            <span className="font-medium">{user.label}</span>
                            <span className="text-xs text-muted-foreground">{user.email}</span>
                          </div>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </section>

        {/* Grouped Items */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Grouped Items</h2>
          <p className="text-muted-foreground mb-6">
            Organize options into groups with headers.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Popover open={countryOpen} onOpenChange={setCountryOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={countryOpen}
                  className="w-[200px] justify-between"
                >
                  {countryValue ? (
                    <span className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {countries.find((c) => c.value === countryValue)?.label}
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Select country...
                    </span>
                  )}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search country..." />
                  <CommandList>
                    <CommandEmpty>No country found.</CommandEmpty>
                    <CommandGroup heading="Asia">
                      {countries
                        .filter((c) => c.continent === 'Asia')
                        .map((country) => (
                          <CommandItem
                            key={country.value}
                            value={country.value}
                            onSelect={(currentValue) => {
                              setCountryValue(currentValue === countryValue ? '' : currentValue)
                              setCountryOpen(false)
                            }}
                          >
                            <Check
                              className={cn(
                                'mr-2 h-4 w-4',
                                countryValue === country.value ? 'opacity-100' : 'opacity-0'
                              )}
                            />
                            {country.label}
                          </CommandItem>
                        ))}
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="North America">
                      {countries
                        .filter((c) => c.continent === 'North America')
                        .map((country) => (
                          <CommandItem
                            key={country.value}
                            value={country.value}
                            onSelect={(currentValue) => {
                              setCountryValue(currentValue === countryValue ? '' : currentValue)
                              setCountryOpen(false)
                            }}
                          >
                            <Check
                              className={cn(
                                'mr-2 h-4 w-4',
                                countryValue === country.value ? 'opacity-100' : 'opacity-0'
                              )}
                            />
                            {country.label}
                          </CommandItem>
                        ))}
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Europe">
                      {countries
                        .filter((c) => c.continent === 'Europe')
                        .map((country) => (
                          <CommandItem
                            key={country.value}
                            value={country.value}
                            onSelect={(currentValue) => {
                              setCountryValue(currentValue === countryValue ? '' : currentValue)
                              setCountryOpen(false)
                            }}
                          >
                            <Check
                              className={cn(
                                'mr-2 h-4 w-4',
                                countryValue === country.value ? 'opacity-100' : 'opacity-0'
                              )}
                            />
                            {country.label}
                          </CommandItem>
                        ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </section>

        {/* Multi-Select */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Multi-Select</h2>
          <p className="text-muted-foreground mb-6">
            Allow selecting multiple items from the list.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Popover open={multiOpen} onOpenChange={setMultiOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={multiOpen}
                  className="w-full max-w-[400px] justify-between h-auto min-h-10"
                >
                  <div className="flex flex-wrap gap-1">
                    {multiValues.length > 0 ? (
                      multiValues.map((val) => (
                        <Badge key={val} variant="secondary" className="mr-1">
                          {frameworks.find((f) => f.value === val)?.label}
                        </Badge>
                      ))
                    ) : (
                      <span className="text-muted-foreground">Select frameworks...</span>
                    )}
                  </div>
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[400px] p-0">
                <Command>
                  <CommandInput placeholder="Search frameworks..." />
                  <CommandList>
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup>
                      {frameworks.map((framework) => (
                        <CommandItem
                          key={framework.value}
                          value={framework.value}
                          onSelect={() => toggleMultiValue(framework.value)}
                        >
                          <Check
                            className={cn(
                              'mr-2 h-4 w-4',
                              multiValues.includes(framework.value) ? 'opacity-100' : 'opacity-0'
                            )}
                          />
                          {framework.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            {multiValues.length > 0 && (
              <p className="text-sm text-muted-foreground mt-4">
                Selected: {multiValues.length} framework(s)
              </p>
            )}
          </div>
        </section>

        {/* Async Search */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Async Search</h2>
          <p className="text-muted-foreground mb-6">
            Load options asynchronously as the user types.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Popover open={asyncOpen} onOpenChange={setAsyncOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={asyncOpen}
                  className="w-[250px] justify-between"
                >
                  {asyncValue
                    ? frameworks.find((f) => f.value === asyncValue)?.label
                    : 'Search frameworks...'}
                  <Search className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[250px] p-0">
                <Command shouldFilter={false}>
                  <CommandInput
                    placeholder="Type to search..."
                    onValueChange={handleAsyncSearch}
                  />
                  <CommandList>
                    {isLoading ? (
                      <div className="flex items-center justify-center py-6">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span className="ml-2 text-sm text-muted-foreground">Loading...</span>
                      </div>
                    ) : asyncResults.length === 0 ? (
                      <CommandEmpty>No results found.</CommandEmpty>
                    ) : (
                      <CommandGroup>
                        {asyncResults.map((framework) => (
                          <CommandItem
                            key={framework.value}
                            value={framework.value}
                            onSelect={(currentValue) => {
                              setAsyncValue(currentValue === asyncValue ? '' : currentValue)
                              setAsyncOpen(false)
                            }}
                          >
                            <Check
                              className={cn(
                                'mr-2 h-4 w-4',
                                asyncValue === framework.value ? 'opacity-100' : 'opacity-0'
                              )}
                            />
                            {framework.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    )}
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </section>

        {/* Disabled State */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Disabled State</h2>
          <p className="text-muted-foreground mb-6">
            A combobox in disabled state.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Button
              variant="outline"
              disabled
              className="w-[200px] justify-between"
            >
              Select framework...
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
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
