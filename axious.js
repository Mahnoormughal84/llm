async function getposts () {
    const response = await axious.get(
        "https://p2pclouds.up.railway.app/v1/learn/get_instagram_posts"
    
    );
    const data = response.data;
    console.log(data);
    const tweets = data.tweets;
    console.log(tweets);
    
    const tweetsdivref = document.querySelector(".tweets");
    tweets.map((tw) => {
     tweetsdivref.innerHTML=
     tweetsdivref.innerHTML +
    
       ` <div class = "tweet">
            <img src ="${tw.tweetimage}" alt="profile pic"/>
            <h3>${tw.tweetid}</h3>
            <p>${tw.tweetdescription}</p>`;
        
    
        
    });
    
    }