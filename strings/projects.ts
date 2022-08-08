import { Project } from "./../composables/interfaces";

export default {
  emoji: "🛠",
  title: "Things i've worked on",
  projects: <Project[]>[
    {
      title: "Alice Music Player 🎵",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quas consectetur amet harum sed accusamus tempore nisi! Autem quisquam mollitia consectetur quis, officiis eaque quia. Sapiente laboriosam hic officia dolorum!Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "https://picsum.photos/id/2/400/300",
      tags: ["typescript", "python", "flask", "vue3", "axios", "🍍pinia"],
      links: {
        github: "https://github.com/geoffrey45/alice",
        site: "https://alicemusic.com",
      },
    },
  ],
};
