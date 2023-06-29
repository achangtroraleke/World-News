import React from "react";
import Article from "./Article";

const NewsFeed = (props)=>{
    let newsData = props.data;
    console.log(newsData)
    if(newsData.message || !newsData){
        return(
            <h1>Sorry! Our database does not contain any news for {props.country.properties.name}</h1>
        )
    }

    return(
        <div className="flex-column article-feed" style={props.hide? {display:'none'}: null}>
        {newsData.map((article, index)=>{

            
            return(
                    <Article key={index} index={index} title={article.title} body={article.content} link={article.link} author={article.creator} source={article.source_id} publishDate = {article.pubDate} image={article.image_url} description={article.description}/>
            )
            
        })}
        </div>
    )
}

export default NewsFeed