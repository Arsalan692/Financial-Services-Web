# assets-source

Full-resolution originals of every generated image, kept out of the build.

Nano Banana returns PNG, which is lossless and therefore very heavy for
photographs — `working-about.png` was 1.85 MB where the same image as a
quality-86 progressive JPEG is 153 KB, a 92% saving with no visible loss.

So: **originals live here, optimised JPEGs ship from
`frontend/public/assets/images/`.** Nothing here is served to the browser.

To convert a new one:

```bash
python -c "
from PIL import Image
im = Image.open('assets-source/generated/NAME.png').convert('RGB')
im.save('frontend/public/assets/images/NAME.jpg', 'JPEG',
        quality=86, optimize=True, progressive=True)
"
```

Keep the originals — if we ever need a different crop, a retina variant, or
a WebP version, they are the source to go back to.

## Contents

| Original | Used by | Shipped as |
|---|---|---|
| `generated/ap-ar.jpeg` | Service page → ap-ar | `ap-ar.jpg`, 127 KB |
| `generated/appointment-setting.jpeg` | Service page → appointment-setting | `appointment-setting.jpg`, 111 KB |
| `generated/bank-reconciliation.jpeg` | Service page → bank-reconciliation | `bank-reconciliation.jpg`, 89 KB |
| `generated/bookkeeping.jpeg` | Service page → bookkeeping (also the Financial Services category card) | `bookkeeping.jpg`, 101 KB |
| `generated/content-marketing.jpeg` | Service page → content-marketing | `content-marketing.jpg`, 128 KB |
| `generated/email-marketing.jpeg` | Service page → email-marketing | `email-marketing.jpg`, 101 KB |
| `generated/hero-digital.jpeg` | Home → hero slide 3, Design & Development (16:9) | `hero-digital.jpg`, 85 KB |
| `generated/hosting-and-domain.jpeg` | Service page → hosting-and-domain | `hosting-and-domain.jpg`, 95 KB |
| `generated/linkedin-automation.jpeg` | Service page → linkedin-automation | `linkedin-automation.jpg`, 98 KB |
| `generated/market-research.jpeg` | Service page → market-research (also the B2B Lead Generation category card) | `market-research.jpg`, 106 KB |
| `generated/payroll-run.jpeg` | Service page → payroll-run | `payroll-run.jpg`, 100 KB |
| `generated/prospect-list-building.jpeg` | Service page → prospect-list-building | `prospect-list-building.jpg`, 75 KB |
| `generated/retail-operations.jpeg` | Service page → retail-operations | `retail-operations.jpg`, 173 KB |
| `generated/tax-filing.jpeg` | Service page → tax-filing | `tax-filing.jpg`, 87 KB |
| `generated/web-design-development.jpeg` | Service page → web-design-development (also the Digital Design & Development category card) | `web-design-development.jpg`, 125 KB |
| `generated/working-about.png` | Home → About Company section (replaces the theme stock video) | `working-about.jpg`, 153 KB |

Prompts that produced these live in `image-prompts.md`. Four were
regenerated after review — bookkeeping, tax-filing, web-design-development
and hosting-and-domain — and hosting-and-domain twice, because its first
replacement was nearly identical to the web-design one and the two sit
side by side on the only two-card category page.
