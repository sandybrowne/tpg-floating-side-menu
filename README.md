# Alex's Responsive Floating Side Menu

A lightweight, reusable **floating side navigation menu** built with plain **HTML**, **CSS**, and **JavaScript**.  
The menu collapses into a compact hamburger toggle on all viewports, expands on click, highlights the active section while scrolling, and supports smooth scrolling.

---

## Features
- Fixed-position floating menu, visible after scrolling down.
- Collapsible **hamburger toggle** with vertical/horizontal text states.
- Smooth scrolling with active-link highlighting.
- Responsive breakpoints for mobile, tablet, and desktop.
- Reusable across multiple pages with shared CSS/JS and page-specific HTML links.

---

## Project Structure
```
responsive-side-menu/
│
├── responsive-side-menu-links.html   # Example HTML menu blocks for different TPG pages
├── responsive-side-menu.css          # Shared styling for all menus
├── responsive-side-menu.js           # Shared interactivity logic
└── README.md                         # Project documentation
```

- **HTML**: Each page includes its own `<div id="floating-menu">` with page-specific anchor links.  
- **CSS**: Handles styling, collapsed vs. expanded states, responsiveness, hover effects, and active highlighting.  
- **JS**: Controls menu toggle, scroll-based visibility, smooth scrolling, and active link detection.  

---

## HTML Test Demo

### 1. Include the files
In your page `<head>` and before closing `</body>`:
```html
<link rel="stylesheet" href="responsive-side-menu.css">
...
<script src="responsive-side-menu.js"></script>
```

### 2. Add a menu block
Each page can include a tailored menu from `responsive-side-menu-links.html`. Example:
```html
<div id="floating-menu">
  <div id="menu-toggle">
    <span class="icon hamburger-icon">☰</span>
    <span class="icon chevron-icon">«</span>
    <span class="menu-text">Menu</span>
  </div>

  <div class="menu-links">
    <a href="#top_of_page">Top of Page</a>
    <a href="#section-1">Section 1</a>
    <a href="#section-2">Section 2</a>
    <a href="#request_a_quote">Request a Quote</a>
  </div>
</div>
```

### 3. Add matching section IDs
Make sure each `href="#id"` has a corresponding `<section id="id">` in the page.  


---

## Behaviour
- **Scroll > 300px** → menu appears after TPG Header, looks like it appears from underneath.  
- **Collapsed by default** → only hamburger + vertical “Menu” label visible.  
- **Click toggle** → expand/collapse.  
- **Active link** → highlights when its section is in view.  
- **Click link** → smooth scroll to target offset.  

---

## Customisation
- **Colours**: Update background (`#003366`) and hover (`#ffcc00`) in `responsive-side-menu.css`.  
- **Breakpoint widths**: Adjust collapsed widths in CSS media queries.  
- **Scroll offset**: Change `-90` in `responsive-side-menu.js` for different header heights.   

