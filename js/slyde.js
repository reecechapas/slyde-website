function showMemberInfo(name) {
	$("#bandmemberinfo-container>div").hide();
	var memberInfoSelector="#"+name+"-info";
	$(memberInfoSelector).show();
}