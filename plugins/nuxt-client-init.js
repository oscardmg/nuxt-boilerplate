export default async (ctx) => {
  // console.log('nuxt-client-init export default')

  await ctx.store.dispatch('nuxtClientInit', ctx)

  // en el dispatch no tengo acceso a $vuetifi

  // if (ctx.store.getters['settings/getTema'] !== '') {
  //   console.log('entro asigar tema defecto');
  //   ctx.$vuetify.theme.themes.light.primary = '#' + ctx.store.getters['settings/getTema'];
  // }
  // console.log(ctx.store.state.settings.dark);
  // console.log(ctx.store.getters['settings/getDark']);
  // if (ctx.store.state.settings.dark === 1) {
  //   console.log('entro asigar dark');
  //   ctx.$vuetify.theme.dark = true;
  // } else {
  //   ctx.$vuetify.theme.dark = false;
  // }
}
