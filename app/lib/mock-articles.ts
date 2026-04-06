export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string }
  | { type: "code"; code: string };

  export type ArticleVersion = {
  updatedAt: string;
  updatedBy: string;
};

export type Article = {
  slug: string;
  title: string;
  author: string;
  category: string;
  tags: string[];          
  publishDate: string;
  heroImage: string;
  content: ArticleBlock[];
  published: boolean;      
  trending?: boolean;      
  versions?: ArticleVersion[]; 
};

export const articles: Article[] = [
  // {
  //   slug: "cybersecurity-in-2026",
  //   title: "Cybersecurity in 2026",
  //   author: "Akeem",
  //   category: "Security",
  //   tags: ["Cybersecurity", "AI", "Trends"],
  //   published: true,
  //   trending: true,
  //   versions: [
  //     { updatedAt: "Dec 10, 2025", updatedBy: "Akeem" },
  //     { updatedAt: "Dec 20, 2025", updatedBy: "Editor Team" }
  //   ],
  //   publishDate: "Jan 1, 2026",
  //   heroImage: "/images/article1.jpg",
  //   content: [
  //     { type: "paragraph", text: "Cybersecurity is evolving rapidly as threats become more sophisticated." },
  //     { type: "heading", text: "Why This Matters" },
  //     { type: "quote", text: "Security is no longer optional." },
  //     { type: "code", code: "npm install secure-app" }
  //   ]
  // },
  {
    slug: "future-of-tech",
    title: "The Future of Technology",
    author: "Jane Doe",
    category: "Technology",
    tags: ["Technology", "AI", "Trends"],
    published: true,
    trending: true,
    versions: [
      { updatedAt: "Dec 10, 2025", updatedBy: "Akeem" },
      { updatedAt: "Dec 20, 2025", updatedBy: "Editor Team" }
    ],
    publishDate: "Dec 20, 2025",
    heroImage: "/images/article2.jpg",
    content: [
      { type: "paragraph", text: "Technology continues to reshape industries worldwide." },
      { type: "heading", text: "Key Trends" },
      { type: "paragraph", text: "AI, automation, and cloud computing are leading the way." }
    ]
  },
  // {
  //   slug: "remote-work-guide",
  //   title: "A Practical Guide to Remote Work",
  //   author: "John Smith",
  //   category: "Work",
  //    tags: ["Remote working", "AI", "Trends"],
  //   published: true,
  //   trending: true,
  //   versions: [
  //     { updatedAt: "Dec 10, 2025", updatedBy: "Akeem" },
  //     { updatedAt: "Dec 20, 2025", updatedBy: "Editor Team" }
  //   ],
  //   publishDate: "Dec 10, 2025",
  //   heroImage: "/images/article3.avif",
  //   content: [
  //     { type: "paragraph", text: "Remote work is here to stay." },
  //     { type: "quote", text: "Flexibility boosts productivity." }
  //   ]
  // },
  {
    slug: "design-systems-explained",
    title: "Design Systems Explained",
    author: "Mary Johnson",
    category: "Design",
     tags: ["Designs", "AI", "Trends"],
    published: true,
    trending: true,
    versions: [
      { updatedAt: "Dec 10, 2025", updatedBy: "Akeem" },
      { updatedAt: "Dec 20, 2025", updatedBy: "Editor Team" }
    ],
    publishDate: "Nov 28, 2025",
    heroImage: "/images/article4.avif",
    content: [
      { type: "paragraph", text: "Design systems help teams scale UI efficiently." }
    ]
  },
  // {
  //   slug: "building-scalable-apps",
  //   title: "Building Scalable Applications",
  //   author: "Chris Lee",
  //   category: "Engineering",
  //    tags: ["Engineering Technology", "AI", "Trends"],
  //   published: true,
  //   trending: true,
  //   versions: [
  //     { updatedAt: "Dec 10, 2025", updatedBy: "Akeem" },
  //     { updatedAt: "Dec 20, 2025", updatedBy: "Editor Team" }
  //   ],
  //   publishDate: "Nov 15, 2025",
  //   heroImage: "/images/article5.jpg",
  //   content: [
  //     { type: "paragraph", text: "Scalability starts with good architecture." },
  //     { type: "code", code: "docker compose up -d" }
  //   ]
  // },
  {
    slug: "product-thinking",
    title: "Product Thinking for Developers",
    author: "Sarah Brown",
     tags: ["Product Technology", "AI", "Trends"],
    published: true,
    trending: true,
    versions: [
      { updatedAt: "Dec 10, 2025", updatedBy: "Akeem" },
      { updatedAt: "Dec 20, 2025", updatedBy: "Editor Team" }
    ],
    category: "Product",
    publishDate: "Nov 1, 2025",
    heroImage: "/images/article6.jpg",
    content: [
      { type: "paragraph", text: "Great products start with understanding users." }
    ]
  }
];
