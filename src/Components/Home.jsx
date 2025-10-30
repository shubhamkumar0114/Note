
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToPaste, updatePaste } from "../Redux/pasteSlice";
import toast from "react-hot-toast";

const Home = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p?.id === pasteId);
      setTitle(paste?.title);
      setContent(paste?.content);
    }
  }, [pasteId]);

  function createPaste() {
    if (!title) return toast.error("required");
    if (!content) return toast.error("required");
    const paste = {
      title,
      content,
      id: pasteId || Date.now().toString(36),
    };

    if (pasteId) {
      // Update Paste
      dispatch(updatePaste(paste));
      setTitle("");
      setContent("");
    } else {
      // Create Paste
      dispatch(addToPaste(paste));
      setTitle("");
      setContent("");
      setSearchParams({});
    }
  }

  return (
    <div className="lg:w-[40vw] md:w-full w-full justify-center flex flex-col  p-1">
      <div className="flex flex-wrap justify-between gap-4 md:gap-0 items-center">
        <input
          type="text"
          required
          placeholder="title.."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input input-primary text-[1.1rem] h-10 w-full"
        />

        <button
          onClick={createPaste}
          className="btn w-full md:w-auto bg-transparent text-[1rem] hover:bg-zinc-800 btn-primary"
        >
          {pasteId ? "Update Paste" : "Create Paste"}
        </button>
      </div>
      {/* ----------------Text Area------------------ */}

      <div className="w-full mt-4">
        <textarea
          required
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full text-[0.8rem] resize-none h-36 rounded-md outline-none p-2 border border-blue-600"
          id=""
        ></textarea>
      </div>
    </div>
  );
};

export default Home;
