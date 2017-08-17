/* eslint-disable */
module.exports = {
  "zh-CN": {
    header: {
      // '首页': 'https://',
      // 'PC端': 'https://',
      // '移动端': 'https://'
    },
    footer: {
      copyright: `2012-${(new Date()).getFullYear()} © xxxx.com -   粤ICP备00000000号`,
      nav: {
        // '官网': 'https://',
        // '加入我们': 'https://'
      }
    },
    nav: [
      {
        "name": "开发指南",
        "groups": [
          {
            "list": [
              {
                "path": "/quickstart",
                "title": "快速上手",
                noExample: true
              },
              {
                "path": "/changelog",
                "title": "更新日志",
                noExample: true
              }
            ]
          }
        ]
      },
      {
        "name": "Vant组件",
        "showInMobile": true,
        "groups": [
          {
            "groupName": "基础组件",
            "list": [
              {
                "path": "/layout",
                "title": "Layout 布局"
              }
            ]
          },
          {
            "groupName": "表单",
            "list": [
              {
                "path": "/field",
                "title": "Field 输入框"
              }
            ]
          }

        ]
      }
    ]
  }
}
