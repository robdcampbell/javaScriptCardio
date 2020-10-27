// app.js Using XMLHttpRequests (not ES6, Fetch API, promises, etc...)

const http = new easyHTTP;

// GET Posts
/*
    http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts){
      
        if(err){
          console.log(err)
        } else{
          console.log(posts)
        }
    });
  */

  // Create Data
  const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
  };

  // *******************************************************************
  //  POST  Create Post 
  /*
      http.post('https://jsonplaceholder.typicode.com/posts',data, function(err,post){
        if(err){
          console.log(err)
        } else {
          console.log(post)
        }
      });
  */

 // *******************************************************************
    // PUT - Update post
    /*
      http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err,post){
      if(err){
        console.log(err);
      } else {
        console.log(data);
      }
      })
    */

 // *******************************************************************
    // DELETE - DELETE post
    http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, posts){
      if(err){
        console.log(err)
      } else{
        console.log(posts)
      }
    });