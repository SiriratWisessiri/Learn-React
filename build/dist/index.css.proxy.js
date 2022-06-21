// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "article {\r\n    margin-left: 10%;\r\n    margin-right: 10%;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n    font-size: 18px;\r\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}