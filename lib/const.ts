import { BlogPost } from '@/model';

// Types
export interface ExperienceItem {
  id: number;
  date: string;
  subjects: string;
  title: string;
  description: string;
}

export interface AwardItem {
  id: number;
  photo: string;
  title: string;
  description: string;
  skill: string;
  year: string;
}

export interface SkillItem {
  id: number;
  logo: string;
  name: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  imgBg: string;
  linkPort: string;
  linkGithub: string;
}

export const allDataWords = {
  titlesOne: 'About Me',
  titlesSecond: 'Awards',
  titlesThird: 'Skills',
  titleFour: 'Experiences',
  titleFive: 'Projects',
  titleSeven: 'Blogs',
  titleSix: 'Contact Me',
  descTitleThird: `These are the technologies I've worked with`,
  descTitleFive: `Check out some of my recent work`,
  myAddress: `Jl. Bendungan Melayu DKI Jakarta, Indonesia Jakarta Utara 14230`,
  fullName: 'Ahmad Nurdiansah',
  titleJob: 'Front End Developer',
  urlGithub: 'https://github.com/nordeeen/',
  urlLinkedin: 'https://www.linkedin.com/in/ahmadnurdiansah/',
  myEmail: 'ahmadnrdnsah@gmail.com',
  urlCertificate:
    'https://drive.google.com/drive/folders/1u2haQlTu7XO7Z456m_5RSId7jcK_itxg',
  urlResume:
    'https://drive.google.com/uc?export=download&id=1RISmeiIrVTiBn_PzP7fDefNPKpWOFUQ1',
  descHome:
    'A Frontend Developer passionate about creating interactive applications and experiences on the web.',
  aboutMe: `
     👋 I'm Ahmad Nurdiansah. I'm a Frontend Developer with hands-on
     and thorough experience in JavaScript frameworks like ReactJS, 
     and understanding important concepts like Fetching API, State 
     Management, RestfulAPI, etc.
`,
};

export const datasListExp: ExperienceItem[] = [
  {
    id: 1,
    date: 'April 2024 - Present',
    subjects:
      'React.js, Next.js, Typescript, Tailwind CSS, Zustand, Tanstack Query',
    title: 'Front-End Developer at PT Kreasindo Karya Abadi',
    description: `Writing and testing program code, Debugging and fixing errors in code and Collaborated with design & 
      Collaborated with design and back-end teams to implement user interfaces and integrate front-end code with back-end systems.`,
  },
  {
    id: 2,
    date: 'January 2024 - April 2024',
    subjects: 'React.js, Javascript, Chakra UI, Redux Toolkit',
    title: 'Front-End Developer at Feedloop',
    description: `Writing and testing program code, Debugging and fixing errors in code and Collaborated with design & 
      Collaborated with design and back-end teams to implement user interfaces and integrate front-end code with back-end systems.`,
  },
  {
    id: 3,
    date: ' March 2022 - March 2022',
    subjects: 'Javascript Basics, Javascript (ES6)',
    title:
      'Coding Instructor on the event 21-Days Bootcamp Javascript ( Progate & Dewaweb).',
    description:
      'Answer questions from participants, Review source code participants, help participants fix errors/bugs and Review projects from participants.',
  },
  {
    id: 4,
    date: 'October 2020 - November 2020',
    subjects: 'HTML, CSS, Scss, Javascript',
    title:
      'Coding Instructor on the event Program Ready Set Code! (Progate & Kominfo).',
    description:
      'Answer questions from participants, Review source code participants, help participants fix errors/bugs and Review projects from participants.',
  },
];

export const datasListAwards: AwardItem[] = [
  {
    id: 1,
    photo: '/assets/progate-logo.png',
    title: 'Progate & DTS',
    description: 'Mentor Coding Experience Bootcamp',
    skill: 'HTML, CSS & Javascript',
    year: 'October 2020',
  },
  {
    id: 2,
    photo: '/assets/progate-logo.png',
    title: 'Progate',
    description: 'Frontend Web Development',
    skill: 'HTML, CSS, JS & React JS',
    year: 'August 2020',
  },
  {
    id: 3,
    photo: '/assets/udemy-logo.png',
    title: 'Udemy',
    description: ' React JS Complete Bootcamp',
    skill: 'Hooks, API, Router, Redux',
    year: 'May 2022',
  },
  {
    id: 4,
    photo: '/assets/progate-logo.png',
    title: 'Progate & Dewaweb',
    description: 'Instructor Coding',
    skill: 'Javascript',
    year: 'March 2022',
  },
];

export const datasListSkills: SkillItem[] = [
  { id: 1, logo: '/assets/html.png', name: 'html' },
  { id: 2, logo: '/assets/css.png', name: 'css' },
  { id: 3, logo: '/assets/javascript.png', name: 'javascript' },
  { id: 4, logo: '/assets/react.png', name: 'react' },
  { id: 5, logo: '/assets/next-logo-second.png', name: 'next' },
  { id: 6, logo: '/assets/tanstack-logo.png', name: 'tanstack query' },
  { id: 7, logo: '/assets/wp-zustand-logo.png', name: 'zustand' },
  { id: 8, logo: '/assets/chakra-ui-logo.png', name: 'chakra ui' },
  { id: 9, logo: '/assets/typescript.png', name: 'typescript' },
  { id: 10, logo: '/assets/tailwind.png', name: 'tailwindcss' },
  { id: 11, logo: '/assets/redux.png', name: 'redux' },
  { id: 12, logo: '/assets/git.png', name: 'git' },
];

export const datasListProjects: ProjectItem[] = [
  {
    id: 1,
    title: 'OrderMeals',
    imgBg: '/assets/food-order.png',
    linkPort: 'https://food-order-lake.vercel.app/',
    linkGithub: 'https://github.com/nordeeen/Food-Order-App',
  },
  {
    id: 2,
    title: 'Natours Travel',
    imgBg: '/assets/natours-travel.png',
    linkPort: 'https://natours-travel-landing-page.netlify.app/',
    linkGithub: 'https://github.com/nordeeen/Landing-Page-Travel-Natours',
  },
  {
    id: 3,
    title: 'EPL Football Web',
    imgBg: '/assets/epl-web.png',
    linkPort: 'https://gibol.netlify.app/',
    linkGithub: 'https://github.com/nordeeen/Gibol-web-app',
  },
  {
    id: 4,
    title: 'Landing Page LaslesVPN',
    imgBg: '/assets/lp-laslesvpn.png',
    linkPort: 'https://landingpage-lasles-vpn.vercel.app/',
    linkGithub: 'https://github.com/nordeeen/Landingpage-LaslesVPN',
  },
  {
    id: 5,
    title: 'Users Login Page',
    imgBg: '/assets/users-login.png',
    linkPort: 'https://users-login-web.vercel.app/',
    linkGithub: 'https://github.com/nordeeen/Users-login-web',
  },
  {
    id: 6,
    title: 'Yuk Travel Web',
    imgBg: '/assets/yuktravel.png',
    linkPort: 'https://web-travel-gules.vercel.app/',
    linkGithub: 'https://github.com/nordeeen/Web-Travel',
  },
];

export const datasListBlogs: BlogPost[] = [
  {
    slug: 'react-server-components',
    title: 'React Server Components: Era Baru Rendering di Web Modern',
    excerpt:
      'React Server Components (RSC) adalah perubahan paradigma terbesar dalam ekosistem React sejak diperkenalkannya Hooks. Fitur ini mengubah cara kita berpikir tentang di mana kode JavaScript dieksekusi.',
    category: 'React / Next.js',
    categoryColor: 'blue',
    readTime: '8 menit baca',
    date: '2025-02-01',
    sections: [
      {
        type: 'h2',
        content: 'Apa Itu React Server Components?',
      },
      {
        type: 'p',
        content:
          'Secara sederhana, React Server Components adalah komponen React yang dirender sepenuhnya di server dan tidak pernah dikirim ke browser sebagai JavaScript. Hasilnya dikirim sebagai stream HTML/JSON yang sudah jadi.',
      },
      {
        type: 'p',
        content:
          'Ini berbeda fundamental dengan rendering tradisional. Sebelumnya, meskipun kita menggunakan SSR (Server-Side Rendering), JavaScript komponen tetap dikirim ke browser untuk proses hydration. Dengan RSC, komponen server tidak perlu di-hydrate sama sekali.',
      },
      {
        type: 'comparison',
        items: [
          {
            label: 'Pendekatan Lama (SSR Biasa)',
            variant: 'old',
            points: [
              'HTML dirender di server',
              'JS bundle dikirim ke browser',
              'Hydration dilakukan di client',
              'Bundle size lebih besar',
            ],
          },
          {
            label: 'React Server Components',
            variant: 'new',
            points: [
              'Komponen dirender di server',
              'JS tidak dikirim ke browser',
              'Tidak ada hydration',
              'Bundle size jauh lebih kecil',
            ],
          },
        ],
      },
      {
        type: 'h2',
        content: 'Cara Kerja di Next.js App Router',
      },
      {
        type: 'p',
        content:
          'Next.js 13+ dengan App Router mengadopsi RSC sebagai default. Semua komponen dalam direktori app/ adalah Server Components secara default. Kamu hanya perlu menambahkan directive "use client" jika ingin komponen berjalan di browser.',
      },
      {
        type: 'code',
        label: 'Server Component (default)',
        language: 'tsx',
        content:
          "// app/blog/page.tsx — Ini adalah Server Component\nasync function BlogPage() {\n  const posts = await fetch('https://api.example.com/posts', {\n    next: { revalidate: 3600 }\n  }).then(r => r.json());\n\n  return (\n    <main>\n      <h1>Blog Posts</h1>\n      {posts.map(post => (\n        <article key={post.id}>\n          <h2>{post.title}</h2>\n          <p>{post.excerpt}</p>\n        </article>\n      ))}\n    </main>\n  );\n}\n\nexport default BlogPage;",
      },
      {
        type: 'code',
        label: 'Client Component',
        language: 'tsx',
        content:
          '// components/LikeButton.tsx\n"use client";\n\nimport { useState } from "react";\n\nexport function LikeButton({ postId }: { postId: string }) {\n  const [liked, setLiked] = useState(false);\n\n  return (\n    <button\n      onClick={() => setLiked(!liked)}\n      className={liked ? "text-red-500" : "text-gray-400"}\n    >\n      {liked ? "❤️ Disukai" : "🤍 Suka"}\n    </button>\n  );\n}',
      },
      {
        type: 'h2',
        content: 'Kapan Harus Pakai Server vs Client?',
      },
      {
        type: 'h3',
        content: 'Gunakan Server Components untuk:',
      },
      {
        type: 'p',
        content:
          'Fetch data dari database atau API, akses resources backend secara langsung (file system, env variables), komponen yang tidak perlu interaktivitas browser, dan mengurangi ukuran JavaScript yang dikirim ke client.',
      },
      {
        type: 'h3',
        content: 'Gunakan Client Components untuk:',
      },
      {
        type: 'p',
        content:
          'Event listeners (onClick, onChange), React Hooks (useState, useEffect), Browser APIs (localStorage, geolocation), komponen berbasis animasi atau interaksi real-time.',
      },
      {
        type: 'callout',
        content:
          '💡 Pro Tip: Strategi terbaik adalah "push client components to the leaves". Buat sebanyak mungkin komponen sebagai Server Components, dan isolasikan bagian interaktif ke komponen kecil yang diberi "use client".',
      },
      {
        type: 'h2',
        content: 'Streaming dengan Suspense',
      },
      {
        type: 'p',
        content:
          'RSC bekerja sangat baik dengan React Suspense untuk streaming UI. Kamu bisa menampilkan bagian halaman yang sudah siap sementara bagian lain masih loading.',
      },
      {
        type: 'code',
        label: 'Streaming UI Pattern',
        language: 'tsx',
        content:
          'import { Suspense } from "react";\n\nexport default function Page() {\n  return (\n    <div>\n      {/* Ini langsung tampil */}\n      <StaticHeader />\n\n      {/* Ini streaming — tampil saat data siap */}\n      <Suspense fallback={<PostsSkeleton />}>\n        <SlowPostsList />\n      </Suspense>\n\n      <Suspense fallback={<CommentsSkeleton />}>\n        <Comments />\n      </Suspense>\n    </div>\n  );\n}',
      },
    ],
  },
  {
    slug: 'typescript-advanced-patterns',
    title: 'TypeScript Advanced Patterns yang Wajib Dikuasai',
    excerpt:
      'TypeScript bukan sekadar JavaScript dengan type annotation. Ada sejumlah pola lanjutan yang — ketika dikuasai — akan mengubah cara kamu menulis kode secara fundamental.',
    category: 'JavaScript / TypeScript',
    categoryColor: 'blue-ts',
    readTime: '10 menit baca',
    date: '2025-02-05',
    sections: [
      {
        type: 'h2',
        content: '1. Conditional Types',
      },
      {
        type: 'p',
        content:
          'Conditional types memungkinkan kamu membuat tipe yang bergantung pada kondisi tipe lain. Sintaksnya mirip ternary operator dan sangat powerful untuk utility types.',
      },
      {
        type: 'code',
        label: 'Conditional Types',
        language: 'ts',
        content:
          'type IsString<T> = T extends string ? "ya, string" : "bukan string";\n\ntype A = IsString<string>;  // "ya, string"\ntype B = IsString<number>;  // "bukan string"\n\n// Ekstrak tipe dari Promise\ntype Awaited<T> = T extends Promise<infer U> ? U : T;\n\nasync function fetchUser() {\n  return { id: 1, name: "Budi" };\n}\ntype UserType = Awaited<ReturnType<typeof fetchUser>>;\n// { id: number; name: string }',
      },
      {
        type: 'h2',
        content: '2. Template Literal Types',
      },
      {
        type: 'p',
        content:
          'TypeScript 4.1+ mendukung template literal types — kombinasi string literal yang sangat powerful untuk mendefinisikan string patterns secara type-safe.',
      },
      {
        type: 'code',
        label: 'Template Literal Types',
        language: 'ts',
        content:
          'type Direction = "top" | "right" | "bottom" | "left";\ntype Margin = `margin-${Direction}`;\n// "margin-top" | "margin-right" | "margin-bottom" | "margin-left"\n\ntype EventName = "click" | "focus" | "blur";\ntype HandlerName = `on${Capitalize<EventName>}`;\n// "onClick" | "onFocus" | "onBlur"',
      },
      {
        type: 'h2',
        content: '3. Discriminated Unions untuk State Management',
      },
      {
        type: 'p',
        content:
          'Pola ini sangat berguna untuk mengelola state yang memiliki bentuk berbeda-beda, misalnya state API call yang bisa idle, loading, success, atau error.',
      },
      {
        type: 'code',
        label: 'Async State Pattern',
        language: 'tsx',
        content:
          'type AsyncState<T> =\n  | { status: "idle" }\n  | { status: "loading" }\n  | { status: "success"; data: T }\n  | { status: "error"; error: Error };\n\nfunction DataDisplay({ state }: { state: AsyncState<User[]> }) {\n  switch (state.status) {\n    case "idle":    return <p>Belum ada data</p>;\n    case "loading": return <Spinner />;\n    case "success": return <UserList users={state.data} />;\n    case "error":   return <ErrorMessage msg={state.error.message} />;\n  }\n}',
      },
      {
        type: 'h2',
        content: '4. Satisfies Operator (TS 4.9+)',
      },
      {
        type: 'p',
        content:
          'Operator satisfies memungkinkan kamu memvalidasi tipe tanpa kehilangan informasi tipe yang lebih spesifik. Ini salah satu fitur paling berguna di TypeScript modern.',
      },
      {
        type: 'code',
        label: 'Satisfies vs Type Annotation',
        language: 'ts',
        content:
          'type Color = string | RGB;\ntype RGB = [number, number, number];\n\n// ❌ Dengan annotation biasa — kehilangan info spesifik\nconst palette: Record<string, Color> = {\n  red: [255, 0, 0],\n  green: "#00ff00",\n};\npalette.red.toUpperCase(); // Error: Color mungkin bukan string\n\n// ✅ Dengan satisfies — tipe spesifik dipertahankan!\nconst palette2 = {\n  red: [255, 0, 0],\n  green: "#00ff00",\n} satisfies Record<string, Color>;\n\npalette2.red[0];          // ✅ TypeScript tahu ini array\npalette2.green.toUpperCase(); // ✅ TypeScript tahu ini string',
      },
      {
        type: 'callout',
        content:
          '💡 Kapan menggunakan pola ini? Advanced TypeScript patterns paling berguna saat membangun library, shared utilities, atau design systems. Jangan over-engineer tipe kamu kalau tidak memberikan value nyata.',
      },
    ],
  },
  {
    slug: 'tailwind-mastery',
    title: 'Tailwind CSS Mastery: Teknik Beyond the Basics',
    excerpt:
      'Banyak developer hanya menggunakan 20% kemampuan Tailwind. Artikel ini membahas fitur-fitur tersembunyi dan pola arsitektur yang akan membuat kode CSS kamu jauh lebih efisien dan maintainable.',
    category: 'CSS Modern',
    categoryColor: 'pink',
    readTime: '9 menit baca',
    date: '2025-02-08',
    sections: [
      {
        type: 'h2',
        content: '1. Arbitrary Values & Properties',
      },
      {
        type: 'p',
        content:
          'Tailwind mendukung nilai arbitrary menggunakan notasi kurung kotak. Ini sangat berguna saat kamu butuh nilai yang tidak ada di design system standar Tailwind.',
      },
      {
        type: 'code',
        label: 'Arbitrary Values',
        language: 'html',
        content:
          '<!-- Ukuran spesifik yang tidak ada di config default -->\n<div class="w-[327px] h-[52px]"></div>\n\n<!-- Warna hex atau rgb langsung -->\n<div class="bg-[#1a2b3c] text-[rgb(255,100,50)]"></div>\n\n<!-- CSS custom properties -->\n<div class="bg-[var(--brand-color)]"></div>\n\n<!-- CSS arbitrary property -->\n<div class="[writing-mode:vertical-lr]">\n  Teks Vertikal\n</div>',
      },
      {
        type: 'h2',
        content: '2. Variant Management dengan cva',
      },
      {
        type: 'p',
        content:
          'Library class-variance-authority (cva) adalah solusi terbaik untuk mengelola class kondisional di Tailwind. Sangat cocok untuk membangun design system yang scalable.',
      },
      {
        type: 'code',
        label: 'Button dengan cva',
        language: 'tsx',
        content:
          'import { cva, type VariantProps } from "class-variance-authority";\nimport { clsx } from "clsx";\n\nconst buttonVariants = cva(\n  "inline-flex items-center justify-center rounded-lg font-medium transition-all",\n  {\n    variants: {\n      variant: {\n        primary:   "bg-sky-500 text-white hover:bg-sky-600",\n        secondary: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200",\n        ghost:     "text-zinc-600 hover:bg-zinc-100",\n        danger:    "bg-red-500 text-white hover:bg-red-600",\n      },\n      size: {\n        sm: "h-8 px-3 text-sm",\n        md: "h-10 px-4 text-sm",\n        lg: "h-12 px-6 text-base",\n      },\n    },\n    defaultVariants: { variant: "primary", size: "md" },\n  }\n);',
      },
      {
        type: 'h2',
        content: '3. Jangan Buat Class Dinamis!',
      },
      {
        type: 'callout',
        content:
          '⚠️ Tailwind scanner hanya mendeteksi string yang lengkap. Jika kamu menulis bg-${color}-500, kelas tersebut tidak akan di-include dalam build production.',
      },
      {
        type: 'code',
        label: 'Cara yang Benar',
        language: 'tsx',
        content:
          '// ❌ TIDAK bekerja di production\nconst color = "red";\n<div className={`bg-${color}-500`}></div>\n\n// ✅ Gunakan object mapping\nconst colorMap = {\n  red:   "bg-red-500",\n  blue:  "bg-blue-500",\n  green: "bg-green-500",\n};\n<div className={colorMap[color]}></div>',
      },
    ],
  },
  {
    slug: 'web-performance-optimization',
    title: 'Web Performance: Dari Skor 40 ke 100 di Lighthouse',
    excerpt:
      'Performa web bukan sekadar angka di Lighthouse. Ini tentang pengalaman pengguna nyata — seberapa cepat halaman terasa responsif dan siap digunakan.',
    category: 'Performance & Optimization',
    categoryColor: 'green',
    readTime: '11 menit baca',
    date: '2025-02-11',
    sections: [
      {
        type: 'h2',
        content: 'Metrik Core Web Vitals yang Penting',
      },
      {
        type: 'p',
        content:
          'Google menggunakan Core Web Vitals sebagai faktor ranking. Tiga metrik utama: LCP (Largest Contentful Paint) target < 2.5s, FID (First Input Delay) target < 100ms, dan CLS (Cumulative Layout Shift) target < 0.1.',
      },
      {
        type: 'h2',
        content: '1. Image Optimization',
      },
      {
        type: 'p',
        content:
          'Gambar yang tidak dioptimasi adalah penyebab paling umum skor Lighthouse rendah. Selalu gunakan next/image dengan konfigurasi yang tepat.',
      },
      {
        type: 'code',
        label: 'Next.js Image Component',
        language: 'tsx',
        content:
          'import Image from "next/image";\n\nexport function Hero() {\n  return (\n    <Image\n      src="/hero.jpg"\n      alt="Hero image"\n      width={1200}\n      height={630}\n      priority           // LCP image: load segera\n      placeholder="blur" // Blur placeholder saat loading\n      sizes="(max-width: 768px) 100vw, 1200px"\n    />\n  );\n}',
      },
      {
        type: 'h2',
        content: '2. Code Splitting & Dynamic Import',
      },
      {
        type: 'p',
        content:
          'Jangan kirim JavaScript yang tidak dibutuhkan saat halaman pertama load. Gunakan dynamic import untuk komponen berat seperti chart library, rich text editor, dll.',
      },
      {
        type: 'code',
        label: 'Dynamic Import',
        language: 'tsx',
        content:
          'import dynamic from "next/dynamic";\n\nconst ChartComponent = dynamic(\n  () => import("./HeavyChart"),\n  {\n    loading: () => <div className="animate-pulse h-64 bg-gray-100 rounded" />,\n    ssr: false,\n  }\n);',
      },
      {
        type: 'h2',
        content: '3. Font Loading yang Optimal',
      },
      {
        type: 'code',
        label: 'Next.js Font Optimization',
        language: 'tsx',
        content:
          '// app/layout.tsx\nimport { Inter } from "next/font/google";\n\nconst inter = Inter({\n  subsets: ["latin"],\n  variable: "--font-inter",\n  display: "swap",\n});\n\nexport default function RootLayout({ children }) {\n  return (\n    <html className={inter.variable}>\n      <body>{children}</body>\n    </html>\n  );\n}',
      },
      {
        type: 'callout',
        content:
          '📊 Ukur sebelum optimize! Selalu gunakan Chrome DevTools Performance tab dan Lighthouse sebelum dan sesudah perubahan. Optimasi tanpa pengukuran adalah tebak-tebakan.',
      },
    ],
  },
  {
    slug: 'css-grid-container-queries',
    title: 'CSS Grid Modern & Container Queries',
    excerpt:
      'CSS Grid telah mengubah cara kita membangun layout web. Dikombinasikan dengan Container Queries, kita punya toolkit layout yang belum pernah sekuat ini.',
    category: 'CSS Modern',
    categoryColor: 'pink',
    readTime: '9 menit baca',
    date: '2025-02-14',
    sections: [
      {
        type: 'h2',
        content: 'grid-template-areas — Layout Visual',
      },
      {
        type: 'p',
        content:
          'Salah satu fitur terbaik CSS Grid adalah kemampuan mendefinisikan layout secara visual menggunakan named areas. Ini cara paling intuitif untuk membuat layout kompleks seperti Holy Grail.',
      },
      {
        type: 'code',
        label: 'Holy Grail Layout',
        language: 'css',
        content:
          '.layout {\n  display: grid;\n  grid-template-areas:\n    "header header header"\n    "nav    main   aside"\n    "footer footer footer";\n  grid-template-columns: 200px 1fr 160px;\n  grid-template-rows: auto 1fr auto;\n  min-height: 100vh;\n  gap: 1rem;\n}\n\n.header { grid-area: header; }\n.nav    { grid-area: nav;    }\n.main   { grid-area: main;   }\n.aside  { grid-area: aside;  }\n.footer { grid-area: footer; }\n\n/* Responsive di mobile */\n@media (max-width: 768px) {\n  .layout {\n    grid-template-areas:\n      "header"\n      "nav"\n      "main"\n      "aside"\n      "footer";\n    grid-template-columns: 1fr;\n  }\n}',
      },
      {
        type: 'h2',
        content: 'Grid Adaptif dengan auto-fill',
      },
      {
        type: 'code',
        label: 'Auto-fill Grid',
        language: 'css',
        content:
          '.card-grid {\n  display: grid;\n  /* Otomatis isi kolom sebanyak mungkin, minimal 280px */\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 1.5rem;\n}',
      },
      {
        type: 'h2',
        content: 'Container Queries — Game Changer',
      },
      {
        type: 'p',
        content:
          'Container Queries memungkinkan komponen merespons ukuran container-nya, bukan ukuran viewport. Ini revolusioner untuk component-driven development dan sudah aman dipakai di production.',
      },
      {
        type: 'code',
        label: 'Container Queries',
        language: 'css',
        content:
          '/* 1. Definisikan container */\n.card-wrapper {\n  container-type: inline-size;\n  container-name: card;\n}\n\n/* 2. Style berdasarkan ukuran CONTAINER, bukan viewport */\n.card { flex-direction: column; }\n\n@container card (min-width: 400px) {\n  .card {\n    flex-direction: row;\n  }\n  .card-image {\n    width: 120px;\n    flex-shrink: 0;\n  }\n}',
      },
      {
        type: 'callout',
        content:
          '🎯 Saran praktis: Mulai dengan Container Queries untuk semua komponen baru. Buat komponen yang tidak tahu di mana dia akan ditempatkan, dan biarkan CSS yang mengurus layoutnya.',
      },
    ],
  },
  {
    slug: 'nextjs-app-architecture',
    title: 'Next.js App Architecture: Pola yang Scalable',
    excerpt:
      'Membangun aplikasi Next.js yang bisa tumbuh besar membutuhkan lebih dari sekadar fitur yang bekerja. Kamu butuh arsitektur yang solid dari awal.',
    category: 'React / Next.js',
    categoryColor: 'blue',
    readTime: '12 menit baca',
    date: '2025-02-17',
    sections: [
      {
        type: 'h2',
        content: 'Struktur Folder yang Scalable',
      },
      {
        type: 'p',
        content:
          'Struktur folder yang baik adalah fondasi dari codebase yang maintainable. Pisahkan berdasarkan concern: app/ untuk routing, components/ untuk UI, lib/ untuk utilities, dan services/ untuk business logic.',
      },
      {
        type: 'code',
        label: 'Folder Structure',
        language: 'bash',
        content:
          'src/\n├── app/\n│   ├── (auth)/          # Route group — tidak memengaruhi URL\n│   │   ├── login/page.tsx\n│   │   └── register/page.tsx\n│   ├── (dashboard)/\n│   │   ├── layout.tsx   # Layout khusus dashboard\n│   │   └── page.tsx\n│   └── api/\n├── components/\n│   ├── ui/              # Button, Input, Modal, dll\n│   └── features/        # Feature-specific components\n├── lib/                 # Utilities, db, auth\n├── hooks/               # Custom React hooks\n├── stores/              # State management\n├── types/               # TypeScript definitions\n└── services/            # API service layer',
      },
      {
        type: 'h2',
        content: 'Server Actions — The New API Layer',
      },
      {
        type: 'p',
        content:
          'Server Actions di Next.js 14+ memungkinkan kamu memanggil fungsi server langsung dari Client Components, tanpa perlu membuat API route terpisah. Ini menyederhanakan arsitektur secara signifikan.',
      },
      {
        type: 'code',
        label: 'Server Action',
        language: 'tsx',
        content:
          '// app/actions/user.ts\n"use server";\n\nimport { revalidatePath } from "next/cache";\n\nexport async function updateProfile(formData: FormData) {\n  const name = formData.get("name") as string;\n\n  if (!name || name.length < 2) {\n    return { error: "Nama minimal 2 karakter" };\n  }\n\n  await db.user.update({ where: { id }, data: { name } });\n\n  revalidatePath("/profile");\n  return { success: true };\n}',
      },
      {
        type: 'h2',
        content: 'Data Layer dengan cache()',
      },
      {
        type: 'code',
        label: 'Service Layer',
        language: 'tsx',
        content:
          '// services/userService.ts\nimport { cache } from "react";\n\n// cache() — deduplicates requests dalam satu render pass\nexport const getUserById = cache(async (id: string) => {\n  return db.user.findUnique({\n    where: { id },\n    select: { id: true, name: true, email: true },\n  });\n});\n\n// Jika dipanggil dari 2 komponen berbeda dengan id sama,\n// database hanya di-query SEKALI!',
      },
      {
        type: 'callout',
        content:
          '🏗️ Prinsip kunci: Pisahkan concerns dengan jelas — Server Components untuk data fetching, Client Components hanya untuk interaktivity, Server Actions untuk mutations, dan service layer untuk business logic.',
      },
    ],
  },
  {
    slug: 'javascript-modern-es2024',
    title: 'JavaScript Modern: Fitur ES2024 yang Wajib Kamu Tahu',
    excerpt:
      'JavaScript terus berkembang pesat. Dari ES2020 hingga ES2024, banyak fitur baru yang menyederhanakan kode dan meningkatkan kemampuan bahasa secara signifikan.',
    category: 'JavaScript / TypeScript',
    categoryColor: 'yellow',
    readTime: '8 menit baca',
    date: '2025-02-20',
    sections: [
      {
        type: 'h2',
        content: '1. Object.groupBy & Map.groupBy (ES2024)',
      },
      {
        type: 'p',
        content:
          'Fitur yang paling banyak ditunggu! Akhirnya ada cara native untuk mengelompokkan array berdasarkan kriteria tertentu, tanpa perlu reduce yang verbose.',
      },
      {
        type: 'code',
        label: 'Object.groupBy',
        language: 'ts',
        content:
          'const products = [\n  { name: "Laptop", category: "electronics", price: 1500 },\n  { name: "Phone", category: "electronics", price: 800 },\n  { name: "Shirt", category: "clothing", price: 50 },\n];\n\nconst byCategory = Object.groupBy(products, ({ category }) => category);\n// { electronics: [...], clothing: [...] }\n\nconst byPriceRange = Object.groupBy(products, ({ price }) => {\n  if (price < 100) return "budget";\n  if (price < 500) return "mid-range";\n  return "premium";\n});',
      },
      {
        type: 'h2',
        content: '2. Array Methods Immutable (ES2023)',
      },
      {
        type: 'p',
        content:
          'Array methods baru yang mengembalikan array baru tanpa mutasi — lebih aman untuk React state management.',
      },
      {
        type: 'code',
        label: 'Immutable Array Methods',
        language: 'ts',
        content:
          'const fruits = ["apple", "banana", "cherry"];\n\n// toSorted() — sort tanpa mutasi original\nconst sorted = fruits.toSorted();\n\n// toReversed() — reverse tanpa mutasi\nconst reversed = fruits.toReversed();\n\n// with() — ganti satu element tanpa mutasi\nconst updated = fruits.with(0, "avocado");\n// ["avocado", "banana", "cherry"]\n\n// Sangat berguna di React!\nsetItems(prev => prev.with(index, newValue));\nsetItems(prev => prev.toSorted((a, b) => a.name.localeCompare(b.name)));',
      },
      {
        type: 'h2',
        content: '3. Promise.withResolvers (ES2024)',
      },
      {
        type: 'code',
        label: 'Promise.withResolvers',
        language: 'ts',
        content:
          '// ✅ ES2024 — Clean\nconst { promise, resolve, reject } = Promise.withResolvers();\n\nfunction waitForButton(buttonId: string) {\n  const { promise, resolve } = Promise.withResolvers<string>();\n\n  document.getElementById(buttonId)?.addEventListener(\n    "click",\n    () => resolve("clicked!"),\n    { once: true }\n  );\n\n  return promise;\n}',
      },
      {
        type: 'h2',
        content: '4. structuredClone (ES2022)',
      },
      {
        type: 'p',
        content:
          'Deep clone yang mudah tanpa library eksternal. Lebih baik dari JSON.parse(JSON.stringify()) karena mendukung Date, Map, Set, RegExp, dan circular references.',
      },
      {
        type: 'code',
        label: 'structuredClone',
        language: 'ts',
        content:
          'const original = {\n  name: "Data",\n  date: new Date(),\n  map: new Map([["key", "value"]]),\n  nested: { arr: [1, 2, { deep: true }] }\n};\n\nconst clone = structuredClone(original);\n\n// Modifikasi clone tidak memengaruhi original\nclone.nested.arr.push(4);\nconsole.log(original.nested.arr); // [1, 2, {deep:true}] — tidak berubah!',
      },
      {
        type: 'callout',
        content:
          '🚀 Semua fitur di atas sudah didukung di semua browser modern dan Node.js terbaru. Mulai gunakan sekarang tanpa perlu polyfill!',
      },
    ],
  },
];
