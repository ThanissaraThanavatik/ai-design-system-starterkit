# Yadom Product Images

Downloaded from Figma node 5021:220 - Yadom "Our Products" Section

## Image Files

### Standard Resolution (1x)
- `/images/yadom/products/product-1-classic.png` (630x520, 115KB)
  - **Product:** ยาดมขวดคลาสสิก (Classic Bottle)
  - **Price:** ฿59

- `/images/yadom/products/product-2-pocket.png` (630x520, 176KB)
  - **Product:** ยาดมพกพา (Pocket Size)
  - **Price:** ฿39

- `/images/yadom/products/product-3-premium.png` (630x520, 6.1KB)
  - **Product:** ยาดมพรีเมียม (Premium)
  - **Price:** ฿99

- `/images/yadom/products/product-4-gift.png` (630x520, 5.9KB)
  - **Product:** ชุดของขวัญ (Gift Set)
  - **Price:** ฿199

### Retina/High-DPI (2x)
For retina displays, use the @2x versions:
- `/images/yadom/products/product-1-classic@2x.png`
- `/images/yadom/products/product-2-pocket@2x.png`
- `/images/yadom/products/product-3-premium@2x.png`
- `/images/yadom/products/product-4-gift@2x.png`

## Usage in Next.js/Image Component

### Standard usage:
```tsx
<Image
  src="/images/yadom/products/product-1-classic.png"
  alt="ยาดมขวดคลาสสิก - ฿59"
  width={630}
  height={520}
  className="rounded-lg"
/>
```

### With responsive sizes:
```tsx
<Image
  src="/images/yadom/products/product-1-classic.png"
  alt="ยาดมขวดคลาสสิก - ฿59"
  width={630}
  height={520}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
  className="rounded-lg"
/>
```

### Using srcset for retina displays:
```tsx
<img
  src="/images/yadom/products/product-1-classic.png"
  srcSet="/images/yadom/products/product-1-classic@2x.png 2x"
  alt="ยาดมขวดคลาสสิก - ฿59"
  width={630}
  height={520}
  className="rounded-lg"
/>
```

## Product Data Structure

```tsx
const products = [
  {
    id: 1,
    name: "ยาดมขวดคลาสสิก",
    nameEn: "Classic Bottle",
    description: "กลิ่นหอมสดชื่น สูตรดั้งเดิม",
    price: 59,
    image: "/images/yadom/products/product-1-classic.png",
    image2x: "/images/yadom/products/product-1-classic@2x.png"
  },
  {
    id: 2,
    name: "ยาดมพกพา",
    nameEn: "Pocket Size",
    description: "พกพาสะดวก ใช้ง่ายทุกที่",
    price: 39,
    image: "/images/yadom/products/product-2-pocket.png",
    image2x: "/images/yadom/products/product-2-pocket@2x.png"
  },
  {
    id: 3,
    name: "ยาดมพรีเมียม",
    nameEn: "Premium",
    description: "ส่วนผสมพรีเมียม หอมหลากหลาย",
    price: 99,
    image: "/images/yadom/products/product-3-premium.png",
    image2x: "/images/yadom/products/product-3-premium@2x.png"
  },
  {
    id: 4,
    name: "ชุดของขวัญ",
    nameEn: "Gift Set",
    description: "ชุดของขวัญพิเศษ ให้คนพิเศษ",
    price: 199,
    image: "/images/yadom/products/product-4-gift.png",
    image2x: "/images/yadom/products/product-4-gift@2x.png"
  }
];
```

## Source

- **Figma File:** IasfDpqUwtRZOaWQ6C5Mtn
- **Node ID:** 5021:220
- **Section:** Yadom "Our Products" Section
- **Screenshot URL:** https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/495e59a7-06a5-461c-8929-b9432024e716

## Notes

- Images were extracted from the Figma design screenshot
- Standard resolution: 630x520 pixels
- Retina resolution: 1240x1040 pixels (2x scale)
- All images are in PNG format with transparency support
- Images are optimized for web use
