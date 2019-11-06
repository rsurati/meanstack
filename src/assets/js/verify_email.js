function checkEmailMatch()
{
	var password = $("#pwd1").val();
	var confirmPassword = $("#pwd2").val();

	if( ! $("#pwd1").val() || ! $("#pwd2").val() )
	{
		$("#divCheckPasswordMatch").text("");
		$("#pwdcheck1").removeClass("has-danger");
		$("#pwdcheck2").removeClass("has-danger");

		$("#pwdcheck1").removeClass("has-success");
		$("#pwdcheck2").removeClass("has-success");

		$("#pwd1").removeClass("is-invalid");
		$("#pwd2").removeClass("is-invalid");

		$("#pwd1").removeClass("is-valid");
		$("#pwd2").removeClass("is-valid");

	}
	else
	{
		if (password != confirmPassword)
		{
			$("#pwdcheck1").removeClass("has-success");
			$("#pwdcheck2").removeClass("has-success");
			$("#pwdcheck2").addClass("has-danger");

			$("#pwd1").addClass("is-invalid");
			$("#pwd2").addClass("is-invalid");

			$("#pwd1").removeClass("is-valid");
			$("#pwd2").removeClass("is-valid");

		}
		else
		{
			$("#pwdcheck1").removeClass("has-danger");
			$("#pwdcheck2").removeClass("has-danger");
			$("#pwdcheck1").addClass("has-success");
			$("#pwdcheck2").addClass("has-success");

			$("#pwd1").removeClass("is-invalid");
			$("#pwd2").removeClass("is-invalid");

			$("#pwd1").addClass("is-valid");
			$("#pwd2").addClass("is-valid");

		}
	}
}
