<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    dark
    class="app--drawer primary drawer-menu"
    :mini-variant.sync="mini"
    :width="drawWidth"
  >
    <vue-perfect-scrollbar
      class="drawer-menu--scroll"
      :settings="scrollSettings"
    >
      <!-- MENU -->
      <v-list>
        <template v-for="item in items">
          <!-- Header -->
          <v-subheader v-if="item.header" :key="item.header">
            {{ item.header }}
          </v-subheader>
          <!-- /Header -->

          <!-- Item -->
          <v-list-item
            v-if="item.text && !item.group"
            :key="item.text"
            :to="item.to"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item>
          <!-- /Item -->

          <v-list-group
            v-if="item.group"
            :key="item.text"
            no-action
            :prepend-icon="item.icon"
          >
            <template v-slot:activator>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </template>

            <v-list-item
              v-for="(itemGroup, i) in item.children"
              :key="i"
              :to="itemGroup.to"
            >
              <v-list-item-title v-text="itemGroup.text" />
              <v-list-item-icon>
                <v-icon v-text="itemGroup.icon" />
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
        </template>
      </v-list>
      <!-- /MENU -->
    </vue-perfect-scrollbar>
  </v-navigation-drawer>
</template>
<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import menu from '@/api/menu'

export default {
  name: 'AppDrawer',
  components: {
    VuePerfectScrollbar
  },
  props: {
    drawWidth: {
      type: [Number, String],
      default: '260'
    },
    showDrawer: Boolean
  },
  data () {
    return {
      mini: false,
      items: menu,
      drawer: true,
      scrollSettings: {
        maxScrollbarLength: 160
      }
    }
  },

  computed: {},
  watch: {
    showDrawer: {
      handler (val) {
        this.drawer = val
      },
      immediate: true
    }
  },
  created () {},

  methods: {}
}
</script>

<style lang="stylus" scoped>
.app--drawer
  overflow: hidden

  .drawer-menu--scroll
    height: 100vh
    overflow: auto
</style>
