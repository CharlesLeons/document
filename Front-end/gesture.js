function enableGesture(container) {
    let start = (point, context) => {
        context.startX = point.clientX;
        context.startY = point.clientY;

        context.startTime = Date.now();

        context.isTap = true;
        context.isPan = false;
    }

    let move = (point, context) => {
        let dx = point.clientX - context.startX, dy = point.clientY - context.startY;
        if (dx * dx + dy * dy > 100) {
            context.isTap = false;
            context.isPan = true;
        }
        if (context.isPan) {
            let e = new Event("pan");
            e.dx = dx;
            e.dy = dy;
            container.dispatchEvent(e);
        }
    }

    let end = (point, context) => {
        let dx = point.clientX - context.startX, dy = point.clientY - context.startY;
        if (context.isTap) {
            let e = new Event("tap");
            container.dispatchEvent(e);
        }
        let v =  Math.sqrt(dx * dx + dy * dy) / (Date.now() - context.startTime)
        if (context.isPan &&  v > 0.3) {
            context.isFlick = true;
            let e = new Event("flick");
            e.dx = dx;
            e.dy = dy;
            container.dispatchEvent(e);
        } else {
            context.isFlick = false;
        }
        if (context.isPan) {
            let e = new Event("panend");
            e.dx = dx;
            e.dy = dy;
            e.isFlick = context.isFlick;
            container.dispatchEvent(e);
        }
    }

    let cancel = (point, context) => {
        if (context.isPan) {
            let e = new Event("pancancel");
            container.dispatchEvent(e);
        }
    }

    let contexts = Object.create(null);
    let mouseSymbol = Symbol("mouse");      //抹平鼠标和触控的区别

    let mousedown = event => {
        document.addEventListener("mousemove", mousemove);
        document.addEventListener("mouseup", mouseup);
        contexts[mouseSymbol] = Object.create(null);
        start(event, contexts[mouseSymbol]);
    }

    let mousemove = event => {
        move(event, contexts[mouseSymbol]);
    }

    let mouseup = event => {
        end(event, contexts[mouseSymbol]);
        delete contexts[mouseSymbol];
        document.removeEventListener("mousemove", mousemove);
        document.removeEventListener("mouseup", mouseup);
    }

    container.addEventListener("mousedown", mousedown);

    let touchstart = event => {
        for(let touch of event.changedTouches) {
            contexts[touch.identifier] = Object.create(null);
            start(touch, contexts[touch.identifier]);
        }
    }
    let touchmove = event => {
        for(let touch of event.changedTouches) {
            move(touch, contexts[touch.identifier]);
        }
    }
    let touchend = event => {
        for(let touch of event.changedTouches) {
            end(touch, contexts[touch.identifier]);
            delete contexts[touch.identifier];
        }
    }
    let touchcancel = event => {
        for(let touch of event.changedTouches) {
            cancel(touch, contexts[touch.identifier]);
            delete contexts[touch.identifier];
        }
    }

    this.container.addEventListener("touchstart", touchstart);
    this.container.addEventListener("touchmove", touchmove);
    this.container.addEventListener("touchend", touchend);
    this.container.addEventListener("touchcancel", touchcancel);
}