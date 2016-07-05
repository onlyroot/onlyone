/* 
 * Copyright(c)2016 All rights reserved.
 * @Licenced  http://www.w3.org
 * @Author  liutian<1538731090@qq.com> liutian_jiayi
 * @Create on 2016-6-27 14:47:01
 * @Version 1.0
 */

$(function () {
	$("select[name=group_id]").change(function () {
		var result = confirm("确定要修改该用户权限吗？");
		if (!result) {
			location.reload();
			return;
		}
//		alert($(this).val());
		//发送AJAX请求到后台数据库中修改该用户对应的分组权限
		$.ajax({
			type : "post",
			url : "setGroupAccess",
			data : "group_id=" + $(this).val()+"&uid=" + $(this).attr("uid"),
			dataType : "json",
			success : function (result) {
//				alert(result);
				alert(result.info);
				//如果操作失败 恢复装填
				if (!result.stauts)	location.reload();
			}
		});
	});
})

