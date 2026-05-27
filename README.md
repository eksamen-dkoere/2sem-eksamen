# TEKNISK DOKUMENTATION - DANKORT ØREMÆRKET EKSAMEN - Gruppe 2

## Kort om projektet

Dette projekt er vores eksamensprojekt, hvor vi har lavet et kampagnesite for Dankort Øremærket, med henblik på at ramme målgruppen 18-28 år. Vi har bygget hjemmesiden i Astro og har hentet det dynamiske indhold via. vores egen database fra supabase.

## Links

- Netlify:
- Github Repository:
- Figma:
  https://www.figma.com/design/lp44CrcKa3ctMu1xGpCa9d/Eksamen?node-id=0-1&t=D3TWvURo1k8WLwpA-1
- Trello Board:
  https://trello.com/b/QT6kFgYU/by-eksamen

## Gruppemedlemmer:

- Luna Victoria Bungkird Christiansen - luch0005@stud.ek.dk
- Ophélie Breit Zoungrana Bedsted - opbe0001@stud.ek.dk
- Sofia Nguyen - song002@stud.ek.dk
- Yvonne Yuna Quach - yvqu0001@stud.ek.dk

# Projektstruktur

```
2sem-eksamen/
├── .astro/..
├── .vscode/..
├── node_modules/..
├── public/
│   ├── images/
|   |    └── betaling.webp
|   |    └── kalkgrav.webp
|   |    └── luftballon.webp
|   |    └── luna.webp
|   |    └── nyhavn.webp
|   |    └── oeremaerket-tote.webp
|   |    └── oeremaerket-tshirt.webp
|   |    └── oeremaerket-sokker.webp
|   |    └── repsmark.webp
|   |    └── skagen.webp
│   ├── videoes/
|   |    └── desktop-hero.mp4
|   └── favicon.ico
|   └── favicon.svg
├── src/
│   ├── assets/
|   |    └── partners/
|   |    |    └──emmerys.svg
|   |    |    └──faelles_kassen.svg
|   |    |    └──faster_oikos.svg
|   |    |    └──flowering.svg
|   |    |    └──genbyg.svg
|   |    |    └──kirppu.svg
|   |    |    └──loeberen.svg
|   |    |    └──lollands_banken.svg
|   |    |    └──merkur.svg
|   |    |    └──red_manden.svg
|   |    |    └──rise.svg
|   |    |    └──sport24.svg
|   |    |    └──sportigan.svg
|   |    └── background.svg
|   |    └── blaakort.svg
|   |    └── facebook-logo.svg
|   |    └── facebook-sort-logo.svg
|   |    └── groentkort.svg
|   |    └── instagram-logo.svg
|   |    └── instagram-sort-logo.webp
|   |    └── logo.webp
|   |    └── mobil-bkort.svg
|   |    └── mobil-gkort.svg
|   |    └── mobil-rkort.svg
|   |    └── om-os-kort.svg
|   |    └── roedtkort-desktop.svg
|   |    └── tiktok-logo.svg
|   |    └── tiktok-sort-logo.svg
|   |    └── tree.svg
│   ├── components/
|   |    └── Accordion.astro
|   |    └── Blobs.astro
|   |    └── Breadcrumbs.astro
|   |    └── Buttons.astro
|   |    └── Card.astro
|   |    └── CardKarussel.astro
|   |    └── Countdown.astro
|   |    └── Findditkort.astro
|   |    └── Footer.astro
|   |    └── Hero.astro
|   |    └── Kortfortalt.astro
|   |    └── Navigation.astro
|   |    └── OeremaerketSection.astro
|   |    └── Pagination.astro
|   |    └── Partner1.astro
|   |    └── PartnerSection.astro
|   |    └── Samarbejdspartner.astro
|   |    └── Toggle.astro
|   |    └── Values.astro
│   ├── layouts/
|   |    └── Layout.astro
│   ├── pages/
|   |    └── products/
|   |    |    └── [slug].astro
|   |    └── find_dit_kort.astro
|   |    └── index.astro
|   |    └── om_os.astro
|   |    └── sneak_peak.astro
│   ├── scripts/
|   |    └── darkmode.js
|   |    └── general.js
│   ├── styles/
|   |    └── effects.css
|   |    └── global.css
|   |    └── reset.css
|   |    └── typography.css
|   |    └── variable.css
├── astro.config.mjs
├── package-lock.json
├──package.json
├── README.md
└── tsconfig.json
```

# Filbeskrivelser SKAL LAVES

# Navngivning

Vi har navngivet vores filer, variabler og funktioner for at det lettest muligt giver mening ift. hvad koden gør.

### Eksempler på variabler SKAL LAVES

### Eksempler på funktioner SKAL LAVES

## Data og JSON-struktur

Vi henter data fra et API i JSON-format.

**Et objekt kan fx se sådan ud SKAL LAVES :**

```
{data.id}
{data.image}
{data.brand}
{data.title}
{data.type}
{data.price}

```

### Felter vi bruger SKAL LAVES

```
- id
- title
- brand
- price
```

# Git og branches

Vi har brugt GitHub til at kode hjemmesiden og vi har arbejdet med branches så vi alle kunne kode på samme tid.

### Eksempler på branches

- lunas-tiende-branch
- h1fix
- sofiabranch9
- glass-darkmode
- ophelie-retter-find-dit-kort

### Workflow

1. Laver man en branch og kalder den noget relevant for det man skal lave eller sit navn
2. Kode et feature
3. Committe ændringer
4. Pushe til GitHub
5. Merge til main når det virker

## Bæredygtighed SKAL LAVES

Vi har tænkt bæredygtighed ind i projektet ved bl.a. ikke at bruge videoer på siden.
Derudover har vi også genbrugt koder og komprimeret billeder (vi har kun benyttet os af svg og webp filer)

## Mulige forbedringer SKAL LAVES

Hvis vi skulle arbejde videre med projektet, kunne vi forbedre det ved at tilføje:

-
