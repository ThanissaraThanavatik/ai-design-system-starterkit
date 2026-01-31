"use client"

import * as React from "react"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Volume2, Sun, Settings, Droplet, Thermometer, Clock, DollarSign, Heart, Zap } from "lucide-react"

export default function SliderPage() {
  const [basicValue, setBasicValue] = React.useState([50])
  const [volumeValue, setVolumeValue] = React.useState([75])
  const [brightnessValue, setBrightnessValue] = React.useState([80])
  const [temperatureValue, setTemperatureValue] = React.useState([22])
  const [priceRange, setPriceRange] = React.useState([100, 500])
  const [speedValue, setSpeedValue] = React.useState([1])
  const [opacityValue, setOpacityValue] = React.useState([100])
  const [fontSizeValue, setFontSizeValue] = React.useState([16])
  const [multiValue, setMultiValue] = React.useState([25, 50, 75])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b">
        <div className="container-wrapper py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Slider</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              A slider component that allows users to select a value from a range.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-wrapper py-12">
        <div className="mx-auto max-w-5xl space-y-12">
          
          {/* Basic Example */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Basic Example</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-8 max-w-md">
                  <div className="space-y-3">
                    <Label>Default</Label>
                    <Slider defaultValue={[50]} className="w-full" />
                  </div>
                  <div className="space-y-3">
                    <Label>With value: {basicValue[0]}%</Label>
                    <Slider value={basicValue} onValueChange={setBasicValue} className="w-full" />
                  </div>
                  <div className="space-y-3">
                    <Label>Disabled</Label>
                    <Slider defaultValue={[30]} disabled className="w-full" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* With Icons */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">With Icons</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-8 max-w-md">
                  <div className="space-y-3">
                    <Label>Volume: {volumeValue[0]}%</Label>
                    <div className="flex items-center gap-4">
                      <Volume2 className="h-5 w-5 text-muted-foreground" />
                      <Slider value={volumeValue} onValueChange={setVolumeValue} className="flex-1" />
                      <span className="w-12 text-right text-sm text-muted-foreground">
                        {volumeValue[0]}%
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Label>Brightness: {brightnessValue[0]}%</Label>
                    <div className="flex items-center gap-4">
                      <Sun className="h-5 w-5 text-muted-foreground" />
                      <Slider value={brightnessValue} onValueChange={setBrightnessValue} className="flex-1" />
                      <span className="w-12 text-right text-sm text-muted-foreground">
                        {brightnessValue[0]}%
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Label>Opacity: {opacityValue[0]}%</Label>
                    <div className="flex items-center gap-4">
                      <Droplet className="h-5 w-5 text-muted-foreground" />
                      <Slider value={opacityValue} onValueChange={setOpacityValue} className="flex-1" />
                      <span className="w-12 text-right text-sm text-muted-foreground">
                        {opacityValue[0]}%
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Range Slider */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Range Slider</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-8 max-w-md">
                  <div className="space-y-3">
                    <Label>Price Range: ${priceRange[0]} - ${priceRange[1]}</Label>
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      min={0}
                      max={1000}
                      step={10}
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label>Time Range: {multiValue[0]}h - {multiValue[1]}h - {multiValue[2]}h</Label>
                    <Slider
                      value={multiValue}
                      onValueChange={setMultiValue}
                      min={0}
                      max={24}
                      step={1}
                      className="w-full"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Sizes */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Sizes</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-8 max-w-md">
                  <div className="space-y-3">
                    <Label>Small (scale-75)</Label>
                    <Slider defaultValue={[50]} className="w-full scale-75 origin-left" />
                  </div>
                  <div className="space-y-3">
                    <Label>Default</Label>
                    <Slider defaultValue={[50]} className="w-full" />
                  </div>
                  <div className="space-y-3">
                    <Label>Large (scale-125)</Label>
                    <Slider defaultValue={[50]} className="w-full scale-125 origin-left" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Real-world Examples */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Real-world Examples</h2>
            <div className="grid gap-6 md:grid-cols-2">
              
              {/* Settings Panel */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    <CardTitle>Settings</CardTitle>
                  </div>
                  <CardDescription>Adjust your preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <Label>Temperature</Label>
                    <div className="flex items-center gap-3">
                      <Thermometer className="h-4 w-4 text-blue-500" />
                      <Slider
                        value={temperatureValue}
                        onValueChange={setTemperatureValue}
                        min={16}
                        max={30}
                        step={1}
                        className="flex-1"
                      />
                      <span className="w-16 text-right font-medium">{temperatureValue[0]}°C</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Label>Fan Speed</Label>
                    <div className="flex items-center gap-3">
                      <Zap className="h-4 w-4 text-yellow-500" />
                      <Slider
                        value={speedValue}
                        onValueChange={setSpeedValue}
                        min={1}
                        max={5}
                        step={1}
                        className="flex-1"
                      />
                      <span className="w-16 text-right font-medium">Level {speedValue[0]}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Label>Brightness</Label>
                    <div className="flex items-center gap-3">
                      <Sun className="h-4 w-4 text-orange-500" />
                      <Slider
                        value={brightnessValue}
                        onValueChange={setBrightnessValue}
                        min={0}
                        max={100}
                        className="flex-1"
                      />
                      <span className="w-16 text-right font-medium">{brightnessValue[0]}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Font Size Preview */}
              <Card>
                <CardHeader>
                  <CardTitle>Font Size</CardTitle>
                  <CardDescription>Adjust text size</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <Label>Font Size: {fontSizeValue[0]}px</Label>
                    <Slider
                      value={fontSizeValue}
                      onValueChange={setFontSizeValue}
                      min={12}
                      max={32}
                      step={1}
                      className="w-full"
                    />
                  </div>
                  <div className="rounded-lg border p-4">
                    <p style={{ fontSize: `${fontSizeValue[0]}px` }}>
                      This is a preview text that changes size based on the slider value above.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Audio Player */}
              <Card>
                <CardHeader>
                  <CardTitle>Audio Player</CardTitle>
                  <CardDescription>Volume and progress control</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label>Progress</Label>
                      <span className="text-sm text-muted-foreground">2:34 / 4:20</span>
                    </div>
                    <Slider defaultValue={[58]} className="w-full" />
                  </div>
                  <div className="space-y-3">
                    <Label>Volume</Label>
                    <div className="flex items-center gap-3">
                      <Volume2 className="h-4 w-4 text-muted-foreground" />
                      <Slider value={volumeValue} onValueChange={setVolumeValue} className="flex-1" />
                      <span className="w-12 text-right text-sm text-muted-foreground">
                        {volumeValue[0]}%
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Product Filter */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    <CardTitle>Price Filter</CardTitle>
                  </div>
                  <CardDescription>Filter products by price</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <Label>Price Range</Label>
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      min={0}
                      max={1000}
                      step={25}
                      className="w-full"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Min</span>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      <span className="font-medium">{priceRange[0]}</span>
                    </div>
                    <span className="text-muted-foreground">-</span>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      <span className="font-medium">{priceRange[1]}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Max</span>
                  </div>
                </CardContent>
              </Card>

            </div>
          </section>

          {/* Interactive Demo */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Interactive Demo</h2>
            <Card>
              <CardHeader>
                <CardTitle>Opacity Demo</CardTitle>
                <CardDescription>Adjust the opacity of the box below</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <Label>Opacity: {opacityValue[0]}%</Label>
                  <Slider
                    value={opacityValue}
                    onValueChange={setOpacityValue}
                    min={0}
                    max={100}
                    className="w-full"
                  />
                </div>
                <div 
                  className="rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-8 text-center text-white font-medium"
                  style={{ opacity: opacityValue[0] / 100 }}
                >
                  Adjust the slider above to change my opacity!
                </div>
              </CardContent>
            </Card>
          </section>

          {/* With Steps */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">With Steps</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-8 max-w-md">
                  <div className="space-y-3">
                    <Label>Step 1 (0-100): {basicValue[0]}</Label>
                    <Slider
                      value={basicValue}
                      onValueChange={setBasicValue}
                      step={1}
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label>Step 10 (0-100): {basicValue[0]}</Label>
                    <Slider
                      value={basicValue}
                      onValueChange={setBasicValue}
                      step={10}
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label>Step 25 (0-100): {basicValue[0]}</Label>
                    <Slider
                      value={basicValue}
                      onValueChange={setBasicValue}
                      step={25}
                      className="w-full"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Vertical Slider */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Vertical Sliders</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-8 justify-center py-8">
                  <div className="space-y-3 flex flex-col items-center">
                    <Label className="rotate-[-90deg] whitespace-nowrap">Volume</Label>
                    <div className="h-48 flex items-center">
                      <Slider
                        value={volumeValue}
                        onValueChange={setVolumeValue}
                        orientation="vertical"
                        className="h-48"
                      />
                    </div>
                  </div>
                  <div className="space-y-3 flex flex-col items-center">
                    <Label className="rotate-[-90deg] whitespace-nowrap">Brightness</Label>
                    <div className="h-48 flex items-center">
                      <Slider
                        value={brightnessValue}
                        onValueChange={setBrightnessValue}
                        orientation="vertical"
                        className="h-48"
                      />
                    </div>
                  </div>
                  <div className="space-y-3 flex flex-col items-center">
                    <Label className="rotate-[-90deg] whitespace-nowrap">Opacity</Label>
                    <div className="h-48 flex items-center">
                      <Slider
                        value={opacityValue}
                        onValueChange={setOpacityValue}
                        orientation="vertical"
                        className="h-48"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

        </div>
      </div>
    </div>
  )
}
