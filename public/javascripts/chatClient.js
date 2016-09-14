$(document).ready(function()
{
  console.log("chatClient loaded");
  $("#exit").click(function()
  {
    window.location = "http://localhost:3000";
  });
  $("#welcome").click(function()
  {
    $.get("/chat/get", function(data, status)
    {
      console.log("in get client");
      console.log(data);
      for (var i = 0; i < data.length; i++)
      {
        console.log("in get for loop client");
        console.log(data[i].entry);
      };
        // alert("Data: " + data + "\nStatus: " + status);
    });
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
