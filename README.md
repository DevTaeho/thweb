# thweb

===== 04/19 =====
=================
Ajax의 fetch 이해
JavaScript 객체 이해


===== 04/21 =====
=================
Fragment Id(#) 이해
Hash bang(#!) 이해
번외 pjax (Hash bang 대체)

The Content Security Policy???? 정책 위반?
-----------------------------------------

fetch.js:4 The Content Security Policy 'default-src 'none'; style-src 'unsafe-inline'; img-src data:; connect-src 'self'' was delivered via a <meta> element outside the document's <head>, which is disallowed. The policy has been ignored.

<head> 밖의 <meta> 요소에 의해 보안 정책들이 전달되는 건 허락하지 않는다?

fetch.js:4
document.querySelector('article').innerHTML = text;

https://developer.mozilla.org/ko/docs/Web/HTML/Element/meta 를 참조하면

meta 요소는 head 안에 있어야 하는데

js에서 사용한
document.querySelector('article').innerHTML = text
부분이 meta 요소의 content-security-policy를 가져와서
정책 위반으로 나타난듯

===== 04/25 =====
=================

fetch를 활용하여 데이터와 로직을 분리
-----------------------------------

순서 리스트의 정보인 <li> 태그들을 외부 파일인 'list'로 분리


=> index.html을 수정할 필요 없이 데이터 파일을 수정함으로써 로직 변경을 하지 않음

앞으로의 발전 : pjax, json을 활용한 ajax, progressive web app

Facebook Login
---------------

선행 ? : OAuth 2.0 인증 방법

Facebook에서 제공하는 JavaScript SDK를 통해 Federated Identity를 구현


우리가 Federated Identity를 사용하는 입장에선 Resource Owner는 ID, PW를 소유한 실제로 우리의 서비스를 사용할 유저이고

Resource Server는 연합 ID를 가진 Facebook, Google 같은 커다란 서버로 볼 수 있다.

우린 이 경우에 Resource Server 에서 실 서비스 사용자를 식별할 정보를 얻는 client 입장이 된다.

OAuto 2.0에는 대략 3가지 방법이 있는데

위 엘리먼트를 가지는 방법을 Resource Owner Password Credentials Grant 방식이라고 한다.


리소스 소유자가 클라이언트로 리소스(자신을 식별할)를 보내고

클라이언트는 이 정보를 통해 서버에 Access Token을 요청한다.

요청하여 얻은 Access Token 정보로 리소스 서버와 통신하며 데이터를 요청한다. (API call with Access Token)
