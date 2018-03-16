package com.simple.newsfeed.backend;

import java.util.List;
import org.bson.types.ObjectId;
import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.dao.BasicDAO;
import org.mongodb.morphia.query.Query;

public class NewsEntityDaoImpl extends BasicDAO<NewsEntity, ObjectId> implements NewsEntityDAO {
    public NewsEntityDaoImpl(Class<NewsEntity> entityClass, Datastore ds) {
        super(entityClass, ds);
    }

    public List<NewsEntity> getAllAndSortByPublicationDate() {
        Query<NewsEntity> query = createQuery().order("-publicationDate");

        return query.asList();
    }
}