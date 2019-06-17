function $(e) {
	if(document.getElementById(e)) {
		return document.getElementById(e)
	} else if(document.getElementsByClassName(e)[0]) {
		return document.getElementsByClassName(e)[0];
	} else {
		alert("节点不存在")
	}
}

function changepx() {
	var str = $("content").value;
	var position = str.search("px");
	if(position !== -1) {
		let len = 0;
		//查询数字的长度
		while((!isNaN(str.slice(position - len - 1, position - len)) ||
				str.slice(position - len - 1, position - len) == ".") &&
			str.slice(position - len - 1, position - len) != " ") {

			len++;
		}
		str = str.split("");
		if(len != 0) {
			let n = str.slice(position - len, position);
			n = n.join("");
			n = n / 16;
			str.splice(position - len, len + 2, n + "rem");
		} else { //替换px以保证下次查询不会再返回该处的px						
			str.splice(position, 2, "没事别用这个字符串");
		}
		str = str.join("");
		$("content").value = str;
		if(str.search("px") != -1) {
			changepx();
		} else {
			str = str.replace(/没事别用这个字符串/g, 'px');
			$("content").value = str;
		}

	}
}

function changerem() {
	var str = $("content").value;
	var position = str.search("rem");
	if(position !== -1) {
		let len = 0;
		//查询数字的长度
		while((!isNaN(str.slice(position - len - 1, position - len)) ||
				str.slice(position - len - 1, position - len) == ".") &&
			str.slice(position - len - 1, position - len) != " ") {

			len++;
		}
		str = str.split("");
		if(len != 0) {
			let n = str.slice(position - len, position);
			n = n.join("");
			n = n * 16;
			str.splice(position - len, len + 3, n + "px");
		} else { //替换px以保证下次查询不会再返回该处的px						
			str.splice(position, 3, "没事别用这个字符串");
		}
		str = str.join("");
		$("content").value = str;
		if(str.search("rem") != -1) {
			changerem();
		} else {
			str = str.replace(/没事别用这个字符串/g, 'rem');
			$("content").value = str;
		}

	}
}

function changergb() {
	var str = $("content").value;
	var position = str.search("rgb");
	if(position !== -1 && str.slice(position + 3, position + 4) == "(") {
		let len = 4;
		while(str.slice(position + len, position + len + 1) != ")") {
			len++;
		}
		let n = str.slice(position + 4, position + len);
		n = n.split(",");
		n.forEach(function(v, index) {
			n[index] = parseInt(n[index]).toString(16);
			console.log(n[index]);
		})
		n = n.join("");
		str = str.split("");
		str.splice(position, len + 1, "#" + n);
		str = str.join("");
		$("content").value = str;
		if(str.search("rgb") != -1) {
			changergb();
		}
	}
}

function addprefix() {

}