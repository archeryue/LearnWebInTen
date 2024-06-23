# Dive into Tainwind CSS

## Tailwind CSS & Vue
 - Install: `npm install -D tailwindcss postcss autoprefixer`
 - Init: `npx tailwindcss init -p`
 - Config: tailwind.config.js set `index.html & src/**/*.vue` in `content`
 - Add: `@tailwind base; @tailwind components; @tailwind utilities;` in `src/style.css`
 - Code Tailwind CSS in Vue Template

## Tailwind CSS Basic Usage
 - Grammar: \<div class='text-yellow-500 bg-gray-100 text-sm'\>
 - Colors: bg-blue-100, text-yellow-600, border-green-500
 - Typography: 
    - Font Size: text-sm, text-xl
    - Font Style: italic, not-italic, font-bold, font-thin
    - Text Decoration: underline, overline, line-through, decoration-red-100, decocration-wavy, decoration-8
    - Text Align: text-left, text-center, text-justify
    - List Style: list-disc, list-decimal
 - Spaces & Size:
    - Padding & Margin: p-0, pt-6, pb-4, mb-4, -mt-8
    - Width & Height: w-24, w-96, h-24, h-96, (under flex) w-1/2, w-1/3, w-full, min-w-0, max-w-full, min-w-min
 - Flex & Grids
    - Flex Direction: flex flex-col, flex flex-row-reverse, flex flex-col md:flex-row
    - Flex Children Size: basis-32, basis-1/4, basis-3/4, grow, md:w-32
    - Flex Wrap: flex flex-wrap w-full
    - Grids: grid-cols-3, col-start-2, col-span-2, grid-rows-5, rows-span-2, lg:grid-cols-4 md:grid-cols-3
    - Justify Content: flex justify-center, flex justify-start, flex justify-between
    - Align Items: flex justify-between items-center
    - Gap: gap-1, gap-x-0 gap-y-2
 - Layouts: container mx-atuo, column-lg 
 - Borders: border, border-l-3, border-dotted border-red-600

## Tailwind CSS Advanced Usage
 - Effects & Filters: 
   - Shadow: shadow-md, shadow-inner, shadow-md shadow-cyan-300, shadow-md shadow-cyan-500/50
   - Opacity: opacity-50
   - Blur: blur-sm, blur-sm hover:blur-none
   - Brightness: brightness-50 hover:brightness-100
   - Contrast: contrast-50 hover:contrast-100
   - GrayScale: grayscale hover:grayscale-0
 - Animations: 
   - Transition: transition delay-500 hover:-translate-y-1
   - Animation: animate-spin, animate-ping, animate-pulse, animate-bounce
   - Transform: scale-125, rotate-45, transition origin-top-left hover:rotate-45
 - Customization: config tailwind.config.js
    - theme,extend: colors, fontSize, etc.
