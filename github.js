
class github{
constructor(){

this.userId='ee26aee3f02a049e6f50';
this.userSecret='6f784fa177b9ee5ca19eb00da784933f00cefaf1 ';
this.numOfRepos=5;
this.sortin='created:asc'

}
async fetchUser(user){
    
   
const userFetched=await fetch(`https://api.github.com/users/${user}?userId=${this.userId}&userSecret=${this.userSecret}`);
const reposFetched=await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.numOfRepos}&sort=${this.sortin}userId=${this.userId}&userSecret=${this.userSecret}`);

// const userFetched = await fetch('/data.json')
const fetchedData=await userFetched.json();
const repoFetched=await reposFetched.json();


return {
    fetchedData,
    repoFetched
}

}




}

















