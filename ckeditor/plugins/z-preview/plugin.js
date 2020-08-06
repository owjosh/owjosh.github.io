CKEDITOR.plugins.add('z-preview', {
    requires: 'widget',
    icons: 'z-preview',
    commandName: 'z-preview-init',
    label: 'Z Preview',
    init: function(editor) {
        // editor.addContentsCss(this.path + 'styles/backend.css');
        editor.widgets.add('z-preview-init', {
            template: 'hello',
            upcast: function(element) {
                return element.name == 'a' && element.hasClass('btn-link');
            },
            dialog: 'z-preview-dialog',
            init: function() {
                // initialize widget data object
                this.setData('bg_color', this.element.getStyle('background-color'));
            },
            data: function() {
                // update widget with new data from dialog
                this.element.innerHTML(this.data.bg_color);
            }
        });

        // add the dialog file to the widget
        CKEDITOR.dialog.add('z-preview-dialog', this.path + 'dialogs/dialog.js');
    }
});