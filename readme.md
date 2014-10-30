Gulp Rails Boilerplate
================
This is a gulp project specifically tuned to work with a rails project.

## Why?
Using gulp in a frontend project is incredibly useful with all of the helpers that come with it it's perfect for a frontend project.
But what if you are working on a rails project but want to make use of gulp still? This is an easy way to setup a project to do such a thing. Best of both worlds. Use the gulp build systems and the rails pipeline together.

## How?
A normal Gulp project will compile and send everything into a public dist directory, this watches and compiles directly to your public and your rails assets directory for use within the rails asset pipeline. You will notice in the gulp tasks that it still uses the dist directory, but it also pipes

## Things to note:
There is another repo that makes use of a vagrant + puppet setup so you can provision a box and install puppet and install all dependencies for gulp and node on that virtualbox.

##Cheat Sheet:

- Download ZIP of this project

- Rename this to your project name

- Run git init `git init` (etc... standard git setup)

- Install Gulp globally (if don't have it yet) `npm install -g gulp`


Cd into the root of your new project:

- Run npm install (only need to do this first time) `npm install`

- Run bower install (only need to do this first time) `bower install`

- Fire up server and watch with gulp `gulp`

- Build minifed and concatenated poduction ready application `gulp dist`

- Clean the tmp folder and start over `gulp clean`