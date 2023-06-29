import React from "react";

const Article = (props)=>{

return(
  
    <div className="article-card flex">
            <img className='article-img floated' src={props.image} alt="article-thumbnail"/>
            <div className="article-preview">
            <a href={props.link} target="_blank"><h2>{props.title} (read more) </h2></a>
            <p>{props.body?props.body.substring(0,1000)+'...': props.description}</p>
            <small>By: {props.author} --{props.source.toUpperCase()}</small>
        </div>
    </div>
    )
}

export default Article;