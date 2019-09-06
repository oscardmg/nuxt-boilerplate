<template>
  <v-container>
    <v-widget title="Activities" content-bg="white">
      <div slot="widget-content">
        <v-container>
          <v-row class="mb-6" no-gutters>
            <v-col v-for="n in 4" :key="n">
              <v-card class="pa-2" tile outlined>
                col
              </v-card>
            </v-col>
          </v-row>

          <v-row no-gutters>
            <v-col v-for="n in 2" :key="n" :cols="n === 1 ? 8 : 4">
              <v-card class="pa-2" tile outlined>
                col-{{ n === 1 ? 8 : 4 }}
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-widget>
  </v-container>
</template>

<script>
import Material from 'vuetify/es5/util/colors'
import VWidget from '@/components/VWidget'
export default {
  components: {
    VWidget
  },
  data: () => ({
    color: Material,
    selectedTab: 'tab-1',
    loading: true
  }),
  head: () => ({
    title: 'Dashboard'
  }),
  computed: {

  }
}
</script>

<style lang="scss">
.header-card {
  min-height: 64px;
}
</style>
