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

| File | Used by | Shipped as |
|---|---|---|
| `generated/working-about.png` | Home → About Company section (replaces the theme's stock video) | `working-about.jpg`, 153 KB |
