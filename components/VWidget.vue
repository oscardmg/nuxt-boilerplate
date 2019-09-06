<template>
  <div id="v-widget">
    <v-card>
      <v-card-title v-if="enableHeader" class="header-card">
        <h4>{{ title }}</h4>

        <v-spacer />

        <slot name="widget-header-action" />
      </v-card-title>

      <v-divider v-if="enableHeader" />

      <v-card-text :class="contentBg">
        <slot name="widget-content" />
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'VWidget',
  props: {
    title: {
      type: String,
      default: ''
    },
    enableHeader: {
      type: Boolean,
      default: true
    },
    contentBg: {
      type: String,
      default: 'white'
    }
  },

  data () {
    return {}
  },
  computed: {}
}
</script>
