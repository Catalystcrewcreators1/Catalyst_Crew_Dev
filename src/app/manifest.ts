import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Catalyst Crew — Premier Developer Community",
    short_name: "Catalyst Crew",
    description: "Learn • Build • Collaborate • Innovate. A premier developer community for builders and innovators.",
    start_url: "/",
    display: "standalone",
    background_color: "#08090E",
    theme_color: "#FF3366",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
