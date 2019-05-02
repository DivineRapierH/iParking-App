<template>
  <a-layout id="components-layout-basic">
    <a-drawer
      title="iParking"
      :placement="placement"
      :closable="false"
      @close="onClose"
      :visible="visible"
      id="menu-drawer"
    >
      <a-menu
        theme="light"
        mode="inline"
        :defaultSelectedKeys="['1']"
        :selectedKeys="[menukey]"
      >
        <a-menu-item key="1" @click="handleClickHome">
          <span> <a-icon type="home" style="margin-right: 5px" />主页 </span>
        </a-menu-item>
        <a-menu-item key="2" @click="handleClickInfo">
          <span> <a-icon type="user" style="margin-right: 5px" />个人 </span>
        </a-menu-item>
        <a-menu-item key="3" @click="handleClickNotifications">
          <span> <a-icon type="bell" style="margin-right: 5px" />通知 </span>
        </a-menu-item>
        <a-menu-item key="4" @click="handleClickReservations">
          <span>
            <a-icon type="file-text" style="margin-right: 5px" />记录
          </span>
        </a-menu-item>
      </a-menu>
    </a-drawer>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="drawer-trigger"
          :type="!visible ? 'menu-unfold' : 'menu-fold'"
          @click="onChange"
        />
        <div class="header-button">
          <a-button
            shape="circle"
            icon="bell"
            style="margin-right: 10px;"
            @click="handleClickNotifications"
          />
          <a-button shape="circle" icon="user" @click="handleClickInfo" />
        </div>
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '450px'
        }"
      >
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer style="text-align: center"
        >iParking ©2019 Created by Lifan</a-layout-footer
      >
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  data() {
    return {
      placement: "left",
      collapsed: true,
      visible: false,
      menukey: "1"
    };
  },
  methods: {
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
    onChange() {
      // this.collapsed = !this.collapsed;
      this.visible = !this.visible;
    },
    handleClickHome() {
      this.$router.push({ path: "/home" });
      this.menukey = "1";
      if (this.visible) this.onClose();
    },
    handleClickInfo() {
      this.$router.push({ path: "/profile/info" });
      this.menukey = "2";
      if (this.visible) this.onClose();
    },
    handleClickNotifications() {
      this.$router.push({ path: "/profile/notifications" });
      this.menukey = "3";
      if (this.visible) this.onClose();
    },
    handleClickReservations() {
      this.$router.push({ path: "/profile/reservations" });
      this.menukey = "4";
      if (this.visible) this.onClose();
    }
  }
};
</script>

<style scoped>
#components-layout-basic {
  height: 100%;
}

#menu-drawer {
  text-align: center;
  -webkit-touch-callout: none;
  -webkit-text-size-adjust: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
}
#components-layout-basic .drawer-trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-basic .header-button {
  padding: 0 20px 0 24px;
  float: right;
}

#components-layout-basic .drawer-trigger:hover {
  color: #1890ff;
}

#components-layout-basic .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 1;
}
</style>
