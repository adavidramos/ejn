This folder is set up to allow a Grunt-based build process that has working files in one folder (under one branch) and build files in another folder (under the `gh-pages` branch).

### Folder structure

- `ejn-super/`
	- `bower.json` (sl)	- `build/` (repo w `gh-pages` branch)	- `dev/` (repo with `master` or another branch)	- `Gruntfile.js` (sl)	- `node_modules` (sl)	- `package.json` (sl)

(sl) files are symlinks to the corresponding files within `dev`.

### To develop files

1. Check out `master` or another branch into `dev/`.
2. `cd` to `'ejn-super/`.
3. Run `grunt serve` to preview.

### To build files for deployment or preview

1. Check out `master` or another branch into `dev/`.
2. `cd` to `'ejn-super/`.
3. Run `grunt build`. Compiled files will be in `build/`.