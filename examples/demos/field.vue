
    <template>
      <section class="demo-field">
        <h1 class="zan-doc-demo-block__title">Field 输入框</h1>
        <zan-doc-demo-block title="基础用法"><van-cell-group>
  <van-field type="text" label="用户名：" placeholder="请输入用户名" v-model="username" icon="clear" :on-icon-click="onIconClick" @blur="onFieldBlur" required></van-field>
  <van-field type="password" label="密码：" placeholder="请输入密码" required></van-field>
  <van-field type="textarea" label="个人介绍：" placeholder="请输入个人介绍" required></van-field>
</van-cell-group>
</zan-doc-demo-block><zan-doc-demo-block title="无label的输入框"><van-cell-group>
  <van-field type="text" placeholder="请输入用户名"></van-field>
</van-cell-group>
</zan-doc-demo-block><zan-doc-demo-block title="带border的输入框"><div class="van-field-wrapper">
  <van-field type="text" placeholder="请输入用户名" border=""></van-field>
</div>
</zan-doc-demo-block><zan-doc-demo-block title="禁用的输入框"><van-cell-group>
  <van-field label="用户名：" type="text" placeholder="请输入用户名" v-model="username" disabled></van-field>
</van-cell-group>
</zan-doc-demo-block><zan-doc-demo-block title="错误的输入框"><van-cell-group>
  <van-field label="用户名：" type="text" placeholder="请输入用户名" error=""></van-field>
</van-cell-group>
</zan-doc-demo-block><zan-doc-demo-block title="错误的输入框"><van-cell-group>
  <van-field label="留言：" type="textarea" placeholder="请输入留言" rows="1" autosize=""></van-field>
</van-cell-group>
</zan-doc-demo-block>
      </section>
    </template>
    <style>
.demo-field {
  .van-field-wrapper {
    padding: 0 10px;
  }
}
</style>
    <script>
export default {
  data() {
    return {
      username: 'zhangmin'
    };
  },
  methods: {
    onIconClick() {
      this.username = '';
    },

    onFieldBlur() {
      console.log('blured');
    }
  }
};
</script>
  