/**
 * Created by Administrator on 2016/4/25.
 */
Ext.define('QuickConfig.view.offerspec.OfferStructureController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.offerstructure',
    listen: {
        component: {
            'treepanel[reference=attrsTree]': {
                itemclick: 'onItemclick'
            }
        }
    },
    /**
     * 搜索节点
     */
    onSearchChange:function(el,newValue,oldValue,otps) {
        var tree = this.lookupReference('attrsTree'),
            v,
            matches = 0;

        try {
            v = new RegExp(el.getValue(), 'i');
            Ext.suspendLayouts();
            tree.store.filter({
                filterFn: function(node) {
                    var children = node.childNodes,
                        len = children && children.length,

                    // Visibility of leaf nodes is whether they pass the test.
                    // Visibility of branch nodes depends on them having visible children.
                        visible = node.isLeaf() ? v.test(node.get('text')) : false,
                        i;

                    // We're visible if one of our child nodes is visible.
                    // No loop body here. We are looping only while the visible flag remains false.
                    // Child nodes are filtered before parents, so we can check them here.
                    // As soon as we find a visible child, this branch node must be visible.
                    for (i = 0; i < len && !(visible = children[i].get('visible')); i++);

                    if (visible && node.isLeaf()) {
                        matches++;
                    }
                    return visible;
                },
                id: 'titleFilter'
            });
            Ext.resumeLayouts(true);
        } catch (e) {
            this.markInvalid('Invalid regular expression');
        }
    },
    /**销售品结构添加节点**/
    onAddNewItem:function(){
        debugger;
        var tree = this.lookupReference('attrsTree'),
            selection = tree.getSelection();
        if(!selection.length){
            console.log('please selection the tree node');
            Ext.Msg.alert('添加新节点','请先选择要添加子节点的位置');
            return;
        }
        var target = tree.getSelection()[0] || tree.getRootNode(),
            //inputField = this.getView().getComponent('newName'),
            inputField = this.getView().lookupReference('newName'),
            value = inputField && inputField.getValue(),
            store = tree.getStore(),
            node;

        if (value.trim()=="") {
            //if (store.getNodeById(value)) {
                Ext.Msg.alert('Error', '请先填写要添加的节点名称');
                return;
            }
        node = {
            text: value.trim()
        };

        node.leaf = true;
        node.expanded = true;

        node = target.appendChild(node);

        // User might want to see what they've just added!
        if (!target.isExpanded()) {
            target.expand(false);
        }
        //tree.selModel().select(node);
        inputField.reset();
        //}
    },
    /**点击树结构时，值面板的展示**/
    onItemclick:function(el,opts){
        console.log(el);
        var tree = this.lookupReference('attrsTree');
        var selection = tree.getSelection()[0];
        if(!selection.isLeaf()){
            return ;
        }
        var store = this.getStore();
        var option = {
            atrr:selection.text,
            store:store
        };
        this.fireEvent('attrToModify', option);
    }
})