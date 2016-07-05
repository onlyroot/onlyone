/* 
 * Copyright(c)2016 All rights reserved.
 * @Licenced  http://www.w3.org
 * @Author  liutian<1538731090@qq.com> liutian_jiayi
 * @Create on 2016-6-24 15:34:52
 * @Version 1.0
 */
$(function () {
	$("#avartar").uploadify({
		//绑定flash脚本
		swf : "/T2/public/plugins/uploadify/uploadify.swf",
		//设置按钮样式
		buttonText : "点击上传",
		buttonImage: "/T2/public/plugins/uploadify/ImgBtn.png",
		width:50,
		height:23,
		//上传控制
		fileTypeDesc : "选择图片",
		fileTypeExts : "*.jpg;*.jpeg;*.png;*.gif",
		fileSizeLimit: 5*1024*1024,	//1MB
		//上传处理的地址
		formData : {
			timestamp : document.fm.timestamp,
			token : 'kqs' + document.fm.timestamp + "bss",
			uid : document.fm.uid.value,
		},
		uploader : "/T2/Admin/User/avartar",
		onUploadSuccess : function (file, txt, response) {
//			txt = '{"stutus" : 1, "info" : "upload\/avartar\/dsds.jpg\/"}';
			eval('var result = ' + txt);
			if (!result.status) {
				alert(result.info);
			} else {
				$("#im").attr("src", "/T2/public/" + result.info);
			}
			
		}
	});
})

