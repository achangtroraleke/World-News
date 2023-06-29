import React,{useState} from "react";
import Map from "../components/Map";
import News from "../components/News";
import Navbar from "../components/Navbar";
const HomePage = ()=>{
    let [countryObject, setCountryObject] = useState([])
    
    


return (
    <section className="">
        <Navbar country={countryObject}/>
        
        <main className="container">
        <div className="container-liquid content-box box-shadow">
            <News country={countryObject}/>
            <Map selectCountryFunction={(x)=>{setCountryObject(x)}} country={countryObject}/>
        
        </div>
        </main>
    </section>
)
}

export default HomePage;