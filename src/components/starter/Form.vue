<template>
  <div class="row">
    <div class="col-12">
      <form>
        <div class="form-group">
          <label>First Name:</label>
          <input type="text" class="form-control" />
        </div>

        <div class="form-group">
          <label>Last Name:</label>
          <input type="text" class="form-control" />
        </div>

        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" />
        </div>

        <div class="form-group">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "StarterForm",
};
</script>
