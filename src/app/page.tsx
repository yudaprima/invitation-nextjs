'use client';

import { useRouter } from 'next/navigation';
import LandingPage from '@/components/LandingPage';

export default function Home() {
  const router = useRouter();

  const handleEnterInvitation = () => {
    // Add dramatic transition delay
    setTimeout(() => {
      router.push('/invitation');
    }, 500);
  };

  return (
    <div className="min-h-screen">
      <LandingPage onEnter={handleEnterInvitation} />
    </div>
  );
}
