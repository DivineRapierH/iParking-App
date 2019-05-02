<template>
  <a-list itemLayout="vertical" :dataSource="data">
    <a-list-item slot="renderItem" slot-scope="item">
      <span slot="extra" alt="logo">￥ {{ price }}</span>
      <a-list-item-meta>
        <a slot="title">{{ item.title }}</a>
        <a-avatar slot="avatar" icon="file" style="backgroundColor: #1890ff" />
      </a-list-item-meta>
      <div style="margin-left: 30px;">{{ item.content }}</div>
    </a-list-item>
  </a-list>
</template>

<script>
const data = [
  {
    title: "2019/03/12",
    content: "车位：A01"
  }
  // {
  //   title: "记录 2",
  //   content: "这是一条记录！"
  // },
  // {
  //   title: "记录 3",
  //   content: "这是一条记录！"
  // }
];
export default {
  data() {
    return {
      price: 20,
      data
    };
  }
};
</script>

<style></style>
