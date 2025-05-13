// TodoForm.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import TodoForm from "./TodoForm";

test("할 일 입력 시 input 값이 변경되는지 확인", () => {
  render(<TodoForm />);
  
  const input = screen.getByLabelText("할 일:");
  expect(input).toHaveValue(""); // 초기값 확인
  
  fireEvent.change(input, { target: { value: "리액트 공부하기" } });
  expect(input).toHaveValue("리액트 공부하기");
});