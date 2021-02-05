Ext.define('test.view.login.Login',{
  extend : 'Ext.window.Window',
  xtype : 'login',
  layout : 'center',
  html : '<H2>Login</H2>',
  closable : false,
  maximized : true,
  autoShow : true,
  onEsc : function(){
    return false;
  },
  items : [{
    xtype : 'form',
    layout : {
      type : 'vbox',
      align : 'center',
      pack : 'center'
    },
    items : [{
      xtype : 'textfield'
    },{
      xtype : 'textfield',
      inputType : 'password'
    },{
      xtype : 'button',
      width : 165,
      text : 'Login',
      handler : function(btn){
        btn.up("window").close();
        Ext.widget("main");
      }
    }]
  }]
});