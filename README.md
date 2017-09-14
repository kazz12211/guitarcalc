# GuitarCalc - JavaScript version

GuitarCalc is simple calculation program for guitar builder.

This project is derived from [fret-calculator](https://github.com/kazz12211/fret-calculator) project which was developed using Spring and AngularJS.
I 


## Development requirement

- AngularJS 1.6.5
- jQuery 2.1.1
- Bootstrap 3.3.7

## Run with Electron

	$ electron GUITARCALC_PROJECT_PATH

## Electron packaging

### Requirement

- Electron 1.7.6
- Electron Packager

### Build

	$ cd GUITARCALC_PROJECT_PATH
	$ electron-packager . guitarcalc --platform=linux --arch=x64 --electronVersion=1.7.6 [--overwrite]