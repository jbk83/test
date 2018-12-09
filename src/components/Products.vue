<template>
  <div>
    <h1>{{ $t('products.title') }}</h1>
    <div class="col-xs-12 col-sm-6 product-cardContainer" v-for="product in products" :key="product.id">
      <div class="product-card">
        <div class="product-image">
          <b-img :src="product.imageUrl" fluid :alt="'image ' + product.name"/>
        </div>
        <div class="product-description">
          <div class="product-descriptionItem mod-name">{{product.name}}</div>
          <div class="product-descriptionItem">{{product.description}}</div>
        </div>
        <div class="product-buttonContainer">
          <button type="button" v-on:click="addToCart(product)" class="btn btn-product">
            {{ $t('products.addToCart') }}
            <font-awesome-icon icon="shopping-cart"/>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Products',
  data () {
    return {
      products: [{
        id: 1,
        name: 'Grand Mère café',
        description: 'A toujours avoir à coté de sa machine.',
        imageUrl: require('../assets/image_test/can1.jpeg')
      }, {
        id: 2,
        name: 'Churchill',
        description: 'C\'est l\'histoire qui est ici.',
        imageUrl: require('../assets/image_test/can2.jpeg')
      }, {
        id: 3,
        name: 'Police',
        description: 'A arborer dans sa voiture à côté de son gilet.',
        imageUrl: require('../assets/image_test/can3.jpeg')
      }, {
        id: 4,
        name: 'Mère Thérésa',
        description: 'Coin ?',
        imageUrl: require('../assets/image_test/can4.jpeg')
      }, {
        id: 5,
        name: 'Prolo',
        description: 'Aucune idée de ce que veut dire la pancarte.',
        imageUrl: require('../assets/image_test/can5.jpeg')
      }, {
        id: 6,
        name: 'François le Français',
        description: 'Parce qu\'on est chauvin.',
        imageUrl: require('../assets/image_test/can6.jpeg')
      }]
    }
  },
  methods: {
    addToCart (product) {
      this.$store.commit('increment', product)
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-product {
  background-color: #0d5d65;
  border-radius: 1px;
  color: #fff;
  font-weight: 600;
  min-width: 200px;
  min-height: 45px;
}

.product-buttonContainer {
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
}

.product-card {
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, .3);
  margin: 10px;
}

.product-cardContainer {
  float: left;
}

.product-description {
  border-top: 1px solid lightgrey;
  margin-top: 5px;
  padding: 20px 0;
}

.product-descriptionItem {
  padding: 0 20px;

  &.mod-name {
    font-size: 20px;
    font-weight: 600;
  }
}

.product-image {
  margin: auto;
  max-height: 170px;
  max-width: 170px;
}
</style>
