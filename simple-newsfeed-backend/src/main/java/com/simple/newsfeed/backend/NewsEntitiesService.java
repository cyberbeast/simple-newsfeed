package com.simple.newsfeed.backend;

import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Morphia;

import com.mongodb.MongoClient;

public class NewsEntitiesService {
    private Morphia morphia;
    private Datastore datastore;

    public NewsEntitiesService() {
        MongoClient mongoClient = new MongoClient(System.getenv("NEWSFEED_DB"));

        this.morphia = new Morphia();
        String databaseName = "newsfeedDb";
        this.datastore = morphia.createDatastore(mongoClient, databaseName);
    }

    public Morphia getMorphia() {
        return morphia;
    }

    public void setMorphia(Morphia morphia) {
        this.morphia = morphia;
    }

    public Datastore getDatastore() {
        return datastore;
    }

    public void setDatastore(Datastore datastore) {
        this.datastore = datastore;
    }
}