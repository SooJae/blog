## SSR을 사용하는 이유
1. 성능향상.
2. SEO


https://medium.com/walmartglobaltech/the-benefits-of-server-side-rendering-over-client-side-rendering-5d07ff2cefe8


Note: If you need to link to an external page outside the Next.js app, just use an <a> tag without Link.

### header
If you need to add attributes like, for example, className, add it to the a tag, not to the Link tag. Here’s an example.
https://github.com/vercel/next-learn-starter/blob/master/snippets/link-classname-example.js

To learn more about the Head component, check out the API reference for next/head.

If you want to customize the <html>, for example to add the lang attribute, you can do so by creating a pages/_document.js file. Learn more in the custom Document documentation.
https://nextjs.org/docs/advanced-features/custom-document

### CSS
Important: To use CSS Modules, the CSS file name must end with .module.css.
To use this container class inside layout.js, you need to:

Import the file as styles
Use styles.container as the className

It automatically generates unique class names. As long as you use CSS Modules, you don’t have to worry about class name collisions.



## _app.js

Adding Global CSS
In Next.js, you can add global CSS files by importing them from pages/_app.js. You cannot import global CSS anywhere else.

The reason that global CSS can't be imported outside of pages/_app.js is that global CSS affects all elements on the page.

If you were to navigate from the homepage to the /posts/first-post page, global styles from the homepage would affect /posts/first-post unintentionally.

You can place the global CSS file anywhere and use any name. So let’s do the following:

Create a top-level styles directory and create global.css inside.
Add the following content. It resets some styles and changes the color of the a tag.

## prerender 되는지 확인
https://nextjs.org/learn/basics/data-fetching/pre-rendering


## SSG
Only Allowed in a Page
getStaticProps can only be exported from a page. You can’t export it from non-page files.

## Hydration?
JS로 생성된 DOM을 그대로 이용하는 Hydration 기능
 
Hydration 아키텍처에서는 첫 웹 페이지 렌더는 SSR로 이루어지지만 그 이후부터 전환될 모든 페이지는 CSR로 이루어진다. 특히 이후에 이루어지는 이벤트 리스너 등록작업등을 Hydrate라고 부른다. 이런 작업은 원래 개발자가 직접해야하는 것이지만 프로그래머가 신경 쓸 필요가 없도록 구현되어있는 프레임워크를 사용할 수도 있다. 바로 Next.js 와 Nuxt.js 등의 메타 프레임워크이다. Hydration을 이용하면 모든게 좋아질 것 같지만 그럼에도 TTI는 전혀 좋아지지를 않는다.

 
https://hyunseob.github.io/2019/05/26/google-io-2019-day-3/
https://ssr.vuejs.org/guide/hydration.html
https://simsimjae.tistory.com/390
https://shlrur.github.io/develog/2019/02/14/rendering-on-the-web/


component -> dispatch -> action -> reducer -> redux -> provider -> container -> component 
https://velog.io/@jodmsoluth/ssr%EC%9D%84-%EA%B3%B5%EB%B6%80%ED%95%98%EB%A9%B0


https://velog.io/@sirl/Next.js-9.3%EA%B3%BC-Prisma%EB%A1%9C-%EC%A0%95%EC%A0%81-%EC%9B%B9%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%A7%8C%EB%93%A4%EA%B8%B0
