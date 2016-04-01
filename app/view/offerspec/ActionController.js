Ext.define('QuickConfig.view.offerspec.ActionController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.action',
  afterRender: function() {
    var view = this.getView(),
      el = view.getEl(),
      option = Ext.apply(view.data, {
        actionId: view.actionId
      });
    el.on("mousedown", this.onItemClick, this, option);
  },
  onItemClick: function(e, t, option) {
    this.fireEvent('actionchange', option);
  }
});
