package com.simple.newsfeed.backend;

import java.util.List;

import static spark.Spark.*;
import com.google.gson.Gson;

/**
 * Simple Newsfeed Backend Implementation
 *
 */
public class App {
    private NewsEntitiesService newsEntitiesService;
    private NewsEntityDAO newsEntityDAO;

    public App() {
        this.newsEntitiesService = new NewsEntitiesService();
        this.newsEntityDAO = new NewsEntityDaoImpl(NewsEntity.class, newsEntitiesService.getDatastore());
    }

    public List<NewsEntity> getNewsItems() {
        List<NewsEntity> newsfeed = newsEntityDAO.getAllAndSortByPublicationDate();
        return newsfeed;
    }

    public NewsEntity postNewsItems(NewsEntity newEntity) {
        newsEntityDAO.save(newEntity);
        return newEntity;
    }

    public static void main(String[] args) {
        staticFiles.location("public");
        App app = new App();

        // ---- Route Definitions
        get("/newsItems", (req, res) -> {
            res.type("application/json");
            return new Gson()
                    .toJson(new StandardResponse(StatusResponse.SUCCESS, new Gson().toJsonTree(app.getNewsItems())));
        });

        post("/newsItems", (req, res) -> {
            res.type("application/json");
            NewsEntity newEntity = new Gson().fromJson(req.body(), NewsEntity.class);
            return new Gson().toJson(
                    new StandardResponse(StatusResponse.SUCCESS, new Gson().toJsonTree(app.postNewsItems(newEntity))));
        });

        redirect.get("/*", "/");

    }
}
