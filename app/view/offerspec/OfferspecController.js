Ext.define('QuickConfig.view.main.OfferspecController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.offerspec',
  listen: {
        controller: {
            '*': {
                actionchange: 'onActionChange',
                nextProcess:'onNextProcess'
            }
        }
      //,
      //component: {
      //    'button[name=favour]':{
      //        click: 'addMyfavour'
      //    }
      //}
      //,
        //component: {
        //    'radiogroup[reference=modifyTypeRG]': {
        //        change: 'onModifyTypeChange'
        //    },
        //    'gridpanel[reference=offersSearchGrid]':{
        //        select:'onSelect',
        //        deselect:'onDeselect'
        //    }
        //
        //}
    },
  onActionChange: function(option) {
    var actionId = option.actionId,
      viewName = option.view;
    if (actionId) {
      this.setCurrentAction(viewName, actionId);
    }
  },
  setCurrentAction: function(viewName, actionId) {
      var me = this,
      mainCard = me.getView(),
      mainLayout = mainCard.getLayout(),
      lastView = mainLayout.getActiveItem(),
      existingItem = mainCard.child('component[actionId=' + actionId + ']'),
      newView;
      debugger;
    if (!existingItem) {
      newView = Ext.create('QuickConfig.view.' + viewName, {
        hideMode: 'offsets',
        actionId: actionId
      });
    }
    if (!newView || !newView.isWindow) {
      if (existingItem) {
        if (existingItem !== lastView) {
          mainLayout.setActiveItem(existingItem);
        }
        newView = existingItem;
      } else {
        Ext.suspendLayouts();
        mainLayout.setActiveItem(mainCard.add(newView));
        Ext.resumeLayouts(true);
      }
    }
    //Menu 展示处理
    //To Do

    if (newView.isFocusable(true)) {
      newView.focus();
    }

  },
    onNextProcess:function(el, opts){
        debugger;
        console.log("onNextProcess:",opts);

    }
});
