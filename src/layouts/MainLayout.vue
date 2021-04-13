<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          MUMPD - VUE
        </q-toolbar-title>

        <div>Demo v 0.0.1</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-grey-8">
          Links
        </q-item-label>
        <q-item clickable :to="'example1'">
          <q-item-section>
            <q-item-label>Example 1</q-item-label>
            <q-item-label caption>
              Communication between Vue and Mumps
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable :to="'dashboard'">
          <q-item-section>
            <q-item-label>Dashboard</q-item-label>
            <q-item-label caption>
              Dashboard of this web app
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable :to="'donorregister'">
          <q-item-section>
            <q-item-label>Donor Register</q-item-label>
            <q-item-label caption>
              To regist a new donor click here
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable :to="'donorlist'">
          <q-item-section>
            <q-item-label>Donor List</q-item-label>
            <q-item-label caption>
              To show the list of Donors informations
            </q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  data() {
    return {
      leftDrawerOpen: false
    };
  }
};
</script>
