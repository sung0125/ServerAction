'use client';
import { createTopic } from '@/actions/topicActions';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddTopicForm() {
  const [title] = useState('');
  const [description] = useState('');
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createTopic(title, description);
      router.push('/'); // 생성 후 메인 페이지로 이동
    } catch (error) {
      console.error('토픽 생성 중 오류:', error);
      alert('토픽 생성 중 오류가 발생했습니다.');
    }
  };
  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
      중략 (동일)
    </form>
  );
}
