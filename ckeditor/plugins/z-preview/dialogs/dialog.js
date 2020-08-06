CKEDITOR.dialog.add('z-preview-dialog', function(editor) {
    return {
        title: 'Z Preview Config',
        minWidth: 350,
        minHeight: 200,
        contents: [{
            id: 'z-preview-config',
            elements: [{
                setup: function(widget) {
                    this.setValue(widget.data.bg_color);
                },
                commit: function(widget) {
                    widget.setData('bg_color', this.getValue());
                },
                type: 'text',
                id: 'bg_color',
                label: 'Background color (HEX, RGB, RGBA) or leave blank for default'
            }]
        }]
    };
});