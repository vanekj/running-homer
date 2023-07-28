module.exports = {
  packagerConfig: {
    asar: false,
    icon: './images/icon'
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
      config: {
        icon: './images/icon.icns'
      },
    },
    {
      name: '@electron-forge/maker-dmg',
      config: {
        icon: './images/icon.icns'
      },
    }
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-vite',
      config: {
        build: [
          {
            entry: 'src/main.js',
            config: 'vite.main.config.mjs',
          },
        ],
        renderer: [
          {
            name: 'main_window',
            config: 'vite.renderer.config.mjs',
          },
        ],
      },
    },
  ],
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        draft: false,
        prerelease: false,
        repository: {
          owner: 'vanekj',
          name: 'running-homer'
        }
      }
    }
  ]
};
