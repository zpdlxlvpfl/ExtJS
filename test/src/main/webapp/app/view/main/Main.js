Ext.define('test.view.main.Main', {
	extend: 'Ext.container.Viewport',
	xtype: 'main',
	layout: 'border',
	items: [{
		xtype: 'panel',
		region: 'north',
		title: '',
		header: false,
		items: [
			{
				xtype: 'toolbar',
				items: [
					{
						xtype: 'label',
						html: '<h2>ADMIN</h2>'
					},'->',
					{
						xtype: 'button',
						text: 'xxx님',
						menu: [{
							text: '비밀번호 변경',
						}, {
							text: '로그아웃'
						}]
					}]
			}]

	}, {
		xtype: 'panel',
		split: true,
		width: 200,
		region: 'west',
		layout: 'fit',
		items: [{
			xtype: 'treelist',
			listeners : {
					selectionchange: function(obj, record) {
					// 1. 중앙영역의 위치를 셀렉터를 통하여 변수에 기억해둔다
					var centerpage = obj.up("viewport").down("component[region=center]");
					// 2. 중앙영역의 모든 컴포넌트를 삭제한다
					centerpage.removeAll(true);
					// 3. 삭제 후, 우리가 만들어놓은 컴포넌트의 xtype명을 명시한다
					centerpage.add({
						xtype: record.get("page")
					})

				}
			},
			store: {
				root: {
					expanded: true,
					children: [{
						text: '상품관리',
						iconCls: 'x-fa fa-gift',
						expanded: true,
						selectable: false,
						children: [{
							text: '상품목록',
							page : 'productList',
							leaf: true
						}]
					}, {
						text: '주문관리',
						iconCls: 'x-fa fa-shopping-cart',
						expanded: true,
						selectable: false,
						children: [{
							text: '주문목록',
							page : 'orderList',
							leaf: true
						}]
					}, {
						text: '회원관리',
						iconCls: 'x-fa fa-users',
						expanded: true,
						selectable: false,
						children: [{
							text: '회원목록',
							page : 'memberList',
							leaf: true
						}]
					}]
				}
			}
		}]
	}, {
		xtype: 'panel',
		region: 'center',
		flex: 1,
		layout: 'fit',
		items: [{
			xtype: 'panel',
			html: '<H2>MAIN</H2>'
		}]
	}]
});