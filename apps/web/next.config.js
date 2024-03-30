/** @type {import('next').NextConfig} */

module.exports = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/homepage",
      },
      {
        source: "/dashboard",
        destination: "/dashboard/inbox",
      },
    ];
  },
};
