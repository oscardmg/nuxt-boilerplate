<template>
  <v-app class="split-bg primary">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4 lg4>
            <v-card class="elevation-1 pa-3">
              <v-card-text>
                <div class="layout column align-center">
                  <h1 class="flex primary--text mb-2">
                    Login
                  </h1>
                </div>

                <v-form>
                  <v-text-field
                    v-model="model.email"
                    append-icon="mdi-account"
                    name="email"
                    label="Correo"
                    type="text"
                  />
                  <v-text-field
                    id="password"
                    v-model="model.password"
                    append-icon="mdi-lock"
                    name="password"
                    label="Contraseña"
                    type="password"
                  />
                </v-form>
              </v-card-text>
              <div class="login-btn">
                <v-spacer />
                <v-btn
                  block
                  color="primary"
                  :loading="loading"
                  @click="handleLogin"
                >
                  Entrar
                </v-btn>
              </div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  layout: 'auth',
  data () {
    return {
      loading: false,
      model: {
        email: 'usuario@comodisimos.com',
        password: 'contraseña'
      },
      title: 'Login'
    }
  },
  methods: {
    handleLogin () {
      this.loading = true
      setTimeout(() => {
        this.$router.push('/dashboard')
      }, 1000)
    }
  },
  head () {
    return {
      title: this.title
    }
  }
}
</script>
<style scoped lang="stylus">

.split-bg
  height: 50%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  z-index: 0;
</style>
