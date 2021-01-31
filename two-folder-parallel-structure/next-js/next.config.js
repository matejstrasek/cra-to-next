// next.config.js

module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*',
      },
      {
        source: '/:path*',
        destination: `http://localhost:3001/:path*`, // Rewrite non-migrated routes to Create React App
      },
    ];
  },
};
