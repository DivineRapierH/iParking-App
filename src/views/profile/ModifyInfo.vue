<template>
  <a-form :form="form" @submit="handleSubmit">
    <a-form-item label="车牌号">
      <a-input
        placeholder="形如：渝A01234"
        v-decorator="[
          '车牌号',
          {
            rules: [
              { required: true, message: '请输入您的车牌号', whitespace: true }
            ]
          }
        ]"
      />
    </a-form-item>
    <a-form-item>
      <a-button type="primary" html-type="submit">修改信息</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    }
  }
};
</script>

<style></style>
