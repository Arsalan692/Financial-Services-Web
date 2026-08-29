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

---

## Revised: `tax-filing.png` and `bookkeeping.png`

The first versions of these two read as cheap. What actually made them
cheap, so it is not repeated:

- **Clutter.** Loose paper strewn across the desk instead of a few
  deliberately placed objects.
- **Cheap materials.** Scratched rustic wood and laminate.
- **Dated hardware.** A thick-bezel monitor and bargain keyboard date the
  bookkeeping shot to roughly 2010.
- **Filler extras.** Anonymous blurred colleagues drifting behind the
  subject, reading as stock-library padding.
- **Generic framing.** "Person at a desk, centred" is the most overused
  business stock composition there is.

**These stay inside the theme's visual language**, which is the important
constraint: bright and high-key, glass and pale surfaces, floor-to-ceiling
glazing blown out to near-white, cool blue-grey grade, soft light with
almost no shadow, navy and light-blue clothing. The upgrade is precision
and restraint — tidy surfaces, modern hardware, good tailoring, a
considered composition — **not** darker or moodier lighting, which would
clash with every other photograph on the site.

### `tax-filing.png` (replaces the original)

```
Editorial-quality corporate photograph for a financial services firm, in a
bright modern office. A composed professional in her forties, wearing a
well-tailored navy blazer over a crisp light-blue shirt, seated at a
glass-topped table, reviewing a single neatly squared stack of tax
documents. Her posture is upright and assured; she is looking down at the
papers, calm and unhurried. The surface is deliberately sparse — the
document stack, a slim pen and one glass of water, nothing else.
Floor-to-ceiling glazing fills the background, daylight blown out to
near-white.

Lighting: large, soft, bright daylight from the window, wrapping gently
around her with a subtle gradient across the table so the frame is not
completely flat. Airy and clean — no harsh shadows, no dark or moody
grading.

Shot on an 85mm lens at f/2 — shallow depth of field, soft background
separation, tack sharp on her hands and the documents. Cool blue-grey
colour grade, slightly desaturated skin tones, light and understated.

Avoid: scattered loose paper or any clutter, rustic or scratched wooden
desks, dark heavy furniture, thick-bezel monitors or dated hardware,
anonymous blurred colleagues drifting in the background, generic centred
"businessman at a desk" framing.

Photorealistic, 3:2 landscape, 1200x800. No legible text on any document,
no logos, no watermarks.
```

### `bookkeeping.png` (replaces the original)

```
Editorial-quality corporate photograph for an accounting firm, in a bright
modern office. A close three-quarter view over the shoulder of a
professional in a well-cut navy blazer, seated at a pale oak desk with a
white surface, working at a slim bezel-less monitor showing a clean,
orderly spreadsheet. One closed ledger and a single pen rest beside a
brushed-aluminium laptop. The desk is immaculate — no loose paper
anywhere. The face is largely out of frame; the hands, the desk and the
screen are the subject.

Lighting: soft, bright daylight from a tall window to camera-right, blown
out to near-white, laying a gentle gradient across the desk so the frame
has some shape without any harsh shadow. Airy and clean throughout.

Shot on a 50mm lens at f/2.2 — shallow depth of field, monitor and hands
sharp, the room falling away softly behind. Cool blue-grey colour grade,
slightly desaturated, restrained and precise.

Avoid: scattered paperwork, thick-bezel or dated monitors, cheap laminate
or dark heavy desks, marled or frumpy knitwear, anonymous blurred
colleagues in the background, dark or moody grading, any cluttered
surface.

Photorealistic, 3:2 landscape, 1200x800. Screen content must be an orderly
grid with no legible text. No logos, no watermarks.
```

## Standing note: natural and realistic

Later feedback, applies to every image from here on. Pushing hard on
"immaculate" and "deliberately sparse" produces photographs that read as
styled sets rather than real workplaces. Keep the theme's bright, airy,
cool blue-grey look, but ask for:

- **candid and unposed** — caught mid-work, not arranged for the camera
- **natural skin texture** — not retouched or over-smoothed
- **a lived-in desk** — a mug, a notebook, a cable. Tidy, not sterile.
- **no one smiling at the lens**

And screens should show the work actually being done, not abstract
placeholder graphics.

### `web-design-development.png` (replaces the original)

The original put two backs across the middle of the frame blocking the
screen, dressed one subject in a rust jumper that fights the site's cool
palette, and showed a grey placeholder wireframe rather than real work.

```
Candid documentary-style photograph of a web developer working in a
bright modern office. A developer in a navy shirt, sleeves pushed up,
sits at a desk in three-quarter view, mid-work and clearly concentrating —
one hand on the keyboard, eyes on the screen, not posed and not looking at
the camera. A large slim monitor shows a real code editor: syntax-
highlighted code in muted blues, greens and greys on a dark editor
background, with a second window showing a partly built website beside it.
A laptop sits open at an angle, and there is a mug and an open notebook on
the desk — a real working setup, tidy but lived in. Floor-to-ceiling
glazing behind, daylight blown out to near-white.

Lighting: bright, soft daylight from the window, a gentle gradient across
the desk. Airy and clean, no harsh shadows, no dark or moody grading.

Shot on a 50mm lens at f/2.2 — shallow depth of field, sharp on the hands
and the screen, the office falling away softly. Cool blue-grey colour
grade, slightly desaturated. Natural skin texture, not retouched or
smoothed.

Avoid: grey placeholder wireframes or abstract blocks on screen, subjects
photographed from behind filling the frame, anyone blocking the monitor,
warm colours such as rust or orange, anyone smiling at the camera, sterile
staged desks with nothing on them, plastic over-retouched skin, dated
thick-bezel hardware, dark or moody grading.

Photorealistic, 3:2 landscape, 1200x800. Code and screen content must be
soft enough that no text is legible. No logos, no watermarks.
```

### `hosting-and-domain.png` (replaces the original)

The original was deliberately dim and lit by screen glow — a mistake in
the brief, since every other photograph on the site is bright and airy.

```
Candid documentary-style photograph of a systems engineer working in a
bright modern office. A professional in a navy shirt sits at a desk in
three-quarter view, mid-work, glancing between a laptop and a large
monitor showing a server monitoring dashboard — smooth uptime graphs and
status tiles in muted blues and greens, alongside a terminal window with
soft monospaced text. One hand rests on a notebook where they have
scribbled a note; a mug sits nearby. A real working setup, tidy but lived
in. Floor-to-ceiling glazing to one side, daylight blown out to
near-white.

Lighting: bright, soft daylight from the window as the dominant source, so
the room reads light and open rather than lit by the screens. No harsh
shadows, no dark or moody grading.

Shot on a 35mm lens at f/2.8 — sharp on the subject and the screens, the
room falling away gently, enough width to show the space. Cool blue-grey
colour grade, slightly desaturated. Natural skin texture, not retouched or
smoothed.

Avoid: dark or dim rooms, screen glow as the main light source, server
racks or cable-heavy data-centre imagery, red or alarming status colours,
anyone smiling at the camera, sterile staged desks, plastic
over-retouched skin, dated hardware, dark or moody grading.

Photorealistic, 3:2 landscape, 1200x800. Dashboard and terminal content
must be soft enough that no text or numbers are legible. No logos, no
watermarks.
```

### `hosting-and-domain.png` (second revision — close hand crop)

Digital Design & Development has only two services, so its two cards
always sit side by side, and the first attempt was nearly the same
photograph as the web-design one: a seated man in a navy shirt at a desk
in three-quarter view. A close hand crop breaks that completely.

The thing that makes a hand crop look cheap is shooting it flat from
directly overhead against a featureless white backdrop, with generic mug-
and-notebook props. `payroll-run` is a close hand crop and reads well,
because the camera sits low and across the desk and a real office falls
away behind it. This does the same: low angle, genuine background depth,
quality materials in frame.

```
Candid documentary-style close-up photograph in a bright modern office,
camera low and just above desk height, looking across the desk rather than
down at it. A pair of hands rests on the keyboard of a slim
brushed-aluminium laptop in the foreground — no face, no person above the
forearms. A crisp navy shirt cuff and a simple steel watch are visible at
one wrist. The laptop screen, angled toward the camera, shows a calm
server uptime dashboard: smooth line graphs and a row of quiet green
status tiles. A second slim monitor sits soft and out of focus behind,
with floor-to-ceiling glazing beyond it blown out to near-white. The desk
is pale oak, tidy but lived in — an open notebook just at the edge of
frame.

Lighting: bright, soft daylight from the glazing as the dominant source,
raking gently across the hands and the desk surface. Airy and clean, no
harsh shadows, no screen glow as the main light, no dark or moody grading.

Shot on a 50mm lens at f/2 — very shallow depth of field, tack sharp on
the hands and the laptop screen, the monitor and window melting into soft
bokeh behind. Real foreground-to-background separation, not a flat plane.
Cool blue-grey colour grade, slightly desaturated. Natural skin texture on
the hands, visible detail, not retouched or smoothed.

Avoid: shooting from directly overhead, flat-lay framing, a featureless
white or seamless backdrop with no sense of place, scattered props or
clutter filling the frame, any visible face, a seated person at a desk in
three-quarter view, server racks or data-centre imagery, red or alarming
status colours, dated hardware, dark or moody grading, plastic
over-retouched skin.

Photorealistic, 3:2 landscape, 1200x800. Dashboard content must be soft
enough that no text or numbers are legible. No logos, no watermarks.
```
