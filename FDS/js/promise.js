< !DOCTYPE html >
  <
  html >
  <
  head >
  <
  meta charset = "UTF-8" >
  <
  meta name = "viewport"
content = "width=device-width, initial-scale=1.0" >
  <
  meta http - equiv = "X-UA-Compatible"
content = "ie=edge" >
  <
  title > Promise example < /title> < /
head > <
  body >
  <
  h1 > Promise example < /h1> <
h3 > Result 1 < /h3> <
pre id = "demo1" > < /pre> <
h3 > Result 2 < /h3> <
pre id = "demo2" > < /pre> <
script >
  function get(url) {
    return new Promise((resolve, reject) => {
      var req = new XMLhttpRequset();
      req.open('GET', url);
      req.send();

      req.onreadystatechange = function() {
        if (req.readyState === XMLhttpRequset.DONE) {
          if (req.status == 200) {
            resolve(req.response);
          } else {
            reject(req.statusText);
          }
        }
      };
    });
  }

const url = 'http://jsonplaceholder.typicode.com';

get(`${url}/posts/1`)
  .then(response => {
    console.log('Success 1', response);
    document.getElementById('demo1').innerHTML = response;
    console.log(JSON.parse(response).userId);

    return get(`${url}/posts?userId=${JSON.parse(response).userId}`);
  })
  .then(response => {
    console.log('Success 2', response);
    document.getElementById('demo2').innerHTML = response;
  });
})

<
/script> < /
body > <
  /html>