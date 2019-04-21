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
<meta> 요소는 <head> 안에 있어야 하는데
js에서 사용한
document.querySelector('article').innerHTML = text
부분이 meta 요소의 content-security-policy를 가져와서
정책 위반으로 나타난듯
