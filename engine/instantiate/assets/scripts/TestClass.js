var testTime = NaN;
var baselineTime = NaN;

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
        var startTime = Date.now();

        for (var i = 0; i < this.loopCount; ++i) {
        }

        var baseTime = Date.now() - startTime;

        for (var i = 0; i < this.loopCount; ++i) {
            new cc.Node();
        }

        testTime = Date.now() - startTime - baseTime * 2;
        this.timeLabel.string = testTime;

        this.updatePercent();
    },

    testBaseline () {
        var startTime = Date.now();

        for (var i = 0; i < this.loopCount; ++i) {
        }

        var baseTime = Date.now() - startTime;

        for (var i = 0; i < this.loopCount; ++i) {
            new cc.Widget();
            new cc.Widget();
            new cc.Widget();
            new cc.Widget();
            new cc.Widget();
            new cc.Widget();
            new cc.Widget();
            new cc.Widget();
            new cc.Widget();
            new cc.Widget();
        }

        baseTime = Date.now() - startTime - baseTime * 2;
        this.baselineTimeLabel.string = baseTime;

        this.updatePercent();
    },

    testAll () {
        this.test();
        this.testBaseline();
    }
});
