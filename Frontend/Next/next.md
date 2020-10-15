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
