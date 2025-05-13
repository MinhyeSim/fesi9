"use client";

import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`입력된 이메일: ${email}`);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="email">이메일:</label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-48 p-2 border border-gray-300 rounded-md"
        id="email"
        type="email"
        placeholder="이메일을 입력하세요"
        data-testid="email-input"
      />
      <button className="bg-blue-500 text-white p-2 rounded-md" type="submit">
        로그인
      </button>
    </form>
  );
}
