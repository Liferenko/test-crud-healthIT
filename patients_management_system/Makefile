run:
	npm i
	npx shadow-cljs watch app
release:
	npm i
	npx shadow-cljs release app

docker-dev:
	docker build -t cliniq-client:latest . && docker run -it -p 3000:3000 cliniq-client:latest make run

docker-release:
	docker build -t cliniq-client:latest . && docker run -it -p 3000:3000 cliniq-client:latest "npm i && npx shadow-cljs release app"
