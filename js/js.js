$(function() {
	$(".btn").click(function() {
		$("#modal").css("display", "block");
		
		$('#yes').click(function(e) {

			var sender_name = $('#name').val();
			var sender_phone = $('#phone').val();
	
    		if (!validateName(sender_name)) {
			$("#alert").html("Имя должно быть написано только кириллицей").css("font-size", "12px").css("color", "yellow").css("text-align", "right");
    		e.preventDefault();	
			} 
			else if (!validatePhone(sender_phone)) {
			$("#alert").html("Телефон должен быть в формате “+код страны (код города) телефон”").css("font-size", "12px").css("color", "yellow").css("text-align", "right");    		
			e.preventDefault();
			} else {
				
				msg = $("#form").serialize();
				
				$.ajax({
					url: "zakaz.php",
					type: "POST",
					data:  msg,
					success: alert('заказ принят')
					} 
				);
			}
		});

		
		
		 // Function that validates name through a regular expression.
    function validateName(sender_name) {
    var expression = /[а-яА-ЯЁё]/;
    if (expression.test(sender_name)) {
    return true;
    }
    else {
    return false;
    }
    }
	// Function that validates phone through a regular expression.
    function validatePhone(sender_phone) {
    var phoneexp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    if (phoneexp.test(sender_phone)) {
    return true;
    }
    else {
    return false;
    }
    }
		
		
		
		
		
	});

	
	$(".close").click(function() {
		$("#modal").css("display", "none")
	});
	
	
});
