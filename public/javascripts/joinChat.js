$(document).ready(function()
{
  $("#submit").click(function()
  {
    var username = $("#username").val();
    return username;
    if(username)
    {
      console.log(username);
      window.location="localhost:3000/chat?username="+username;
    }
  })
});
