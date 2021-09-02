class fetchProfile{
constructor(){
    this.details=document.getElementsByClassName('middle');
}
uiinfo(data){

const body=document.querySelector('.middle');


body.innerHTML=`
<div class="container-js">
   <div class="wrapper-js">
   
   <div class="img-details">
      <h1>Hello, I am ${data.fetchedData.name}</h1>
        <img src="${data.fetchedData.avatar_url}">
        <p>I Am Using Github Since ${data.fetchedData.created_at }</p>
        

   </div> 
  <div class="aside">
      <p>ALL ABOUT ME</p>
      <p class="bio">${data.fetchedData.bio}</p>
     <button class="btnjs">PUBLIC REPOS:${data.fetchedData.public_repos}</button>
     <button class="btnjs">PUBLIC GISTS:${data.fetchedData.public_gists}</button>
     <button class="btnjs">FOLLOWERS:${data.fetchedData.followers}</button>
     <button class="btnjs">FOLLOWING:${data.fetchedData.following}</button>
  </div>
   </div>
</div>
`

let display1=document.querySelector('.aside .bio');

if(display1.textContent=='null'){
    display1.textContent="";
}


}
repo(repos){
const repUrl=repos.repoFetched;
repUrl.forEach((repo)=>{
const beforFoot=document.querySelector('.beforefoot');
const hell=repo.name;
// beforFoot.innerHTML=`
// <div class="details">
// <h1>Hello, I am ${repo.name}</h1>

//   <p>I Am Using Github Since ${repo.created_at }</p>
  

// </div> 

// `
let n=0;
const newdiv=document.createElement('div');
newdiv.className="details";
const title=document.createElement('h1');
h1.className="footTitle";
title.appendChild(document.createTextNode("MY LATEST REPO"))
newdiv.appendChild(title);

const head=document.createElement('p');
head.appendChild(document.createTextNode(`${repo.name}  Created at ${repo.created_at}`))
newdiv.appendChild(head);
beforFoot.appendChild(newdiv);



})



}


clearProfile(){

    this.details.innerHTML="";
}


}