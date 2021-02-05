Ext.define('test.view.product.ProductList', {
	extend: 'Ext.panel.Panel',
	xtype: 'productList',
	title: '상품 목록',
	items: [{
		xtype: 'toolbar',
		items: [{
			xtype: 'textfield',
			fieldLabel: '상품명'
		}, {
			xtype: 'numberfield',
			fieldLabel: '가격'
		}, {
			xtype: 'numberfield',
			fieldLabel: '재고량'
		}, {
			xtype: 'button',
			text: '등록'
		}]
	}, {
		xtype: 'grid',
		columnLines: true,
		tbar: [{
			xtype: 'textfield',
			emptyText: '검색어 입력'
		}, {
			xtype: 'button',
			text: '검색'
		}],
		columns: [{
			xtype: 'rownumberer'
		}, {
			text: '상품명',
			flex: 1,
			dataIndex: 'productNm'
		}, {
			text: '가격',
			flex: 1,
			dataIndex: 'price'
		}, {
			text: '재고량',
			flex: 1,
			dataIndex: 'amount'
		}, {
			text: '등록일',
			flex: 1,
			dataIndex: 'rgstrDt'
		}],
		store: {
			fields: ['productNm', 'price', 'amount', 'rgstrDt'],
			data: [{
				productNm: '지우개',
				price: 500,
				amount: 100,
				rgstrDt: new Date()
			}, {
				productNm: '지우개',
				price: 500,
				amount: 100,
				rgstrDt: new Date()
			}, {
				productNm: '지우개',
				price: 500,
				amount: 100,
				rgstrDt: new Date()
			}]
		}
		}]
	});
