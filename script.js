var projectListObject=[
    {
    name: 'Project 1'
  
},
{
    name: 'Project 2'
}];

function showProject(listId){
    projectListObject.forEach(function(value, index){
    // Template for project card
    var template= '<div class="project-card">'+ '<div id='+'valueName'+'>'+ 
       value.name  + '</div>' + 
        '<ul id = ' + 'noDots'       +'>'+ 
            '<li id="list1"> Task One</li>'+
            '<li id="list2"> Task Two</li>'+
        '</ul>'+
         '</div>';
        
        document.getElementById(listId).innerHTML+=template;
    });
   
}

//Menu Toggle Functionality
function toggleMenu(){
    var menu = document.getElementsByClassName('menu-block')[0];
    if(menu.style.display=='none'){
        menu.style.display="";

    }
    else{
        menu.style.display='none';
    }
}
//Function to remove cards
//Passing boardId so that that particular Board is removed
//In Progress
function removeCard(boardId) {
    // Temporary Alert
   alert("Life comes with its irreversible moments, but we're working on making this one better for you! While it's under construction, feel free to explore our other features.😄");
}


var idNum=0; //Setting idNum=0 to initialise it. Using idNum for uniqueness purposes.
function addBoard(id){ // id is input tag's id. The idea is to attain the value entered by the user in the input box.
    if (id.value.length < 3) { //To make sure that the Board Name entered by the user is greater than three characters.
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Board name can't be less than three characters!",
            customClass: {
                popup: 'small-swal-popup'
            }
        }); //Used the library for better appearance purposes.
        return;
    }
    else{
    idNum++; //id incrementing to maintain uniqueness of as many boards added by the user
    var listId= 'projectList_' + idNum; //Used for Project block
    var boardId= 'board_' + idNum; //project block And Board name

    var templateBoard= '<section class="boardBlock" id=' + boardId +' >'+
    '<div>'+ '<span id='+'boardName' +'>' + id.value + '</span>' + '<button id='+'removeBtn'+' onclick="removeCard( ' +boardId+ ') "> Remove Card </button></div>'+
    '<div class="add-board-block"+ id='+ listId + '> </div>'+
    '</section>'; //This template consists Board name by user, Remove Card button and Add board button.
    
    document.getElementById('boardBlockList').innerHTML+=templateBoard;
    showProject(listId); //Appending various number of boards dynamically


    document.getElementById('menuList').innerHTML+='<li id='+'menu-list'+' onclick= "loadMenu('+ boardId +')">' /*passing boardId to load menu function*/ + '<span id= '+ 'menuValue'+ ' >' + id.value + '</span>' +'</li>';
    } //Functionality where when the user clicks on the board name from the menu only then the project card pops up
   console.log("board id.id" + boardId.id);
    Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Board name ' + id.value + ' added!',
    });
    id.value=""; // Reseting the input place for user to enter name again
}


function loadMenu(element){ //toggle functionality to show only the element that i click on
    

    document.getElementById(element.id).style.display = 'block';
     // So that project blocks aren't loaded by default.
}


