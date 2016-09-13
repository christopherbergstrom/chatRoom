$(document).ready(function()
{
  console.log("chatClient loaded");
  var chatDB = require("../routes/chatDB.js");
  $("#exit").click(function()
  {
    window.location = "http://localhost:3000";
  });
  $("#welcome").click(function()
  {
    var worked = chatDB.get();
    if (worked)
    {
      console.log("GET worked!");
    }
  });
  $("#submit").click(function()
  {
    var message = {message:$("#message").val()};
    if(message.message)
    {
      var worked = chatDB.post(message);
      if (worked)
      {
        console.log("POST worked!");
      }
    }
  });
});
