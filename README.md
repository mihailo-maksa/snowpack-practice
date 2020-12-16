# SNOWPACK 101

- Bundles only ES modules

- Doesn't bundle source code, images, CSS files, etc.

- It bundles each time you install a package (by running `npx snowpack`)

- Bundles modules independently into their own files

- **Webpack**, on the other hand, bundles all of your source code and
  dependencies into a single JavaScript file and a single CSS file

- **Why Snowpack?**

  - Better development flow (much faster (50ms or less) builds and hot reloading)
  - A project’s file size does not affect the build’s performance
  - Individual files are cached on first build and are only rebuilt if there is a change (i.e. it's faster for your users)

- **Notes on Snowpack:**

  - Babel support can be configured
  - Doesn't include CSS and image import support

- **When to use Snowpack?**

  - For side projects
  - When using purely ES modules

- **The best features introduced in Snowpack 2.0:**
  - O(1) file builds
  - Improved dev environment
  - Create Snowpack App (CSA) templates for React, Vue, Svelte, etc.
  - Ability to customize your build with build scripts, for example:
  ```javascript
  "scripts": {
    "start": "snowpack dev",
    "build": "snowpack build"
  }
  ```
