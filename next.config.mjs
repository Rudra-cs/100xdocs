/** @type {import('next').NextConfig} */
const nextConfig = {};

import withNextra from "nextra";

const nextraConfig = {
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
};

export default withNextra(nextraConfig)(nextConfig);
