module.exports = {
  plugins: [
    [
      "import",
      {
        libraryName: 'element-plus',
        customStyleName: (name: string) => {
          // 由于 customStyleName 在配置中被声明的原因，`style: true` 会被直接忽略掉，
          // 如果你需要使用 less 源文件，把文件结尾的扩展名从 `.css` 替换成 `.less` 就可以了
          return `element-plus/lib/theme-chalk/${name}.css`;
        },
      },
    ],
  ],
};