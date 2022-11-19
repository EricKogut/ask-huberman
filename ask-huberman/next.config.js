
module.exports = {
  async rewrites() {
      return [
        {
          source: '/src/:path*',
          destination: 'http://localhost:8000/:path*',
        },
      ]
    },
};