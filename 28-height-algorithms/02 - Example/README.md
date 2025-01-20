## App wrapper gotcha(warning)

JavaScript frameworks like React will render our applications into a container element. In order for percentage-based heights to work, we need to add height: 100% to this wrapper!

If you use create-react-app, the wrapper has an ID of root. In Next.js, it's __next.

Here's an example of how you can solve this problem for these two frameworks:

```css
  html, body,
  #root, /* for create-react-app */
  #__next /* for Next.js */ {
    height: 100%;
  }
```

Note that this isn't specific to React. We need to include selectors for every element that sits between the root html tag, and the element we want to stretch to 100% of the screen size.

Reference
- [Height Algorithm - CSS for JS by Josh Comeau](https://courses.joshwcomeau.com/css-for-js/01-rendering-logic-1/11-height)
