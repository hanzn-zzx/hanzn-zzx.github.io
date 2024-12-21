var posts=["posts/ff05b5bf/","posts/6f4302ac/","posts/e9d015c9/","posts/9f50842e/","posts/875648f9/","posts/9876ecb4/","posts/ba1d0753/","posts/2b9cc7eb/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };