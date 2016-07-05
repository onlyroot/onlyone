/* 
 * Copyright(c)2016 All rights reserved.
 * @Licenced  http://www.w3.org
 * @Author  liutian<1538731090@qq.com> liutian_jiayi
 * @Create on 2016-6-22 17:27:18
 * @Version 1.0
 */
function dis(obj) {
	var ix = obj.offsetLeft;
	var iy = obj.offsetTop;
	im.style.display = "block";
	im.style.left = ix + "px";
	im.style.top = (iy + obj.offsetHeight) + "px";
}


//给表单绑定提交事件
//document.login.onsubmit = function () {
//	//获取用户输入值
//	var uname =  this.uname.value;
//	var password = this.password.value;
//	var code = this.code.value;
//	//验证值是否符合要求
//	var result = new Array();
//	if (uname.match(/^\s*$/)) {
//		result["uname"] = "账号未填写";
//	} else {
//		result["uname"] = "";
//	}
//	
//	if (password.length < 6 || password.length > 15) {
//		result["password"] = "密码长度应为6-15位";
//	} else {
//		result["password"] = "";
//	}
//	
//	if (code.length != 4) {
//		result["code"] = "验证码输入不合法";
//	} else {
//		result["code"] = "";
//	}
//	//输出提示
//	var flag = true;
//	for (var key in result) {
//		if (result[key]) flag = false;
//		//新建span
//		var span = this[key].nextSibling || document.createElement("span");
//		//给span添加样式
//		span.className = result[key] ? "error" : "right";
//		
//		//存入提示信息
//		span.innerHTML = result[key];
//		//将span追加到相应的输入控件后面
//		this[key].parentNode.appendChild(span);
//	}
//	//判断是否提交
//	return flag;
//}
