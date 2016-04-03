XbtnProto = Object.create(HTMLElement.prototype);
XbtnProto.createdCallback = function() {
	var self = this;
	var btn = document.createElement('button');
	btn.innerHTML = self.attributes.txt.nodeValue;
	btn.onclick = function() {
		alert(self.attributes.alert.nodeValue);
	};
	this.appendChild(btn);
};
var Xbtn = document.registerElement('x-btn', {
	prototype:XbtnProto
});
