'use client'

import * as React from 'react'
import { useState } from 'react'
import { addDays, format, subDays, startOfMonth, endOfMonth, addMonths } from 'date-fns'
import { th } from 'date-fns/locale'
import { CalendarIcon, Clock } from 'lucide-react'
import { DateRange } from 'react-day-picker'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function DatePickerPage() {
  // Basic date picker
  const [date, setDate] = useState<Date>()

  // Date with presets
  const [dateWithPreset, setDateWithPreset] = useState<Date>()

  // Date range
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  })

  // Multiple months range
  const [multiMonthRange, setMultiMonthRange] = useState<DateRange | undefined>()

  // With time
  const [dateTime, setDateTime] = useState<Date>()
  const [selectedHour, setSelectedHour] = useState('12')
  const [selectedMinute, setSelectedMinute] = useState('00')

  // Form dates
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()

  // Thai locale
  const [thaiDate, setThaiDate] = useState<Date>()

  // Multiple selection
  const [multipleDates, setMultipleDates] = useState<Date[] | undefined>()

  const presets = [
    { label: 'Today', value: 0 },
    { label: 'Tomorrow', value: 1 },
    { label: 'In 3 days', value: 3 },
    { label: 'In a week', value: 7 },
    { label: 'In 2 weeks', value: 14 },
    { label: 'In a month', value: 30 },
  ]

  const rangePresets = [
    { label: 'Today', from: new Date(), to: new Date() },
    { label: 'Yesterday', from: subDays(new Date(), 1), to: subDays(new Date(), 1) },
    { label: 'Last 7 days', from: subDays(new Date(), 6), to: new Date() },
    { label: 'Last 30 days', from: subDays(new Date(), 29), to: new Date() },
    { label: 'This month', from: startOfMonth(new Date()), to: endOfMonth(new Date()) },
    { label: 'Next month', from: startOfMonth(addMonths(new Date(), 1)), to: endOfMonth(addMonths(new Date(), 1)) },
  ]

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Date Picker</h1>
          <p className="text-lg text-muted-foreground">
            A date picker component with calendar popup for selecting dates.
          </p>
        </div>

        {/* Basic Date Picker */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Default</h2>
          <p className="text-muted-foreground mb-6">
            Basic date picker with a calendar popup.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    'w-[280px] justify-start text-left font-normal',
                    !date && 'text-muted-foreground'
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, 'PPP') : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  autoFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </section>

        {/* With Presets */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Presets</h2>
          <p className="text-muted-foreground mb-6">
            Date picker with quick selection presets.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    'w-[280px] justify-start text-left font-normal',
                    !dateWithPreset && 'text-muted-foreground'
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateWithPreset ? format(dateWithPreset, 'PPP') : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
                <Select
                  onValueChange={(value) =>
                    setDateWithPreset(addDays(new Date(), parseInt(value)))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select preset" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    {presets.map((preset) => (
                      <SelectItem key={preset.value} value={preset.value.toString()}>
                        {preset.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <div className="rounded-md border">
                  <Calendar
                    mode="single"
                    selected={dateWithPreset}
                    onSelect={setDateWithPreset}
                  />
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </section>

        {/* Date Range Picker */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Date Range</h2>
          <p className="text-muted-foreground mb-6">
            Select a range of dates.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <div className="grid gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="date"
                    variant="outline"
                    className={cn(
                      'w-[300px] justify-start text-left font-normal',
                      !dateRange && 'text-muted-foreground'
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateRange?.from ? (
                      dateRange.to ? (
                        <>
                          {format(dateRange.from, 'LLL dd, y')} -{' '}
                          {format(dateRange.to, 'LLL dd, y')}
                        </>
                      ) : (
                        format(dateRange.from, 'LLL dd, y')
                      )
                    ) : (
                      <span>Pick a date range</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    autoFocus
                    mode="range"
                    defaultMonth={dateRange?.from}
                    selected={dateRange}
                    onSelect={setDateRange}
                    numberOfMonths={2}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </section>

        {/* Date Range with Presets */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Date Range with Presets</h2>
          <p className="text-muted-foreground mb-6">
            Range picker with quick selection presets.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    'w-[300px] justify-start text-left font-normal',
                    !multiMonthRange && 'text-muted-foreground'
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {multiMonthRange?.from ? (
                    multiMonthRange.to ? (
                      <>
                        {format(multiMonthRange.from, 'LLL dd, y')} -{' '}
                        {format(multiMonthRange.to, 'LLL dd, y')}
                      </>
                    ) : (
                      format(multiMonthRange.from, 'LLL dd, y')
                    )
                  ) : (
                    <span>Pick a date range</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <div className="flex">
                  <div className="flex flex-col gap-2 border-r p-4">
                    {rangePresets.map((preset) => (
                      <Button
                        key={preset.label}
                        variant="ghost"
                        size="sm"
                        className="justify-start"
                        onClick={() =>
                          setMultiMonthRange({ from: preset.from, to: preset.to })
                        }
                      >
                        {preset.label}
                      </Button>
                    ))}
                  </div>
                  <Calendar
                    autoFocus
                    mode="range"
                    defaultMonth={multiMonthRange?.from}
                    selected={multiMonthRange}
                    onSelect={setMultiMonthRange}
                    numberOfMonths={2}
                  />
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </section>

        {/* With Time Selection */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Time</h2>
          <p className="text-muted-foreground mb-6">
            Date picker with time selection.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    'w-[280px] justify-start text-left font-normal',
                    !dateTime && 'text-muted-foreground'
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateTime ? (
                    format(dateTime, 'PPP') + ` ${selectedHour}:${selectedMinute}`
                  ) : (
                    <span>Pick date and time</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={dateTime}
                  onSelect={setDateTime}
                  autoFocus
                />
                <div className="border-t p-3">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <Select value={selectedHour} onValueChange={setSelectedHour}>
                      <SelectTrigger className="w-[70px]">
                        <SelectValue placeholder="Hour" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 24 }, (_, i) => (
                          <SelectItem key={i} value={i.toString().padStart(2, '0')}>
                            {i.toString().padStart(2, '0')}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <span className="text-muted-foreground">:</span>
                    <Select value={selectedMinute} onValueChange={setSelectedMinute}>
                      <SelectTrigger className="w-[70px]">
                        <SelectValue placeholder="Min" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 60 }, (_, i) => (
                          <SelectItem key={i} value={i.toString().padStart(2, '0')}>
                            {i.toString().padStart(2, '0')}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </section>

        {/* Form with Date Inputs */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">In a Form</h2>
          <p className="text-muted-foreground mb-6">
            Date pickers used in a form context.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="start-date">Start Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        id="start-date"
                        variant="outline"
                        className={cn(
                          'w-full justify-start text-left font-normal',
                          !startDate && 'text-muted-foreground'
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {startDate ? format(startDate, 'PPP') : <span>Select start date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={startDate}
                        onSelect={setStartDate}
                        disabled={(date) => endDate ? date > endDate : false}
                        autoFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="end-date">End Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        id="end-date"
                        variant="outline"
                        className={cn(
                          'w-full justify-start text-left font-normal',
                          !endDate && 'text-muted-foreground'
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {endDate ? format(endDate, 'PPP') : <span>Select end date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={endDate}
                        onSelect={setEndDate}
                        disabled={(date) => startDate ? date < startDate : false}
                        autoFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              <Button type="submit">Submit</Button>
            </form>
          </div>
        </section>

        {/* Multiple Selection */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Multiple Selection</h2>
          <p className="text-muted-foreground mb-6">
            Select multiple individual dates.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    'w-[280px] justify-start text-left font-normal',
                    !multipleDates?.length && 'text-muted-foreground'
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {multipleDates?.length ? (
                    `${multipleDates.length} date(s) selected`
                  ) : (
                    <span>Select dates</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="multiple"
                  selected={multipleDates}
                  onSelect={setMultipleDates}
                  autoFocus
                />
              </PopoverContent>
            </Popover>
            {multipleDates && multipleDates.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {multipleDates.map((d, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs"
                  >
                    {format(d, 'MMM d, yyyy')}
                  </span>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Disabled Dates */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Disabled Dates</h2>
          <p className="text-muted-foreground mb-6">
            Date picker with disabled past dates and weekends.
          </p>
          <div className="border rounded-lg p-6 bg-card space-y-4">
            <div>
              <Label className="mb-2 block">Disable Past Dates</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-[280px] justify-start text-left font-normal text-muted-foreground"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    <span>Pick a future date</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    disabled={(date) => date < new Date()}
                    autoFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <Label className="mb-2 block">Disable Weekends</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-[280px] justify-start text-left font-normal text-muted-foreground"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    <span>Pick a weekday</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
                    autoFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </section>

        {/* Thai Locale */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Thai Locale</h2>
          <p className="text-muted-foreground mb-6">
            Date picker with Thai language support.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    'w-[280px] justify-start text-left font-normal',
                    !thaiDate && 'text-muted-foreground'
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {thaiDate ? format(thaiDate, 'PPP', { locale: th }) : <span>เลือกวันที่</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={thaiDate}
                  onSelect={setThaiDate}
                  locale={th}
                  autoFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </section>

        {/* Inline Calendar */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Inline Calendar</h2>
          <p className="text-muted-foreground mb-6">
            Calendar displayed inline without popover.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </div>
        </section>

        {/* With Month/Year Dropdowns */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">With Month/Year Dropdown</h2>
          <p className="text-muted-foreground mb-6">
            Calendar with month and year dropdown navigation.
          </p>
          <div className="border rounded-lg p-6 bg-card">
            <Calendar
              mode="single"
              captionLayout="dropdown"
              fromYear={2020}
              toYear={2030}
              className="rounded-md border"
            />
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
