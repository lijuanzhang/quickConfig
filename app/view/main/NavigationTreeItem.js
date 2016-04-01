Ext.define('QuickConfig.view.main.NavigationTreeItem', {
  extend: 'Ext.list.TreeItem',
  xtype: 'ntreelistitem',
  privates: {
    syncIndent: function() {
      var me = this,
        node = me.getNode(),
        indent = node.indent || 0,
        depth;
      if (node.indent) {
        depth = node.data.depth - 1;
        me.wrapElement.dom.style.marginLeft = (depth * indent) + 'px';
      }
    }
  }
});
