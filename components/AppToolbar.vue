<template>
  <v-app-bar
    color="grey--text  grey lighten-5"
    app
    clipped-right
    elevate-on-scroll
  >
    <v-app-bar-nav-icon
      color="grey--text"
      @click="handleDrawerToggle"
    />

    <v-toolbar-title>
      <breadcrumb />
    </v-toolbar-title>
    <v-spacer />
    <v-btn icon class="grey--text" @click="handleFullScreen()">
      <v-icon>mdi-fullscreen</v-icon>
    </v-btn>

    <v-menu
      offset-y
      origin="center center"
      elevation="0"
      :nudge-bottom="14"
      transition="slide-y-transition"
    >
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-badge overlap color="red">
            <template v-slot:badge>
              <span v-if="messages > 0">{{ messages }}</span>
            </template>
            <v-icon>mdi-bell</v-icon>
          </v-badge>
        </v-btn>
      </template>
    </v-menu>
  </v-app-bar>
</template>
<script>
import Breadcrumb from '@/components/Breadcrumb'
import Util from '@/util'
export default {
  name: 'AppToolbar',
  components: {
    Breadcrumb
  },
  data () {
    return {
      messages: 3,
      items: [
        {
          icon: 'account_circle',
          href: '#',
          title: 'Profile',
          click: this.handleProfile
        },
        {
          icon: 'settings',
          href: '#',
          title: 'Settings',
          click: this.handleSetting
        },
        {
          icon: 'fullscreen_exit',
          href: '#',
          title: 'Logout',
          click: this.handleLogut
        }
      ]
    }
  },
  computed: {
    toolbarColor () {
      return this.$vuetify.options.extra.mainNav
    }
  },
  created () {},
  methods: {
    handleDrawerToggle () {
      this.$emit('side-icon-click')
    },
    handleFullScreen () {
      Util.toggleFullScreen()
    },
    handleLogut () {
      this.$router.push('/auth/login')
    },
    handleSetting () {},
    handleProfile () {}
  }
}
</script>

<style lang="stylus" scoped></style>
