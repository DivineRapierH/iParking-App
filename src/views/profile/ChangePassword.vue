<template>
  <a-form :form="form" @submit="handleSubmit">
    <a-form-item label="原密码">
      <a-input
        v-decorator="[
          'oldpassword',
          {
            rules: [
              {
                required: true,
                message: '请输入您的原密码！'
              }
            ]
          }
        ]"
        type="password"
      />
    </a-form-item>
    <a-form-item label="新密码">
      <a-input
        v-decorator="[
          'newpassword',
          {
            rules: [
              {
                required: true,
                message: '请输入您的新密码！'
              },
              {
                validator: validateToNextPassword
              }
            ]
          }
        ]"
        type="password"
      />
    </a-form-item>
    <a-form-item label="确认新密码">
      <a-input
        v-decorator="[
          'newconfirm',
          {
            rules: [
              {
                required: true,
                message: '请确认您的新密码！'
              },
              {
                validator: compareToFirstPassword
              }
            ]
          }
        ]"
        type="password"
        @blur="handleConfirmBlur"
      />
    </a-form-item>
    <a-form-item>
      <a-button type="primary" html-type="submit">修改密码</a-button>
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
    },
    handleConfirmBlur(e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },
    compareToFirstPassword(rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue("password")) {
        callback("两次密码不相同！");
      } else {
        callback();
      }
    },
    validateToNextPassword(rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(["confirm"], { force: true });
      }
      callback();
    },
    handleWebsiteChange(value) {
      let autoCompleteResult;
      if (!value) {
        autoCompleteResult = [];
      } else {
        autoCompleteResult = [".com", ".org", ".net"].map(
          domain => `${value}${domain}`
        );
      }
      this.autoCompleteResult = autoCompleteResult;
    }
  }
};
</script>

<style></style>
