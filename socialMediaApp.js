const posts= [
{
    post: "Treffen",
    comment: "Passt vllt heute?"
},
{
    post: "Chillen",
    comment: "Lass mal trinken gehen!"
}
]

// read
class App {
constructor(posts){
    this.ideas = posts
}

renderPosts(){
    let template = "";
    this.ideas.map((myPost)=>{
        template += `Post: ${myPost.post} Comment: ${myPost.comment} \n`
    })
    return template;
}
}
const myApp = new App
console.log(myApp.renderPosts())



}

//create
//1- post
//2- comment

//Edit
//1- post
//2- comment

//remove
//1- post
//2- comment



/**
Alex 19/11/2020
 I think this is the best I’ve seen till now.

 likes 4
 comments:
    Tommy:
        WOW.....
    Jon:
       It looks classy
---------------------------------


 */