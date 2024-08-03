## A Modern CSS Reset

As we know, browsers come with a built-in set of CSS styles, known as the “User-Agent Stylesheet”. Each browser has there own default styles, although more or less is same, that's why the focus ring looks different across browser and there are many such examples.

People wanted to ensure consistency w.r.t to design between browsers, so they started using this CSS resets: [Eric Meyer's - CSS Reset](https://meyerweb.com/eric/tools/css/reset/) to remove the user agent styles which was added by the browsers. They use this tricks in the past, now browser don't have massive discrepancies when it comes to layout or spacing.

Although, the custom CSS reset tricks which I'll be showing below is just to make your experience better with how you think your layout should look, so that it would help you with building overall user experience.

### Custom CSS Reset

```css
/*
  1. Use a more-intuitive box-sizing model.
*/
*,
*::before,
*::after {
  box-sizing: border-box;
}

/*
  2. Remove default margin
*/
* {
  margin: 0;
}
/*
  Typographic tweaks!
  3. Add accessible line-height
  4. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

/*
  5. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

/*
  6. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}

/*
  7. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

/*
  8. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}
```

Reference from : [My Global Styles - Josh W Comeau](https://courses.joshwcomeau.com/css-for-js/treasure-trove/010-global-styles)