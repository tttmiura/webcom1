xtag.register('x-btn2', {
	// インスタンス生成時の処理などを設定
	lifecycle:{
		created: function() {
			var btn = document.createElement('button');
			btn.innerHTML = this.txt;
			this.appendChild(btn);
		}
	},
	// アクセサを設定
	accessors: {
		txt:{
			attribute:{}
		},
		alert:{
			attribute:{}
		}
	},
	// イベントを設定
	events:{
		'click:delegate(button)':function() {
			alert(this.parentElement.alert);
		}
	}
});
