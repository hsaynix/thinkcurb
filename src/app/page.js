import HomeContent from "./HomeContent";
import { getSortedPostsData } from "@/lib/posts";

export default function Page() {
  // جلب البيانات من السيرفر
  const allPosts = getSortedPostsData();

  // تأمين البيانات: إذا لم تتوفر البيانات، نرسل مصفوفة فارغة لتجنب خطأ .map()
  const safePosts = allPosts || [];

  return (
    <main className="min-h-screen bg-white">
      {/* تمرير البيانات إلى مكون العميل (HomeContent) 
        الذي يحتوي على منطق البحث والترقيم والتصنيفات
      */}
      <HomeContent initialPosts={safePosts} />
    </main>
  );
}