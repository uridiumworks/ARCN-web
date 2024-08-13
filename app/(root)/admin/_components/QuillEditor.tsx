// components/QuillEditor.tsx
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // Import the styles
import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import ReactQuill from 'react-quill'; // Import ReactQuill directly

// Define types for the props
interface QuillEditorProps {
  value: string;
  onChange: (value: string) => void;
  modules?: object; // You can specify more detailed types for modules if needed
}

// Define the type for the ref
interface QuillEditorRef {
  getEditor: () => any; // Adjust as needed for the Quill instance type
}

// Create the QuillEditor component
const QuillEditor = forwardRef<QuillEditorRef, QuillEditorProps>(
  ({ value, onChange, modules }, ref) => {
    const quillRef = useRef<ReactQuill | null>(null);

    useImperativeHandle(ref, () => ({
      getEditor: () => quillRef.current?.getEditor() || null,
    }));

    return (
      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={value}
        onChange={onChange}
        modules={{
            toolbar: {
                container: [
                    [{ header: [1, 2, 3, 4, false] }],
                    ['bold', 'italic', 'underline'],
                    [{ align: [] }],
                    ['image', 'clean'], // Add image button
                ],
                // handlers: {
                //     image: imageHandler, // Set custom image handler
                // },
            },
        }}
      />
    );
  }
);

QuillEditor.displayName = 'QuillEditor'; // Set display name for debugging

export default QuillEditor;
