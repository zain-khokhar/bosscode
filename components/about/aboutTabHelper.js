export function handleTabKeyDown(event, currentIndex, items, onSelect) {
  const count = items.length;
  if (count <= 1) return;

  let nextIndex = null;
  if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
    nextIndex = (currentIndex + 1) % count;
  } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
    nextIndex = (currentIndex - 1 + count) % count;
  } else if (event.key === 'Home') {
    nextIndex = 0;
  } else if (event.key === 'End') {
    nextIndex = count - 1;
  }

  if (nextIndex === null) return;
  event.preventDefault();
  onSelect(items[nextIndex], nextIndex);

  const tablist = event.currentTarget.closest('[role="tablist"]');
  const tabs = tablist?.querySelectorAll('[role="tab"]');
  tabs?.[nextIndex]?.focus();
}

