/*Single function can be used to call another function
Viewing a youtube vidoes - main function
adv - sub fn1
related videos- sub fn2*/
/*position of sub function is important
--we should always change the position for parameters not for arguments
// why we are having call function - */
//we can keep n No.of arguments in the function
//showadv- callback1
//showrelatedvideos - callback2
function playVideo(showRelatedVideos,showAdv) //Main Function, calbck1 - refers to adv, calbck2 - related viodes

{
console.log("Play Youtube videos");
showAdv(); // adv , first showadv ==adv; after swap showAdv==showrelatedviodes
showRelatedVideos(); //relatedvideos , first showadv ==adv; after swap showAdv==showrelatedviodes
 

}
function adv() // Sub function-1 ,showAdv
{
console.log("Play Advertisement");
}
function relatedVideos()// Sub function-2,showRelatedviodes
{
console.log("Show realted videos");
}
playVideo(adv,relatedVideos)//call to the playvideos from main fn by clicking