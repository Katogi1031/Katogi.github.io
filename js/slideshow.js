function createSlideshow(slideshowElement) {
    const images = slideshowElement.querySelectorAll('img');
  
    images.forEach(image => {
      // 画像の読み込み完了時に処理を行うイベントリスナーを設定
      image.addEventListener('load', function() {
        const imageWidth = image.width;
        const imageHeight = image.height;
  
        // スライドショー要素のサイズを取得
        const slideshowWidth = slideshowElement.offsetWidth;
        const slideshowHeight = slideshowElement.offsetHeight;
  
        // 画像の幅と高さがスライドショー要素よりも大きい場合の処理
        if (imageWidth > slideshowWidth || imageHeight > slideshowHeight) {
          const widthRatio = slideshowWidth / imageWidth;
          const heightRatio = slideshowHeight / imageHeight;
  
          const resizeRatio = Math.min(widthRatio, heightRatio);
          const newWidth = Math.floor(imageWidth * resizeRatio);
          const newHeight = Math.floor(imageHeight * resizeRatio);
  
          // 画像を縮小
          image.style.width = `${newWidth}px`;
          image.style.height = `${newHeight}px`;
          image.style.maxWidth = '100%';
          image.style.maxHeight = '100%';
          image.style.objectFit = 'contain';
  
          // 空白を追加して画像を中央に配置
          const horizontalMargin = (slideshowWidth - newWidth) / 2;
          const verticalMargin = (slideshowHeight - newHeight) / 2;
          image.style.marginLeft = `${horizontalMargin}px`;
          image.style.marginRight = `${horizontalMargin}px`;
          image.style.marginTop = `${verticalMargin}px`;
          image.style.marginBottom = `${verticalMargin}px`;
        }
      });
    });
  }
  
  // 使用例: スライドショー要素のIDを指定してプログラムを実行
  const slideshowElement = document.getElementById('slideshow');
  createSlideshow(slideshowElement);
  