module.exports = {
    load: function () {
    },

    unload: function () {
    },

    'benchmark-multi-webview-webgl:open': function () {
        Editor.Panel.close('benchmark-multi-webview-webgl.panel1');
        Editor.Panel.close('benchmark-multi-webview-webgl.panel2');

        Editor.Panel.open('benchmark-multi-webview-webgl.panel1');
        Editor.Panel.open('benchmark-multi-webview-webgl.panel2');
    },

    'benchmark-webview-webgl:open': function () {
        Editor.Panel.close('benchmark-multi-webview-webgl.panel1');
        Editor.Panel.close('benchmark-multi-webview-webgl.panel2');
        
        Editor.Panel.open('benchmark-multi-webview-webgl.panel1');
    },
};
