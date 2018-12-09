<template>
  <nav class="navBar">
    <router-link class="navBar-item" to="/">MySimon</router-link>

    <div>
      <router-link class="navBar-item" to="/">{{ $t('navigation.products') }}</router-link>
      <router-link class="navBar-item" to="/cart">
        {{ $t('navigation.cart') }}
        ({{ $store.state.totalCount }})
      </router-link>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navBar {
  align-items: center;
  background-color: white;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, .3);
  display: flex;
  height: 40px;
  justify-content: space-between;
  padding: 0 20px;
  position: fixed;
  width: 100%;
  z-index: 100;
}

.navBar-item {
  border-right: 1px solid #000;
  color: rgba(0, 0, 0, .6);;
  font-weight: 500;
  padding: 0 10px;
  text-decoration: none;

  &:last-of-type {
    border: 0;
  }
}
</style>
