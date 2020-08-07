CKEDITOR.plugins.add('z-preview', {
    requires: 'widget',
    icons: 'z-preview',
    commandName: 'z-preview-init',
    label: 'Z Preview',
    init: function(editor) {
        // editor.addContentsCss(this.path + 'styles/backend.css');
        editor.widgets.add('z-preview-init', {
            template: '<div id="posterViewer"></div><script>$(document).ready(function(){$("#posterViewer").append(\'<iframe src="https://themes.secure-platform.com/ViewerJS/#{SubmissionForm.poster.MediaUrl}" width="600" height="400" allowfullscreen webkitallowfullscreen></iframe>\');});</script>',
            upcast: function(element) {
                return element.name == 'a' && element.hasID('posterViewer');
            },
            dialog: 'z-preview-dialog',
            init: function() {
                // initialize widget data object
                this.setData('link_text', this.element.getText());
            },
            data: function() {
                // update widget with new data from dialog
                this.element.setText(this.data.link_text);
            }
        });

        // add the dialog file to the widget
        CKEDITOR.dialog.add('z-preview-dialog', this.path + 'dialogs/dialog.js');
    }
});