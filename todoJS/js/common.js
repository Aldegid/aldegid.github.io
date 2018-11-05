window.onload = function (e) {
  var btnAdd = document.querySelector('.btn-add');
  var inpAdd = document.querySelector('.task_add');

    btnAdd.onclick = addElement;



  function addElement() {
    var newDiv = document.createElement('div');
    newDiv.classList.add('new_task');
    newDiv.innerHTML = inpAdd.value + '<input type="checkbox" class="checked" id="check">Done<button type="button" class="btn btn-danger btn-del">Delete</button>';
    var my_inp = document.querySelector('.task_wrap');
    my_inp.appendChild(newDiv);
    inpAdd.value = '';

    var btnDel = document.querySelectorAll('.btn-del');
    var btnCheck = document.querySelectorAll('.checked');
    
    for(let i = 0; i < btnDel.length; i++){
      btnDel[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
      
      };
    }
    for(let i = 0; i < btnCheck.length; i++){
      btnCheck[i].onchange = function(){
        this.parentElement.classList.toggle('done');
        this.parentElement.style.textDecoration = 'none';
        //newDiv.classList.toggle('done');
        
      };
    }

  }


};