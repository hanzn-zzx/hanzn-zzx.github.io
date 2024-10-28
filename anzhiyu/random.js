var posts=["posts/e9d015c9/","posts/6f4302ac/","posts/ff05b5bf/","posts/9876ecb4/","posts/2b9cc7eb/","posts/9f50842e/","posts/ba1d0753/","posts/875648f9/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };