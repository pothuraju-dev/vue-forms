<template>
  <div class="row">
    <div class="col-12">
      <form @submit.prevent="onSubmit">
        <BaseInput label="First Name:" v-model="form.firstName" />
        <BaseInput label="Last Name:" v-model="form.lastName" />
        <BaseInput label="Email:" v-model="form.email" />
        <BaseSelect
          label="What do you love most about Vue?"
          :options="loveOptions"
          v-model="form.love"
        />
        <div class="form-group">
          <button
            :disabled="!formIsValid"
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
export default {
  name: "StarterForm",
  components: { BaseInput, BaseSelect },
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        love: "fun",
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
  computed: {
    formIsValid() {
      return (
        this.form.firstName.length > 0 &&
        this.form.lastName.length > 0 &&
        this.form.email.length > 0
      );
    },
  },
  methods: {
    onSubmit() {
      if (!this.formIsValid) return;
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
