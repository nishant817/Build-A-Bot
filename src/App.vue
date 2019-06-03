<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <router-link :to="{name: 'Home'}" class='nav-link' exact>
              <img class="logo" src="./assets/build-a-bot-logo.png" />
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'Build'}" class='nav-link' exact>
              Build a Bot
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'BrowseParts'}" class='nav-link' exact>
              Browse Parts
            </router-link>
          </li>
        </ul>
      </nav>
    </header>

    <div class="container">
      <aside class="aside">
        <router-view name="sidebar"></router-view>
      </aside>

      <main>
        <router-view />
      </main>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
};
</script>

<style>
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
main {
  /* margin: 0 auto; */
  padding: 30px;
  background-color: white;
  /* width: 1024px; */
  width: 964px;
  min-height: 600px;
}
header {
  background-color: #999;
  width: 1184px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  /* padding: 5px 10px; */
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
.nav-link {
  padding: 5px 10px;
  text-decoration: none;
  color: inherit;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.router-link-active {
  background-color: aquamarine;
}
.container {
  display: flex;
  margin: 10px auto 0 auto;
  justify-content: center;
}
.aside {
  padding: 30px;
  background-color: gray;
  width: 100px;
  min-height: 300px;
}
</style>
