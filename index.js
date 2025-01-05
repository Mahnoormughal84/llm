async function getpost() {
    const response = await axios.get(
        "https://p2pclouds.up.railway.app/v1/learn/get_instagram_posts"
    );
    const data = response.data;
    console.log(data);
    const tweet = data.tweets;
    console.log(tweet);

    const divRef = document.querySelector("#tweets")
    tweet.map((tw) => {

        divRef.innerhtml =
        divRef.innerhtml +
            `<div class="tweets">
        <img src="${tw.tweetimage}" alt="profile pic" />
        <h3>${tw.tweetid}</h3>
        <p>${tw.tweetdescription}</p>`;
    });

}

async function updatePost() {
    const tweetIdRef = document.querySelector("input#tweetId");
    const newTweetDescription = document.querySelector("input#tweetDescription");
    const newTweetImage = document.querySelector("input#tweetImage");
  
    const tweetId = tweetIdRef.value;
    const tweetDescription = newTweetDescription.value;
    const tweetImage = newTweetImage.value;
  
    const apiBody = {
      tweetId: tweetId,
      tweetImage: tweetImage,
      tweetDescription: tweetDescription,
    };
  
    const response = await axios.put(
      "https://p2pclouds.up.railway.app/v1/learn/tweet/update",
      apiBody
    );
    const data = response.data;
    console.log(data);
  }
  
  async function savePost() {
    const newTweetDescription = document.querySelector(
      "input#newTweetDescription"
    );
    const newTweetImage = document.querySelector("input#newTweetImage");
  
    const tweetDescription = newTweetDescription.value;
    const tweetImage = newTweetImage.value;
  
    const apiBody = {
      tweetImage: tweetImage,
      tweetDescription: tweetDescription,
    };
  
    const response = await axios.post(
      "https://p2pclouds.up.railway.app/v1/learn/tweet/save",
      apiBody
    );
    const data = response.data;
    console.log(data);
  }
  
  async function deletePost() {
    const tweetIdToDelete = document.querySelector("input#tweetIdToDelete");
    const response = await axios.delete(
      https://p2pclouds.up.railway.app/v1/learn/tweet/delete?tweetId=${tweetIdToDelete.value}
    );
    const data = response.data;
    console.log(data);
  }