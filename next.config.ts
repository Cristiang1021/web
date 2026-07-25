import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Evita que ngrok / móviles cacheen el JS viejo en desarrollo
  async headers() {
    if (process.env.NODE_ENV !== "development") return [];
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Cache-Control", value: "no-store, must-revalidate" },
          { key: "ngrok-skip-browser-warning", value: "true" },
        ],
      },
    ];
  },
};

export default nextConfig;
