# Middleman Template

A Middleman template with dart sass and rollup support.

Also, babel is configured, so that uglifier can do its job.

## Usage

```
middleman init -T ciscou/middleman-template YOUR_PROJECT
cd YOUR_PROJECT
bundle install
npm install
bundle exec middleman
```

Navigate to [http://localhost:4567/](http://localhost:4567/). You'll see
the base project.

## Git Setup

If you're going to use Git (you should!) run these commands.

```
git init .
echo build/ >> .gitignore
echo node_modules/ >> .gitignore
echo tmp/ >> .gitignore
git add .
git commit -m "initial commit"
```

## Use bootstrap

First of all, install bootstrap

```
npm install --save-dev bootstrap@next
```

Copy the main bootstrap.scss file as a partial to your source directory.

```
cp node_modules/bootstrap/scss/bootstrap.scss source/stylesheets/_bootstrap.scss
```

Edit `source/stylesheets/_bootstrap.scss`. Every import must be prefixed
by boostrap/scss/. You can import only the parts you're interested in.
Also, you can personalize it. Example:

```
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/mixins";

$primary: $pink;

$custom-colors: (
  "primary": $primary
);

$theme-colors: map-merge($theme-colors, $custom-colors);

@import "bootstrap/scss/root";
@import "bootstrap/scss/reboot";
@import "bootstrap/scss/type";
@import "bootstrap/scss/images";
@import "bootstrap/scss/containers";
@import "bootstrap/scss/grid";
@import "bootstrap/scss/buttons";
@import "bootstrap/scss/close";
@import "bootstrap/scss/modal";
```

`@use` that partial in `source/stylesheets/site.scss`

```
@use "bootstrap";
```

You'll also need to import some JS from bootstrap. There is no need to
grab everything, just add the components you need (if any) to
`source/javascripts/site.js`

```
import 'bootstrap/js/dist/modal';
```

Finally, add a new page in `source/bootstrap-demo.html.haml`

```
.container
  %h1 Bootstrap demo

  %button.btn.btn-primary{data: {bs: {toggle: "modal", target: "#example-modal"}}} Click me!

  #example-modal.modal.fade{tabindex: -1}
    .modal-dialog
      .modal-content
        .modal-header
          %h5.modal-title Modal title
          %button.btn-close{type: "button", data: { bs: { dismiss: "modal" } }, "aria-label" => "Close"}
        .modal-body
          %p Modal body text goes here.
        .modal-footer
          %button.btn.btn-secondary{type: "button", data: {bs: { dismiss: "modal" }}} Close
          %button.btn.btn-primary{type: "button"} Save changes
```

Navigate to http://localhost:4567/bootstrap-demo.html. If you click the
button you'll open the modal.
