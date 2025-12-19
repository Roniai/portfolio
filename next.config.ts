import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withSvgr = require("next-svgr");

const nextConfig: NextConfig = {
  // Configuration beaucoup plus simple
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(withSvgr(nextConfig));
