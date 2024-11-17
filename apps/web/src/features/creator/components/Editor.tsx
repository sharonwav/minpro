import React, { useState, useEffect } from 'react';
import Quill from 'quill';

interface EditorProps {
  setFieldValue: (field: string, value: any) => void;
}

const Editor: React.FC<EditorProps> = ({ setFieldValue }) => {
  const [activeTab, setActiveTab] = useState("description"); // Default to description

  useEffect(() => {
    // Only initialize the editors when the active tab is "description"
    if (activeTab === "description") {
      const editor1Container = document.getElementById("editor1");
      const editor2Container = document.getElementById("editor2");

      // Initialize quill for the first editor
      if (editor1Container && !editor1Container.querySelector(".ql-editor")) {
        const quill1 = new Quill(editor1Container, {
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

        quill1.on("text-change", () => {
          setFieldValue("description", quill1.root.innerHTML);
        });
      }

      if (editor2Container && !editor2Container.querySelector(".ql-editor")) {
        const quill2 = new Quill(editor2Container, {
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

        quill2.on("text-change", () => {
          setFieldValue("termsAndContition", quill2.root.innerHTML);
        });
      }
    }
  }, [activeTab, setFieldValue]); 

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
