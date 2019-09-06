<template>
  <v-breadcrumbs :items="levelList" divider="/" />
</template>

<script>
import Menu from '@/api/menu'

export default {
  data () {
    return {
      levelList: []
    }
  },
  watch: {
    $route (route) {
      this.getBreadcrumb()
    }
  },
  created () {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb () {
      const pathArray = this.$route.path.split('/')
      let makePath = ''
      let actualLevelLIst = []

      // 1. first element
      actualLevelLIst = [
        {
          text: 'Home',
          disabled: false,
          to: '/home',
          exact: true
        }
      ]

      // 2. Make a breadcrum with nested path
      function searchArray (arr, search) {
        makePath += `/${search[0]}`

        if (makePath === '/home') { return }

        arr.filter((i) => {
          if (i.to === makePath) {
            actualLevelLIst.push({
              text: i.text,
              to: makePath,
              exact: true,
              nuxt: true
            })

            if (!i.children) { return }

            pathArray.shift()

            // 3. Nested undefined path level
            searchArray(i.children, pathArray)
          }
        })
      }

      pathArray.shift() // fist element is blank
      searchArray(Menu, pathArray)

      this.levelList = actualLevelLIst
    }
  }
}
</script>
