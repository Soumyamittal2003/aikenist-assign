import React, { useState } from "react";

const App = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [copiedImage, setCopiedImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
    }
  };

  const handleCopyImage = () => {
    if (uploadedImage) {
      setCopiedImage(uploadedImage);
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-6 mb-4">
        Aikenist Assignment
      </h1>
      <div className="flex h-screen">
        {/* Left Side */}
        <div className="w-1/2 flex flex-col items-center justify-center border-r-2 border-gray-300 p-4">
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          {uploadedImage && (
            <img
              src={uploadedImage}
              alt="Uploaded"
              className="mt-4 max-w-full max-h-[80%] object-contain"
            />
          )}
        </div>

        {/* Right Side */}
        <div className="w-1/2 flex flex-col items-center justify-center p-4">
          <button
            onClick={handleCopyImage}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Screenshot
          </button>
          {copiedImage && (
            <img
              src={copiedImage}
              alt="Screenshot"
              className="mt-4 max-w-full max-h-[80%] object-contain"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default App;
