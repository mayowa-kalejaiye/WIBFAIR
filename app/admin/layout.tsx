import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import AdminNav from "@/components/admin/AdminNav";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  // For login page, render without nav (login page itself handles)
  // We detect if session is null and children is login? But middleware already protects
  // If no session, just render children (login page) without nav to avoid flash
  if (!session) {
    return <div className="min-h-screen bg-cream">{children}</div>;
  }

  return (
    <div className="min-h-screen bg-cream flex flex-col md:flex-row">
      <AdminNav />
      <main className="flex-1 min-w-0">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-8 md:py-12">{children}</div>
      </main>
    </div>
  );
}
