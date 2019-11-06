<template>
  <div class="layout">
    <Layout>
      <Header class="headStyle">查询统计</Header>
      <Layout>
        <Sider hide-trigger>
          <Menu active-name="firm" width="auto" @on-select="handleSelect">
            <MenuItem name="firm">
              <div>
                <h3>企业查询</h3>
                <span>30036</span>
              </div>
            </MenuItem>
            <MenuItem name="about">
              <div>
                <h3>执法查询</h3>
                <span>1124</span>
              </div>
            </MenuItem>
            <MenuItem name="1-3">
              <div>
                <h3>行政处罚</h3>
                <span>23</span>
              </div>
            </MenuItem>
            <MenuItem name="1-3">
              <div>
                <h3>行政许可</h3>
                <span>1954</span>
              </div>
            </MenuItem>
            <MenuItem name="1-3">
              <div>
                <h3>标准化达标</h3>
                <span>802</span>
              </div>
            </MenuItem>
            <MenuItem name="1-3">
              <div>
                <h3>机构人员</h3>
                <span>1357</span>
              </div>
            </MenuItem>
          </Menu>
        </Sider>
        <Content>
          <router-view />
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
export default {
  methods: {
    handleSelect: function(name) {
      this.$router.push(name);
    }
  }
};
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex: auto;
  .headStyle {
    background: url("~@/assets/top.png") no-repeat;
    background-size: 100% 100%;
    padding: 0 50px;
    height: 64px;
    line-height: 64px;
    text-align: center;
    font-size: 24px;
    letter-spacing: 0.2em;
    color: #c7ffff;
    position: relative;
    z-index: 999999;
  }
  .ivu-layout-sider {
    position: relative;
    z-index: 99999;
    background-color: transparent;
  }
  .ivu-menu-light {
    background: transparent;
    padding-top: 10px;
    .ivu-menu-item {
      padding: 0 10px;
      margin-bottom: 5px;
      div {
        background: url("~@/assets/blue.png") no-repeat;
        background-size: 100% 100%;
        line-height: 1;
        height: 54px;
        display: flex;
        color: #fff;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: all 1s;
        span {
          font-size: 16px;
          margin-top: 4px;
        }
      }
    }
  }
  .ivu-layout-content {
    margin: 10px 0;
    border: 1px solid #00feff;
  }
  .ivu-menu-light.ivu-menu-vertical
    .ivu-menu-item-active:not(.ivu-menu-submenu):after,
  .ivu-menu-vertical.ivu-menu-light:after {
    display: none;
  }
  .ivu-menu-light.ivu-menu-vertical
    .ivu-menu-item-active:not(.ivu-menu-submenu) {
    color: #fff000;
    background: transparent;
    z-index: 2;
    div {
      background: url("~@/assets/orange.png") no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>
