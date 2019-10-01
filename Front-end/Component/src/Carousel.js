import {enableGesture} from "./gesture.js"
import {Timeline, DOMElementStyleNumberAnimation, DOMElementStyleVectoriAnimation} from "./animation.js"

const PROPERTY_SYMBOL = Symbol("property");
const ATTRIBUTE_SYMBOL = Symbol("attribute");
const EVENT_SYMBOL = Symbol("event");
const STATE_SYMBOL = Symbol("state");


export default class Carousel {
    constructor(config) {
        this[PROPERTY_SYMBOL] = Object.create(null);
        this[ATTRIBUTE_SYMBOL] = Object.create(null); //存attribute用Object.create(null)，与其他代码没有关系
        this[EVENT_SYMBOL] = Object.create(null); 
        this[STATE_SYMBOL] = Object.create(null);
        this[ATTRIBUTE_SYMBOL].children = [];
        this[ATTRIBUTE_SYMBOL].tl = new Timeline;
        this.created();
    }

    appendTo(element) {
        element.appendChild(this[ATTRIBUTE_SYMBOL].root);
        this.mounted();
    }

    created() {
        this[ATTRIBUTE_SYMBOL].root = document.createElement("div");
        this[ATTRIBUTE_SYMBOL].root.classList.add("carousel");
        enableGesture(this[ATTRIBUTE_SYMBOL].root);
        this.addEvent();
    }
    mounted() {
        this[ATTRIBUTE_SYMBOL].root.style.cssText = this.getAttribute("style");
        this[ATTRIBUTE_SYMBOL].position = 0;
        this[ATTRIBUTE_SYMBOL].offsetStartTime = 0;
        this.addIndicator();
        this[ATTRIBUTE_SYMBOL].nextPicTimer = setTimeout(this.nextPic.bind(this), 3000);
        this[ATTRIBUTE_SYMBOL].startTransform;                      //起始位置
        this[ATTRIBUTE_SYMBOL].offset = 0;
    }
    unmounted() {

    }
    update() {

    }

    //加入指示器
    addIndicator() {
        this[ATTRIBUTE_SYMBOL].indicator = document.createElement("div");
        this[ATTRIBUTE_SYMBOL].indicator.classList.add("indicator");
        this[ATTRIBUTE_SYMBOL].root.appendChild(this[ATTRIBUTE_SYMBOL].indicator);

        for(let i = 0; i < this[ATTRIBUTE_SYMBOL].children.length; i++) {
            let e = document.createElement("div");
            e.style.opacity = 0.3;
            this[ATTRIBUTE_SYMBOL].indicator.appendChild(e);
        }
        this[ATTRIBUTE_SYMBOL].indicator.children[this[ATTRIBUTE_SYMBOL].position].style.opacity = 1;
    }

    //加入图片
    addChildren(data) {
        for(let d of data) {
            let e = document.createElement("img");
            e.src = d;
            this[ATTRIBUTE_SYMBOL].root.appendChild(e);
        }
        this[ATTRIBUTE_SYMBOL].children = Array.prototype.slice.call(this[ATTRIBUTE_SYMBOL].root.children);
        this[ATTRIBUTE_SYMBOL].children.map(item => {
            item.style.cssText = `width:100%;height:100%;transition:ease 0.5s`;
        })
    }

    
    //轮播效果
    nextPic() {
        let nextPosition = this[ATTRIBUTE_SYMBOL].position + 1;
        nextPosition = nextPosition % this[ATTRIBUTE_SYMBOL].children.length;
        
        //indicator changed by nextPosition
        for(let child of this[ATTRIBUTE_SYMBOL].indicator.children) {
            child.style.opacity = "0.3";
        }
        this[ATTRIBUTE_SYMBOL].indicator.children[nextPosition].style.opacity = 1;

        let current = this[ATTRIBUTE_SYMBOL].children[this[ATTRIBUTE_SYMBOL].position],
        next = this[ATTRIBUTE_SYMBOL].children[nextPosition];
        
            //利用 display:flex 和 zIndex 设置层叠
        for(let child of this[ATTRIBUTE_SYMBOL].children) {                      
            child.style.zIndex = 0;
        }
        current.style.zIndex = 1;
        next.style.zIndex = 1;

        //为 current 设置transition，没有会导致不与 next 同步，第一张行为不正常
        current.style.transition = "ease 0s";              

        next.style.transition = "ease 0s";
        next.style.transform = `translate(${100 - 100 * nextPosition}%)`;
        
        this.offsetStartTime = Date.now();

        //清理全部动画，每次只有 current 和 next 移动
        this[ATTRIBUTE_SYMBOL].tl.clearAnimtaion();

        this[ATTRIBUTE_SYMBOL].tl.addAnimation(new DOMElementStyleNumberAnimation(
            current,
            "transform",
            0, - 500 * this[ATTRIBUTE_SYMBOL].position,
            1000, - 500 - 500 * this[ATTRIBUTE_SYMBOL].position,
            (v) => `translateX(${v}px)`
        ));
        this[ATTRIBUTE_SYMBOL].tl.addAnimation(new DOMElementStyleNumberAnimation(
            next,
            "transform",
            0, 500 - 500 * nextPosition,
            1000, - 500 * nextPosition,
            (v) => `translateX(${v}px)`
        ))
        this[ATTRIBUTE_SYMBOL].tl.restart();

        this[ATTRIBUTE_SYMBOL].position = nextPosition;

        this[ATTRIBUTE_SYMBOL].nextPicTimer = setTimeout(this.nextPic.bind(this), 3000);
    }

    //加入手势
    addEvent() {
        this[ATTRIBUTE_SYMBOL].root.addEventListener("mousedown", event => event.preventDefault());
        this[ATTRIBUTE_SYMBOL].root.addEventListener("mousedown", event => this.mousedown(event));
        this[ATTRIBUTE_SYMBOL].root.addEventListener("pan", event => this.pan(event));
        this[ATTRIBUTE_SYMBOL].root.addEventListener("panend", event => this.panend(event));
    }

    mousedown(event) {
        this[ATTRIBUTE_SYMBOL].tl.pause();
        let currentTime = Date.now();
        if (currentTime - this[ATTRIBUTE_SYMBOL].offsetStartTime < 1000) {
            this[ATTRIBUTE_SYMBOL].offset = 500 - ease((currentTime - this[ATTRIBUTE_SYMBOL].offsetStartTime) / 1000) * 500;
        } else {
            this[ATTRIBUTE_SYMBOL].offset = 0;
        }
        clearTimeout(this[ATTRIBUTE_SYMBOL].nextPicTimer);
    }
    
    pan(event) {
        if (event.isVertical) return;
        
        let position = this[ATTRIBUTE_SYMBOL].position;
        let current = this[ATTRIBUTE_SYMBOL].children[position];
        let nextPosition = (position + 1) % this[ATTRIBUTE_SYMBOL].children.length;
        let next = this[ATTRIBUTE_SYMBOL].children[nextPosition];
        let lastPosition = (this[ATTRIBUTE_SYMBOL].children.length + position - 1) % this[ATTRIBUTE_SYMBOL].children.length;
        let last = this[ATTRIBUTE_SYMBOL].children[lastPosition];
        
        last.style.transition = "ease 0s";
        last.style.transform = `translate(${-500 - 500 * lastPosition + event.dx + this[ATTRIBUTE_SYMBOL].offset}px)`;

        next.style.transition = "ease 0s";
        next.style.transform = `translate(${500 - 500 * nextPosition + event.dx + this[ATTRIBUTE_SYMBOL].offset}px)`;

        current.style.transition = "ease 0s";
        current.style.transform = `translate(${ - 500 * position + event.dx + this[ATTRIBUTE_SYMBOL].offset}px)`;

        this[ATTRIBUTE_SYMBOL].position = position;
    }
    
    panend() {
        let position = this[ATTRIBUTE_SYMBOL].position;
        let children = this[ATTRIBUTE_SYMBOL].children;

        if (event.isVertical) return;
        let isLeft;
        if (event.isFlick && Math.abs(event.dx) > Math.abs(event.dy)) {
            if (event.dx > 0) {
                position --;
                isLeft = true;
            }
            if (event.dx < 0) {
                position ++;
                isLeft = false;
            }
        } else {
            if (event.dx > 250) {
                position --;
                isLeft = true;
            } else if (event.dx < - 250) {
                position ++;
                isLeft = false;
            } else if (event.dx > 0) {
                isLeft = false;
            } else {
                isLeft = true;
            }
        }
        position = (this[ATTRIBUTE_SYMBOL].children.length + position) % this[ATTRIBUTE_SYMBOL].children.length;
        

        let current = children[position];
        let nextPosition = (position + 1) % children.length;
        let next = children[nextPosition];
        let lastPosition = (children.length + position - 1) % children.length;
        let last = children[lastPosition];

        if (!isLeft) {
            last.style.transition = "";
        } else {
            last.style.transition = "ease 0s";
        }
        last.style.transform = `translate(${-500 - 500 * lastPosition}px)`;

        if (isLeft) {
            next.style.transition = "";
        } else {
            next.style.transition = "ease 0s";
        }
        next.style.transform = `translate(${500 - 500 * nextPosition}px)`;

        current.style.transition = "";
        current.style.transform = `translate(${- 500 * position}px)`;

        //恢复轮播
        this[ATTRIBUTE_SYMBOL].nextPicTimer = setTimeout(this.nextPic.bind(this), 3000);

        //conductor
        for(let child of this[ATTRIBUTE_SYMBOL].indicator.children) {
            child.style.opacity = "0.3";
        }
        this[ATTRIBUTE_SYMBOL].indicator.children[position].style.opacity = 1;

        this[ATTRIBUTE_SYMBOL].position = position;
    }
    

    getAttribute(name) {
        return this[ATTRIBUTE_SYMBOL][name];
    }
    setAttribute(name, value) {
        if(name == "data") {
            this.addChildren(value);
        }
        return this[ATTRIBUTE_SYMBOL][name] = value;
    }
    
    addEventListener(type, listener) {
        if(!this[EVENT_SYMBOL][type]) {
            this[EVENT_SYMBOL][type] = new Set;
        }
        this[EVENT_SYMBOL][type].add(listener);
    }
    removeEventListener(type, listener) {
        if(!this[EVENT_SYMBOL][type]) {
            return;
        }
        this[EVENT_SYMBOL][type].delete(listener);
    }
    triggerEvent(type) {
        if(!this[EVENT_SYMBOL][type]) 
            return;
        for(let event of this[EVENT_SYMBOL][type]) {
            event.call(this);
        }
    }
}