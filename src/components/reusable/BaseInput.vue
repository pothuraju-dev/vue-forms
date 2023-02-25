<template>
  <div class="form-group">
    <label>{{ label }}</label>
    <input
      :value="value"
      :type="type"
      @input="$emit('input', $event.target.value)"
      class="form-control"
      :class="{
        'is-valid': validator && !validator.$error && validator.$dirty,
        'is-invalid': validator && validator.$error,
      }"
      v-mask="mask"
    />
  </div>
</template>
<script>
export default {
  name: "BaseInput",
  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "text",
      validator(value) {
        return ["text", "email", "password"].includes(value);
      },
    },
    value: {
      type: String,
      required: true,
    },
    mask: {
      type: String,
      required: false,
    },
    validator: {
      type: Object,
      required: false,
      validator($v) {
        return Object.prototype.hasOwnProperty.call($v, "$model");
      },
    },
  },
};
</script>
