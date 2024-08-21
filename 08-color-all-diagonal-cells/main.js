const table = document.getElementsByTagName("table");
const rows = table[0].rows;

// HTMLCollection : it’s not an array, but rather a collection – a special array-like iterable object.

// Convert HTMLCollection into an Array to use map method
Array.from(rows).map((row, i) => {
  row.cells[i].style.backgroundColor = "cyan";
});
