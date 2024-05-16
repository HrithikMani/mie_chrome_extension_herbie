
import { getCurrentActiveTab } from "./utils.js";
// adding a new bookmark row to the popup
const addNewBookmark = () => {};

const viewBookmarks = () => {};

const onPlay = e => {};

const onDelete = e => {};

const setBookmarkAttributes =  () => {};

document.addEventListener("DOMContentLoaded", async () => {
 const x= await getCurrentActiveTab() ;
   const v = x.url.split("?")[1];
    const urlParam = new URLSearchParams(v);
    const currentVideo = urlParam.get("v")
    if(x.url.includes("youtube.com/watch") && currentVideo){
        console.log(currentVideo);
    }else{
        console.log("Its not a youtube website");
        document.getElementsByClassName("container")[0].innerHTML = "<div class='title'>Its Not a Youtube page</div>"
    }

});
