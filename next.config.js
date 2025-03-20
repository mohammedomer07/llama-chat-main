module.exports = {
  reactStrictMode: true,
  env: {
    REPLICATE_API_TOKEN: process.env.REPLICATE_API_TOKEN,
  },
  experimental: {
    runtime: "nodejs", // Ensuring compatibility
  },
};
