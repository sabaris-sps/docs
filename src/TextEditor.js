import { useEffect, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

function TextEditor() {
  const [data, setData] = useState(localStorage.getItem("react-app-text-data"));
  const [textValue, setTextValue] = useState("");

  useEffect(() => {
    setTextValue(data);
  }, []);

  const TOOLBAR_OPTIONS = [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    [{ align: [] }],
    ["image", "blockquote", "code-block"],
    ["clean"],
  ];

  const handleChange = (value) => {
    console.log(value);
    setTextValue(value);
  };

  const handleSaveOnKeyPress = (e) => {
    e.preventDefault();
    e.key === "Alt"
      ? localStorage.setItem("react-app-text-data", textValue)
      : console.log();
  };

  return (
    <ReactQuill
      className="container"
      theme={"snow"}
      onKeyUp={handleSaveOnKeyPress}
      onChange={handleChange}
      value={textValue}
      modules={{ toolbar: TOOLBAR_OPTIONS }}
    />
  );
}

export default TextEditor;
