import React, { useState, useEffect, useRef } from 'react';
import Quill from 'quill';

interface EditorProps {
  setFieldValue: (field: string, value: any) => void;
  description: string;
  termsAndCondition: string;
}

const Editor: React.FC<EditorProps> = ({ setFieldValue, description, termsAndCondition }) => {
  const [activeTab, setActiveTab] = useState("description");
  const quill1Ref = useRef<Quill | null>(null);
  const quill2Ref = useRef<Quill | null>(null);

  useEffect(() => {
    const initQuill = (containerId: string, quillRef: React.MutableRefObject<Quill | null>, field: string) => {
      const container = document.getElementById(containerId);
      if (container && !quillRef.current) {
        quillRef.current = new Quill(container, {
          theme: "snow",
          modules: {
            toolbar: [
              [{ header: [1, 2, false] }],
              ["bold", "italic", "underline"],
              ["link", "image"],
              [{ list: "ordered" }, { list: "bullet" }],
            ],
          },
        });

        quillRef.current.on("text-change", () => {
          setFieldValue(field, JSON.stringify(quillRef.current?.getContents() || {}));
        });

        //Set initial content AFTER Quill is initialized
        try {
          const initialContent = field === 'description' ? description : termsAndCondition;
          if (initialContent) {
            quillRef.current.setContents(JSON.parse(initialContent));
          }
        } catch (error) {
          console.error(`Error parsing ${field}:`, error);
        }
      }
    }

    initQuill("editor1", quill1Ref, "description");
    initQuill("editor2", quill2Ref, "termsAndCondition");

    console.log(description)

  }, [description, termsAndCondition, setFieldValue]); //Only runs on mount and when props change

  return (
    <>
      <div className="flex flex-col mt-2">
        <p className="!mb-3">Description</p>
        <div id="editor1" style={{ height: '210px' }} className="border border-black"></div>
      </div>
      <div className="flex flex-col mt-5">
        <p className="!mb-3">Terms and Condition</p>
        <div id="editor2" style={{ height: '210px' }} className="border border-black"></div>
      </div>
    </>
  );
};

export default Editor;
