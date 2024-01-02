"use client";

import { createBoard } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { useAction } from "@/hooks/useAction";
import { error } from "console";

export default function Form() {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess(data) {
      console.log(data, "SUCCESS");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const onSubmit = (FormData: FormData) => {
    const title = FormData.get("title") as string;

    execute({ title });
  };
  return (
    <>
      <form action={onSubmit}>
        <input
          id="title"
          name="title"
          required
          placeholder="Enter a board title"
          className="border border-black p-1"
        />
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
}
