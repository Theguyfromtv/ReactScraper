
import React, { Component } from "react";
import API from "../../utils/API";
import Article from "../../componenets/Gallery/Article"
import Gallery from "../../componenets/Gallery/Gallery"
import ScrapeBtn from "../../componenets/Buttons/ScrapeBtn"
import NavBtn from "../../componenets/Buttons/NavBtn"



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
            console.log(res.data)
    })
       
    }
    saveArticle=(id)=>{
        console.log("adding to saved")
        API.addSaved(id)
        .then(res=>
            this.loadArticles()
        )

    }


    render(){
        return(
            <div>
            <ScrapeBtn scrape={this.scrapeNew}/>
            <NavBtn href="/saved" name="See saved articles"/>
            <Gallery>
                {this.state.articles.map(article=>  
                <Article key={article._id}
                id={article._id}
                date={article.date}
                url={article.url}
                image={article.img}
                title={article.headline}
                sum={article.summary}
                buttonAction={this.saveArticle}
                buttonTitle="Save">
                </Article>)}
            </Gallery>
        </div>

        )
    }

}

export default New;



