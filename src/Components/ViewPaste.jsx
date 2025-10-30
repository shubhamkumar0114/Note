import React from "react";
import toast from "react-hot-toast";
import { MdOutlineContentCopy } from "react-icons/md";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


const ViewPaste = () => {
  const { pasteId } = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.filter((item) => item?.id === pasteId);

  const handleTextCopy = (content) => {
    if (content) {
      navigator.clipboard.writeText(content);
      toast.success("Copy");
    }
  };
  return (
    <div className="border border-blue-400 p-2 md:w-[40vw] w-full justify-center flex flex-col">
      <div className="flex justify-between items-center px-2">
        <h1 className="text-start text-[1.2rem] text-gray-300 underline font-semibold ">
          View Paste
        </h1>
        <div>
          <button
            onClick={() => handleTextCopy(paste[0]?.content)}
            className="px-2 py-1 rounded-md text-gray-300 bg-zinc-700"
          >
            <MdOutlineContentCopy className="text-xl cursor-pointer" />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-1 text-start mt-1 p-2">
        <div>
          <h2 className="text-[1.2rem] text-gray-300 font-semibold">
            {paste[0]?.title}
          </h2>
        </div>
        <div>
          <p className="text-[1.1rem] text-gray-300">{paste[0]?.content}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewPaste;

// git add .
// git commit -m "update message"
// git push
