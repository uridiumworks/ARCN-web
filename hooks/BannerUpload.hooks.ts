import { deleteAPI, getAPI, postAPI, putAPI } from "@/lib/Axios";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useToast } from "./use-toast";


const useUploadImage = (token: string | null) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState<string | null>(null);
  const { toast } = useToast()

  const uploadImage = async (
    file: File,
    type: string
  ): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("FolderName", "profilepicture");
      formData.append("Files", file);
      formData.append("ImgName", file.name);
      const response = await postAPI(
        "/api/UploadToCloud/FileUpload",
        formData,
        token as any
      );
      console.log("API response:", response); // Debugging
      setData(response);

      setLoading(false);
    } catch (err: any) {
      if (err instanceof AxiosError && err.response) {
        const errorResponse = err.response.data;
        setError(
          errorResponse.errors
            ? errorResponse.errors.join(", ")
            : errorResponse.message || "An unknown error occurred"
        );
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: errorResponse.errors
            ? errorResponse.errors.join(", ")
            : errorResponse.message || "An unknown error occurred",
        })
      } else {
        setError("An unknown error occurred");
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "An unknown error occurred",
        })
      }
    } finally {
      setLoading(false);
    }
  };

  return { uploadImage, data, loading, error };
};


export {
  useUploadImage
};