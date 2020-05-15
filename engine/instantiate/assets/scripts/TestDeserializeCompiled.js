var testTime = NaN;
var baselineTime = NaN;

const prefabData = `[1,["ecpdLyjvZBwrvm+cedCcQy","cbeekrK2tERZHMYnb3SW3c","bancX3RatP9b6Sl8enO4rV","b8OSNRvpdPAZhePn0hGPPJ","ceNzPrzX1KgLadkTyxbT3u","7ewuO0jsFIiKv5sYyeKk6T","6dwF1i3RBKa6Bc7ZJrTzFC","fanyIAeLpOJJtKSKfS2i4H"],["node","_spriteFrame","_N$normalSprite","_N$pressedSprite","_N$hoverSprite","_N$disabledSprite","_N$target","_parent","asset","label","scrollView","btnClearAll","root","scene","_N$verticalScrollBar","_N$content"],[["cc.Node",["_name","_id","_components","_trs","_contentSize","_parent","_children","_prefab","_anchorPoint"],1,9,7,5,1,2,4,5],["cc.Widget",["_alignFlags","alignMode","_left","_right","_top","_originalWidth","_originalHeight","_bottom","node"],-5,1],["cc.Node",["_name","_parent","_children","_components","_color","_contentSize","_trs","_anchorPoint"],2,1,2,12,5,5,7,5],["e4f88adp3hERoJ48DZ2PSAl",["_useOriginalSize","_string","_N$horizontalAlign","_N$verticalAlign","_N$textKey","_fontSize","_enableWrapText","_N$overflow","node","_materials"],-5,1,3],["cc.Sprite",["_type","_sizeMode","node","_materials","_spriteFrame"],1,1,3,6],["cc.SceneAsset",["_name","asyncLoadAssets"],1],["cc.Scene",["_name","autoReleaseAssets","_children","_anchorPoint","_trs"],1,2,5,7],["cc.Node",["_name","_parent","_components","_color","_contentSize","_anchorPoint","_trs"],2,1,2,5,5,5,7],["cc.Camera",["_clearFlags","_depth","_nearClip","node"],0,1],["cc.PrefabInfo",["fileId","sync","root","asset"],1,1,6],["cc.Scrollbar",["_N$direction","node","_scrollView","_N$handle"],2,1,1,1],["cc.ScrollView",["horizontal","brake","bounceDuration","_N$horizontalScrollBar","node"],-1,1],["cc.Mask",["_N$alphaThreshold","node","_materials"],2,1,3],["cc.Layout",["_resize","_N$layoutType","_N$paddingLeft","_N$paddingRight","_N$paddingTop","_N$paddingBottom","_N$spacingY","node","_layoutSize"],-4,1,5],["cc.Button",["_N$transition","node","clickEvents","_N$pressedColor","_N$disabledColor","_N$target","_N$normalSprite","_N$pressedSprite","_N$hoverSprite","_N$disabledSprite"],2,1,9,5,5,1,6,6,6,6],["cc.ClickEvent",["component","handler","target"],1,1],["cc.Canvas",["node"],3,1],["fee3dcLoaZCvrJ9FZrBngbb",["node","btnClearAll","scrollView","label"],3,1,1,1,6]],[[4,0,1,2,3,4,3],[0,0,5,2,4,3,2],[0,0,5,6,2,4,3,2],[3,0,1,5,6,2,3,7,4,8,9,9],[14,0,1,2,3,4,5,6,7,8,9,2],[15,0,1,2,3],[5,0,1,3],[6,0,1,2,3,4,3],[0,0,1,6,2,4,3,3],[0,0,5,2,3,2],[0,1,0,5,7,3],[0,0,2,4,8,3,2],[0,0,5,6,2,3,2],[0,0,6,2,4,3,2],[2,0,1,2,3,4,5,6,2],[2,0,1,2,3,4,5,7,6,2],[7,0,1,2,3,4,5,6,2],[8,0,1,2,3,4],[9,0,1,2,3,3],[3,0,1,2,3,4,8,9,6],[1,1,0,2,3,4,5,8,7],[1,1,0,2,6,8,5],[1,1,0,2,3,4,7,5,6,8,9],[1,1,0,3,4,8,5],[1,0,8,2],[4,0,1,2,3,3],[10,0,1,2,3,2],[11,0,1,2,3,4,5],[12,0,1,2,2],[13,0,1,2,3,4,5,6,7,8,8],[16,0,1],[17,0,1,2,3,1]],[[6,"LoadResDir",null],[8,"Canvas","089adIqUUBHPLcEYIru+eJx",[-6,-7,-8,-9,-10],[[30,-1],[31,-4,-3,-2,29],[24,45,-5]],[5,960,640],[480,320,0,0,0,0,1,1,1,1]],[14,"ScrollView",1,[-14,-15],[[-11,[0,1,0,-12,[6],7],[22,2,5,210,210,86,54,540,500,-13]],1,4,4],[4,4290295992],[5,540,500],[-104,-16,0,0,0,0,1,1,1,1]],[13,"ClearAll",[-19],[[0,1,0,-16,[23],24],[4,2,-18,[[5,"loadResDir_example","onClearAll",1]],[4,4294967295],[4,4294967295],-17,25,26,27,28]],[5,250,50],[0,-30,0,0,0,0,1,1,1,1]],[15,"scrollBar",2,[-23],[[-20,[21,2,37,350.07654921020657,237,-21],[0,1,0,-22,[4],5]],1,4,4],[4,4293122542],[5,12,500],[0,1,0.5],[270,0,0,0,0,0,1,1,1,1]],[12,"ButtonList",1,[-25,-26,3],[[23,2,33,154,210,-24]],[326,110,0,0,0,0,1,1,1,1]],[2,"LoadAllAsset",5,[-30],[[0,1,0,-27,[9],10],[4,2,-29,[[5,"loadResDir_example","onLoadAll",1]],[4,4294967295],[4,4294967295],-28,11,12,13,14]],[5,250,50],[0,92,0,0,0,0,1,1,1,1]],[2,"LoadSpriteFrameAll",5,[-34],[[0,1,0,-31,[16],17],[4,2,-33,[[5,"loadResDir_example","onLoadSpriteFrameAll",1]],[4,4294967295],[4,4294967295],-32,18,19,20,21]],[5,250,50],[0,30,0,0,0,0,1,1,1,1]],[1,"Title",1,[[19,false,"这个例子不包括运行时演示",1,1,"cases/05_scripting/07_asset_loading/LoadResAll.fire.6",-35,[1]],[20,0,41,240,240,20,480,-36]],[5,480,50.4],[0,274.79998779296875,0,0,0,0,1,1,1,1]],[27,false,0.75,0.23,null,2],[11,"content",[[29,1,2,5,5,5,5,5,-37,[5,520,210]]],[5,520,210],[0,0.5,1],[-4,245,0,0,0,0,1,1,1,1]],[2,"view",2,[10],[[28,1,-38,[3]]],[5,513.7,497.8],[-6,-2,0,0,0,0,1,1,1,1]],[7,"New Node",true,[1],[0,0,0],[0,0,0,0,0,0,1,0.7720947265625,0.7720947265625,1]],[9,"Main Camera",1,[[17,7,-1,0.1,-39]],[0,0,349.00823974609375,0,0,0,1,1,1,1]],[10,"2b2432PG/RKIoTi59fPR2pl","Background",1,[18,"78fd70+ls5GgJcFkzvLSRk8",true,-40,0]],[16,"bar",4,[-41],[4,4294308332],[5,10,30],[0,1,0],[-1,0,0,0,0,0,1,1,1,1]],[25,1,0,15,[2]],[26,1,4,9,16],[1,"Label",6,[[3,false,"全部加载",20,false,1,1,1,"cases/05_scripting/07_asset_loading/LoadResAll.fire.24",-42,[8]]],[5,200,50],[1.1368683772161603e-13,0,0,0,0,0,1,1,1,1]],[1,"Label",7,[[3,false,"加载全部的 SpriteFrame",20,false,1,1,1,"加载全部的 SpriteFrame",-43,[15]]],[5,212,50],[1.1368683772161603e-13,0,0,0,0,0,1,1,1,1]],[1,"Label",3,[[3,false,"清空",20,false,1,1,1,"cases/05_scripting/07_asset_loading/LoadResAll.fire.36",-44,[22]]],[5,200,50],[1.1368683772161603e-13,0,0,0,0,0,1,1,1,1]]],0,[0,0,1,0,10,9,0,11,3,0,0,1,0,0,1,0,-1,13,0,-2,14,0,-3,8,0,-4,2,0,-5,5,0,-1,9,0,0,2,0,0,2,0,-1,4,0,-2,11,0,0,3,0,6,3,0,0,3,0,-1,20,0,-1,17,0,0,4,0,0,4,0,-1,15,0,0,5,0,-1,6,0,-2,7,0,0,6,0,6,6,0,0,6,0,-1,18,0,0,7,0,6,7,0,0,7,0,-1,19,0,0,8,0,0,8,0,0,10,0,0,11,0,0,13,0,12,14,0,-1,16,0,0,18,0,0,19,0,0,20,0,13,12,1,7,12,3,7,5,9,14,17,9,15,10,10,7,11,44],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16],[8,-1,-1,-1,-1,1,-1,1,-1,-1,1,2,3,4,5,-1,-1,1,2,3,4,5,-1,-1,1,2,3,4,5,9,1],[3,0,0,0,0,4,0,5,0,0,1,1,2,1,2,0,0,1,1,2,1,2,0,0,1,1,2,1,2,6,7]]`;

cc.Class({
    extends: cc.Component,

    properties: {
        loopCount: 400,

        timeLabel: cc.Label,
        percentLabel: cc.Label,
        baselineTimeLabel: cc.Label,
    },

    updatePercent () {
        if (!Number.isNaN(testTime) && !Number.isNaN(baselineTime)) {
            this.percentLabel.string = (testTime * 100 / baselineTime - 100) | 0;
        }
        else {
            this.percentLabel.string = '--';
        }
    },

    test () {
        var startTime = performance.now();

        for (var i = 0; i < this.loopCount; ++i) {
            cc.deserialize(prefabData);
        }

        testTime = performance.now() - startTime;
        this.timeLabel.string = testTime | 0;

        this.updatePercent();
    },

    testBaseline () {
        var startTime = Date.now();

        for (var i = 0; i < this.loopCount; ++i) {
        }

        baselineTime = Date.now() - startTime;
        this.baselineTimeLabel.string = baselineTime;

        this.updatePercent();
    },

    testAll () {
        this.test();
        this.testBaseline();
    }
});
// new 736+660+614+852+715
// new 1050+869+1040+919+1028

// 550+487+495+502+488
// 456+422+450+439+431 (cache json)
// 166+191+173+179+175