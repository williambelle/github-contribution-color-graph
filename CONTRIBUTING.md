Contributing
============

Welcome, so you are thinking about contributing to GitHub Contribution
Color Graph ?

Awesome, this a great place to start.

Setup
-----

```bash
npm i
```

Run
---

Chrome:

```bash
npm run -- serve:chromium
```

This will open a new chromium browser window with a temporary profile
and the web extension already loaded.

Firefox:

```bash
npm run -- serve:firefox
```

This will open a new firefox browser window with a temporary profile
and the web extension already loaded.

Opera:

1. View -> Show Extensions
2. Click on "Developer Mode" button (if not already)
3. Click on "Load Unpacked Extension..."
4. Navigate to the project `github-contribution-color-graph/src` and click select

Edge Chromium:

1. `...` -> Extensions
2. Click on "Developer Mode" button (if not already)
3. Click on "Load Unpacked"
4. Navigate to the project `github-contribution-color-graph/src` and click select

Package
-------

```bash
npm run package
```

Note : The `package` script is maintained for backward-compatibility.
The web extension can now be packaged with the built-in `npm pack`
command which generates a neat tarball with the required files. Usage
of the `npm pack` command is encouraged over `npm run -- package`.

License
-------

The MIT License (MIT)
