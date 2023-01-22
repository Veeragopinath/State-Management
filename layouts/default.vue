<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h4 white--text">
            <v-img
  
  max-height="150"
  max-width="250"
  src="https://phantomsmartsolutions.com/wp-content/themes/pss-website/assets/images/pss-logo-w.png"
></v-img>
           
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in navItems" :key="item.title" link>
          <v-list-item-icon>
            <v-icon color="white">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text text-h6">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="mr-6">Dashboard</v-toolbar-title>
      <v-toolbar-title>Users</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn class="elevation-0 bg">
        <v-icon>mdi-help-circle-outline</v-icon>
      </v-btn>
      <v-btn   color="grey" class="px-3 py-0"  @click="logOut()" v-bind="attrs" v-on="on">
        
        LogOut
       
      </v-btn>
      
    </v-app-bar>

    <v-main app fluid>
      <v-container
        class="outerContainer mt-n3 py-n2"
        style="min-height: 100vh , padding: 0"
      >
        <v-breadcrumbs :items="breadcrums" large></v-breadcrumbs>
       
        <v-container class="innerContainer grey lighten-2 pa-" style="height: 100%">
          <v-container class="mt-5" style="min-height: 90vh">
            <Nuxt />
          </v-container>
        </v-container>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import {mapGetters, mapState, mapActions } from "vuex";
export default {
  
  data: () => ({
    drawer: null,
    navItems: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard' },
      { title: 'Users', icon: 'mdi-image' },
    ],
    breadcrums: [
      {
        text: 'Home',
        disabled: false,
      },
      {
        text: 'Users',
        disabled: false,
      },
    ],
  }),
  methods:{
    ...mapActions(["logout"]),
    logOut() {
      this.logout()
      this.$router.push('/login')
    }
  }
}
</script>
<style>
.v-navigation-drawer {
  background-color: #3c4b64 !important;
}
.outerContainer {
  background-color: white;
}
/* .innerContainer {
  background-color: red;
} */
</style>
