import TabView from "./TabView.js"
import ScrollView from "./ScrollView.js"
import ListView from "./ListView.js"
import Div from "./Div.js"
import Carousel from "./Carousel.js"
import "../style/style.css";
import {create} from "./create.js"


function loadMore() {
    setTimeout(() => {
        this.setAttribute("placeHolderText", "No More")
    }, 5000);
}

window.render = function(data, root) {
    //-webkit-overflow-scrolling:touch    触摸内部滑动
    //white-space:normal                  恢复换行
    // <ListView data={{a:1, b:2}}></ListView>
    var c = <TabView style="width:100%;height:100%;">
    <ScrollView tab-title="推荐" on-scrollToBottom={loadMore} style="-webkit-overflow-scrolling:touch;overflow:scroll;white-space:normal;font-size:50px;background-color:lightgray;">
            <ListView data={data}></ListView>
        </ScrollView>
        <ScrollView tab-title="有趣的店" style="-webkit-overflow-scrolling:touch;overflow:scroll;white-space:normal;font-size:50px;background-color:lightblue">
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
            test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 
        </ScrollView>
        <ScrollView tab-title="品牌新店" style="-webkit-overflow-scrolling:touch;overflow:scroll;white-space:normal;font-size:50px;background-color:yellow">
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
        test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3
    </ScrollView>
    </TabView>
c.appendTo(document.body);
}       