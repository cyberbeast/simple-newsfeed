# simple-newsfeed
Simple Angular + ngrx + Spark + MongoDB powered newsfeed system

![Architecture Diagram](https://www.lucidchart.com/publicSegments/view/ad834bd3-32ef-41af-a2cc-2652058334fb/image.jpeg "Architecture Diagram")

![Screencast](http://g.recordit.co/MgACioUOOU.gif
 "Screencast")

## Run Instructions

```
$ export NEWSFEED_DB=<<MongoDB URI>>
$ cd simple-newsfeed-backend
$ mvn package && java -jar target/simple_newsfeed_server-jar-with-dependencies.jar
```
Open your browser and navigate to "localhost:4567".

## Build Instructions
Provision MongoDB. (I recommend using docker to quickly fire up an instance. Alternatively, any local instance would work too.)

```
$ docker run --name newsfeeddb -p 27017:27017 mongo
```

Build angular application. (Angular CLI definitions (.angular-cli.json) will put the compiled application at the correct level for the backend server to access it along with other resources.)
```
$ cd simple-newsfeed-app && ng build && cd ..
```

Build backend and run server.
```
$ export NEWSFEED_DB=<<MongoDB URI>>
$ cd simple-newsfeed-backend && mvn package && java -jar target/simple_newsfeed_server-jar-with-dependencies.jar
```
