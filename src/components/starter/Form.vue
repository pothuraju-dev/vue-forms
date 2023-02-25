<template>
  <div class="row">
    <div class="col-12">
      <form @submit.prevent="onSubmit">
        <div class="form-group">
          <label>First Name:</label>
          <input type="text" v-model="form.firstName" class="form-control" />
        </div>

        <div class="form-group">
          <label>Last Name:</label>
          <input type="text" v-model="form.lastName" class="form-control" />
        </div>

        <div class="form-group">
          <label>Email:</label>
          <input type="email" v-model="form.email" class="form-control" />
        </div>

        <div class="form-group">
          <label>Telephone:</label>
          <input type="text" v-model="form.telephone" v-mask="'(###) ###-####'" class="form-control"/>
        </div>

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
export default {
  name: "StarterForm",
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        telephone:""
      },
      sending: false,
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
