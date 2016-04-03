module.exports = {
    load: function () {
    },

    unload: function () {
    },

    'benchmark-multiple-normal-webgl:open': function () {
        Editor.Panel.close('benchmark-multiple-normal-webgl.panel1');
        Editor.Panel.close('benchmark-multiple-normal-webgl.panel2');

        Editor.Panel.open('benchmark-multiple-normal-webgl.panel1');
        Editor.Panel.open('benchmark-multiple-normal-webgl.panel2');
    },

    'benchmark-normal-webgl:open': function () {
        Editor.Panel.close('benchmark-multiple-normal-webgl.panel1');
        Editor.Panel.close('benchmark-multiple-normal-webgl.panel2');

        Editor.Panel.open('benchmark-multiple-normal-webgl.panel1');
    },
};
