import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <div>홈</div>
      <Link href="/i/flow/login">로그인</Link>
      <Link href="i/flow/signup">회원가입</Link>
    </div>
  );
}
