Ext.define('QuickConfig.view.offerspec.AddController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.add',
  onSelectNext: function() {
      debugger;
      var panel = this.lookupReference('chooseTempAndOffer');
     //var offerAndTemplate =  panel.getViewModel().getStore('offerByTemplate').getData();
     var offerAndTemplate =  panel.getViewModel().getStore('offerByTemplate');

    var option = {
      //actionId: 'offer-config',
      //view: 'offerspec.Config',
        actionId: 'offer-batchAdd',
        view: 'offerspec.BatchAdd',
        offerAndTemplate:offerAndTemplate
    };
      Ext.namespace("offer.com");
      Ext.namespace("offer.com");
      //if(!offerAndTemplate.length){
      //    Ext.Msg.alert("请先选择新增的销售品模板和销售品数量");
      //    return;
      //}
      offer.com.offer = {operator:'batchAdd',offers:offerAndTemplate};
      this.fireEvent('actionchange', option);
  },
  afterRender: function() {
    var view = this.getView(),
      el = view.getEl();
    el.on("mousedown", this.onClick, this);
  },
  onClick: function(e, t, option) {
    var view = this.getView(),
      target = e.target || e.srcElement,
      itemClicked = false,
      addWayArray,
      className, selectItem, selectItemClassName;
    while (target) {
      if (target.className && target.className.indexOf('add-way') !== -1) {
        itemClicked = true;
        break;
      }
      target = target.parentNode;
    }
    if (itemClicked) {
      if (e.preventDefault) {
        e.preventDefault();
      }
      if (target.className.indexOf('add-way-hover') == -1) {
        return;
      }
      addWayArray = view.getEl().query('.add-way');
      addWayArray.forEach(function(element, index, array) {
        selectItem = element.querySelector('.big-square-image');
        if (element.id == target.id) {
          selectItem.className = selectItem.className + ' ' + 'big-square-image-pressed';
          element.className = element.className.replace('add-way-hover', '');
        } else {
          selectItem.className = selectItem.className.replace('big-square-image-pressed', '');
          if (element.className.indexOf('add-way-hover') == -1) {
            element.className = element.className + ' ' + 'add-way-hover';
          }
        }
      });
    }
  }
});
