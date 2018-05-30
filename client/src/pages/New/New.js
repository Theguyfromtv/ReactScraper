
import React, { Component } from "react";
import API from "../../utils/API";
import Article from "../../componenets/Gallery/Article"
import Gallery from "../../componenets/Gallery/Gallery"
import ScrapeBtn from "../../componenets/Gallery/ScrapeBtn"


class New extends Component {
    state={
        articles:[]
    }
    componentDidMount() {
        this.loadArticles();
    }
    scrapeNew=()=>{
        API.scrapeArticles()
        .then(res=>{
            console.log(res)
            this.loadArticles()
        })
    }
    loadArticles=()=>{
       API.getArticles()
        .then(res=>{
            this.setState({articles: [...res.data]});
            //console.log(res.data)
    })
       
    }
    saveArticle=(id)=>{
        API.addSaved(id)
    }


    render(){
        return(
            <div>
            <ScrapeBtn scrape={this.scrapeNew}/>
            <Gallery>
                {this.state.articles.map(article=>
                <Article key={article._id}
                id={article._id}
                date={article.date}
                url={article.url}
                image={article.img}
                title={article.title}
                sum={article.sum}
                buttonAction={this.saveArticle}
                buttonTitle="Save">
                </Article>)}
            </Gallery>
        </div>

        )
    }

}

export default New;

