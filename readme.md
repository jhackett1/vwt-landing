VWT landing page
================

**This is a templating system for rapid building landing pages.**

It's powered by React and the Gatsby static site generator.

You can supply content by editing [JSX](https://reactjs.org/docs/introducing-jsx.html) and alter the look and feel of the site with [SASS](https://sass-lang.com/) variables.

You will end up with static HTML, CSS and JS file. You can host these for free on Github Pages, Netlify, or pass them to a client to use on their own hosting.


## Requirements

To develop with this system, you need the following:
* Node and NPM
* Gatsby. Get it with `npm i --g gatsby-cli` if needed


## Developing

To build or edit a landing page, you'll need to start a development server.

Do this with the command:

```gatsby develop```

The main files you need to edit are in `/src/pages`. There are three files in there:

* `index.js` defines the layout and content of your landing page.
* `variables.sass` defines the colour scheme and other presentational aspects of your site
* `custom.sass` allows you to customise how the site looks by writing your own SASS

There is one file in `/src` you will also need to make a few changes to:

* `config.js` defines the site title, Google Analytics tracking ID and other low-level configuration

This system offers fifteen blocks - reusable layout elements you can place in any order and insert your own content into by editing the JSX in `index.js`.


### Building

When you're happy with your changes, produce the final build by running:

```gatsby build```

This will create a `/public` folder containing HTML, CSS and javascript files, plus any static assets.


### Making build files editable

Gatsby conducts minification, transpilation and code-splitting on your site's output to improve usability and performance for users.

Optionally, you can undo Gatsby's minification of the HTML and CSS by running the command:

```npm run beautify```

Or to build and beautify at the same time:

```gatsby build; npm run beautify```

This will make it easier for someone to understand and make minor edits to the generated output later.

**Note that this will increase the size of the final website and may lead to slower load times for users. Ideally, the files should be re-minified following any changes.**


## Static assets

You may want to host static assets on a site, particularly images and documents. Place these files into the `/static` folder. They will be copied across to the final build.

If you place `test.pdf` into the folder, it will eventually be available at the URL `/test.pdf`.
