var topics = ["HTML", "CSS", "Git", "JavaScript"];
var randomTopic =topics[Math.floor(Math.random()*topics.length)];


console.log('Here are the topics we learned through Prework:');
function listTopic(){   
    for(var x=0; x<topics.length; x++){
    console.log(topics[x]);
    }   
}



function selectTopic(){
    if(randomTopic == 'HTML'){
        console.log("lets study HTML!");
}   else if(randomTopic == 'CSS'){
        console.log("lets study CSS!");
}   else if(randomTopic == 'Git'){
        console.log("lets study Git!");
}   else if (randomTopic == 'JavaScript'){
        console.log("lets study JavaScript!");
}   else{
        console.log("Please Try Again!");
}
}
listTopic()
console.log('Which topic should we study first?');
selectTopic()