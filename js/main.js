/*
* Avada Food
*/
const app = new Vue({
  el:'#app',
  data: {
    mainNav: [
      'Home',
      'Recipes',
      'Places',
      'Blog',
      'About',
      'Contact'
    ],
    lastBlogPosts: [
      {
        path: './Images_Food/single-post-img3-200x132.jpg',
        title: 'Food Corner: Top Japanese Restaurants for Sushi',
        author: 'admin',
        data: 'March 25th, 2019',
        link:'#'
      },
      {
        path: './Images_Food/fi-roundup-200x132.jpg',
        title: 'Roundup: My New Favourite Recipes For Healthy Living',
        author: 'admin',
        data: 'March 25th, 2019',
        link:'#'
      },
      {
        path: './Images_Food/fi-toasts-200x132.jpg',
        title: 'Why These Toasts with Tea are My New Favorite',
        author: 'admin',
        data: 'March 25th, 2019',
        link:'#'
      },
    ],
  },
  methods: {

  }, // fine methods
});
