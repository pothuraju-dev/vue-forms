<template>
  <div>
    <TheHeader />
    <div class="row">
      <div class="col-12">
        <form @submit.prevent="onSubmit">
          <BaseInput
            label="First Name:"
            :value="$store.state.user.firstName"
            @input="updateUser('firstName', $event)"
            :validator="$v.form.firstName"
          />
          <BaseInput
            label="Last Name:"
            :value="$store.state.user.lastName"
            @input="updateUser('lastName', $event)"
            :validator="$v.form.lastName"
          />
          <BaseInput
            label="Email:"
            :value="$store.state.user.email"
            @input="updateUser('email', $event)"
            type="email"
            :validator="$v.form.email"
          />
          <BaseInput
            label="the URL of your favorite Vue-made website"
            :value="$store.state.user.website"
            @input="updateUser('website', $event)"
            :validator="$v.form.website"
          />
          <BaseInput
            label="Telephone"
            :value="$store.state.user.telephone"
            @input="updateUser('telephone', $event)"
            type="text"
            :mask="'(###) ###-####'"
            :validator="$v.form.telephone"
          />
          <BaseSelect
            label="What do you love most about Vue?"
            :options="loveOptions"
            :value="$store.state.user.love"
            @input="updateUser('love', $event)"
            :validator="$v.form.love"
          />
          <div class="form-group">
            <button :disabled="$v.error" type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div v-if="sending">
        {{ form }}
      </div>
    </div>
  </div>
</template>
<script>
// import axios from "axios";
import BaseInput from "@/components/reusable/BaseInput";
import BaseSelect from "@/components/reusable/BaseSelect";
import TheHeader from "@/components/reusable/TheHeader";
import { url, alpha, email, required } from "vuelidate/lib/validators";
import { mapState } from "vuex";
export default {
  name: "StarterForm",
  components: { BaseInput, BaseSelect, TheHeader },
  data() {
    return {
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
  created() {
    this.$store.dispatch("getLoggedInUser");
  },
  computed: {
    ...mapState({form:'user'})
  },
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
    updateUser(property, value) {
      this.$store.dispatch("updateUserData", { property, value });
      this.$v.form[property].$touch();
    },
  },
};
</script>
