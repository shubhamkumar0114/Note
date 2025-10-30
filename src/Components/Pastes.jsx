import React, { useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { MdOutlineContentCopy } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletePaste } from "../Redux/pasteSlice";
import toast from "react-hot-toast";

const Pastes = () => {
  const [search, setSearch] = useState("");
  const allPastes = useSelector((state) => state.paste.pastes);

  const filterData = allPastes.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  const dispatch = useDispatch();
  const handleDeletePaste = (pasteId) => {
    if (pasteId) {
      dispatch(deletePaste(pasteId));
    }
  };

  const handleTextCopy = (content) => {
    if (content) {
      navigator.clipboard.writeText(content);
      toast.success("Copy");
    }
  };

  return (
    <div className="md:w-[40vw] w-full">
      <div>
        <input
          type="text"
          placeholder="Search.."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-primary text-[1.1rem] h-10 w-full"
        />
      </div>
      <h1 className="text-start text-[1.2rem] font-semibold mb-2">
        All Pastes
      </h1>
      <div className=" flex flex-col gap-4  rounded-md">
        {filterData?.map((paste) => (
          <div
            key={paste?.id}
            className="p-2 flex flex-col-reverse rounded-md border-blue-400 border"
          >
            <div className="text-start overflow-hidden h-22">
              <div className="flex justify-between items-center mb-2">
                <h1 className="text-[1.2rem] font-semibold">{paste?.title}</h1>

                <div className="flex justify-end gap-x-2 items-center ">
                  <Link
                    to={`/?pasteId=${paste?.id}`}
                    className="px-2 py-1 rounded-md text-gray-300 bg-zinc-700"
                  >
                    <MdModeEdit className="text-xl" />
                  </Link>
                  <button
                    onClick={() => handleTextCopy(paste?.content)}
                    className="px-2 py-1 rounded-md text-gray-300 bg-zinc-700"
                  >
                    <MdOutlineContentCopy className="text-xl" />
                  </button>
                  <Link
                    onClick={() => handleDeletePaste(paste?.id)}
                    className="px-2 py-1 rounded-md text-gray-300 bg-zinc-700"
                  >
                    <MdDelete className="text-xl" />
                  </Link>
                  <Link
                    to={`/viewpaste/${paste?.id}`}
                    className="px-2 py-1 rounded-md text-gray-300 bg-zinc-700"
                  >
                    <FaEye className="text-xl" />
                  </Link>
                </div>
              </div>
              <p className="text-[1rem] "> {paste?.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pastes;
