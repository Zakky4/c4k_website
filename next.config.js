/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     // domains: ['images.microcms-assets.io'],
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'images.microcms-assets.io',
//         port: '',
//         pathname: '/assets/xxxxxxxxxx/**',
//       },
//     ],
//   },
//   eslint: { // eslintのlint checkをbuild時にoff
//     ignoreDuringBuilds: true,
//   },
//   typescript: { // type checkをbuild時にoff
//     ignoreBuildErrors: true,
//   }
// }

module.exports = {
  output: 'export',
  images: {
    domains: ['images.microcms-assets.io'],
  },
  env: {
    MY_VARIABLE: process.env.MY_VARIABLE,
  },
};
