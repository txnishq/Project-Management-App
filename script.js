var projectListObject=[
    {
    name: 'Project 1'
  
},
{
    name: 'Project 2'
}];



showProject();
function showProject(listId){
    projectListObject.forEach(function(value, index){
        
    var template= '<div class="project-card">'+
       value.name +
        '<ul>'+
            '<li> Task One</li>'+
            '<li> Task Two</li>'+
        '</ul>'+
         '</div>';
        if(listId){
            document.getElementById(listId).innerHTML+=template;
        }
        else{
            document.getElementById('projectBlock').innerHTML+=template;
        }
    });
   
}




function toggleMenu(){
    var menu = document.getElementsByClassName('menu-block')[0];
    if(menu.style.display=='none'){
        menu.style.display="";

    }
    else{
        menu.style.display='none';
    }
}
//function to remove cards
//passing listId so that that particular id block is removed
function removeCards(){ 
    
    document.getElementById().innerHTML='';
}
//adding the board
var idNum=1; //so that project id is not duplicate
function addBoard(id){
    
    idNum++;
    var listId= 'projectList_' + idNum; //using this as project id
    var templateBoard= '<section class="boardBlock">'+
    '<div>'+ id.value+ '<button onclick="removeCards()">Remove Card </button></div>'+
               '<div class="project-block"+ id='+ listId + '> </div>'+
            '</section>';
    document.getElementById('boardBlockList').innerHTML+=templateBoard;
    showProject(listId);
}
