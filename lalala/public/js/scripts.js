$(function () {
	$("#btn").wBox({
		title : "这是一个层",
		html : "呵"
	})
}

// 绑定表单提交事件1.0
document.login.onsubmit = function() {
	// 获取用户输入值
	var uname = this.uname.value;
	var password = this.password.value;
	var code = this,code.value;
	// 判断值是否符合要求
	var message = "";
	if (uname.match(/^\s*$/)) {
		message += "账号未填写！\n";
	}
	if (password.length < 6 || password.length > 15) {
		message += "密码长度应为6-15位\n";
	}
	if (code.length != 5) {
		message += "验证法不合法！";
	}
	// 输出提示信息
	if (message != "") {
		alert(message);
		return false;
	}
	return true;
}