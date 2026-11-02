// Simple-Project website: small helpers, the pages also work without this file.

// Copy buttons for code blocks and checksums
function copyText(text, button) {
  navigator.clipboard.writeText(text).then(() => {
    const old = button.textContent;
    button.textContent = 'Copied';
    setTimeout(() => { button.textContent = old; }, 1500);
  }).catch(() => {});
}

document.querySelectorAll('pre').forEach(pre => {
  const block = document.createElement('div');
  block.className = 'codeblock';
  pre.replaceWith(block);
  block.append(pre);
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'copy';
  button.textContent = 'Copy';
  button.addEventListener('click', () => copyText(pre.innerText.trim(), button));
  block.append(button);
});

document.querySelectorAll('[data-copy]').forEach(button => {
  button.addEventListener('click', () => copyText(button.dataset.copy, button));
});

// Highlight the current section in the "On this page" list
const tocLinks = [...document.querySelectorAll('.toc a[href^="#"]')];
if (tocLinks.length && 'IntersectionObserver' in window) {
  const byId = new Map(tocLinks.map(a => [a.getAttribute('href').slice(1), a]));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      tocLinks.forEach(a => a.classList.remove('active'));
      byId.get(entry.target.id)?.classList.add('active');
    });
  }, { rootMargin: '0px 0px -75% 0px' });
  byId.forEach((a, id) => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });
}

// Long news lists: show the newest few and a button for the rest
document.querySelectorAll('.news[data-show]').forEach(list => {
  const hidden = [...list.querySelectorAll(':scope > article')].slice(Number(list.dataset.show));
  if (!hidden.length) return;
  hidden.forEach(article => article.classList.add('more'));
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'btn plain news-more';
  button.textContent = `Show all news (${hidden.length} more)`;
  button.addEventListener('click', () => {
    hidden.forEach(article => article.classList.remove('more'));
    button.remove();
    const heading = hidden[0].querySelector('h3');
    heading.tabIndex = -1;
    heading.focus();
  });
  list.after(button);
});
