const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImg= async function() {
    const res= await fetch(" https://picsum.photos/v2/list?limit=100");
const img = await res.json();
console.log(img);
};
getImg();