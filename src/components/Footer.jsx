import React from "react";
import Button from "./ui/Button.jsx";

const Footer = () => {
  return (
    

    <div className="py-6 p-10  text-center bg-primary-lighter  mt-32">
      <div className="w-100 mb-4 text-left flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-primary">Lihat sesuatu yang menarik?</h1>
        <p className="text-text-secondary text-lg">Saya siap membantu mengubah ide Anda menjadi pengalaman digital yang bermakna.</p>
        
      <Button className="w-fit">Contac Me</Button>
      </div>
      <p className="text-text-secondary">
        &copy; 2025 Robet Davis Chaniago. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
