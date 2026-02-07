# Session: Why You Use Our Product Section - Figma Node 5024-375

## Session ID: `why-you-use-our-product-section`

## Figma Reference
- **File:** https://www.figma.com/design/IasfDpqUwtRZOaWQ6C5Mtn/Joo-shadcn_ui-components-with-variables---Tailwind-classes--Copy-
- **Node ID:** 5024-375
- **Section Name:** "why you use our product"

---

## Design Overview

A 4-card feature grid section showcasing the product benefits with a playful, lifestyle-oriented headline that appeals to a younger Thai audience.

### Aesthetic Direction
- **Tone:** Modern, approachable, lifestyle-focused
- **Style:** Clean card-based layout with rounded corners
- **Color Palette:** Primary teal (#009689) accents on white cards with subtle borders
- **Typography:** Inter font family with clear hierarchy

---

## Structure

### 1. Title Section

**Container:** Title (FRAME)
- Layout: Vertical flex, center aligned
- Width: 1152px (full container width)
- Item Spacing: 24px

**Headline:**
- **Text:** "ชิวๆแต่ติดใจ"
- **Translation:** "Chill but hooked" / "Relaxed yet addicted"
- **Font:** Inter SemiBold, 60px
- **Color:** Primary Teal (#009689)
- **Text Align:** Center
- **Style:** Playful, colloquial Thai phrase appealing to younger demographics

**Subheadline:**
- **Text:** "ผลิตภัณฑ์คุณภาพที่ตอบโจทย์ทุกความต้องการ ด้วยส่วนผสมจากธรรมชาติ"
- **Translation:** "Quality products that meet all needs with natural ingredients"
- **Font:** Inter Medium, 24px
- **Color:** Gray (#737373)
- **Text Align:** Center

---

### 2. Feature Cards Container

**Container:** container (FRAME)
- Layout: Horizontal grid
- Item Spacing: 24px (VariableID:626:3631)
- Cards: 4-column grid layout

---

### 3. Feature Cards (4 cards)

Each card follows the same structure:

**Card Structure:**
- Type: FRAME with rounded corners
- Border Radius: 12px (VariableID:90:557)
- Background: White (#ffffff)
- Border: 1px solid light gray (VariableID:374:417)
- Padding: 24px horizontal, 16px vertical
- Layout: Vertical flex
- Item Spacing: 24px

---

#### Card 1: Natural Ingredients

**Icon:**
- Name: leaf
- Type: Instance (vector illustration)
- Style: Outline/stroke icon

**Title:**
- **Text:** "ส่วนผสมจากสมุนไพรธรรมชาติ"
- **Translation:** "Natural herbal ingredients"
- **Font:** Inter SemiBold, 24px
- **Color:** Dark (#0a0a0a)

**Description:**
- **Text:** "สารสกัดจากสมุนไพรไทย ปลอดภัย ไร้สารเคมีเป็นพิษ"
- **Translation:** "Extracts from Thai herbs, safe, free from toxic chemicals"
- **Font:** Inter Regular, 16px
- **Color:** Gray (#737373)

---

#### Card 2: Portable

**Icon:**
- Name: luggage-03
- Type: Instance (vector illustration)
- Style: Outline/stroke icon

**Title:**
- **Text:** "พกพาง่าย ใช้ได้ทุกที่ทุกเวลา"
- **Translation:** "Easy to carry, use anywhere anytime"
- **Font:** Inter SemiBold, 24px
- **Color:** Dark (#0a0a0a)

**Description:**
- **Text:** ""เพื่อนคู่ใจ ไปได้ทุกที่" ขนาดกะทัดรัด พร้อมดูแลคุณตลอดวัน"
- **Translation:** ""A trusted companion that goes everywhere" Compact size, ready to care for you all day"
- **Font:** Inter Regular, 16px
- **Color:** Gray (#737373)

---

#### Card 3: Relief

**Icon:**
- Name: wind-03
- Type: Instance (vector illustration)
- Style: Outline/stroke icon

**Title:**
- **Text:** "บรรเทาอาการวิงเวียน ปวดหัว"
- **Translation:** "Relieves dizziness and headaches"
- **Font:** Inter SemiBold, 24px
- **Color:** Dark (#0a0a0a)

**Description:**
- **Text:** "ช่วยบรรเทาอาการไม่สบายได้อย่างรวดเร็ว"
- **Translation:** "Helps relieve discomfort quickly"
- **Font:** Inter Regular, 16px
- **Color:** Gray (#737373)

---

#### Card 4: Fresh Scent

**Icon:**
- Name: stars-02
- Type: Instance (vector illustration)
- Style: Outline/stroke icon

**Title:**
- **Text:** "กลิ่นหอมสดชื่น ตื่นตัวทันที"
- **Translation:** "Fresh scent, instantly refreshed"
- **Font:** Inter SemiBold, 24px
- **Color:** Dark (#0a0a0a)

**Description:**
- **Text:** "กลิ่นหอมจากธรรมชาติ ช่วยให้รู้สึกสดชื่น กระปรี้กระเปร่า"
- **Translation:** "Natural fragrance that makes you feel fresh and energized"
- **Font:** Inter Regular, 16px
- **Color:** Gray (#737373)

---

## Design Tokens Used

### Colors
- **Primary Teal:** #009689 (rgba(0, 150, 137, 1)) - VariableID:5018:3573
- **White:** #ffffff (rgba(255, 255, 255, 1)) - VariableID:373:398
- **Dark Text:** #0a0a0a (rgba(10, 10, 10, 1)) - VariableID:402:601
- **Gray Text:** #737373 (rgba(115, 115, 115, 1)) - VariableID:374:417
- **Border Gray:** Light gray (VariableID:374:417)

### Typography
- **Font Family:** Inter
- **Headline:** 60px, SemiBold (600), Line height 60px
- **Subheadline:** 24px, Medium (500), Line height 32px
- **Card Title:** 24px, SemiBold (600)
- **Card Description:** 16px, Regular (400)

### Spacing
- **Section Padding:** 32px (VariableID:90:332) top/bottom, 64px (VariableID:90:349) left/right
- **Title Container Item Spacing:** 24px (VariableID:455:677)
- **Cards Container Item Spacing:** 24px (VariableID:626:3631)
- **Card Padding:** 16px (VariableID:90:279) vertical, 24px (VariableID:90:301) horizontal
- **Card Internal Spacing:** 24px (VariableID:381:575)

### Border Radius
- **Cards:** 12px (VariableID:90:557)

---

## Layout Specifications

**Section Dimensions:**
- X: 144px (left padding from viewport)
- Y: 1068px (position in page flow)
- Width: 1152px
- Layout: Vertical stack (Title → Cards)

**Cards Layout:**
- Type: 4-column grid
- Gap: 24px
- Equal width columns
- Responsive: Should stack to 2x2 on tablet, 1 column on mobile

---

## Implementation Notes

1. **Headline Tone:** The phrase "ชิวๆแต่ติดใจ" is intentionally casual/playful in Thai, targeting a younger demographic. Keep this tone in any translations.

2. **Icons:** The section uses stroke/outline style icons (leaf, luggage, wind, stars). These should be exported as SVG or use an icon library like Lucide with stroke-width adjustments.

3. **Card Hover:** Consider adding subtle hover effects (elevation change, border color shift to primary teal) for interactivity.

4. **Responsive Behavior:**
   - Desktop: 4 columns
   - Tablet (md): 2x2 grid
   - Mobile (sm): Single column stack

5. **Text Alignment:** All text within cards should be left-aligned, while the section title is center-aligned.

---

## Assets Required

### Icons (SVG)
1. `leaf.svg` - Natural ingredients icon
2. `luggage.svg` or `briefcase.svg` - Portable/travel icon
3. `wind.svg` - Relief/breeze icon
4. `stars.svg` - Freshness/refresh icon

*Note: These are stroke-style icons, not filled. Use outline/stroke variants.*

### Images
None required for this section.

---

## Accessibility Considerations

- Ensure sufficient color contrast (WCAG AA)
- Card borders help define boundaries for low-vision users
- Icons should have aria-labels or be decorative only
- Consider focus states for keyboard navigation

---

## Related Sections

- **Precedes:** Product Details section
- **Follows:** Concept Section (5024-404)
- **Part of:** "Why Yadom" narrative flow in the landing page

---

*Last Updated: 2026-02-07*
*Figma File Version: 2317734859908171695*
