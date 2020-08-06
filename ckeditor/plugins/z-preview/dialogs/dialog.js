CKEDITOR.dialog.add('z-preview-dialog', function(editor) {
    return {
        title: 'Z Preview Config',
        minWidth: 350,
        minHeight: 200,
        contents: [{
            id: 'z-preview-config',
            elements: [{
                setup: function(widget) {
                    this.setValue(widget.data.link_text);
                },
                commit: function(widget) {
                    widget.setData('link_text', this.getValue());
                },
                type: 'text',
                id: 'link_text',
                label: 'Link text to display on page'
            }]
        }]
    };
});