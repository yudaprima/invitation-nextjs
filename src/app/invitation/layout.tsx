import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wedding Invitation - Lufi & Chandra",
  description: "You are cordially invited to celebrate the wedding of Lufi & Chandra on September 21, 2025 at Baliantoro Villa, Yogyakarta",
  keywords: "wedding invitation, Lufi Chandra, September 2025, Baliantoro Villa, Yogyakarta",
  openGraph: {
    title: "Wedding Invitation - Lufi & Chandra",
    description: "You are cordially invited to celebrate our wedding on September 21, 2025",
    type: "website",
  },
};

export default function InvitationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
