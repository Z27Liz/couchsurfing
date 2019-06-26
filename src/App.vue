<template>
  <div id="app">
      <my-header></my-header>
      <router-view></router-view>
      <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
import HomePage from './components/HomePage'
import MyCouch from './components/MyCouch'
import MyApply from './components/MyApply'

export default {
  name: 'App',
  components: {
    MyHeader,MyFooter,HomePage,MyCouch,MyApply
  }
}
</script>

<style>
*{
	padding: 0;
	margin: 0;
}
body{
  background-image: url(./assets/wall.jpg);
  background-repeat: no-repeat;
  background-size: 100%;
  background-attachment: fixed;
  line-height: 1;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
</style>
