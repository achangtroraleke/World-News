import React, {useState} from "react";

import NewsFeed from "./NewsFeed";

const News = (props)=>{ 
    let selectedCountry= props.country
    let [newsData, setNewsData] = useState([])
    let [hide, setHide] = useState(false)
    let [activeCountry, setActiveCountry]= useState([])

    const getNews = async ()=>{
        
        const url = 'https://newsdata2.p.rapidapi.com/news?'+ new URLSearchParams({
            country:selectedCountry.properties['Alpha-2'],
            language:'en',

        });
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_KEY,
                'X-RapidAPI-Host': 'newsdata2.p.rapidapi.com'
            },
        };
        
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setNewsData(result.results);
            setHide(false)
            
        } catch (error) {
            console.error(error);
        }
 
        
    }


    return(
        <div className="">
            <div onClick={()=>{
                if(activeCountry!==selectedCountry){
                    setActiveCountry(selectedCountry)
                   
                getNews();}else{console.log('already called')}}} className="title-box center-text pressable"><span className="title-text">{selectedCountry.properties?selectedCountry.properties.name+ ' (Click)':'Select a Country Below'}</span></div>
            <div className="flex-column align-center center fit-width">
            <div className="flex align-center">
                <h1>Trending Articles In: {activeCountry.properties?activeCountry.properties.name:"No Country Selected"}</h1>
                <svg className={hide||!activeCountry.properties?'dropdown close':'dropdown open fadeOut'} onClick={()=>{setHide(!hide)}} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z"/></svg>
                
            </div>
          <NewsFeed data={newsData} hide={hide} country={selectedCountry}/>
            </div>
        

        </div>
    )
}

export default News