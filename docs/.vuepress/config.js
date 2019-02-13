module.exports = {
  title: 'alanaudi',
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
            title: 'Generative Adversarial Network (GAN)',
            to: '/gan/',
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
