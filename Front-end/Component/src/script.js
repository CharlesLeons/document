import Carousel from "./Carousel.js"

import "../style/style.css";

function myCreate(Class, attributes, ...children) {
    var object = new Class();
    for(let name in attributes) {
        object.setAttribute(name, attributes[name]);
    }
    return object;
}

let data = [
    "../images/image1.jpg",
    "../images/image2.jpg",
    "../images/image3.jpg",
    "../images/image4.jpg"
]

var c = <Carousel data={data}></Carousel>
c.appendTo(document.body);