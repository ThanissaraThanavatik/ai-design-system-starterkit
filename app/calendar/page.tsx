'use client'

import * as React from 'react'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { CalendarIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { DateRange } from 'react-day-picker'

export default function CalendarShowcasePage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [selectedDates, setSelectedDates] = React.useState<Date[] | undefined>([])
  const [range, setRange] = React.useState<DateRange | undefined>(undefined)
  const [popoverDate, setPopoverDate] = React.useState<Date>()

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Calendar</h1>
          <p className="text-lg text-muted-foreground">
            A calendar component for selecting dates and date ranges.
          </p>
        </div>

        {/* Basic Calendar */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Basic Calendar</h2>
          <p className="text-muted-foreground mb-6">
            A simple calendar for selecting a single date.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Select Date</CardTitle>
                <CardDescription>Click on a date to select it</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Selected Date</CardTitle>
                <CardDescription>Currently selected date</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center h-[350px]">
                <div className="text-center">
                  <p className="text-3xl font-bold">
                    {date?.toLocaleDateString('en-US', { day: 'numeric' })}
                  </p>
                  <p className="text-xl text-muted-foreground">
                    {date?.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {date?.toLocaleDateString('en-US', { weekday: 'long' })}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Date Range */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Date Range</h2>
          <p className="text-muted-foreground mb-6">
            Select a range of dates for booking or scheduling.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Select Range</CardTitle>
                <CardDescription>Click start and end dates</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Calendar
                  mode="range"
                  selected={range}
                  onSelect={setRange}
                  className="rounded-md border"
                  numberOfMonths={2}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Selected Range</CardTitle>
                <CardDescription>Your date selection</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col justify-center h-[350px]">
                <div className="space-y-4">
                  {range?.from && (
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                      <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground">From</span>
                        <span className="font-semibold">
                          {range.from.toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                      </div>
                    </div>
                  )}
                  {range?.to && (
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                      <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground">To</span>
                        <span className="font-semibold">
                          {range.to.toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                      </div>
                    </div>
                  )}
                  {range?.from && range?.to && (
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Duration</span>
                        <span className="text-lg font-bold">
                          {Math.ceil(
                            (range.to.getTime() - range.from.getTime()) / (1000 * 60 * 60 * 24)
                          )}{' '}
                          days
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Multiple Selection */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Multiple Dates</h2>
          <p className="text-muted-foreground mb-6">
            Select multiple individual dates.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Select Multiple</CardTitle>
                <CardDescription>Click to select multiple dates</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Calendar
                  mode="multiple"
                  selected={selectedDates}
                  onSelect={setSelectedDates}
                  className="rounded-md border"
                  disabled={(date) => date < new Date()}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Selected Dates</CardTitle>
                <CardDescription>
                  {selectedDates?.length || 0} date{selectedDates?.length !== 1 ? 's' : ''} selected
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col justify-center h-[350px]">
                <div className="space-y-2 max-h-[300px] overflow-y-auto">
                  {selectedDates && selectedDates.length > 0 ? (
                    selectedDates
                      .sort((a, b) => a.getTime() - b.getTime())
                      .map((date, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 p-2 rounded-lg bg-muted"
                        >
                          <span className="text-sm">
                            {date.toLocaleDateString('en-US', {
                              weekday: 'short',
                              month: 'short',
                              day: 'numeric',
                            })}
                          </span>
                        </div>
                      ))
                  ) : (
                    <p className="text-muted-foreground text-center py-8">
                      No dates selected
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* With Popover */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Date Picker Popover</h2>
          <p className="text-muted-foreground mb-6">
            Calendar triggered from a button input.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Simple Picker</CardTitle>
                <CardDescription>Click to open calendar</CardDescription>
              </CardHeader>
              <CardContent>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        'w-full justify-start text-left font-normal',
                        !popoverDate && 'text-muted-foreground'
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {popoverDate ? (
                        popoverDate.toLocaleDateString()
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={popoverDate}
                      onSelect={setPopoverDate}
                    />
                  </PopoverContent>
                </Popover>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Disabled Dates</CardTitle>
                <CardDescription>Past dates are disabled</CardDescription>
              </CardHeader>
              <CardContent>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        'w-full justify-start text-left font-normal',
                        !popoverDate && 'text-muted-foreground'
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {popoverDate ? (
                        popoverDate.toLocaleDateString()
                      ) : (
                        <span>Pick a future date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={popoverDate}
                      onSelect={setPopoverDate}
                      disabled={(date) => date < new Date() || date < new Date('1900-01-01')}
                    />
                  </PopoverContent>
                </Popover>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Week Starts Monday</CardTitle>
                <CardDescription>Alternative week start</CardDescription>
              </CardHeader>
              <CardContent>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        'w-full justify-start text-left font-normal',
                        !popoverDate && 'text-muted-foreground'
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {popoverDate ? (
                        popoverDate.toLocaleDateString()
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={popoverDate}
                      onSelect={setPopoverDate}
                      weekStartsOn={1}
                    />
                  </PopoverContent>
                </Popover>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Multiple Months */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Multiple Months</h2>
          <p className="text-muted-foreground mb-6">
            Display multiple months at once for easier range selection.
          </p>
          <Card>
            <CardHeader>
              <CardTitle>Two Month View</CardTitle>
              <CardDescription>Select a date range across two months</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center overflow-x-auto">
              <Calendar
                mode="range"
                selected={range}
                onSelect={setRange}
                numberOfMonths={2}
                className="rounded-md border"
                disabled={(date) => date < new Date()}
              />
            </CardContent>
          </Card>
        </section>

        {/* Formatters & Layouts */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Custom Layouts</h2>
          <p className="text-muted-foreground mb-6">
            Different caption layouts and dropdown styles.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Label Layout</CardTitle>
                <CardDescription>Clean label-only header</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  captionLayout="label"
                  className="rounded-md border"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Dropdown Layout</CardTitle>
                <CardDescription>Interactive month/year dropdowns</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  captionLayout="dropdown"
                  className="rounded-md border"
                />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Disabled States */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Disabled States</h2>
          <p className="text-muted-foreground mb-6">
            Various ways to disable dates.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Past Dates Disabled</CardTitle>
                <CardDescription>Only future dates available</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(date) => date < new Date()}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Weekends Disabled</CardTitle>
                <CardDescription>Only weekdays available</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(date) => {
                    const day = date.getDay()
                    return day === 0 || day === 6
                  }}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Real World Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Real World Examples</h2>
          <p className="text-muted-foreground mb-6">
            Common calendar use cases.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Booking Form */}
            <Card>
              <CardHeader>
                <CardTitle>Booking Form</CardTitle>
                <CardDescription>Hotel or event booking</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Check-in</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          'w-full justify-start text-left font-normal',
                          !range?.from && 'text-muted-foreground'
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {range?.from ? (
                          range.from.toLocaleDateString()
                        ) : (
                          <span>Select check-in date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="range"
                        selected={range}
                        onSelect={setRange}
                        numberOfMonths={2}
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Check-out</label>
                  <div className="p-3 rounded-lg bg-muted">
                    {range?.to ? (
                      <span>{range.to.toLocaleDateString()}</span>
                    ) : (
                      <span className="text-muted-foreground">Select check-out date</span>
                    )}
                  </div>
                </div>
                {range?.from && range?.to && (
                  <Button className="w-full">Book Now</Button>
                )}
              </CardContent>
            </Card>

            {/* Event Scheduler */}
            <Card>
              <CardHeader>
                <CardTitle>Event Scheduler</CardTitle>
                <CardDescription>Select multiple event dates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Select Event Dates</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          'w-full justify-start text-left font-normal',
                          !selectedDates?.length && 'text-muted-foreground'
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDates && selectedDates.length > 0 ? (
                          <span>{selectedDates.length} dates selected</span>
                        ) : (
                          <span>Select event dates</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="multiple"
                        selected={selectedDates}
                        onSelect={setSelectedDates}
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Selected Dates</label>
                  <div className="p-3 rounded-lg bg-muted max-h-[120px] overflow-y-auto">
                    {selectedDates && selectedDates.length > 0 ? (
                      <ul className="space-y-1">
                        {selectedDates
                          .sort((a, b) => a.getTime() - b.getTime())
                          .map((date, i) => (
                            <li key={i} className="text-sm">
                              {date.toLocaleDateString('en-US', {
                                weekday: 'short',
                                month: 'short',
                                day: 'numeric',
                              })}
                            </li>
                          ))}
                      </ul>
                    ) : (
                      <p className="text-muted-foreground text-sm">No dates selected</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
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
