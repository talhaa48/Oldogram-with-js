const posts = [
    {
        name: " Ömer Talha",
        username: "omertalha.06",
        location: "Ankara,Turkey",
        avatar: "images/avatar-talhaa.jpeg",
        post: "images/Talhaa.jpeg",
        comment: "Easy!",
        likes: 89

    },
    
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

 const header = document.getElementById("header")
 const mainPost = document.getElementById("posts")

 function head(){

    let Intro =
    `
    <ul>
        <li>
            <img class="logo" src="images/logo.png">
        </li>
        <li class="align-right">
            <img class="avatar" src="images/avatar-talhaa.jpeg">
        </li>

    </ul>
    
    `
    return Intro

 }

 header.innerHTML = head()

let firstPost = ""
function post(){
   
    for (let i = 0; i<posts.length; i++){

        firstPost +=

        `
        <section class="info">
            <img class="avatar" src=${posts[i].avatar}>
            <div>
                <h4 class="name">${posts[i].name}</h4>
                <p class="location">${posts[i].location}</p>
            </div>
        </section>
        <section>
            <img class="post" src=${posts[i].post}>
            <div class="icon-group">
                <img class="icon" src="images/icon-heart.png">
                <img class="icon" src="images/icon-comment.png">
                <img class="icon" src="images/icon-dm.png">
            </div>
            <h4 class="likes">${posts[i].likes} likes</h4>
            <p class="comment"><strong>${posts[i].username}</strong> ${posts[i].comment}</p>
        </section>
        `
    }
    return firstPost
}

mainPost.innerHTML = post()