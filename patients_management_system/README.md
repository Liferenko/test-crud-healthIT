
### TODO:
- [x] to rename all items as clients
- [x] to extend item data as client data
- [x] to extend form for adding all neccessary client's data
- [ ] to read about [cljs-ajax](https://github.com/JulianBirch/cljs-ajax)
- [ ] to observe a list of tiny cliniq's patients (GET list)
- [ ] to add new patient to the list (create new-patient)
- [ ] options button
    1. [ ] to remove patient from the list (remove patient)
    2. [ ] to update patient's data (update patient's data)\

### TODO cosmetics
* New Patient Form
- [ ] margins for inputs
- [ ] error message and highlight for an input with mistake
- [ ] form as a pop-up modal window
- [ ] icons for buttons and inputs

* Body
- [ ] fix footer on bottom [example](https://stackoverflow.com/questions/18915550/fix-footer-to-bottom-of-page)

* Code style
- [ ] reread and polish my code [code style here](https://github.com/Nondv/clojure-style-guide/blob/master/ru/README.md)

### Development mode
```
npm install
npx shadow-cljs watch app
```
start a ClojureScript REPL
```
npx shadow-cljs browser-repl
```
### Building for production

```
npx shadow-cljs release app
```
