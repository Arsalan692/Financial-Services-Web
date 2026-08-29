# Image prompts — service pages

Fourteen prompts, one per service page. Each is complete and self-contained:
copy the whole block, paste it into Nano Banana, save the result under the
filename in the heading.

## Why the earlier batch looked identical

The first set shared one style paragraph and varied only a few words, so
the model had almost nothing to differentiate on and converged on the same
face and the same composition every time.

These are built differently:

- **Six have no face at all** — hands, flat-lays, over-the-shoulder, or
  shot from behind. That is the single most reliable way to stop the same
  person reappearing.
- **Framing changes every time** — close crop, high angle, wide room, low
  angle, through glass, over a shoulder.
- **Where a face does appear**, the person is described specifically and
  differently, and the prompt says outright not to reuse an earlier subject.

Generate them **one at a time**, not as a batch. If a face still repeats,
add this line to the end of the prompt:

> A completely different person from any previous image — different age,
> different appearance, different clothing.

## Specs

All fourteen: **1200 × 800 px, 3:2 landscape**, matching the theme's own
`single-service.jpg`.

Give me the files as PNG under the filename in each heading. I convert them
to optimised JPEGs (quality 86, roughly 150 KB each) into
`frontend/public/assets/generated/` and wire each one to its service —
originals stay in `assets-source/generated/`.

---

## 1. `payroll-run.png`

```
Extreme close-up of a printed payroll register on a desk, held at the edge by
one pair of hands. A laptop keyboard, a calculator and a short stack of pay
stubs sit alongside. No face in frame, no person above the wrists. Shot from
just above the desk at a shallow angle. Photorealistic corporate stock
photograph, 3:2 landscape, 1200x800. Cool blue-grey colour grade, bright
blown-out daylight from a window to the left, very shallow depth of field so
the background office falls away into soft bokeh, soft light with no harsh
shadows. No text legible on any document, no logos, no watermarks, no
readable screen content.
```

## 2. `bookkeeping.png`

```
A woman in her fifties with short grey hair, wearing a charcoal cardigan,
photographed from behind and slightly to the side so her face is not visible.
She is entering figures at a desktop computer, with bank statements and a
paper ledger spread beside the keyboard. Photorealistic corporate stock
photograph, 3:2 landscape, 1200x800. Cool blue-grey colour grade, slightly
desaturated tones, large bright window ahead of her blown out to near-white,
shallow depth of field, soft natural light with no harsh shadows. No text
legible, no logos, no watermarks, no readable screen content.
```

## 3. `tax-filing.png`

```
A South Asian man in his thirties, clean-shaven, in a light blue shirt with
no tie, seated at a desk in three-quarter view, looking down at printed tax
forms rather than at the camera. A laptop is half-open beside him and a wall
calendar is visible out of focus behind. Photorealistic corporate stock
photograph, 3:2 landscape, 1200x800. Cool blue-grey colour grade, slightly
desaturated skin tones, window light entering from the left, shallow depth of
field with soft bokeh, soft light with no harsh shadows. Do not reuse a
subject from any other image in this set. No text legible, no logos, no
watermarks, no readable screen content.
```

## 4. `ap-ar.png`

```
High-angle shot looking down onto a meeting table where two colleagues are
sorting vendor invoices into two separate piles. Only their arms, hands and
shoulders are in frame — no faces. Paper documents dominate the composition.
Photorealistic corporate stock photograph, 3:2 landscape, 1200x800. Cool
blue-grey colour grade, bright diffuse daylight from above and behind,
shallow depth of field falling off at the table edges, soft light with no
harsh shadows. No text legible on the documents, no logos, no watermarks.
```

## 5. `bank-reconciliation.png`

```
Extreme close-up of a printed bank statement lying on a desk, with a single
hand holding a slim pen tracing down a column of figures. A computer monitor
sits far out of focus in the background. No face, no person beyond the one
hand. Macro-style framing, very shallow depth of field. Photorealistic
corporate stock photograph, 3:2 landscape, 1200x800. Cool blue-grey colour
grade, cool daylight from the right, soft light with no harsh shadows. Figures
on the statement must be blurred and unreadable. No logos, no watermarks.
```

## 6. `retail-operations.png`

```
Wide interior shot of a bright, clean retail stockroom with tall shelving
receding into the distance. A Black woman in her forties, hair tied back,
wearing a simple navy work shirt, stands in the mid-distance in profile
holding a tablet and looking up at stock on a shelf. She is small in the
frame; the room is the subject. Photorealistic corporate stock photograph,
3:2 landscape, 1200x800. Cool blue-grey colour grade, bright overhead light
plus daylight from a high window, moderate depth of field, soft light with no
harsh shadows. Do not reuse a subject from any other image in this set. No
text legible, no brand names on packaging, no logos, no watermarks.
```

## 7. `email-marketing.png`

```
An East Asian man in his twenties with dark tousled hair, wearing a plain
grey t-shirt, seated at a dual-monitor desk in strict side profile, looking
at the left-hand screen. Low camera angle, close to desk height, so the
monitors rise above him. Photorealistic corporate stock photograph, 3:2
landscape, 1200x800. Cool blue-grey colour grade, slightly desaturated skin
tones, large bright window behind the monitors blown out to near-white,
shallow depth of field, soft light with no harsh shadows. Do not reuse a
subject from any other image in this set. No text legible, no logos, no
watermarks, no readable screen content.
```

## 8. `appointment-setting.png`

```
Over-the-shoulder shot from behind a woman in her thirties wearing a slim
telephone headset, her dark hair in a low ponytail. The camera looks past her
shoulder toward a monitor showing an out-of-focus weekly calendar grid. Her
face is not visible. Photorealistic corporate stock photograph, 3:2 landscape,
1200x800. Cool blue-grey colour grade, bright window light from the left edge
of frame, shallow depth of field with the screen softly out of focus, soft
light with no harsh shadows. No text legible, no logos, no watermarks, no
readable screen content.
```

## 9. `market-research.png`

```
Wide shot across a long conference table where two analysts sit opposite one
another studying large printed bar charts and data sheets spread between
them. One is an older white man with glasses and grey hair in a navy suit;
the other is a younger Latina woman in a cream blazer. Both are small in a
wide frame and looking down at the printouts, not at the camera. Floor-to-
ceiling windows fill the background. Photorealistic corporate stock
photograph, 3:2 landscape, 1200x800. Cool blue-grey colour grade, daylight
blown out through the windows, moderate depth of field, soft light with no
harsh shadows. Do not reuse subjects from any other image in this set. Chart
data must be blurred and unreadable. No logos, no watermarks.
```

## 10. `content-marketing.png`

```
Overhead flat-lay of a writer's desk: an open laptop, a spiral notebook with
a hand-drawn monthly content calendar grid, a couple of loose printed pages,
a pen and a white coffee cup, arranged on a pale wood surface. One pair of
hands rests at the lower edge of frame. No face, no person above the wrists.
Photorealistic corporate stock photograph, shot straight down, 3:2 landscape,
1200x800. Cool blue-grey colour grade, bright soft daylight from the upper
left, gentle shadows only, no harsh contrast. Handwriting must be illegible
scribble. No text, no logos, no watermarks, no readable screen content.
```

## 11. `linkedin-automation.png`

```
A Middle Eastern man in his forties with a short beard, in a dark grey suit
with an open collar, seen at a distance through a glass office partition,
seated at a laptop in a modern open-plan office. Faint reflections on the
glass sit between the camera and him, so he reads as slightly abstracted.
Photorealistic corporate stock photograph, 3:2 landscape, 1200x800. Cool
blue-grey colour grade, bright daylight beyond him blown out to near-white,
shallow depth of field with the glass reflections in focus and the man softer,
soft light with no harsh shadows. Do not reuse a subject from any other image
in this set. No text legible, no logos, no watermarks, no readable screen
content.
```

## 12. `prospect-list-building.png`

```
Close-up of a large desktop monitor displaying a spreadsheet of contact rows,
deliberately out of focus so no data is readable. A person's silhouette sits
blurred and unrecognisable at the edge of frame, backlit by a window — no
discernible face. The screen and the desk edge dominate the composition.
Photorealistic corporate stock photograph, 3:2 landscape, 1200x800. Cool
blue-grey colour grade, strong backlight from a window behind the monitor,
very shallow depth of field, soft light with no harsh shadows. All screen
content must be blurred and unreadable. No logos, no watermarks.
```

## 13. `web-design-development.png`

```
Two people photographed from behind, standing shoulder to shoulder at a
standing desk, both looking at a monitor showing a simple greyscale website
wireframe. A printed wireframe sketch and a marker lie on the desk beside
them. Neither face is visible. One wears a rust-coloured jumper, the other a
white shirt. Photorealistic corporate stock photograph, 3:2 landscape,
1200x800. Cool blue-grey colour grade, bright window light ahead of them,
shallow depth of field, soft light with no harsh shadows. The wireframe must
be plain grey boxes with no readable text. No logos, no watermarks.
```

## 14. `hosting-and-domain.png`

```
A person in their thirties with short cropped hair, in a plain dark shirt,
seen in side profile checking a wall-mounted monitor displaying abstract
uptime graphs and status tiles. The room is a quiet, clean office corner lit
mainly by the screen and a cool window off to one side, dimmer than a typical
open office. Photorealistic corporate stock photograph, 3:2 landscape,
1200x800. Cool blue-grey colour grade leaning slightly cooler than the rest of
the set, screen glow on the face, shallow depth of field, soft light with no
harsh shadows. Do not reuse a subject from any other image in this set. Graphs
must be abstract shapes with no readable text or numbers. No logos, no
watermarks.
```

---

## Still outstanding: third hero slide

Not part of the fourteen. The homepage hero currently has two slides
(financial, B2B) using the theme's own photography. A third for the Digital
vertical needs generating, because nothing in the theme reads as web work.

Save as `hero-digital.png` — note this one is **1920 × 1080**, not 3:2,
because it is a full-bleed background rather than an inline image. The
composition must leave the **left half fairly empty**, since the headline and
buttons sit there.

```
Wide cinematic shot of a modern design studio, viewed from the right-hand
side of the room. Two people work at large monitors on the right of the
frame, seen from behind and at a distance, one sketching a layout on paper.
The left half of the frame is deliberately open and uncluttered — empty desk
surface and a bright window wall — leaving clear space for text. Photorealistic
corporate stock photograph, 16:9 landscape, 1920x1080. Cool blue-grey colour
grade, slightly desaturated, daylight through the window blown out to
near-white on the left, shallow depth of field, soft light with no harsh
shadows. No faces clearly visible. No text, no logos, no watermarks, no
readable screen content.
```
