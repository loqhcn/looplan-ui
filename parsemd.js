const fs = require('fs');
const path = require('path');

// 读取 README.md 文件
const filePath = path.join(__dirname, 'README.md');
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('读取文件时出错:', err);
    return;
  }

  // 进行替换操作
  let convertedData = data;
  convertedData = convertedData.replace(/\[hash\]/g, '#');
  convertedData = convertedData.replace(/\[code\]/g, '```');
  convertedData = convertedData.replace(/\[inline\]/g, '`');
  convertedData = convertedData.replace(/\[star\]/g, '*');
  convertedData = convertedData.replace(/\[dash\]/g, '-');
  convertedData = convertedData.replace(/\[quote\]/g, '>');

  // 将转换后的数据写回 README.md 文件
  fs.writeFile(filePath, convertedData, 'utf8', (err) => {
    if (err) {
      console.error('写入文件时出错:', err);
      return;
    }
    console.log('README.md 文件已成功恢复为正常的 Markdown 格式。');
  });
});
