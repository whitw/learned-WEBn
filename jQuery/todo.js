todos = {}

inputTemplate = function(text){
  var inputTag = $('<input type="checkbox" id="checkBox">');
  inputTag.data("value", text);
  return inputTag;
}

buttonTemplate = function(text){
  var buttonTag = $('<button id="deleteButton">X</button>');
  buttonTag.data("value", text);
  return buttonTag;
}

liTemplate = function(text){
  var li = $("<li></li>");
  li.attr("value", text);
  li.append(inputTemplate(text));
  li.append(text);
  li.append(buttonTemplate(text));

  li.click(function(event){
    var el = $(event.target);
    //alert(el.data("value"));

    if(el.is("button")) {
      delete todos[text];
      $(`li[value='${text}']`).remove();
    }
    else if (el.is("input[type='checkbox']")){
      var isChecked = el.is(":checked");
      if (isChecked){
        $(`li[value='${text}']`).addClass("checked");
        todos[text] = true;
      }
      else{
        $(`li[value='${text}']`).removeClass("checked");
        todos[text] = false;
      }
    }
  });
  return li;
}
addList = function(){
    var text = $('#inputBox').val();
    if(!text){
      return;
    }
    todos[text] = false;
    $('#inputBox').val("");
    console.log(todos);
    $(".contents ul").append(liTemplate(text));
}

$('#addButton').click(function(){
 addList();
});

$('#inputBox').change(function(){
  addList();
});
