# 样式文档

## 目录

- [全局样式](#全局样式)
- [滚动条样式](#滚动条样式)
- [字体图标](#字体图标)
- [Flex 布局类](#flex-布局类)
- [面板样式](#面板样式)
- [布局样式](#布局样式)
- [单元格样式](#单元格样式)
- [列表样式](#列表样式)
- [边距和内边距类](#边距和内边距类)
- [文本对齐类](#文本对齐类)
- [根变量](#根变量)
- [按钮样式](#按钮样式)
- [输入框样式](#输入框样式)
- [标签页样式](#标签页样式)


## 全局样式
### `body` 和 `*`
```html
This is a sample text.
```
- `body`: 设置字体大小、颜色、背景颜色和字体族。
- `*`: 设置盒模型为 `border-box`。

## 滚动条样式
### `m-scrollbar-reset` 和全局滚动条样式
```html
<div class="m-scrollbar-reset" style="height: 200px; overflow: auto;">
  <p>这里是一些文本，用于测试滚动条样式。</p>
</div>
```
- `m-scrollbar-reset`: 自定义滚动条宽度、高度、滑块颜色、轨道颜色等。
- 全局滚动条样式: 设置默认滚动条宽度、高度、轨道颜色、滑块颜色等。

## 字体图标
### `iconfont`
```html
<span class="iconfont">这里应该显示图标</span>
```
- `iconfont`: 引入自定义字体图标。

## Flex 布局类
### `flex` 相关类
```html
<div class="flex">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```
- `flex`: 设置元素为弹性布局。
- `flex.column`: 设置弹性布局方向为垂直。
- `flex-row`: 设置弹性布局方向为水平。
- `flex.wrap`: 设置弹性元素换行。
- `flex.wrap-reverse`: 设置弹性元素反向换行。
- `flex.nowrap`: 设置弹性元素不换行。
- `flex-center`: 水平和垂直居中。
- `flex-end`: 水平靠右，垂直居中。

## 面板样式
### `m-panel`
```html
<div class="m-panel">
  <div class="title">面板标题</div>
  <div class="body">面板内容</div>
</div>
```
- `m-panel`: 设置面板的基本样式，包括内边距、背景颜色、边框、阴影等。
- `m-panel > .title`: 设置面板标题的样式。
- `m-panel > .body`: 设置面板内容的样式。

## 布局样式
### `m-layout` 相关类
```html
<div class="m-layout full">
  <div class="m-layout-auto">自动填充内容</div>
</div>
```
- `m-layout.full`: 设置元素宽度和高度为 100%。
- `m-layout.full-view`: 设置元素宽度和高度为视口的 100%。
- `m-layout .m-layout-auto`: 弹性布局中自动填充剩余空间。
- `m-layout-relative`: 设置元素为相对定位。
- `m-layout-absolute`: 设置元素为绝对定位。
- `m-layout-fixed`: 设置元素为固定定位。

## 单元格样式
### `m-cell`
```html
<div class="m-cell">
  <div class="label">标签</div>
  <div class="value">值</div>
</div>
```
- `m-cell`: 设置单元格的基本样式，包括内边距、布局等。
- `m-cell .label`: 设置单元格标签的样式。
- `m-cell .value`: 设置单元格值的样式。

## 列表样式
### `list`
```html
<div class="list">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
</div>
```
- `list`: 设置列表的基本样式，默认为垂直布局。
- `list.list-x`: 设置列表为水平布局。
- `list.list-x.wrap`: 设置水平列表元素换行。

## 边距和内边距类
### `margin`、`padding` 等相关类
```html
<div class="margin">有外边距的元素</div>
<div class="padding">有内边距的元素</div>
```
- `margin`: 设置元素外边距为 10px。
- `padding`: 设置元素内边距为 10px。
- `mt`、`mr`、`mb`、`ml`: 设置上、右、下、左外边距为 10px。
- `pt`、`pr`、`pb`、`pl`: 设置上、右、下、左内边距为 10px。
- `padding-x`、`pd-x`: 设置左右内边距为 10px。
- `padding-y`、`pd-y`: 设置上下内边距为 10px。

## 文本对齐类
### `text-align-right`
```html
<p class="text-align-right">右对齐文本</p>
```
- `text-align-right`: 设置文本右对齐。

## 根变量
### `:root`
```css
:root {
  --m-color-primary: #1989fa;
  --m-color-success: #07c160;
  --m-color-info: #909399;
  --m-color-warning: #ff976a;
  --m-color-danger: #ee0a24;
  --m-table-text-color:#606266;
  --m-table-border-color:#ebeef5;
  --m-table-column-color:#ffffff;
}
```
- `--m-color-primary`: 主颜色。
- `--m-color-success`: 成功颜色。
- `--m-color-info`: 信息颜色。
- `--m-color-warning`: 警告颜色。
- `--m-color-danger`: 危险颜色。
- `--m-table-text-color`: 表格文本颜色。
- `--m-table-border-color`: 表格边框颜色。
- `--m-table-column-color`: 表格列颜色。

## 按钮样式
### `btn`
```html
<button class="btn">普通按钮</button>
<button class="btn btn-primary">主按钮</button>
<button class="btn btn-success">成功按钮</button>
<button class="btn btn-info">信息按钮</button>
<button class="btn btn-warning">警告按钮</button>
<button class="btn btn-danger">危险按钮</button>
```
- `btn`: 设置按钮的基本样式。
- `btn.btn-primary`: 主按钮样式。
- `btn.btn-success`: 成功按钮样式。
- `btn.btn-info`: 信息按钮样式。
- `btn.btn-warning`: 警告按钮样式。
- `btn.btn-danger`: 危险按钮样式。
- `btn.plain`: 朴素按钮样式。
- `btn.link`: 链接按钮样式。
- `btn.round`: 圆角按钮样式。
- `btn.circle`: 圆形按钮样式。

## 输入框样式
### `input`
```html
<input type="text" class="input" placeholder="输入内容">
```
- `input`: 设置输入框的基本样式，包括宽度、高度、边框半径、内边距等。

## 标签页样式
### `m-tabs`
```html
<div class="m-tabs">
  <div class="item">标签 1</div>
  <div class="item">标签 2</div>
</div>
```
- `m-tabs`: 设置标签页的基本样式。
- `m-tabs.column`: 设置标签页为垂直布局。
- `m-tabs .item`: 设置标签页项的样式。
