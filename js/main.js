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
        path_66x66: './Images_Food/single-post-img3-66x66.jpg',
        title: 'Food Corner: Top Japanese Restaurants for Sushi',
        author: 'admin',
        data: 'March 25th, 2019',
        link:'#'
      },
      {
        path: './Images_Food/fi-roundup-200x132.jpg',
        path_66x66: './Images_Food/fi-roundup-66x66.jpg',
        title: 'Roundup: My New Favourite Recipes For Healthy Living',
        author: 'admin',
        data: 'March 25th, 2019',
        link:'#'
      },
      {
        path: './Images_Food/fi-toasts-200x132.jpg',
        path_66x66: './Images_Food/fi-toasts-200x132.jpg',
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
    collections: [
      {
        path: './Images_Food/drinks-recipes.png',
        label: 'Drinks'
      },
      {
        path: './Images_Food/soups-recipes.png',
        label: 'Soups'
      },
      {
        path: './Images_Food/baking-recipes.png',
        label: 'Bakery'
      },
      {
        path: './Images_Food/dinner-recipes.png',
        label: 'Dinner'
      },
      {
        path: './Images_Food/healthy-recipes.png',
        label: 'Healthy'
      },
      {
        path: './Images_Food/staff-picks.png',
        label: 'Staff Picks'
      },
      {
        path: './Images_Food/premium-recipes.png',
        label: 'Appetiers'
      },
      {
        path: './Images_Food/quick-easy-recipes.png',
        label: 'Quick & Easy'
      },
    ],
    popularBlogPosts: [
      {
        path_66x66: './Images_Food/single-post-img3-66x66.jpg',
        title: 'Food Corner: Top Japanese Restaurants for Sushi',
        data: 'March 25th, 2019'
      },
      {
        path_66x66: './Images_Food/singapore-featured-image-66x66.jpg',
        title: 'City Guide: Singapore',
        data: 'February 27th, 2019'
      },
      {
        path_66x66: './Images_Food/slide1-bg-66x66.jpg',
        title: '6 Nutritional Tips to Help Burn Body Fat',
        data: 'February 28th, 2019'
      },
    ],
    postPopularOrRecent: [],
    activePopularOrRecent: 'popular',
    tableBlogPosts: [
      {
        path: './Images_Food/fi-roundup-800x527.jpg',
        title: 'Roundup: My New Favourite Recipes For Healthy Living',
        author: 'admin',
        data: 'March 25th, 2019',
        link:'#'
      },
      {
        path: './Images_Food/fi-korean-food-800x527.jpg',
        title: 'Food Corner: Top Japanese Restaurants for Sushi',
        author: 'admin',
        data: 'March 25th, 2019',
        link:'#'
      },
      {
        path: './Images_Food/fi-toasts-800x527.jpg',
        title: 'Why These Toasts with Tea are My New Favorite',
        author: 'admin',
        data: 'March 25th, 2019',
        link:'#'
      },
      {
        path: './Images_Food/fi-street-food-800x527.jpg',
        title: 'Food Corner: Top Japanese Restaurants for Sushi',
        author: 'admin',
        data: 'March 25th, 2019',
        link:'#'
      },
      {
        path: './Images_Food/fi-organic-breakfast-800x527.jpg',
        title: 'Roundup: My New Favourite Recipes For Healthy Living',
        author: 'admin',
        data: 'March 25th, 2019',
        link:'#'
      },
      {
        path: './Images_Food/fi-water-side-rest-800x527.jpg',
        title: 'Why These Toasts with Tea are My New Favorite',
        author: 'admin',
        data: 'March 25th, 2019',
        link:'#'
      },

    ],
  },

  created: function() {
    this.postPopularOrRecent = this.popularBlogPosts;
  },
  methods: {
    // per visualizzare lista: popular post o recent post
    showPostPopularOrRecent(clickChoose) {
      if(clickChoose == 'popular') {
        this.postPopularOrRecent = this.popularBlogPosts;
        this.activePopularOrRecent = 'popular';
        return;
      }
      this.postPopularOrRecent = this.lastBlogPosts;
      this.activePopularOrRecent = 'recent';
    }

  

  }, // fine methods
});
