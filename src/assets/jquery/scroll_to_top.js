$(document).ready(function()
{
    $(window).scroll(function()
    {
        if ($(this).scrollTop() > 150)
        {
            $('#scroll').fadeIn();
        }
        else
        {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function()
    {
        $("html, body").animate({ scrollTop: 0 }, 750);
        return false;
    });
});
