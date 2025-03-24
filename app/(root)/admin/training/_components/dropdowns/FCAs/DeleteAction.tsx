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
import { useTrainingFcaContext } from "@/contexts/TrainingFcas.context";
import { useDeleteEntrepreneurship } from "@/hooks/Entrepreneurships.hooks";
import { useDeleteFCA } from "@/hooks/FCAs.hooks";
import React, { useEffect, useRef, useState } from "react";

const DeleteAction = ({ id }: any) => {
  console.log("🚀 ~ DeleteAction ~ id:", id);
  const closeDeleteDialogRef = useRef<HTMLButtonElement>(null);
  const { isDeleting, deleteTrainingFca } = useTrainingFcaContext();

  return (
    <>
      <DialogContent className="bg-white p-10">
        <DialogHeader>
          <AlertIcon />
          <DialogTitle>Delete fca</DialogTitle>
          <DialogDescription className="py-4">
            Are you sure you want to delete this fca? This action cannot be
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
            disabled={isDeleting}
            type="button"
            onClick={() => deleteTrainingFca(id, closeDeleteDialogRef)}
            className="bg-red-600 text-white hover:bg-red-600 hover:text-white"
          >
            {isDeleting ? <ButtonSpinner /> : "Delete"}
          </Button>
        </div>
      </DialogContent>
    </>
  );
};

export default DeleteAction;
