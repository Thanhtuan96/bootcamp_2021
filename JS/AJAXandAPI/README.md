# AJAX's and API

## Requests in Javascript

- XMLHTTP
- FETCH
- AXIOS

## 1. So what is AJAX

stand for :

- Asynchoronous
- JAVASCRIPT
- AND
- XML

<!-- AJAX là chữ viết tắt của Asynchronous JavaScript and XML. Nó là một bộ các kỹ thuật thiết kế web giúp cho các ứng dụng web hoạt động bất đồng bộ – xử lý mọi yêu cầu tới server từ phía sau. Chà, khoan bối rối nhé, chúng tôi sẽ giải thích từng thuật ngữ một cho bạn biết AJAX là gì. -->

<!-- AJAX hoạt động như thế nào?
Bạn cần lưu ý AJAX không phải dùng một công nghệ duy nhất, cũng không phải ngôn ngữ lập trình. Như đã nói ở trên, AJAX là một bộ kỹ thuật phát triển web. Bộ hệ thống này bao gồm:

HTML/XHTML làm ngôn ngữ chính và CSS để tạo phong cách.
The Document Object Model (DOM) để hiển thị dữ liệu động và tạo tương tác.
XML để trao đổi dự liệu nội bộ và XSLT để xử lý nó. Nhiều lập trình viên đã thay thế bằng JSON vì nó gần với JavaScript hơn.
XMLHttpRequest object để giao tiếp bất đồng bộ.
Cuối cùng, JavaScript làm ngôn ngữ lập trình để kết nối toàn bộ các công nghệ trên lại.
Có thể bạn cần có kiến thức kỹ thuật để hiểu về nó hoàn toàn. Tuy nhiên, quy trình cơ bản của AJAX lại rất đơn giản. Bạn chỉ cần nhìn vào sơ đồ sau là thấy.

Sơ đồ hoạt động: -->

![](https://www.hostinger.vn/huong-dan/wp-content/uploads/sites/10/2019/05/so-do-hoat-dong-diagram-ajax-la-gi.jpg)

## 2. So what is AJAX

<!-- API là các phương thức, giao thức kết nối với các thư viện và ứng dụng khác. Nó là viết tắt của Application Programming Interface – giao diện lập trình ứng dụng. API cung cấp khả năng cung cấp khả năng truy xuất đến một tập các hàm hay dùng. Và từ đó có thể trao đổi dữ liệu giữa các ứng dụng. -->

<!-- Web API là một phương thức dùng để cho phép các ứng dụng khác nhau có thể giao tiếp, trao đổi dữ liệu qua lại. Dữ liệu được Web API trả lại thường ở dạng JSON hoặc XML thông qua giao thức HTTP hoặc HTTPS. -->

![](https://topdev.vn/blog/wp-content/uploads/2019/06/API-696x364.png)

## 3. So what is JSON

is standed for :

- **J**ava
- **S**cript
- **_O_**bject
- **N**otation

**Introducing JSON** https://www.json.org/json-en.html

# Using Postman to see request to server

link download postMan (https://www.postman.com/)

## Query String and Header

A query string is a part of a uniform resource locator (URL) that assigns values to specified parameters. A query string commonly includes fields added to a base URL by a Web browser or other client application, for example as part of an HTML form.[1]

A web server can handle a Hypertext Transfer Protocol (HTTP) request either by reading a file from its file system based on the URL path or by handling the request using logic that is specific to the type of resource. In cases where special logic is invoked, the query string will be available to that logic for use in its processing, along with the path component of the URL.

resource to voke:

- tvmaze
- openWeather
- icanhazdaojoke

# XMLHttp Request

- The "origin" way of sending requests via JS
- Does not support promises, so...lots of callbacks
- WTF is going on with the weird capitalization?
- clunky syntax that I find difficult to remember

```JS
const req = new XMLHttpRequest();

req.onload = function () {
  console.log('all done with request!!');
  console.log(this);
  const data = JSON.parse(this.responseText);
  console.log(data.ticker.price);
};

req.onerror = function () {
  console.log('ERROR!!!');
  console.log(this);
};

req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd');

req.send();
```

# Fletch API

- The newer way of making requests via JS
- Supports promises
- Not supported in IE

using with promises

```JS
fetch('https://api.cryptonator.com/api/ticker/btc-usd')
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data.ticker);
  })
  .catch((e) => {
    console.log(`oh no... ${e}`);
  });
```

using with async/await

```JS
const fetchBitcoinPrice = async () => {
  try {
    const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
    const data = await res.json();
    console.log(data.ticker.price);
  } catch (e) {
    console.log('Something went wrong!!!', e);
  }
};

document.addEventListener('DOMContentLoaded', fetchBitcoinPrice);
```

# Axios to make request

**a library for making http requests**

Axios usage: (https://github.com/axios/axios)

```JS
axios.get('https://api.cryptonator.com/api/ticker/btc-usd').then((res) => {
  console.log(res.data.ticker.price);
});
```

### set Header of request with axios

icanhazdadjoke API(https://icanhazdadjoke.com/api)

```JS
const getDadJoke = async () => {
  const config = { headers: { Accept: 'application/json' } };
  const res = await axios.get('https://icanhazdadjoke.com/', config);
  console.log(res);
};

document.addEventListener('DOMContentLoaded', getDadJoke);
```
