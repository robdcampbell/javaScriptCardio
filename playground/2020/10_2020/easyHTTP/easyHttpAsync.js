//  EASY HTTP2 - Refactoring XMLHTTPRequest code to ES6


class EasyHTTP{
  // Make an HTTP POST Request
  async get(url){
   const response = await fetch(url);
   const resData = await response.json();
   return resData;
  }

  // Make an HTTP POST Request
  async post(url,data){
     const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)       
      });
      const resData = await response.json();
      return resData;
    };
 
  // Make an HTTP Put Request 
  async put(url, data){
      const response = await fetch(url, {
        method : 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      const resData = response.json();
      return resData;
  }

  // Make a HTTP Delete request
  async delete(url){
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
      })
      const resData = await 'Resource Deleted...';
      return resData;
  }

} // EasyHTTP class declaration