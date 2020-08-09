<template>
  <div>
          <div id="avatar">
            <img src="../assets/logo.png" height="140" width="140"/>
          </div>

          <div id="dis">
            <p id="fon">17857093532，你好啊！</p>
            <table>
              <tr>
                <td><span class="gray">服务代码：</span><span>24967603</span></td>
                <td><span class="gray">子账号：</span><span>0</span></td>
                <td><span class="gray">账户余额：</span><span>¥0   <a href="">充值</a></span></td>
              </tr>
              <tr>
                <td><span class="gray">帐号等级：</span><span>免费用户<a-button type="primary" style="background-color: white;border-color: black;color: red;margin-left: 10px" shape="round">成为会员</a-button></span></td>
                <td><span class="gray">手机：</span><span>178****3532</span></td>
                <td><span class="gray">红包：</span><span>0</span></td>
              </tr>
              <tr>
                <td><span class="gray">授权码：</span><span>客户顾问协助时需要</span><a style="margin-left: 8px" href="javascript:;">点击获取</a></td>
                <td><span class="gray">邮箱：</span><span>空</span></td>
                <td></td>
              </tr>
              <tr>
                <td><span class="gray">安全等级：</span><span>低</span></td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      collapsed: false,
    };
  },
  methods:{
      gouser:function(){
        this.$router.push({path:'/users'})
      },
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
    font-size:28px;
    color: aqua;

  }
  #user{
    height: 120px;
  }
  #fon{
    font-weight: bold;
    font-size: 28px;
    text-align: left;
    margin-bottom: 0px;
  }
 #avatar {
    width: 140px;
    height: 140px;
    position: relative;
    overflow: hidden;
    float: left;
    margin: 0;
    -webkit-border-radius: 70px;
    margin-right: 30px;
  }
  #dis{
    overflow: hidden;
  }
  table{
    width: 100%;
  }
  td{
    height: 32px;
    line-height: 32px;
    text-align: left;
  }
  .gray{
    color: gray;
  }
  .ant-menu-dark.ant-menu-inline .ant-menu-item, .ant-menu-dark.ant-menu-inline .ant-menu-submenu-title {
    text-align: left;
  }
  .fenzhi{
    width: 50%;
    min-height: 180px;
    float: left;
  }
  .hah{
    padding: 10px;
  }
  .haha{
    background: #fff;
    height: 160px;
  }
  li{
    list-style: none;
    padding: 0;
    margin: 0;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  .con{
    padding: 50px 18px 0 18px;
  }
  .conbtn{
    float: right;
    height: 60px;
    line-height: 60px;
    margin: 0;
    text-align: right;
  }
  .im{
    overflow: hidden;
    vertical-align: top;
    text-align: left;
  }
  .info{
    display: inline-block;
    vertical-align: top;
    padding: 0;
  }
  .til{
    font-size: 18px;
    line-height: 26px;
    color: #333;
    margin: 3px 0;
  }
  .bs{
    height: 30px;
    line-height: 30px;
    width: 88px;
    font-size: 14px;
    display: inline-block;
    margin-bottom: 0;
    text-align: center;
    cursor: pointer;
    border: 1px solid #ff0042;
    color: #ff0042;
    background: none;
    padding: 0;
  }
  .bs1{
    height: 30px;
    line-height: 30px;
    width: 88px;
    font-size: 14px;
    display: inline-block;
    margin-bottom: 0;
    text-align: center;
    cursor: pointer;
    border: 1px solid grey;
    color: black;
    background: none;
    margin-left: 10px;
  }
</style>
