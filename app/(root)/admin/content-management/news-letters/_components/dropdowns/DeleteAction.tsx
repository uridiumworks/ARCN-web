import { AlertIcon } from "@/assets/icons";
import ButtonSpinner from "@/components/Shared/ButtonSpinner";
import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNewsletter } from "@/contexts/Newsletter.context";
import { useDeleteBlog } from "@/hooks/Blogs.hooks";
import { useDeleteJournal } from "@/hooks/Journals.hooks";
import { useDeleteNewsLetter } from "@/hooks/NewsLetters.hooks";
import React, { useEffect, useRef, useState } from "react";

const DeleteAction = ({ id }: any) => {
  console.log("🚀 ~ DeleteAction ~ id:", id);
  const closeDeleteDialogRef = useRef<HTMLButtonElement>(null);
  const [token, setToken] = useState<string | null>(null);
  // const { deleteNewsLetter, loading, error, success } = useDeleteNewsLetter(token)
  const { isUpdating, deleteNewsletter } = useNewsletter();

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    setToken(userToken);
  }, []);

  return (
    <>
      <DialogContent className="bg-white p-10">
        <DialogHeader>
          <AlertIcon />
          <DialogTitle>Delete news-letter</DialogTitle>
          <DialogDescription className="py-4">
            Are you sure you want to delete this post? This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 mt-8 gap-3">
          <DialogClose asChild>
            <Button
              ref={closeDeleteDialogRef}
              type="button"
              className="border-gray-300 border-2 bg-white hover:bg-white text-black hover:text-black"
            >
              Cancel
            </Button>
          </DialogClose>
          <Button
            disabled={isUpdating}
            type="button"
            onClick={() => deleteNewsletter(id, closeDeleteDialogRef)}
            className="bg-red-600 text-white hover:bg-red-600 hover:text-white"
          >
            {isUpdating ? <ButtonSpinner /> : "Delete"}
          </Button>
        </div>
      </DialogContent>
    </>
  );
};

export default DeleteAction;
