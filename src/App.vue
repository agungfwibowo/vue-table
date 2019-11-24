<template>
  <div id="app" class="vue-table">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="shadow-logo">
    </div>
    <nav class="nav-vue-table mb-3">
      <router-link to="/" >
        <button>Home</button>
      </router-link>
      <router-link to="/about" >
        <button>About</button>
      </router-link>
      <router-link to="/crud-table" >
        <button>Table</button>
      </router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style scope>
button:focus {
  outline: none !important
}

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
  color: #fff;
  border: 0px solid salmon;
  box-shadow: 0px 3px 5px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px !important;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 2px !important;
  transition: 0.5s;
}

button:hover, .router-link-exact-active button {
  background: salmon;
}

.nav-vue-table a {
  color: #2c3e50 ;
  text-decoration: none !important;
  font-weight: 600;
}

.vue-table tr:nth-child(even), .vue-table table.list thead>tr {
  background-color: #f5f5f5 !important;
}
</style>
