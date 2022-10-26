$(document).ready(function(){

	/*********************
		망고스토리 에디터 등록 폼
	**********************/
	$("#btnBoardStoryWrite").click(()=>{
		if($("#editer").val() == ""){
			alert("에디터를 입력해주세요");
			$("#editer").focus();
			return false;
		}else if($("#stitle").val() == ""){
			alert("제목을 입력해주세요");
			$("#stitle").focus();
			return false;
		}else if($("#sstitle").val() == ""){
			alert("소제목을 입력해주세요");
			$("#sstitle").focus();
			return false;
		}else{
			//서버전송
			boardWriteForm.submit();
		}
	});
	
	/*********************
		망고스토리 에디터 수정 폼
	**********************/
	$("#btnBoardStoryUpdate").click(()=>{
		if($("#editer").val() == ""){
			alert("에디터를 입력해주세요");
			$("#editer").focus();
			return false;
		}else if($("#stitle").val() == ""){
			alert("제목을 입력해주세요");
			$("#stitle").focus();
			return false;
		}else if($("#sstitle").val() == ""){
			alert("소제목을 입력해주세요");
			$("#sstitle").focus();
			return false;
		}else{
			//서버전송
			boardUpdateForm.submit();
		}
	});
	
	/*********************
		마이페이지 수정 폼
	**********************/
	$("#btnMypageUpdate").click(()=>{
		if($("#mypagepass").val() == ""){
			alert("비밀번호를 입력해주세요");
			$("#mypagepass").focus();
			return false;
		}else if($("#mypagecpass").val() == ""){
			alert("비밀번호 확인을 입력해주세요");
			$("#mypagecpass").focus();
			return false;
		}else if($("#mypagename").val() == ""){
			alert("성명을 입력해주세요");
			$("#mypagename").focus();
			return false;
		}else if($("#mypagehp").val() == "default"){
			alert("통신사를 선택해주세요");
			return false;
		}else if($("#mypagepnumber").val() == ""){
			alert("전화번호를 입력해주세요");
			$("#mypagepnumber").focus();
			return false;
		//}else if($("#mypageemail1").val() == ""){
			//alert("이메일을 입력해주세요");
			//$("#mypageemail1").focus();
			//return false;
		//}else if($("#mypageemail2").val() == "default"){
			//alert("이메일 주소를 선택해주세요");
			//$("#mypageemail2").focus();
			//return false;
		}else if($("#mypageaddr1").val() == ""){
			alert("주소를 입력해주세요");
			$("#mypageaddr1").focus();
			return false;
		}else if($("#mypageaddr2").val() == ""){
			alert("상세주소를 입력해주세요");
			$("#mypageaddr2").focus();
			return false;
		}else{
			//서버전송
			updateForm.submit();
		}
	});

	/*********************
		로그인폼 체크 함수
	**********************/
	$("#btnLogin").click(()=>{
		if($("#id").val() == ""){
			alert("아이디를 입력해주세요");
			$("#id").focus();
			return false;
		}else if($("#pass").val() == ""){
			alert("패스워드를 입력해주세요");
			$("#pass").focus();
			return false;
		}else{
			//서버전송
			loginForm.submit();
		}
	});


	/*********************
		공지사항 등록폼 유효성 체크
	**********************/
	$("#btnNoticeWrite").click(()=>{
	
		if($("#ntitle").val() == ""){
			alert("제목을 입력해주세요");
			$("#ntitle").focus();
			return false;
		}else{
			//서버전송
			boardWriteForm.submit();
		}
	});
		
	
	/*********************
		공지사항 수정폼 유효성 체크
	**********************/
	$("#btnNoticeUpdate").click(()=>{
		if($("#ntitle").val() == ""){
			alert("제목을 입력해주세요");
			$("#ntitle").focus();
			return false;
		}else{
			//서버전송
			boardUpdateForm.submit();
		}
	});
	
	
	/*********************
		회원가입 - 주소찾기
	 **********************/
	$("#btnSearchAddr").click(function(){
		new daum.Postcode({
	        oncomplete: function(data) {
	            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
	            // 예제를 참고하여 다양한 활용법을 확인해 보세요.
	            //alert(data.address);
	          /*  $("#zonecode").val(data.zonecode); */
	            $("#addr1").val(data.address);
	            $("#addr2").focus();
	        }
	    }).open(); 
	});
	
	/*********************
		회원정보수정 - 주소찾기
	 **********************/
	$("#btnSearchAddr2").click(function(){
		new daum.Postcode({
	        oncomplete: function(data) {
	            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
	            // 예제를 참고하여 다양한 활용법을 확인해 보세요.
	            //alert(data.address);
	          /*  $("#zonecode").val(data.zonecode); */
	            $("#mypageaddr1").val(data.address);
	            $("#mypageaddr2").focus();
	        }
	    }).open(); 
	});
	
	/*********************
		회원가입 폼 유효성 체크 --> 서버의 효율성을 높이기위함:부하를 줄임
	**********************/
	$("#btnJoin").click(()=>{		
		
		if($("#jid").val() == ""){
			alert("회원가입아이디를 입력해주세요");
			$("#jid").focus();
			return false;
		}else if($("#jpass").val() == ""){
			alert("회원가입패스워드를 입력해주세요");
			$("#jpass").focus();
			return false;
		}else if($("#cpass").val() == ""){
			alert("패스워드 확인을 입력해주세요");
			$("#cpass").focus();
			return false;
		}else if($("#name").val() == ""){
			alert("성명을 입력해주세요");
			$("#name").focus();
			return false;
		}else if($("#hp").val() == "default"){
			alert("통신사를 선택해주세요");
			return false;
		}else if($("#pnum").val() == ""){
			alert("전화번호를 입력해주세요");
			$("#pnum").focus();
			return false;
		}else if($("#email1").val() == ""){
			alert("이메일을 입력해주세요");
			$("#email1").focus();
			return false;
		}else if($("#email2").val() == "default"){
			alert("이메일 주소를 선택해주세요");
			$("#email2").focus();
			return false;
		}else if($("#addr1").val() == ""){
			alert("주소를 입력해주세요");
			$("#addr1").focus();
			return false;
		}else if($("#addr2").val() == ""){
			alert("상세주소를 입력해주세요");
			$("#addr2").focus();
			return false;
		}else{
			//서버전송
			joinForm.submit();
		}
		
	});
	
	
	/*********************
		회원정보수정 비밀번호, 비밀번호 확인 비교
	**********************/
	$("#mypagecpass").on("blur",()=>{
		if($("#mypagepass").val() != "" && $("#mypagecpass").val() != ""){
			if($("#mypagepass").val() == $("#mypagecpass").val()){
				$("#mypagepassCheckMsg").text("*비밀번호가 동일합니다.")
					.css("color","blue").css("font-size","13px").css("margin-bottom","15px");
			}else{
				$("#mypagepassCheckMsg").text("*비밀번호가 동일하지 않습니다. 다시 입력해주세요.")
					.css("color","red").css("font-size","13px").css("margin-bottom","15px");

				$("#mypagecpass").val("");
				$("#mypagepass").val("").focus();
			}
		}//else{} --> 회원가입 폼의 유효성 체크로 진행됨
	});
	
	/*********************
		비밀번호, 비밀번호 확인 비교
	**********************/
	$("#cpass").on("blur",()=>{
		if($("#jpass").val() != "" && $("#cpass").val() != ""){
			if($("#jpass").val() == $("#cpass").val()){
				$("#passCheckMsg").text("*비밀번호가 동일합니다.")
					.css("color","blue").css("font-size","11px").css("margin-bottom","15px");
			}else{
				$("#passCheckMsg").text("*비밀번호가 동일하지 않습니다. 다시 입력해주세요.")
					.css("color","red").css("font-size","11px").css("margin-bottom","15px");

				$("#cpass").val("");
				$("#jpass").val("").focus();
			}
		}//else{} --> 회원가입 폼의 유효성 체크로 진행됨
	});
	
	/*********************
		회원정보수정 비밀번호, 비밀번호 확인 비교
	**********************/
	$("#mypagecpass").on("blur",()=>{
		if($("#mypagepass").val() != "" && $("#mypagecpass").val() != ""){
			if($("#mypagepass").val() == $("#mypagecpass").val()){
				$("#passCheckMsg").text("*비밀번호가 동일합니다.")
					.css("color","blue").css("font-size","11px").css("margin-bottom","15px");
			}else{
				$("#passCheckMsg").text("*비밀번호가 동일하지 않습니다. 다시 입력해주세요.")
					.css("color","red").css("font-size","11px").css("margin-bottom","15px");

				$("#mypagecpass").val("");
				$("#mypagepass").val("").focus();
			}
		}//else{} --> 회원가입 폼의 유효성 체크로 진행됨
	});
	
	/*********************
	회원가입 중복확인 버튼 이벤트 처리 
	--> AJAX 호출
	**********************/
	$("#idCheck").click(function(){
		if($("#jid").val() == ""){
			alert("아이디를 입력해주세요");
			$("#jid").focus();
			return false;
		}else{
			//중복체크 진행 : AJAX 호출 및 결과 출력
			$.ajax({
				url:"id_check.do?id="+$("#jid").val(),
				success:function(result){
					if(result == 1){
						$("#idCheckMsg").text("사용중인 아이디입니다. 다시 입력해주세요.")
							.css("color","red").css("font-size","11px");
						$("#jid").val("").focus();							
					}else{
						$("#idCheckMsg").text("사용 가능한 아이디입니다.")
						.css("color","blue").css("font-size","11px");
						$("#jpass").focus();
					}
					
				}//success
				
			});//ajax
		}
	});
});//ready function

