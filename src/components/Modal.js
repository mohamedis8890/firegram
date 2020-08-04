import React from "react";

export default function Modal({ selectedImg, setSelectedImg }) {
  return (
    <div
      className="backdrop"
      onClick={(e) =>
        e.target.classList.contains("backdrop") && setSelectedImg(null)
      }
    >
      <img src={selectedImg} alt="enlarged pic" />
    </div>
  );
}
