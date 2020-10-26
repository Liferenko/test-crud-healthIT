
### TODO:
- [x] to rename all items as clients
- [x] to extend item data as client data
- [ ] to extend form for adding all neccessary client's data
- [ ] to move list of clients to the backend
- [ ] to request from backend about the list of client 
- [ ] to opserve a list of tiny cliniq's patients (GET list)
- [ ] to add new patient to the list (create new-patient)
- [ ] options button
    1. [ ] to remove patient from the list (remove patient)
    2. [ ] to update patient's data (update patient's data)\

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
