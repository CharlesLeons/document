import {create} from "./create.js"
import Div from "./Div.js"
// import css from "./ListView.css"

const PROPERTY_SYMBOL = Symbol("property");
const ATTRIBUTE_SYMBOL = Symbol("attribute");
const EVENT_SYMBOL = Symbol("event");
const STATE_SYMBOL = Symbol("state");

// let styleElement = document.createElement("style");
// styleElement.innerHTML = css;
// document.getElementsByTagName("head")[0].appendChild(styleElement);


export default class ListView {
    constructor(config){
        this[PROPERTY_SYMBOL] = Object.create(null);
        this[ATTRIBUTE_SYMBOL] = Object.create(null);
        this[EVENT_SYMBOL] = Object.create(null);
        this[STATE_SYMBOL] = Object.create(null);


        this[PROPERTY_SYMBOL].children = [];

        this.created();
    }

    appendTo(element){
        element.appendChild(this.root);
        this.mounted();
    }

    created(){
        this.root = document.createElement("div");
        // this.root.classList.add("list-view");
        this.render().appendTo(this.root);
    }
    mounted(){

    }
    unmounted(){

    }
    update(){

    }

    render() {
        let data = this[ATTRIBUTE_SYMBOL]["data"] || [];
        return <div>
            {
                data.map(item => (
                    <div class="item">
                        <div class="header">
                            <img class="shopIcon" src={item.icon}></img>
                            <div class="name_source">
                                <div class="shopName">{item.shopName}</div>
                                <div class="shopSource"><img src={item.shopSource}></img></div>
                            </div>
                            <div class="goButton">进店<img src={item.rightArrow_white}></img></div>
                        </div>
                        <div class="message">
                            <div class="message-icon"><img src={item.messageIcon}></img></div>
                            <div class="content">好店君：该店已被{item.followers}人关注，快来关注吧！</div>
                        </div>
                        <div class="commodity">
                            <a><img class="left" src={item.left}></img></a>
                            <div class="right">
                                <a><img class="up" src={item.up}></img></a>
                                <a><img class="down" src={item.down}></img></a>
                            </div>
                        </div>
                        <div class="similar">相似好店<img src={item.rightArrow_gray}></img></div>
                    </div>
                ))
            }
            </div>
    }




    updatePlaceHolder() {
        this.placeHolder.innerText = this.getAttribute("placeHolderText") || "加载更多";
    }


    get style() {
        return this.root.style;
    }

    appendChild(child){
        this.children.push(child);
        child.appendTo(this.root);
        this.root.appendChild(this.placeHolder);
    }


    get children(){
        return this[PROPERTY_SYMBOL].children;
    }
    getAttribute(name){
        if (name == "style") {
            return this.root.getAttribute("style");
        }
        
        return this[ATTRIBUTE_SYMBOL][name]
    }
    setAttribute(name, value){
        if(name == "style") {
            this.root.setAttribute("style", value);
        }
        if (name == "data") {
            this[ATTRIBUTE_SYMBOL][name] = value;
            this.root.innerHTML = "";
            this.render().appendTo(this.root);
            // this.addStyle();

            return value;
        }
        return this[ATTRIBUTE_SYMBOL][name] = value;
    }
    addEventListener(type, listener){
        if(!this[EVENT_SYMBOL][type])
            this[EVENT_SYMBOL][type] = new Set;
        this[EVENT_SYMBOL][type].add(listener);
    }
    removeEventListener(type, listener){
        if(!this[EVENT_SYMBOL][type])
            return;
        this[EVENT_SYMBOL][type].delete(listener);
    }
    triggerEvent(type){
        if(!this[EVENT_SYMBOL][type])
            return;
        for(let event of this[EVENT_SYMBOL][type])
            event.call(this);
    }
} 