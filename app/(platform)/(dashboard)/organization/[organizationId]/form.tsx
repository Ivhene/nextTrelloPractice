"use client";

import { createBoard } from "@/actions/create-board";
import { FormInput } from "@/components/forms/formInput";
import { FormSubmit } from "@/components/forms/formSubmit";
import { useAction } from "@/hooks/useAction";

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
        <div className="flex flex-col space-y-2">
          <FormInput label="Board Title" errors={fieldErrors} id="title" />
        </div>
        <FormSubmit>Save</FormSubmit>
      </form>
    </>
  );
}
