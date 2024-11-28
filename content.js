function hideComments() {
  const comments = document.getElementById('comments');
  if (comments) {
    comments.style.display = 'none';
  }
}

// YouTubeは動的にコンテンツを読み込むため、
// MutationObserverを使用して要素の変更を監視します
const observer = new MutationObserver((mutations) => {
  hideComments();
});

// ページ全体の変更を監視
observer.observe(document.body, {
  childList: true,
  subtree: true
});

// 初回実行
hideComments();
