import axios from "axios";

const API= {
    scrapeArticles: function(){
      return axios.get("/fetch/")
    },
    // Gets all articles
    getArticles: function() {
      console.log("fetched")
      return axios.get("/headlines?saved=false");
    },
    // Gets the the saved articles
    getSaved: function() {
      return axios.get("/headlines?saved=true");
    },
    // Saves the article with the given id
    addSaved: function(id) {
      return axios.put("/headlines/" + id);
    },
    // Deletes the article with the given id
    deleteSaved: function(id) {
      return axios.delete("/headlines/"+ id);
    }
  };

  export default API