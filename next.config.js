module.exports = {
  images: {
    domains: ['images.ctfassets.net','i.stack.imgur.com','genius100visions.com'],
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin:',
            value: 'https://paisajecentinela.org',
          }
        ],
      },
    ]
  },
  
}