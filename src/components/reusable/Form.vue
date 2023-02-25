<template>
  <div class="row">
    <div class="col-12">
      <form @submit.prevent="onSubmit">
        <BaseInput
          label="First Name:"
          v-model="$v.form.firstName.$model"
          :validator="$v.form.firstName88"
        />
        <BaseInput
          label="Last Name:"
          v-model="$v.form.lastName.$model"
          :validator="$v.form.lastName"
        />
        <BaseInput
          label="Email:"
          v-model="$v.form.email.$model"
          type="email"
          :validator="$v.form.email"
        />
        <BaseInput
          label="the URL of your favorite Vue-made website"
          v-model="$v.form.website.$model"
          :validator="$v.form.website"
        />
        <BaseInput
          label="Telephone"
          v-model="$v.form.telephone.$model"
          type="text"
          :mask="'(###) ###-####'"
          :validator="$v.form.telephone"
        />
        <BaseSelect
          label="What do you love most about Vue?"
          :options="loveOptions"
          v-model="$v.form.love.$model"
          :validator="$v.form.love"
        />
        <div class="form-group">
          <button
            :disabled="$v.error"
            type="submit"
            class="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    <div v-if="sending">
      {{ form }}
    </div>
  </div>
</template>
<script>
// import axios from "axios";
import BaseInput from "@/components/reusable/BaseInput";
import BaseSelect from "@/components/reusable/BaseSelect";
import { url, alpha, email, required } from "vuelidate/lib/validators";
export default {
  name: "StarterForm",
  components: { BaseInput, BaseSelect },
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        website: "",
        love: "fun",
        telephone: "",
      },
      sending: false,
      loveOptions: [
        { label: "Fun to use", value: "fun" },
        { label: "Friendly learning curve", value: "curve" },
        { label: "Amazing documentation", value: "docs" },
        { label: "Fantastic community", value: "community" },
      ],
    };
  },
  validations: {
    form: {
      firstName: { alpha, required },
      lastName: { alpha, required },
      email: { email, required },
      telephone: {
        validatePhone: (phone) =>
          phone.match(/((\(\d{3}\)?)|(\d{3}-))?\d{3}-d{4}/) !== null,
      },
      website: { url },
      love: { required },
    },
  },
  computed: {},
  methods: {
    onSubmit() {
      this.$v.$touch();
      if (!this.$v.$invalid) return;
      setTimeout(() => {
        this.sending = true;
      }, 2000);
      // axios
      //   .post("https://localhost:3000/dophines", { params: this.form })
      //   .then((response) => {
      //     console.log("form has been posted", response);
      //   })
      //   .catch((err) => {
      //     console.log("An error occurred", err);
      //   });
      console.log("Send my form");
    },
  },
};
</script>
