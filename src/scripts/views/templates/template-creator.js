/* eslint-disable no-trailing-spaces */
/* eslint-disable max-len */
import CONFIG from '../../global/config';

const restaurantListTemplate = (restaurants) => `
<div class="card-item">
     <img src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}" alt="${restaurants.name}">
     <h3 tabindex="0"><a href="${`/#/detail/${restaurants.id}`}">${restaurants.name}</a></h3>
     <p class="card-item-desc" tabindex="0">${restaurants.description}</p>
     <div class="card-item-info">
       <h4 tabindex="0"> Kota ${restaurants.city}</h4>
       <h5 tabindex="0"> ⭐️ ${restaurants.rating}</h5>
     </div>
</div>
`;

const restaurantListDetailTemplate = (restaurant) => `
    <div class="card-detail">
        <div class="detail-info ">
            <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
            <h3 tabindex="0">${restaurant.name}</h3>
            <p tabindex="0">${restaurant.description}</p>
            <p tabindex="0">Alamat : ${restaurant.address}, Kota ${restaurant.city}</p>
            <h4 tabindex="0">Kategori : 
            ${restaurant.categories.map((categories) => `${categories.name}`)}
            </h4>           
        </div>
        <div class="detail-menu ">
          <div>
            <h4 tabindex="0">Menu</h4>
            <h5 tabindex="0">Makanan</h5>
            ${restaurant.menus.foods.map((food) => `<p tabindex="0">- ${food.name}</p>`)}
            </div>
            <div>
            <h5 tabindex="0">Minuman</h5>
            ${restaurant.menus.drinks.map((drink) => `<p tabindex="0">- ${drink.name}</p>`)}       
          </div>
        </div>
        <div class="detail-consumer">                
          <h4 tabindex="0">Costumer Review</h4>
          <div class="review">            
            ${restaurant.customerReviews.map((customer) => ` <p tabindex="0" class="date-review"> ${customer.date}<br>nama : ${customer.name}, review : ${customer.review}</p>`)}                        
          </div>
        </div>
    </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export { 
  restaurantListTemplate, 
  restaurantListDetailTemplate, 
  createLikeButtonTemplate, 
  createLikedButtonTemplate,
};
