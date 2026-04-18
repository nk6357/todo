const THEME_STORAGE_KEY = 'egeTheme';
const themes = {
  red: {
    name: 'Красный',
    bg: '#1a0a0a',
    surface: 'rgba(255, 255, 255, 0.05)',
    surfaceStrong: 'rgba(255, 255, 255, 0.1)',
    textPrimary: '#ffffff',
    textMuted: 'rgba(255, 255, 255, 0.5)',
    primary: '#ff4d4d',
    secondary: '#ff8080',
    tertiary: '#e63946',
    text: '#ff9a9a',
    textAlt: '#ffb3b3',
    soft: 'rgba(255, 100, 100, 0.1)',
    border: 'rgba(255, 100, 100, 0.25)',
    borderStrong: 'rgba(255, 100, 100, 0.5)',
    shadow: 'rgba(255, 77, 77, 0.25)',
    dot: '#ff4d4d',
    themeColor: '#1a0a0a'
  },
  blue: {
    name: 'Голубой',
    bg: '#071022',
    surface: 'rgba(255, 255, 255, 0.06)',
    surfaceStrong: 'rgba(255, 255, 255, 0.12)',
    textPrimary: '#f8fbff',
    textMuted: 'rgba(248, 251, 255, 0.55)',
    primary: '#4d8cff',
    secondary: '#80b3ff',
    tertiary: '#4da6ff',
    text: '#9abaff',
    textAlt: '#b3d1ff',
    soft: 'rgba(77, 140, 255, 0.12)',
    border: 'rgba(77, 140, 255, 0.25)',
    borderStrong: 'rgba(77, 140, 255, 0.5)',
    shadow: 'rgba(77, 140, 255, 0.22)',
    dot: '#4d8cff',
    themeColor: '#06122d'
  },
  green: {
    name: 'Зеленый',
    bg: '#091f14',
    surface: 'rgba(255, 255, 255, 0.06)',
    surfaceStrong: 'rgba(255, 255, 255, 0.12)',
    textPrimary: '#f5fff3',
    textMuted: 'rgba(245, 255, 243, 0.55)',
    primary: '#33c37d',
    secondary: '#7fe7b3',
    tertiary: '#2abf6e',
    text: '#93e0b9',
    textAlt: '#b8f4d2',
    soft: 'rgba(51, 195, 125, 0.12)',
    border: 'rgba(51, 195, 125, 0.25)',
    borderStrong: 'rgba(51, 195, 125, 0.5)',
    shadow: 'rgba(51, 195, 125, 0.25)',
    dot: '#33c37d',
    themeColor: '#061b14'
  },
  yellow: {
    name: 'Золотой',
    bg: '#3d3200',
    surface: 'rgba(255, 255, 255, 0.07)',
    surfaceStrong: 'rgba(255, 255, 255, 0.14)',
    textPrimary: '#fff9e6',
    textMuted: 'rgba(255, 249, 230, 0.6)',
    primary: '#d4a63e',
    secondary: '#e8c565',
    tertiary: '#c49132',
    text: '#f5d989',
    textAlt: '#fce5ad',
    soft: 'rgba(212, 166, 62, 0.12)',
    border: 'rgba(212, 166, 62, 0.25)',
    borderStrong: 'rgba(212, 166, 62, 0.5)',
    shadow: 'rgba(212, 166, 62, 0.25)',
    dot: '#d4a63e',
    themeColor: '#3d3200'
  },
  pink: {
    name: 'Малиновый',
    bg: '#3a0d2a',
    surface: 'rgba(255, 255, 255, 0.06)',
    surfaceStrong: 'rgba(255, 255, 255, 0.12)',
    textPrimary: '#ffe8f5',
    textMuted: 'rgba(255, 232, 245, 0.6)',
    primary: '#c4186a',
    secondary: '#e63f94',
    tertiary: '#b81d6f',
    text: '#f0a6d6',
    textAlt: '#ffb8e0',
    soft: 'rgba(196, 24, 106, 0.12)',
    border: 'rgba(196, 24, 106, 0.25)',
    borderStrong: 'rgba(196, 24, 106, 0.5)',
    shadow: 'rgba(196, 24, 106, 0.25)',
    dot: '#c4186a',
    themeColor: '#3a0d2a'
  },
  gray: {
    name: 'Серый',
    bg: '#101010',
    surface: 'rgba(255, 255, 255, 0.06)',
    surfaceStrong: 'rgba(255, 255, 255, 0.12)',
    textPrimary: '#f5f5f5',
    textMuted: 'rgba(245, 245, 245, 0.55)',
    primary: '#ababab',
    secondary: '#d5d5d5',
    tertiary: '#8c8c8c',
    text: '#d9d9d9',
    textAlt: '#f0f0f0',
    soft: 'rgba(171, 171, 171, 0.12)',
    border: 'rgba(171, 171, 171, 0.25)',
    borderStrong: 'rgba(171, 171, 171, 0.5)',
    shadow: 'rgba(171, 171, 171, 0.25)',
    dot: '#ababab',
    themeColor: '#101010'
  }
};

function applyTheme(themeKey) {
  const theme = themes[themeKey] || themes.red;
  const root = document.documentElement;

  root.style.setProperty('--page-bg', theme.bg);
  root.style.setProperty('--surface', theme.surface);
  root.style.setProperty('--surface-strong', theme.surfaceStrong);
  root.style.setProperty('--text-primary', theme.textPrimary);
  root.style.setProperty('--text-muted', theme.textMuted);
  root.style.setProperty('--accent-primary', theme.primary);
  root.style.setProperty('--accent-secondary', theme.secondary);
  root.style.setProperty('--accent-tertiary', theme.tertiary);
  root.style.setProperty('--accent-text', theme.text);
  root.style.setProperty('--accent-text-alt', theme.textAlt);
  root.style.setProperty('--accent-soft', theme.soft);
  root.style.setProperty('--accent-border', theme.border);
  root.style.setProperty('--accent-border-strong', theme.borderStrong);
  root.style.setProperty('--accent-shadow', theme.shadow);
  root.style.setProperty('--accent-dot', theme.dot);

  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) {
    metaTheme.setAttribute('content', theme.themeColor);
  }

  localStorage.setItem(THEME_STORAGE_KEY, themeKey);
  updateActiveSwatch(themeKey);
}

function updateActiveSwatch(themeKey) {
  document.querySelectorAll('[data-theme]').forEach(el => {
    el.classList.toggle('active', el.dataset.theme === themeKey);
  });
}

function initThemeControls() {
  const settingsBtn = document.getElementById('settingsBtn');
  const themePanel = document.getElementById('themePanel');

  if (themePanel && settingsBtn) {
    settingsBtn.addEventListener('click', () => {
      themePanel.classList.toggle('open');
    });

    document.addEventListener('click', event => {
      if (!themePanel.contains(event.target) && !settingsBtn.contains(event.target)) {
        themePanel.classList.remove('open');
      }
    });

    themePanel.querySelectorAll('[data-theme]').forEach(swatch => {
      swatch.addEventListener('click', () => {
        applyTheme(swatch.dataset.theme);
      });
    });
  }
}

function loadStoredTheme() {
  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY) || 'red';
  applyTheme(storedTheme);
}

document.addEventListener('DOMContentLoaded', () => {
  loadStoredTheme();
  initThemeControls();
});
