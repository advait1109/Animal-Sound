function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    })
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/--NOmtObU/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if (error){
        console.error(error);
        console.log("Done")
    } 
    else{
        console.log(results);
        random_r=Math.floor(Math.random()*255)+1;
        random_g=Math.floor(Math.random()*255)+1;
        random_b=Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML=results[0].label;
        document.getElementById("result_confidence").innerHTML=(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb("+random_r+","+random_g+","+random_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_r+","+random_g+","+random_b+")";
        animal=document.getElementById("animal");
        animal2=document.getElementById("image");
        if (results[0].label=="Tiger"){
            animal.innerHTML="Tiger"
            animal2.src="https://cdn.imgbin.com/3/23/8/imgbin-tiger-cartoon-tiger-7si3VkJEytG4vUY4jwU4zRzEJ.jpg"
        }
        else if(results[0].label=="Goat"){
            animal.innerHTML="Goat"
            animal2.src="https://webstockreview.net/images/clipart-goat-animation-2.jpg"
        }
        else if(results[0].label=="Dog"){
            animal.innerHTML="Dog"
            animal2.src="https://th.bing.com/th/id/OIP.ryxmQIL-n5fgOwpIrm8KKwHaHw?pid=ImgDet&rs=1"
        }
        else{
            animal.innerHTML="Cat"
            animal2.src="https://www.clipartmax.com/png/middle/48-480523_cute-cartoon-cats-cute-cartoon-cat-png.png"
        }
    }
}