<template>
  <v-app>
    <app-drawer class="app--drawer" :show-drawer="showDrawer" />

    <app-toolbar
      class="app--toolbar"
      @side-icon-click="handleDrawerVisiable"
    />

    <v-content>
      <!-- Page Header -->
      <page-header />
      <nuxt />

      <!-- App Footer -->
      <v-footer height="auto" class="white pa-3 app--footer">
        <span class="caption">
          Comodisimos &copy; {{ new Date().getFullYear() }}
        </span>
        <v-spacer />
        <span class="caption mr-1">Versión 1.0</span>
      </v-footer>
    </v-content>

    <!-- Go to top -->
    <app-fab />
  </v-app>
</template>

<script>
import AppDrawer from '@/components/AppDrawer'
import AppToolbar from '@/components/AppToolbar'
import AppFab from '@/components/AppFab'
import PageHeader from '@/components/PageHeader'

export default {
  components: {
    AppDrawer,
    AppToolbar,
    AppFab,
    PageHeader
  },

  data () {
    return {
      showDrawer: true,
      rightDrawer: false,
      snackbar: {
        show: false,
        text: '',
        color: ''
      }
    }
  },
  created () {},
  methods: {
    handleDrawerVisiable () {
      this.showDrawer = !this.showDrawer
    },
    openThemeSettings () {
      this.$vuetify.goTo(0)
      this.rightDrawer = !this.rightDrawer
    }
  }
}
</script>

<style scoped lang="stylus">

.page-wrapper
  min-height: calc(100vh - 64px - 50px - 81px);

.setting-fab
  top: 50% !important
  right: 0
  border-radius: 0
</style>
