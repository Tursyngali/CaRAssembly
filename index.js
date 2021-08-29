// https://vuejs.org/v2/guide/

const app = new Vue({
  el: '#app',
  
  // https://vuejs.org/v2/guide/instance.html#Data-and-Methods
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Фары',
          image:'https://static9.depositphotos.com/1033883/1201/i/600/depositphotos_12011795-stock-photo-new-car-headlights.jpg',
          cost: 1500,
          quantity: 0
        },
        {
          id: 2,
          name: 'Мотор',
          image:'data:image/jpeg;base64,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',
          cost: 2500,
          quantity: 0
        },
        {
          id: 3,
          name: 'Диски',
          image:'https://a.d-cd.net/9b2f61cs-960.jpg',
          cost: 4500,
          quantity: 0
        },
        {
          id: 4,
          name: 'Капот',
          image:'https://images2.exist.ua/media/images/products/2021/01/45_8288012.jpg',
          cost: 4520,
          quantity: 0
        },
        {
          id: 5,
          name: 'Двери',
          image:'http://i.smotra.ru/data/img/users_imgs/54083/sm_users_img-222990.jpg',
          cost: 1250,
          quantity: 0
        },
        {
          id: 6,
          name: 'Бампер',
          image:'https://interkom-l.ru/upload/iblock/db6/6ef903f79d703a9bf98aa4bcec240810.jpg',
          cost: 4500,
          quantity: 0
        }     
      ],
      showCart: false
    };
  },
  computed: {
    cart () {
      return this.products.filter(product => product.quantity>0)
    },
    totalQuantity(){
      return this.products.reduce(
        (total,product) => total+product.quantity,
        0
        );
    },    
    totalCost(){
      let sum = 0;
      for(let i = 0; i < this.products.length; i++){
        sum += (parseFloat(this.products[i].cost) * parseFloat(this.products[i].quantity));
      }
     return sum;
    }

  },
  methods: {
    updateCart (product,updateType) {
      for(let i=0;i<this.products.length;i++){
        if(this.products[i].id===product.id){
          if(updateType==="substract"){
            if(this.products[i].quantity!==0){
              this.products[i].quantity--
            }
          }else{
            this.products[i].quantity++
          }
          break;
        }
      }
      
    },

  }
  });
  