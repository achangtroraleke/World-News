import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";


const Map =(props)=>{

    const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"


    const handleClick = (x)=>{
        props.selectCountryFunction(x)
 
    }


    return(
        <div className="">
            <div className="bg"></div>
        <ComposableMap>
            <Geographies geography={geoUrl}>
                {({ geographies }) =>
                geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} onClick={()=>{handleClick(geo)}} fill="#5A96E3" 
                style={props.country.rsmKey === geo.rsmKey?
                    {
                        default:{fill:'#5A96E3', outline:'none'},
                        hover:{fill:'#A1C2F1', outline:'none'},
                        pressed:{outline:'none', fill:'#7393B3'},
                    }:
                    {
                    default:{outline:'none', fill: '#7393B3'},
                    hover:{fill:'#A1C2F1', outline:'none'},
                    pressed:{outline:'none', fill:'#7393B3'},
                  
                }}
                    />))}
            </Geographies>
    
        </ComposableMap>

        </div>
    )
}

export default Map;