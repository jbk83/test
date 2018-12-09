<template>
  <div class="cart">
    <h1>{{ $t('cart.title') }}</h1>
    <div class="cart-empty" v-if="products.length == 0">{{ $t('cart.empty') }}</div>
    <div class="col-xs-12 cart-rowContainer" v-for="product in products" :key="product.id">
      <div class="row cart-rowDisplay">
        <div class="cart-rowDescription">
          <div class="cart-image">
            <b-img :src="product.imageUrl" fluid :alt="'image ' + product.name"/>
          </div>
          <div class="cart-rowText">{{product.name}}</div>
        </div>
        <div class="cart-buttonContainer">
          <div class="cart-rowText">{{ $t('cart.quantity') }} : {{product.count}}</div>
          <button type="button" v-on:click="removeCart(product)" class="btn btn-cart">
            <font-awesome-icon icon="trash-alt"/>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  computed: {
    products () {
      return this.$store.state.items
    }
  },
  methods: {
    removeCart (product) {
      this.$store.commit('remove', product)
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-cart {
  background-color: #0d5d65;
  border-radius: 1px;
  color: #fff;
}

.cart-buttonContainer {
  align-items: center;
  display: flex;
  right: 0;
}

.cart-empty {
  display: flex;
  justify-content: center;
}

.cart-image {
  height: 60px;
  width: 60px;
}

.cart-rowContainer {
  border-bottom: 1px solid lightgrey;
  padding: 10px 20px;

  &:first-of-type {
    border-top: 1px solid lightgrey;
  }
}

.cart-rowDescription {
  align-items: center;
  display: flex;
}

.cart-rowDisplay {
  justify-content: space-between;
}

.cart-rowText {
  font-size: 16px;
  font-weight: 600;
  margin: 0 20px;
}
</style>
