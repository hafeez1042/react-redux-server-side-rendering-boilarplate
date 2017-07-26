export default (body, preloadedState) => (`
  <!DOCTYLE html>
  <html>
    <head>
      <title>Redux</title>
      <link rel="stylesheet" type="text/css" href="/assets/bundle.css"></style>

    </head>
    <body>
      <div id="root">${body}</div>
  
      <script>
        // WARNING: See the following for security issues around embedding JSON in HTML:
        // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
      </script>
      <script src="/assets/bundle.js"></script>
    </body>
  </html>
`);
