<template>
  <div>
    <h1 class="title">通知</h1>

    <a-list itemLayout="vertical" :dataSource="data">
      <a-list-item slot="renderItem" slot-scope="item">
        <a-list-item-meta>
          <a slot="title">{{ item.title }}</a>
          <a-avatar
            slot="avatar"
            icon="mail"
            style="backgroundColor: #1890ff"
          />
        </a-list-item-meta>
        <div style="margin-left: 20px;">{{ item.content }}</div>
      </a-list-item>
    </a-list>
  </div>
</template>
<script>
const data = [
  {
    title: "您已成功缴费",
    content: "欢迎再次使用本产品！"
  },
  {
    title: "您已成功预约",
    content: "车位为：A01，时间：17:00"
  },
  {
    title: "注册成功",
    content: "感谢您使用本产品！"
  }
];
export default {
  data() {
    return {
      data
    };
  }
};
</script>
<style scoped>
.title {
  text-align: center;
  font-size: 32px;
  margin-bottom: 40px;
  -webkit-touch-callout: none;
  -webkit-text-size-adjust: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
}
</style>
