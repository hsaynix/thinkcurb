/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. تحديد الملفات التي سيبحث فيها Tailwind عن الكلاسات
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      // 2. تخصيص الألوان لتناسب هوية المدونة الهادئة
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          light: "#3b82f6",
          DEFAULT: "#2563eb",
          dark: "#1d4ed8",
        }
      },
      
      // 3. إضافة إعدادات مخصصة لمكتبة Typography (التي تعالج نصوص الـ Markdown)
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.foreground'),
            fontSize: '1.125rem', // تجعل الخط 18px لراحة القراءة
            lineHeight: '1.8',
            a: {
              color: theme('colors.brand.DEFAULT'),
              '&:hover': {
                color: theme('colors.brand.dark'),
              },
            },
            h1: {
              fontWeight: '800',
              letterSpacing: theme('letterSpacing.tight'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              marginTop: '2.5em',
            },
            code: {
              fontWeight: '400',
              backgroundColor: theme('colors.gray.100'),
              padding: '0.2rem 0.4rem',
              borderRadius: '0.375rem',
            },
            // إخفاء علامات الاقتباس التلقائية التي يضيفها Tailwind للكود
            'code::before': { content: '""' },
            'code::after': { content: '""' },
          },
        },
      }),

      // 4. إعدادات الخطوط
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular'],
      },
    },
  },

  // 5. تفعيل الإضافات (مهم جداً لتنسيق المقالات)
  plugins: [
    require('@tailwindcss/typography'),
    // يمكنك إضافة إضافة forms إذا كنت تنوي عمل صفحة اتصل بنا لاحقاً
    // require('@tailwindcss/forms'),
  ],
};