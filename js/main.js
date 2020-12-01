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
    imagesFromBlog: [
      './Images_Food/Mixed-fruits-460x295.jpg',
      './Images_Food/r-rachel-park-366508-unsplash-min-460x295.jpg',
      './Images_Food/r-michelle-tsang-500721-unsplash-min-460x295.jpg',
      './Images_Food/quick-summer-drink-460x295.jpg',
      './Images_Food/r-maarten-van-den-heuvel-400626-unsplash-min-460x295.jpg',
      './Images_Food/perfect-cosmopolitan-460x295.jpg',
      './Images_Food/fi2x-6-460x295.jpg',
      './Images_Food/r-brooke-lark-96398-unsplash-min-460x295.jpg'
    ],
  },
  methods: {

  }, // fine methods
});
