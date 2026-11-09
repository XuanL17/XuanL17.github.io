(() => {
  const counters = [...document.querySelectorAll('[data-post-views]')];
  if (!counters.length) return;
  const article = /\/blog\/(?:simulating-anything|reproducible-human-studies|implicit-agent-behavior)(?:-zh)?(?:\.html)?\/?$/.test(location.pathname);
  let started = false;
  async function load() {
    if (started || document.visibilityState === 'hidden') return;
    started = true;
    await Promise.all(counters.map(async counter => {
      try {
        const response = await fetch('/api/views/' + encodeURIComponent(counter.dataset.postViews), {
          method: article ? 'POST' : 'GET', credentials: 'same-origin', cache: 'no-store'
        });
        if (!response.ok) throw new Error('unavailable');
        const { views } = await response.json();
        if (!Number.isSafeInteger(views) || views < 0) throw new Error('invalid count');
        counter.querySelector('[data-view-number]').textContent = new Intl.NumberFormat(document.documentElement.lang).format(views);
        counter.classList.add('is-loaded');
        counter.title = document.documentElement.lang.startsWith('zh')
          ? '累计浏览次数；同一浏览器30分钟内不重复计数。'
          : 'Article views; repeat visits in the same browser within 30 minutes count once.';
      } catch {
        counter.querySelector('[data-view-number]').textContent = '—';
        counter.title = document.documentElement.lang.startsWith('zh') ? '浏览量暂时无法加载' : 'View count temporarily unavailable';
      }
    }));
  }
  load();
  document.addEventListener('visibilitychange', load);
})();
