  
 
//const $justifiedGallery = $('.taggallery')
//let isJustifiedGallery = false
//if ($justifiedGallery.length) {
//  isJustifiedGallery = true
//  const $imgList = $justifiedGallery.find('img')
//  $imgList.unwrap()
//  if ($imgList.length) {
//    $imgList.each(function (i, o) {
//      if ($(o).attr('data-src')) $(o).attr('src', $(o).attr('data-src'))
//      $(o).wrap('<div></div>')
//    })
//  }
//  $('head').append(`<link rel="stylesheet" type="text/css" href="/css/VolantisTags.css">`)
//  loadScript(`${GLOBAL_CONFIG.justifiedGallery.js}`, function () {
//    initJustifiedGallery($justifiedGallery)
//  })
//}
  
  const $hideInline = $('.hide-button')
  if ($hideInline.length) {
    $hideInline.on('click', function (e) {
      const $this = $(this)
      const $hideContent = $(this).next('.hide-content')
      $this.toggleClass('open')
      $hideContent.toggle()
//    if ($this.hasClass('open')) {
//      if (isJustifiedGallery && $hideContent.find('.taggallery').length > 0) {
//        initJustifiedGallery($hideContent.find('.taggallery'))
//      }
//    }
    })
  }