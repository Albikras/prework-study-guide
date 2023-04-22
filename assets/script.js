var topics = ["HTML", "CSS", "Git", "JavaScript"];
function listTopics(){   
    for(x=0; x<topics.length; x++){
    console.log(topics[x]);
    }   
}
function selectTopics(){
    if(topics == 'HTML'){
        console.log("lets study HTML");
}   else if(topics == 'CSS'){
        console.log("lets study CSS");
}   else if(topics == 'Git'){
        console.log("lets study Git");
}   else if (topics == 'JavaScript'){
        console.log("lets study JavaScript");
}   else{
        console.log("Please Try Again");
}
}
