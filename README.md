# My Portfolio

My personal portfolio 🤘

__Deployed__
* GitHub -> https://cj-cepe.github.io/portfolio/
* CloudFlare -> https://cj-cepe.pages.dev/

## Technologies Used:
* APIs/Libraries: 
    * React
    * [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
    * [Scroll driven animation](https://developer.chrome.com/docs/css-ui/scroll-driven-animations)
* Web Technologies: 
    * HTML, CSS, JS
    * Vite
* Design Tools: 
    * Figma, Adobe Illustrator
    * [freeconvert.com](https://www.freeconvert.com/)
    * [tinypng.com](https://tinypng.com/)

## Features
* [x] Light & Dark Mode
    * toggles class and changes CSS variable values.
    * checks if users have a saved preference.
        * if not, it’s based on their browser’s color mode.
* [x] Contents
    * contents are listed in a JSON file.
* [x] Animation & transitions
    * animation and transition in css
    * uses IntersectionObserver API
* [x] Responsiveness
    * uses @media breakpoints
    * fluid sizing (fluid typography)
    * uses css flexbox and grid
* [x] Parallax hero
    * uses Scroll-driven animations 
        * scroll as timeline

## Future Improvements
* Accessibility Improvement: Make site more accessible.
    * Compliant with WCAG & WAI-ARIA.
    * Compatible with assistive technologies.
* Web Browsers: The portfolio has been tested on the latest versions of Chrome & Edge (Chromium browser).
    * Plan to improve support for older versions. (babel)
    * Aim to ensure compatibility with other browser vendors - Mozilla, Safari, etc.
* Projects: I’m still in the process of recovering some of my project files and assets.
* Optimize resouces/assets: currently, images are in webp format and videos are compressed mp4.
    * Plan to provide images in various sizes and formats, as fallback.
    * Videos experience a few seconds of delay before playing when hosted.
* Hover fallback/alternative for mobile.
* Spline: initially the plan is to use 3d objs, instead of 2d emojis, using spline. However, there is a problem with performance.

## References
* scroll on top of page when page refreshed
    *   https://stackoverflow.com/questions/60813961/react-scroll-to-top-on-page-refresh-dont-restore-position
* making nav sticky on scroll -> learned about the existence of IntersectionObservation
    * https://www.youtube.com/watch?v=V-CBdlfCPic
    * https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
* scroll driven animations API
    * https://developer.chrome.com/docs/css-ui/scroll-driven-animations#intermezzo_view_timeline_ranges
    * https://scroll-driven-animations.style/
* scrollbar theme matching lighting theme
    - uses has() selector
* recolor svg
    - using filter()
    - use this [tool](https://codepen.io/sosuke/pen/Pjoqqp) to convert hex to equivalent filter 