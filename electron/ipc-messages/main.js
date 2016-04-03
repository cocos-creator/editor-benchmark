var Ipc = require('ipc');

var _panel1 = 'benchmark-ipc-messages.panel1';
var _panel2 = 'benchmark-ipc-messages.panel2';

module.exports = {
    load: function () {
    },

    unload: function () {
    },

    'benchmark-ipc-messages:open': function () {
        Editor.Panel.open(_panel1);
        Editor.Panel.open(_panel2);
    },

    'benchmark:renderer-query-from-main': function (reply) {
        reply();
    },

    'benchmark:main-to-renderer': function () {
        var messageTimes = [].pop.call(arguments);
        [].splice.call(arguments, 0, 0, 'benchmark:main-to-renderer');

        var win = Editor.Panel.findWindow(_panel1);
        for (var i = 0; i < messageTimes; i++) {
            win.sendToPage.apply(win, arguments);
        }
    },

    'benchmark:begin-renderer-to-main': function (reply) {
        this.current = 0;
        this.messagesLength = [].pop.call(arguments);

        reply();
    },

    'benchmark:renderer-to-main': function () {
        if (this.current === 0) {
            this.lastTime = Date.now();
        }

        this.current ++;

        if(this.current === this.messagesLength) {

            var win = Editor.Panel.findWindow(_panel1);
            var now = Date.now();
            var time = (now - this.lastTime) / 1000.0;

            win.sendToPage('benchmark:end-renderer-to-main', time);
        }
    }
};
