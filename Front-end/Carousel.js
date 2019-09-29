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
        this[PROPERTY_SYMBOL].children = [];
        this[PROPERTY_SYMBOL].tl = new Timeline;
        this[PROPERTY_SYMBOL].position = 0;
        this[PROPERTY_SYMBOL].offsetStartTime = 0;
        this[PROPERTY_SYMBOL].nextPicTimer = null;
        this.created();
    }

    appendTo(element) {
        element.appendChild(this.root);
        this.mounted();
    }

    created() {
        this.root = document.createElement("div");
        addChild(this.data);
        addConductor();
        this.nextPicTimer = setTimeout(this.nextPic, 3000);
        enableGesture(this.root);
    }
    mounted() {
        
    }
    unmounted() {

    }
    update() {

    }

    //加入指示器
    addConductor() {
        this.conductor = document.createElement("div");
        this.conductor.classList.add("conductor");
        this.root.appendChild(this.conductor);

        for(let i = 0; i < this.children.length; i++) {
            let e = document.createElement("div");
            e.style.opacity = 0.3;
            this.conductor.appendChild(e);
        }
        this.conductor.children[position].style.opacity = 1;
    }

    //加入图片
    addChild(data) {
        for(let d of data) {
            let e = document.createElement("img");
            e.src = d;
            appendChild(e);
        }
    }

    //轮播效果
    nextPic() {
        let nextPosition = this.position + 1;
        nextPosition = nextPosition % this.children.length;
        
        //conductor changed by nextPosition
        for(let child of this.conductor.children) {
            child.style.opacity = "0.3";
        }
        this.conductor.children[nextPosition].style.opacity = 1;

        let current = this.children[this.position],
        next = this.children[nextPosition];
        
            //利用 display:flex 和 zIndex 设置层叠
        for(let child of this.children) {                      
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
        this.tl.clearAnimtaion();

        this.tl.addAnimation(new DOMElementStyleNumberAnimation(
            current,
            "transform",
            0, - 500 * this.position,
            1000, - 500 - 500 * this.position,
            (v) => `translateX(${v}px)`
        ));
        this.tl.addAnimation(new DOMElementStyleNumberAnimation(
            next,
            "transform",
            0, 500 - 500 * nextPosition,
            1000, - 500 * nextPosition,
            (v) => `translateX(${v}px)`
        ))
        this.tl.restart();

        this.position = nextPosition;

        this.nextPicTimer = setTimeout(this.nextPic, 3000);
    }


    appendChild(child) {
        this.children.push(child);
        child.appendTo(this.root);
    }

    
    get children() {
        return this[PROPERTY_SYMBOL].children;
    }

    getAttribute(name) {
        if(name == "style") {
            return this.root.getAttribute("style");
        }
        if(name == "data") {
            return this.root.getAttribute("data");
        }
        return this[ATTRIBUTE_SYMBOL][name];
    }
    setAttribute(name, value) {
        if(name == "style") {
            this.root.setAttribute("style", value);
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