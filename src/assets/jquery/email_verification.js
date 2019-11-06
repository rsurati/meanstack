$("#email").keyup(function()
{
	var email = $("#email").val();
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	if( ! $("#email").val())
	{
		$("#error_email").text("");
		$("#emailCheck").removeClass("has-danger");

		$("#emailCheck").removeClass("has-success");

		$("#pwd1").removeClass("is-invalid");

		$("#pwd1").removeClass("is-valid");
	}
	else
	{
		if (!filter.test(email))
		{
			$("#error_email").text(email + " is not a valid email");
			email.focus;
			//return false;
		}
		else
		{
			$("#error_email").text("");
		}
	}
 });

$("#submit-email").click(function(){

	var email = $("#email").val();
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	if (!filter.test(email))
	{
		$("#email").focus();
		return false;
	} else {

	}

});
