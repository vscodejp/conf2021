import { FC } from 'react'
import { themeColors } from './constants'

const ColorThemeScript: FC = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: `
                (function() {
                    var preferDarkQuery = '(prefers-color-scheme: dark)';
                    var mql = window.matchMedia(preferDarkQuery);
                    var supportsColorSchemeQuery = mql.media === preferDarkQuery;
                    function getInitialColorMode() {
                        try {
                            var persistedColorPreference = localStorage.getItem('color-mode');
                            if (persistedColorPreference) {
                                return persistedColorPreference;
                            }
                        } catch (err) {}
                        if (supportsColorSchemeQuery) {
                            return mql.matches ? 'dark' : 'light';
                        }
                        return 'light';
                    }
                    function setThemeColors(mode) {
                        var root = document.documentElement;
                        root.style.setProperty('--initial-color-mode', mode);
                        root.style.setProperty(
                            '--color-text',
                            mode === 'light'
                                ? '${themeColors.light.textColor}'
                                : '${themeColors.dark.textColor}'
                        );
                        root.style.setProperty(
                            '--color-background',
                            mode === 'light'
                                ? '${themeColors.light.backgroundColor}'
                                : '${themeColors.dark.backgroundColor}'
                        );
                    }
                    var colorMode = getInitialColorMode();
                    setThemeColors(colorMode);
                    if (supportsColorSchemeQuery) {
                        mql.addListener(function (ev) {
                            setThemeColors(ev.matches ? 'dark' : 'light');
                        });
                    }
                })();
            `,
    }}
  />
)

export default ColorThemeScript
