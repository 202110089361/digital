const createNextIntlPlugin = require('next-intl/plugin');


const withNextIntl = createNextIntlPlugin(
  // Specify a custom path here
  './i18n.ts',
  './middleware.ts'
);


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img2.baidu.com', 'img0.baidu.com', 'img0.baidu.com', 'img1.baidu.com', 'img0.baidu.com', 'img2.baidu.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ecommerce-saas-test.oss-cn-hongkong.aliyuncs.com',
        port: '',
        pathname: '/taskOssUploads/**',
        // protocol: 'https',
        // hostname: 'lh3.googleusercontent.com',
        // protocol: 'https',
        // hostname: 'avatar.githubusercontent.com',
      },
    ],
  },
}
module.exports = withNextIntl(nextConfig);
