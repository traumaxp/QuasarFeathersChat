# Feathers-chat-Vuex-Quasar-Dockerize


> Feathers Vuex 

This is the Feathers Chat single page application using the [feathers-vuex](https://github.com/feathersjs/feathers-vuex) Feathers client plugin.feathers-vuex@2.0.0-pre.77.


> Quasar 

Build high-performance VueJS user interfaces in record time https://quasar.dev/



## Build Setup

``` bash
clone

change directory name

cd into directory

docker-compose build

docker-compose run --rm frontend sh

quasar create
(choose yes at last prompt about npm install)

quasar upgrade -i

quasar dev
See it compile and start the dev server, then ctrl-c
(It will not be able to open the default browser from the container, it will also not be visible since we did not define an external port )

npm view feathers-vuex
Choose the latest 2.0.0pre unless 2.0 is now out.

npm i —save feathers-vuex@chosen-tag 

exit

docker-compose run --rm api sh

feathers generate app

etc.

exit

docker-compose build
(Will bake the node_modules into our images)

now test that quasar works:
docker-compose run --rm -p 8080:8080 frontend
And go to localhost:8080 with a browser

exit that container

Do the same for api on port 3030

If you run into issues you can alway sh into the container to fiddle:
docker-compose run --rm container_name sh

When both containers work satisfactorily, stop them and bring the whole network up by doing:

docker-compose up
```

