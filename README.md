# UI Api 文档

适用于前端UI框架的文档说明，尤其适合移动端UI框架，支持UI组件的效果预览


## 执行和编译文档

git clone https://github.com/daviscai/ui-doc.git  
npm install   
npm run dev  

访问 http://localhost:8081/

## 项目介绍

1. examples 目录下有2个文件夹

demos 组件的demo示例，用于预览效果， router.config.js 里会把这里的 .vue 文件作为组件加载  
docs 组件的介绍文档，UI组件的文档说明就写在这里，.md 文件  

2. 如何集成到自己的UI框架里

新增组件预览，修改 examples/entry-demos.js: 
```
export default {
  'layout': r => require.ensure([], () => r(require('./demos/layout.vue')), 'layout.vue'),
  'field': r => require.ensure([], () => r(require('./demos/field.vue')), 'field.vue')
};
```

新增组件说明，修改 examples/entry-docs.js: 
```
export default {
  'quickstart': r => require.ensure([], () => r(require('./docs/quickstart.md')), 'quickstart.md'),
  'changelog': r => require.ensure([], () => r(require('./docs/changelog.md')), 'changelog.md'),
  'layout': r => require.ensure([], () => r(require('./docs/layout.md')), 'layout.md'),
  'field': r => require.ensure([], () => r(require('./docs/field.md')), 'field.md') 
};
```

注意：由于没有加载vant ui库，所以访问例子中的预览是看不到效果的(用了vant ui库例子)，这个不影响，只要集成到你的项目时，加载你的UI组件就可以了。

### 感谢

本项目剥离自 [zanUI 的文档](https://www.youzanyun.com/zanui/vue/component/quickstart) ， 以独立项目存在，更方便集成到UI框架里，特此感谢 有赞 zanUI ！

