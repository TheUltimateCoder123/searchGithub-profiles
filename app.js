const instanceOfgithub=new github;

const ui=new fetchProfile;
document.querySelector('#fname').addEventListener('keyup',(e)=>{


instanceOfgithub.fetchUser(e.target.value).then((data)=>{
if(data.fetchedData.message =="Not Found"){
//Show Alert
   
}
else{
//Show in Window
ui.uiinfo(data);




}

})















})