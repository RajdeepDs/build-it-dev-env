/** @type {import('next').NextConfig} */

module.exports = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/homepage",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        hostname: "avatars.githubusercontent.com",
      },
      {
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};
