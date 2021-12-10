// jsを記述する際はここに記載していく

// ページ読み込み後にロード画面を消す
window.onload = function() {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
  }


// スクロールアクション
$(function(){
    $('a[href^="#"]').click(function(){
      var speed = 3000;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });

  