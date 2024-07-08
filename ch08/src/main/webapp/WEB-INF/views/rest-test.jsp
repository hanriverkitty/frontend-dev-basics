<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src='https://code.jquery.com/jquery-3.7.1.min.js'></script>
<script>
$(function(){
	
});
</script>
</head>
<body>
	<h1>Ajax Test: Restful API</h1>
	
	<button id="create">[C]reate(post)</button>
	<br><br>
	<button id="read">[R]ead(get)</button>
	<br><br>
	<button id="update">[U]pdate(put)</button>
	<br><br>
	<button id="delete">[D]elete(delete)</button>
	<br><br>
	<div id="data">
		<h3></h3>
		<h4></h4>
		<h5></h5>
	</div>
</body>
</html>