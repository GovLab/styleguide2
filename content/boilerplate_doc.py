boilerplate ZIP
================

.gitignore
# /public is ignored

package.json
# npm package for styleguide files | if we can pull pre-compiled SASS, it will be better.

gulpfile.js
# maybe even an optional argument to the deploy, to change the remote name 
# - gulp deploy = push subtree origin gh-page
# - gulp deploy upstream = push subtree upstream gh-page

source/
  static/
    images/       # site specific images
    js/           # site specific js
  templates/
    _base.html    # boilerplate base. Base setup for a styleguide enabled site. Can be tweaked for each project.
    index.html    # index example. Will be tweaked for the project needs
  sass/           # site specific styles. Specific components, tweaks or new reusable components are added here.
    styles.scss
    _custom.scss
