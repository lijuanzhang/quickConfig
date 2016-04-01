/*
 *导航条
 */
Ext.define('QuickConfig.view.offerspec.Wizard', {
  extend: 'Ext.container.Container',
  xtype: 'offerspecwizard',
  tpl: '<div class="wizardContainer">' +
    '<tpl for=".">' +
    '<div class="{stepindex} step {state}">' +
    '<div class="step-img fa {faicon}"></div>' +
    '<div class="step-text">{text}</div>' +
    '</div>' +
    '</tpl>' +
    '</div>',
  data: []
});
