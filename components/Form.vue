<template>
  <div>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <ValidationProvider
          v-slot="{ errors }"
          name="E-mail"
          rules="required|email"
        >
          <input v-model="email" type="email" data-testid="email" />
          <span>{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors }"
          name="First Name"
          rules="required|alpha"
        >
          <input v-model="firstName" type="text" data-testid="first-name" />
          <span>{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors }"
          name="Last Name"
          rules="required|alpha"
        >
          <input v-model="lastName" type="text" data-testid="last-name" />
          <span>{{ errors[0] }}</span>
        </ValidationProvider>
        <button type="submit">Submit</button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'

export default Vue.extend({
  components: { ValidationProvider, ValidationObserver },
  data: () => ({
    firstName: '',
    lastName: '',
    email: '',
  }),
  methods: {
    onSubmit() {
      this.$emit('submit', {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
      })
    },
  },
})
</script>
