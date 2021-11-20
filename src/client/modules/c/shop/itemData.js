const FOOD_CAT_IMG = "https://freesvg.org/img/Restaurant-Sign-White.png";
const FOOD_FAV_IMG = "https://cdn.icon-icons.com/icons2/2070/PNG/512/pizza_icon_126037.png";
const DRINK_CAT_IMG = "https://www.pinpng.com/pngs/m/0-4734_soda-can-beverage-drink-paper-cup-comments-soda.png";
const DRINK_FAV_IMG = "https://icons.veryicon.com/png/o/food--drinks/spring-new-food-series/tea-12.png";
const MOVIE_CAT_IMG = "https://icon-library.com/images/movie-film-icon/movie-film-icon-22.jpg";
const MOVIE_FAV_IMG = "https://www.dvd-covers.org/d/156268-2/Groundhog_Day_-_Bluray_CD.jpg";
const ANIMAL_CAT_IMG = "https://thumbs.dreamstime.com/z/farmers-market-logo-black-farm-animals-icon-vector-symbol-white-background-symbol-vector-67932157.jpg";
const ANIMAL_FAV_IMG = "https://fcit.usf.edu/matrix/wp-content/uploads/2016/12/OwlTablet.png";

const MY_FAV = {
    food: {
        image: {
            link: FOOD_CAT_IMG,
            alt: "Image of food",
        },
        favorite: {
            name: "Pizza",
            price: 8.99,
            image: {
                link: FOOD_FAV_IMG,
                alt: "Image of favorite food (pizza)",
            },
        },
    },
    drink: {
        image: {
            link: DRINK_CAT_IMG,
            alt: "Image of a drink",
        },
        favorite: {
            name: "Tea",
            price: 0.99,
            image: {
                link: DRINK_FAV_IMG,
                alt: "Image of favorite drink (tea)",
            },
        },
    },
    movie: {
        image: {
            link: MOVIE_CAT_IMG,
            alt: "Image of movie symbols",
        },
        favorite: {
            name: "Groundhog Day",
            price: 4.99,
            image: {
                link: MOVIE_FAV_IMG,
                alt: "Image of favorite movie (Groundhog Day)",
            },
        },
    },
    animal: {
        image: {
            link: ANIMAL_CAT_IMG,
            alt: "Image of animals",
        },
        favorite: {
            name: "Owl",
            price: 1275.75,
            image: {
                link: ANIMAL_FAV_IMG,
                alt: "Image of favorite animal (owl)",
            },
        },
    },
};

let shopItems = [];
for (let category in MY_FAV) {
    shopItems.push(MY_FAV[category].favorite);
}

export { shopItems };