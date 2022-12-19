/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    disableStaticImages: true,
    domains: [
      'kg-static-cache.s3.amazonaws.com',
      'kg-static.s3-eu-west-1.amazonaws.com',
      'kg-static.s3.eu-west-1.amazonaws.com',
      'kg-static.s3.amazonaws.com',
      'd1d3cj5cisvurg.cloudfront.net', // Live
      'dpj87ld30srp7.cloudfront.net', // UAT
    ],
    deviceSizes: [640, 750, 900, 1080, 1200, 1440, 1920, 2560],
    imageSizes: [8, 16, 32, 48, 64, 96, 128, 192, 256, 320, 384, 448, 512],
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
