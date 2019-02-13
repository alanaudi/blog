module.exports = {
  title: 'alanaudi',
  theme: 'api',
  port: 8090,
  themeConfig: {
    sidebar: {
      'Home': {
        title: 'Home',
        to : '/',
      },
      'Note': {
        children: [
          {
            title: 'Generative Adversarial Network',
            to: '/note/gan/',
          },
        ],
      },
      'Collection': {
        children: [
          {
            title: 'Github',
            to: '/collection/github/',
          },
          {
            title: 'Paper',
            to: '/collection/paper/',
          }
        ],
      },
    },
  },
}
