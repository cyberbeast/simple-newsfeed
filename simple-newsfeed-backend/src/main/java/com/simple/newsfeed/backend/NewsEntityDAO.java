package com.simple.newsfeed.backend;

import java.util.List;
import org.bson.types.ObjectId;
import org.mongodb.morphia.dao.DAO;

public interface NewsEntityDAO extends DAO<NewsEntity, ObjectId> {
    /**
     * get all news entities sorted by publication date
     * @return
     */
    public List<NewsEntity> getAllAndSortByPublicationDate();
}