
import React, { Component } from "react";
import API from "../../utils/API";
import Article from "../../components/Gallery/Article"
import Gallery from "../../components/Gallery/Gallery"
import ScrapeBtn from "../../components/Buttons/ScrapeBtn"
import NavBtn from "../../components/Buttons/NavBtn"



class Saved extends Component {
    state={
        articles:[]
    }
    componentDidMount() {
        this.loadArticles();
    }
    loadArticles=()=>{
       API.getSaved()
        .then(res=>{
            this.setState({articles: [...res.data]});
            console.log(res.data)
    })
       
    }
    deleteArticle=(id)=>{
        console.log("adding to saved")
        API.deleteSaved(id)
        .then(res=>
            this.loadArticles()
        )

    }


    render(){
        return(
            <div>
            <ScrapeBtn scrape={this.scrapeNew}/>
            <NavBtn href="/" name="See new articles"/>
            <Gallery>
                {this.state.articles.map(article=>  
                <Article key={article._id}
                id={article._id}
                date={article.date}
                url={article.url}
                image={article.img}
                title={article.headline}
                sum={article.summary}
                buttonAction={this.deleteArticle}
                buttonTitle="Delete">
                </Article>)}
            </Gallery>
        </div>

        )
    }

}

export default Saved;



