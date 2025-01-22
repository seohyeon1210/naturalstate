import React from "react";
import "./Main.css";
import VegetablesProductSlider from "../Product/VegetablesProductSlider";
import vegetablesProductSlider from "../Product/VegetablesProductSlider";
import GrainsProductSlider from "../Product/GrainsProductSlider";
import grainsProductSlider from "../Product/GrainsProductSlider";
import FruitsProductSlider from "../Product/FruitsProductSlider";
import fruitsProductSlider from "../Product/FruitsProductSlider";
import AllProductSlider from "../Product/AllProductSlider";
import allProductSlider from "../Product/AllProductSlider";

function Main() {
    return (
        <div className="main-container">
            <div className="product-margin">
                <AllProductSlider products={allProductSlider}/>
                <FruitsProductSlider products={fruitsProductSlider}/>
                <VegetablesProductSlider products={vegetablesProductSlider}/>
                <GrainsProductSlider products={grainsProductSlider}/>
            </div>
        </div>
    );
}

export default Main;