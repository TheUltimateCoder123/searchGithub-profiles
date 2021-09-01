
/*USER ID =>ee26aee3f02a049e6f50
client Secret =>6f784fa177b9ee5ca19eb00da784933f00cefaf1   */

class github{
constructor(){

this.userId='ee26aee3f02a049e6f50';
this.userSecret='6f784fa177b9ee5ca19eb00da784933f00cefaf1 '

}
async fetchUser(user){
const userFetched=await fetch(`https://api.github.com/users/${user}?userId=${this.userId}&userSecret=${this.userSecret}`);
const fetchedData=await userFetched.json();
return {
    fetchedData
}

}




}

















