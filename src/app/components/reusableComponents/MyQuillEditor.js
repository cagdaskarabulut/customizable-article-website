import React, { useEffect, useState } from "react";
// const { useQuill } = require('react-quilljs');
import MyQuillEditorInsertHtmlButton from "./MyQuillEditorInsertHtmlButton";

export default function MyQuillEditor({ quill, quillRef,activeStyle }) {
  // const { quill, quillRef } = useQuill(); //dışarıdan alıyoruz bu parametreyi
  // console.log("!");
  // useEffect(() => {
  //   console.log(quill, quillRef);
  //   console.log("!");
  //   if (quill) quill.setText("123");
  // });

  return (
    <>
      <MyQuillEditorInsertHtmlButton quill={quill} />

      <div style={activeStyle}>
        <div ref={quillRef} />
      </div>
    </>
  );
}
