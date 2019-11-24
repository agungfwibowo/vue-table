<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="shadow-logo">
    </div>
    <nav class="nav-vue-table">
      <button>
        <router-link to="/" >Home</router-link>
      </button>
      <button>
        <router-link to="/about" >About</router-link>
      </button>
      <button>
        <router-link to="/index" >Table</router-link>
      </button>
    </nav>
    <router-view/>
  </div>
</template>

<style scope>
#app {
  font-family: 'Avenir', ubuntu, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
img {
  height: 100px;
}
button {
  background: #41b883;
  border: 0px solid salmon;
  box-shadow: 0px 3px 5px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px !important;
  padding: 10px;
  margin: 0 2px !important;
  transition: 0.5s;
}
button:hover {
  background: salmon;
}
.nav-vue-table a {
  color: #2c3e50 ;
  text-decoration: none !important;
  font-weight: 600;
}
</style>
