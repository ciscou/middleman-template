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
