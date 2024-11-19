'use client';

import { updateTopic } from '@/actions/topicActions';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface EditTopicFormProps {
  id: string;
  title: string;
  description: string;
}
export default function EditTopicForm({
  id,
  title,
  description,
}: EditTopicFormProps) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateTopic(id, title, description);
      router.push('/'); // 수정 후 메인 페이지로 이동
    } catch (error) {
      console.error('토픽 수정 중 오류:', error);
      alert('토픽 수정 중 오류가 발생했습니다.');
    }
  };

  return (
    <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
      <input
        type='text'
        className='border border-slate-500 p-4'
        placeholder='Topic Title'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setNewTitle(e.target.value);
        }}
        value={newTitle}
      />
      <textarea
        className='border border-slate-500 p-4 h-32'
        placeholder='Topic Description'
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
          setNewDescription(e.target.value);
        }}
        value={newDescription}
      />
      <button
        className='bg-blue-800 text-white font-bold px-6 py-3 w-fit rounded-md'
        type='submit'
      >
        Update Topic
      </button>
    </form>
  );
}
