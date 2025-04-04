# 生成文档

根据index.css编写文档
- 上面是目录, 点击可以跳转到对应的章节
- 根据模块创建章节
- 一个模块的描述, 按照一个demo, 然后下面是参数的形式,参考[#编写demo](#编写demo)

## 编写demo

### 按钮
`btn`
```html
<button class="btn">按钮</button>
<button class="btn primary">主按钮</button>
<button class="btn secondary">次按钮</button>
<button class="btn success">成功按钮</button>
<button class="btn danger">危险按钮</button>
```

- `primary`: 主按钮
- `secondary`: 次按钮
- `success`: 成功按钮
- `danger`: 危险按钮


# 问题处理
编写的文档因为是md文件, 和ai输出显示的内容有冲突,  需要把输出的内容进行一些转换
- 把章节的`#`替换成`[hash]`
- 把代码块的\`\`\`替换成`[code]`
- 把行内代码块的\`替换成`[inline]`
- 把*替换成`[star]`
- 把-替换成`[dash]`
- 把>替换成`[quote]`

# 恢复文档
```js
node parsemd.js
```