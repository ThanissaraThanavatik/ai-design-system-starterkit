export interface ComponentDef {
  name: string
  description: string
  href: string
}

export interface CategoryDef {
  title: string
  icon: string
  components: ComponentDef[]
}

export const componentCategories: Record<string, CategoryDef> = {
  layout: {
    title: 'Layout',
    icon: 'Layout',
    components: [
      { name: 'Card', description: 'Container component for grouped content', href: '/card' },
      { name: 'Sheet', description: 'Slide-over panel component', href: '/sheet' },
      { name: 'Sidebar', description: 'Navigation sidebar component', href: '/sidebar' },
      { name: 'Separator', description: 'Visual separator/divider component', href: '/separator' },
      { name: 'Scroll Area', description: 'Scrollable container with custom styling', href: '/scroll-area' },
      { name: 'Resizable', description: 'Resizable panel component', href: '/resizable' },
      { name: 'Aspect Ratio', description: 'Aspect ratio container', href: '/aspect-ratio' },
    ],
  },
  forms: {
    title: 'Forms',
    icon: 'FormInput',
    components: [
      { name: 'Button', description: 'Interactive button component', href: '/button' },
      { name: 'Button Group', description: 'Group of related buttons', href: '/button-group' },
      { name: 'Input', description: 'Text input field component', href: '/input' },
      { name: 'Input Group', description: 'Combined input with addons', href: '/input-group' },
      { name: 'Input OTP', description: 'One-time password input', href: '/input-otp' },
      { name: 'Textarea', description: 'Multi-line text input', href: '/textarea' },
      { name: 'Select', description: 'Select dropdown component', href: '/select' },
      { name: 'Native Select', description: 'Styled native select', href: '/native-select' },
      { name: 'Checkbox', description: 'Checkbox input component', href: '/checkbox' },
      { name: 'Radio Group', description: 'Radio button group', href: '/radio-group' },
      { name: 'Switch', description: 'Toggle switch component', href: '/switch' },
      { name: 'Label', description: 'Accessible form label', href: '/label' },
      { name: 'Slider', description: 'Range slider component', href: '/slider' },
      { name: 'Calendar', description: 'Date picker calendar', href: '/calendar' },
      { name: 'Date Picker', description: 'Date selection popup', href: '/date-picker' },
      { name: 'Form', description: 'Form builder component', href: '/form' },
      { name: 'Field', description: 'Form field wrapper', href: '/field' },
    ],
  },
  navigation: {
    title: 'Navigation',
    icon: 'Navigation',
    components: [
      { name: 'Tabs', description: 'Tabbed content component', href: '/tabs' },
      { name: 'Breadcrumb', description: 'Navigation breadcrumb', href: '/breadcrumb' },
      { name: 'Navigation Menu', description: 'Horizontal navigation', href: '/navigation-menu' },
      { name: 'Pagination', description: 'Pagination component', href: '/pagination' },
      { name: 'Menubar', description: 'Horizontal menu bar', href: '/menubar' },
      { name: 'Command', description: 'Command palette', href: '/command' },
      { name: 'Combobox', description: 'Autocomplete input', href: '/combobox' },
    ],
  },
  overlays: {
    title: 'Overlays',
    icon: 'Layers',
    components: [
      { name: 'Dialog', description: 'Modal dialog component', href: '/dialog' },
      { name: 'Alert Dialog', description: 'Confirmation dialog', href: '/alert-dialog' },
      { name: 'Drawer', description: 'Slide-in panel', href: '/drawer' },
      { name: 'Dropdown Menu', description: 'Dropdown menu', href: '/dropdown-menu' },
      { name: 'Context Menu', description: 'Right-click menu', href: '/context-menu' },
      { name: 'Popover', description: 'Popover tooltip', href: '/popover' },
      { name: 'Tooltip', description: 'Tooltip component', href: '/tooltip' },
      { name: 'Hover Card', description: 'Hover preview card', href: '/hover-card' },
    ],
  },
  dataDisplay: {
    title: 'Data Display',
    icon: 'Table',
    components: [
      { name: 'Table', description: 'Data table component', href: '/table' },
      { name: 'Data Table', description: 'Advanced data table', href: '/data-table' },
      { name: 'Badge', description: 'Status badge component', href: '/badge' },
      { name: 'Avatar', description: 'User avatar component', href: '/avatar' },
      { name: 'Skeleton', description: 'Loading placeholder', href: '/skeleton' },
      { name: 'Chart', description: 'Data visualization charts', href: '/chart' },
      { name: 'KPI', description: 'Key performance indicators', href: '/kpi' },
      { name: 'Empty', description: 'Empty state component', href: '/empty' },
      { name: 'Item', description: 'List item component', href: '/item' },
      { name: 'Accordion', description: 'Expandable sections', href: '/accordion' },
      { name: 'Collapsible', description: 'Collapsible panel', href: '/collapsible' },
      { name: 'Carousel', description: 'Image carousel', href: '/carousel' },
    ],
  },
  feedback: {
    title: 'Feedback',
    icon: 'Bell',
    components: [
      { name: 'Alert', description: 'Alert notification', href: '/alert' },
      { name: 'Progress', description: 'Progress indicator', href: '/progress' },
      { name: 'Spinner', description: 'Loading spinner', href: '/spinner' },
      { name: 'Sonner', description: 'Toast notifications', href: '/sonner' },
    ],
  },
  utilities: {
    title: 'Utilities',
    icon: 'Wrench',
    components: [
      { name: 'Toggle', description: 'Toggle button', href: '/toggle' },
      { name: 'Toggle Group', description: 'Group of toggles', href: '/toggle-group' },
      { name: 'KBD', description: 'Keyboard key display', href: '/kbd' },
    ],
  },
}

export type ComponentCategory = keyof typeof componentCategories

export const allComponents: ComponentDef[] = Object.values(componentCategories).flatMap(
  (category) => category.components
)

export const getComponentByHref = (href: string): ComponentDef | undefined => {
  return allComponents.find((component) => component.href === href)
}

export const getCategoryByComponentHref = (href: string): string | undefined => {
  for (const [key, category] of Object.entries(componentCategories)) {
    if (category.components.some((c) => c.href === href)) {
      return key
    }
  }
  return undefined
}
