<!--
 * @Author: ZtrainWilliams ztrain1224@163.com
 * @Date: 2022-11-21 14:37:30
 * @Description:
-->

## uniapp

uniapp-cli（vscode） vue3.0\2.0 vite vant-weapp1.x ts eslint prettierrc 打包流程

### 命令

1. npm i (yarn)
2. npx @dcloudio/uvm (可以使用 @dcloudio/uvm 管理编译器的版本，此工具仅自动增加或更新 uni-app 编译器主要依赖，对于新增的编译命令（scripts）暂时不会自动处理，需手动参考新工程进行配置。)
3. npm run dev:xxx

### 配置过程

1. 使用 unapp-vite-ts 模板

```bash
  npx degit dcloudio/uni-preset-vue#vite-ts my-vue3-project
```

2. 使用 vant-weapp，下载 dist 文件放置 pages 统计，命名为 wxcomponents/vant

```json
// 全局引用声明
"usingComponents": {
  "van-button": "/wxcomponents/vant/button/index",
  "van-field": "/wxcomponents/vant/field/index"
}
```

3. 配置.eslintrc.js,下载依赖,npm run lint检查
``` bash
npm i eslint eslint-plugin-vue @typescript-eslint/eslint-plugin @typescript-eslint/parser --save-dev
```

4. 配置.prettierrc.js,下载依赖,npm run prettier校验
``` bash
npm i prettierrc --save-dev
```

5. 配置husky，git校验
``` javascript
npm install husky --save-dev
// 初始化
npx husky install
```

6. 配置commitlint，新建commitlint.config.js
``` bash
npm install --save-dev @commitlint/config-conventional @commitlint/cli
node node_modules/husky/lib/bin add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```

