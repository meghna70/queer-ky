const nav= document.querySelector("#nav");
const navbtn= document.querySelector(".hide-nav-btn");
const evtBtn=document.querySelectorAll(".evt-list h6");
const evtPanel=document.querySelectorAll(".evt-sec .event");
const createbtn=document.querySelector(".create-btn");
const uploadmodal=document.querySelector(".upload-container div");
const uploadbg =document.querySelector(".upload-container");
const uploadsection =document.querySelector(".upload");
const uploadclose =document.querySelector(".upload span");
const newPostBtn= document.querySelector(".new-post");

// const fileuploadinput = document.querySelector(".upload-input");
// const fileuploadbtn = document.querySelectorAll(".upload-btn");
// const fileuploadlabel = document.querySelector(".upload-label");


navbtn.addEventListener('click', ()=>{
    const visi= nav.getAttribute('data-visible');
    if(visi==="false")
      {
          nav.setAttribute('data-visible',true);
      }
    else if(visi==="true")
    {
        nav.setAttribute('data-visible',false);
    }
      console.log(visi);
});


function showPanel(panelIndex){
  evtBtn.forEach(function(node){
      node.setAttribute('class','inactive');
    // node.style.color="white";
  });
  evtPanel.forEach(function(node){
    node.style.display="none";
  });
  evtPanel[panelIndex].style.display="block"; 
  evtBtn[panelIndex].setAttribute('class','active');
}

showPanel(0);
//evtPanel[panelIndex].style.display=none;

createbtn.onclick = function createPost(){
   uploadmodal.style.display="flex";
   uploadsection.style.display="flex";
   uploadbg.style.display="flex";
  }


newPostBtn.onclick = function createPost(){
    uploadmodal.style.display="flex";
    uploadsection.style.display="flex";
    uploadbg.style.display="flex";
  }

uploadclose.onclick = function createPost(){
    uploadmodal.style.display="none";
    uploadsection.style.display="none";
    uploadbg.style.display="none";
  }


function fileUpload(button){
 
  const fileuploadinput = button.parentElement.querySelector(".upload-input");
  const fileuploadlabel =button.parentElement.querySelector(".upload-label");
  const defaulttext ="no file selected";
  
  fileuploadlabel.textContext= defaulttext;
}