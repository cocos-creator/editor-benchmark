var instantiateTime = NaN;
var baselineTime = NaN;
var Group = require('Group');

function createButtonManually (res, name, x, y) {
    var button = new cc.Node();
    button.name = name;
    button.setPosition(x, y);
    var buttonSprite = button.addComponent(cc.Sprite);
    buttonSprite.spriteFrame = res.btn_normal;
    buttonSprite.type = cc.Sprite.Type.SLICED;
    buttonSprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
    button.setContentSize(100,  40);
    var buttonComp = button.addComponent(cc.Button);
    buttonComp.target = button;
    buttonComp.transition = cc.Button.Transition.SPRITE;
    buttonComp.normalSprite = res.btn_normal;
    buttonComp.pressedSprite = res.btn_pressed;
    buttonComp.hoverSprite = res.btn_normal;
    buttonComp.disabledSprite = res.btn_normal;

    var label = new cc.Node();
    label.name = 'Label';
    label.setContentSize(100, 40);
    label.parent = button;
    var labelComp = label.addComponent(cc.Label);
    labelComp.string = name;
    labelComp.fontSize = 20;
    labelComp.lineHeight = 40;
    labelComp.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
    labelComp.verticalAlign = cc.Label.VerticalAlign.CENTER;
    labelComp.overflow = cc.Label.Overflow.CLAMP;
    labelComp.enableWrapText = false;

    return button;
}

// clone prefab manually, this should be the fastest way
function clonePrefab (res) {
    var groupRoot = new cc.Node();
    groupRoot.name = 'Group Prefab';
    groupRoot.setPosition(50, 50);
    var groupComp = groupRoot.addComponent(Group);
    var avatar = new cc.Node();
    avatar.name = 'Avatar';
    avatar.setAnchorPoint(0, 1);
    avatar.setScale(0.5, 0.5);
    avatar.setContentSize(512, 512);
    var sprite = avatar.addComponent(cc.Sprite);
    sprite.spriteFrame = res.content;
    avatar.parent = groupRoot;

    var topRightAnchor = new cc.Node();
    topRightAnchor.name = 'Top Right Anchor';
    topRightAnchor.x = 512;
    topRightAnchor.parent = avatar;
    var topRightAnchorWidget = topRightAnchor.addComponent(cc.Widget);
    topRightAnchorWidget.isAlignRight = true;
    topRightAnchorWidget.isAlignTop = true;

    var add = new cc.Node();
    add.name = 'Add';
    add.parent = topRightAnchor;
    add.setContentSize(94, 94);
    sprite = add.addComponent(cc.Sprite);
    sprite.spriteFrame = res.add;
    var addBtn = add.addComponent(cc.Button);
    addBtn.target = add;
    addBtn.transition = cc.Button.Transition.COLOR;

    var IDBG = new cc.Node();
    IDBG.name = 'ID BG';
    IDBG.setPosition(50, -462);
    IDBG.setScale(2, 2);
    IDBG.parent = avatar;
    var IDBGSprite = IDBG.addComponent(cc.Sprite);
    IDBGSprite.spriteFrame = res.bg
    IDBGSprite.type = cc.Sprite.Type.SLICED;
    IDBGSprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
    IDBG.setContentSize(50, 50);
    var IDBGWidget = IDBG.addComponent(cc.Widget);
    IDBGWidget.isAlignLeft = true;
    IDBGWidget.isAlignBottom = true;

    var label = new cc.Node();
    label.name = 'Label';
    label.setContentSize(24.44, 54.44);
    label.parent = IDBG;
    var labelComp = label.addComponent(cc.Label);
    labelComp.string = '1';
    labelComp.lineHeight = 49;
    labelComp.font = res.font;

    var rightBtn1 = createButtonManually(res, 'Button 1', 341, -73);
    rightBtn1.parent = groupRoot;
    var rightBtn2 = createButtonManually(res, 'Button 2', 341, -131);
    rightBtn2.parent = groupRoot;
    var rightBtn3 = createButtonManually(res, 'Button 3', 341, -189);
    rightBtn3.parent = groupRoot;

    groupComp.addBtn = addBtn;
    groupComp.idLabel = labelComp;
    groupComp.rightBtn1 = rightBtn1;
    groupComp.rightBtn2 = rightBtn2;
    groupComp.rightBtn3 = rightBtn3;

    return groupRoot;
}

cc.Class({
    extends: cc.Component,

    properties: {
        copyCount: 400,
        prefab: cc.Prefab,

        instantiateTimeLabel: cc.Label,
        instantiatePercentLabel: cc.Label,
        baselineTimeLabel: cc.Label,
    },

    updateInstantiatePercent () {
        if (!Number.isNaN(instantiateTime) && !Number.isNaN(baselineTime)) {
            this.instantiatePercentLabel.string = (instantiateTime * 100 / baselineTime - 100) | 0;
        }
        else {
            this.instantiatePercentLabel.string = '--';
        }
    },

    testInstantiate () {
        var startTime = Date.now();

        for (var i = 0; i < this.copyCount; ++i) {
            cc.instantiate(this.prefab);
        }

        instantiateTime = Date.now() - startTime;
        this.instantiateTimeLabel.string = instantiateTime;

        this.updateInstantiatePercent();
    },

    testBaseline () {
        var startTime = Date.now();
        var prefabRoot = this.prefab.data;
        var res = {
            content: cc.find('Avatar', prefabRoot).getComponent(cc.Sprite).spriteFrame,
            add: cc.find('Avatar/Top Right Anchor/Add', prefabRoot).getComponent(cc.Sprite).spriteFrame,
            bg: cc.find('Avatar/ID BG', prefabRoot).getComponent(cc.Sprite).spriteFrame,
            font: cc.find('Avatar/ID BG/Label', prefabRoot).getComponent(cc.Label).font,
            btn_normal: cc.find('Button 1', prefabRoot).getComponent(cc.Button).normalSprite,
            btn_pressed: cc.find('Button 1', prefabRoot).getComponent(cc.Button).pressedSprite,
        };

        //clonePrefab(res).parent = this.node;
        for (var i = 0; i < this.copyCount; ++i) {
            clonePrefab(res);
        }

        baselineTime = Date.now() - startTime;
        this.baselineTimeLabel.string = baselineTime;

        this.updateInstantiatePercent();
    },

    testAll () {
        this.testInstantiate();
        this.testBaseline();
    }
});
