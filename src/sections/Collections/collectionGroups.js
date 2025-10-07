import categoryItems from "@/sections/Categories/categoryItems";

const collectionGroups = [
  {
    isActive: true,
    title: 'Movies',
    items: [
      {
        title: 'Our Genres',
        categoryItems,
      },
      {
        title: 'Popular Top 10 In Genres',
        categoryItems: [
          {
            title: 'Action',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Adventure',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/adventure/1.jpg',
              '/src/assets/images/categories/adventure/2.jpg',
              '/src/assets/images/categories/adventure/3.jpg',
              '/src/assets/images/categories/adventure/4.jpg',
            ]
          },
          {
            title: 'Comedy',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/comedy/1.jpg',
              '/src/assets/images/categories/comedy/2.jpg',
              '/src/assets/images/categories/comedy/3.jpg',
              '/src/assets/images/categories/comedy/4.jpg',
            ]
          },
          {
            title: 'Drama',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/drama/1.jpg',
              '/src/assets/images/categories/drama/2.jpg',
              '/src/assets/images/categories/drama/3.jpg',
              '/src/assets/images/categories/drama/4.jpg',
            ]
          },

          {
            title: 'Action 2',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Adventure 2',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/adventure/1.jpg',
              '/src/assets/images/categories/adventure/2.jpg',
              '/src/assets/images/categories/adventure/3.jpg',
              '/src/assets/images/categories/adventure/4.jpg',
            ]
          },
          {
            title: 'Comedy 2',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/comedy/1.jpg',
              '/src/assets/images/categories/comedy/2.jpg',
              '/src/assets/images/categories/comedy/3.jpg',
              '/src/assets/images/categories/comedy/4.jpg',
            ]
          },
          {
            title: 'Drama 2',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/drama/1.jpg',
              '/src/assets/images/categories/drama/2.jpg',
              '/src/assets/images/categories/drama/3.jpg',
              '/src/assets/images/categories/drama/4.jpg',
            ]
          },

          {
            title: 'Action 3',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Adventure 3',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/adventure/1.jpg',
              '/src/assets/images/categories/adventure/2.jpg',
              '/src/assets/images/categories/adventure/3.jpg',
              '/src/assets/images/categories/adventure/4.jpg',
            ]
          },
          {
            title: 'Comedy 3',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/comedy/1.jpg',
              '/src/assets/images/categories/comedy/2.jpg',
              '/src/assets/images/categories/comedy/3.jpg',
              '/src/assets/images/categories/comedy/4.jpg',
            ]
          },
          {
            title: 'Drama 3',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/drama/1.jpg',
              '/src/assets/images/categories/drama/2.jpg',
              '/src/assets/images/categories/drama/3.jpg',
              '/src/assets/images/categories/drama/4.jpg',
            ]
          },

          {
            title: 'Action 4',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Adventure 4',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/adventure/1.jpg',
              '/src/assets/images/categories/adventure/2.jpg',
              '/src/assets/images/categories/adventure/3.jpg',
              '/src/assets/images/categories/adventure/4.jpg',
            ]
          },
          {
            title: 'Comedy 4',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/comedy/1.jpg',
              '/src/assets/images/categories/comedy/2.jpg',
              '/src/assets/images/categories/comedy/3.jpg',
              '/src/assets/images/categories/comedy/4.jpg',
            ]
          },
          {
            title: 'Drama 4',
            badge: 'Top 10 In',
            images: [
              '/src/assets/images/categories/drama/1.jpg',
              '/src/assets/images/categories/drama/2.jpg',
              '/src/assets/images/categories/drama/3.jpg',
              '/src/assets/images/categories/drama/4.jpg',
            ]
          },
        ],
        sliderParams: {
          slidesPerView: 4, /* кол-во отоброжаемых слайдов */
          slidesPerGroup: 4, /* кол-во сгруппированых слайдеров, которые будут прокручиваться группами */
          spaceBetween: 30,
          breakpoints: {
            /* Свойства отвечающие за ширину экрана */
            0: {
              slidesPerView: 1.6,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              spaceBetween: 30,
              allowTouchMove: false,
            },
          }
        },
      },
      {
        title: 'Trending Now',
        movieItems: [
          {
            title: 'Morbius',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30min',
            views: '2K',
          },
          {
            title: 'Bhai Jaan',
            imgSrc: '/src/assets/images/movies/2.jpg',
            duration: '1h 30min',
            views: '2K',
          },
          {
            title: 'Suraj pe Mangal Bahari',
            imgSrc: '/src/assets/images/movies/3.jpg',
            duration: '1h 30min',
            views: '2K',
          },
          {
            title: 'Pathan',
            imgSrc: '/src/assets/images/movies/4.jpg',
            duration: '1h 30min',
            views: '2K',
          },
          {
            title: 'Ant-Man',
            imgSrc: '/src/assets/images/movies/5.jpg',
            duration: '1h 30min',
            views: '2K',
          },

          {
            title: 'Morbius 2',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30min',
            views: '2K',
          },
          {
            title: 'Bhai Jaan 2',
            imgSrc: '/src/assets/images/movies/2.jpg',
            duration: '1h 30min',
            views: '2K',
          },
          {
            title: 'Suraj pe Mangal Bahari 2',
            imgSrc: '/src/assets/images/movies/3.jpg',
            duration: '1h 30min',
            views: '2K',
          },
          {
            title: 'Pathan 2',
            imgSrc: '/src/assets/images/movies/4.jpg',
            duration: '1h 30min',
            views: '2K',
          },
          {
            title: 'Ant-Man 2',
            imgSrc: '/src/assets/images/movies/5.jpg',
            duration: '1h 30min',
            views: '2K',
          },

          {
            title: 'Morbius 3',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30min',
            views: '2K',
          },
          {
            title: 'Bhai Jaan 3',
            imgSrc: '/src/assets/images/movies/2.jpg',
            duration: '1h 30min',
            views: '2K',
          },
          {
            title: 'Suraj pe Mangal Bahari 3',
            imgSrc: '/src/assets/images/movies/3.jpg',
            duration: '1h 30min',
            views: '2K',
          },
          {
            title: 'Pathan 3',
            imgSrc: '/src/assets/images/movies/4.jpg',
            duration: '1h 30min',
            views: '2K',
          },
          {
            title: 'Ant-Man 3',
            imgSrc: '/src/assets/images/movies/5.jpg',
            duration: '1h 30min',
            views: '2K',
          },

          {
            title: 'Morbius 4',
            imgSrc: '/src/assets/images/movies/1.jpg',
            duration: '1h 30min',
            views: '2K',
          },
          {
            title: 'Bhai Jaan 4',
            imgSrc: '/src/assets/images/movies/2.jpg',
            duration: '1h 30min',
            views: '2K',
          },
          {
            title: 'Suraj pe Mangal Bahari 4',
            imgSrc: '/src/assets/images/movies/3.jpg',
            duration: '1h 30min',
            views: '2K',
          },
          {
            title: 'Pathan 4',
            imgSrc: '/src/assets/images/movies/4.jpg',
            duration: '1h 30min',
            views: '2K',
          },
          {
            title: 'Ant-Man 4',
            imgSrc: '/src/assets/images/movies/5.jpg',
            duration: '1h 30min',
            views: '2K',
          },
        ],
      }
    ],
  }
]

export default collectionGroups