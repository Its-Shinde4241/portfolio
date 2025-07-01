import React from "react";
import { Button } from "./ui/button";

function Resume() {
  return (
    <div id="resume" className=" flex flex-col items-center justify-center p-6">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold mb-2">Resume</h1>
        <p className="text-lg mb-4 text-gray-600">Download my resume</p>
        <Button variant={"secondary"}>
          <a
            href="https://drive.google.com/drive/folders/1wYAYuaH8mjQrLeaaGPJvBg68mQjEbyjW?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </Button>
      </div>
      <div id="Hire me">

      </div>
    </div>
  );
}

export default Resume;
