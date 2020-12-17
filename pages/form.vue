<template>
  <div>
    <h2>Form</h2>
    <Form @submit="onSubmit"></Form>
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Form from '@/components/Form.vue'

export default Vue.extend({
  components: { Form },
  data() {
    return {
      message: '',
    }
  },
  methods: {
    onSubmit(data: any) {
      this.message = `Submitted! ${data.email}`
    },
  },
})
</script>
