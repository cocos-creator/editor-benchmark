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
            //
        }

        testTime = Date.now() - startTime;
        this.timeLabel.string = testTime;

        this.updatePercent();
    },

    testBaseline () {
        var startTime = Date.now();

        for (var i = 0; i < this.loopCount; ++i) {
            //
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
