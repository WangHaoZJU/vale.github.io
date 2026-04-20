---
layout: home
---

<div class="hero">
  <h1>My Notes</h1>
  <p class="subtitle">Personal knowledge base</p>

  <div class="features">
    <div class="feature">
      <span class="icon">📝</span>
      <h3>Markdown</h3>
      <p>Simple and portable format</p>
    </div>
    <div class="feature">
      <span class="icon">🔍</span>
      <h3>Search</h3>
      <p>Full-text search across all notes</p>
    </div>
    <div class="feature">
      <span class="icon">🚀</span>
      <h3>Fast</h3>
      <p>Static site, instant load</p>
    </div>
  </div>
</div>

<style>
.hero {
  text-align: center;
  padding: 40px 0;
}

.hero h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 8px;
  background: linear-gradient(135deg, #b86e2d, #8c4a10);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  color: var(--vp-c-text-2);
  font-size: 1.2rem;
  margin-bottom: 48px;
}

.features {
  display: flex;
  justify-content: center;
  gap: 48px;
  flex-wrap: wrap;
}

.feature {
  text-align: center;
  max-width: 180px;
}

.feature .icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 12px;
}

.feature h3 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 4px;
  color: var(--vp-c-text-1);
}

.feature p {
  font-size: 0.875rem;
  color: var(--vp-c-text-3);
  margin: 0;
}
</style>