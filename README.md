# Template Node webpack LP

## Package

### JavaScript

- [swiper](https://swiperjs.com/) - スライド
- [PhotoSwipe](https://photoswipe.com/) - LightBox
- [body-scroll-lock](https://github.com/willmcpo/body-scroll-lock) - ModalやSheets作成のためにbodyを固定する
- [PixiJS](https://www.pixijs.com/) - 2D
- [three.js](https://threejs.org/) - 3D
- [dayjs](https://day.js.org/) - 日付 標準ライブラリでは[Temporal](https://github.com/tc39/proposal-temporal)

### CSS

- [tailwindcss](https://tailwindcss.com/)
- [basscss](https://basscss.com/)


## Notice

### webpackのhashをパラメータに変更する

現状、hashを`assets/js/[name].[hash].js`から`assets/js/[name].js?[hash]`に変更することはできない。これはwebpack-fix-style-only-entriesがこの形式に対応していないからで、[そのうち解決する問題](https://github.com/fqborges/webpack-fix-style-only-entries/pull/27)かもしれない。
