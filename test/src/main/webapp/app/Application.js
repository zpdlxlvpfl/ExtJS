/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('test.Application', {
	extend: 'Ext.app.Application',
	name: 'test',
	stores: [],
	launch: function() {
		//add
		Ext.widget("login");
		//OR
	},
	onAppUpdate: function() {
		Ext.Msg.confirm("업데이트알림", "프로그램이업데이트되었습니다"),
			function(choice) {
				if (choice == "yes") {
					window.location.reload();
				}
			}
}
});