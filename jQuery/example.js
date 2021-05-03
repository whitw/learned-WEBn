$("#alert").click(function(){
  alert("button clicked!");
});
//#: id, .:class

$("#button2").click(function(){
  $("#alert").click();
});

//alert($("div.demo-container").html());
$('#changeBtn').click(function(){
  //$("div.demo-box").html("<div>Button Clicked!</div>");
  //$("div.demo-box").text("Button Clicked!");
  $("div.demo-box").text($("#src").val());
  alert("changed!");
});
