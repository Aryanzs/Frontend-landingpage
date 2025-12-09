// src/components/AskQuestionModal.jsx
import React, { useState } from "react";
import {
  X,
  ChevronDown,
  Paperclip,
  Image as ImageIcon,
  Video,
  FileText,
  PlusCircle,
  Send,
} from "lucide-react";

const AskQuestionModal = ({ isOpen, onClose, currentUser, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [showDescription, setShowDescription] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [visibility, setVisibility] = useState("Public"); // just UI for now

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!title.trim()) {
      alert("Please enter your question");
      return;
    }

    onSubmit({
      title: title.trim(),
      details: details.trim(),
      anonymous: isAnonymous,
      visibility,
    });

    // reset and close
    setTitle("");
    setDetails("");
    setIsAnonymous(false);
    setShowDescription(false);
    setVisibility("Public");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/35 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      {/* card */}
      <div
        className="w-full max-w-3xl rounded-3xl bg-white shadow-xl border border-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* top row: title + close */}
        <div className="flex items-center justify-between px-6 pt-5 pb-3 border-b border-gray-100">
          <h2 className="text-sm font-semibold text-gray-900">Ask Question</h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* main content */}
        <div className="px-6 pb-6 pt-4 space-y-5">
          {/* user row + Ask button */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="w-11 h-11 rounded-full object-cover"
              />
              <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold text-[#305632]">
                  {currentUser.name}
                </span>

                {/* fake select – only UI */}
                <button className="inline-flex items-center gap-1 rounded-md border border-gray-200 px-3 py-1 text-xs text-gray-700 hover:bg-gray-50">
                  <span>{visibility}</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="inline-flex items-center justify-center rounded-2xl bg-[#3A643B] px-8 py-2.5 text-sm font-semibold text-white hover:bg-[#2d4f2e] transition-colors shadow-sm"
            >
              Ask
              <Send className="w-4 h-4 ml-2" />
            </button>
          </div>

          {/* Add Question */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-medium text-gray-700">
                Add Question <span className="text-red-500">*</span>
              </label>
              <span className="text-[10px] text-gray-400">max 50 words</span>
            </div>
            <div className="rounded-2xl border border-gray-200 px-4 py-3">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Ask your question here"
                className="w-full border-none bg-transparent text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Attachments row – only UI */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5">
              Attachments
            </label>
            <div className="flex items-center justify-between rounded-2xl border border-gray-200 px-4 py-3">
              <input
                disabled
                placeholder="Add supporting reports, images or files"
                className="w-full border-none bg-transparent text-xs text-gray-400 focus:outline-none"
              />
              <div className="flex items-center gap-3 text-[#3A643B]">
                <button className="p-1.5 rounded-full hover:bg-[#E1EDE5]">
                  <Video className="w-4 h-4" />
                </button>
                <button className="p-1.5 rounded-full hover:bg-[#E1EDE5]">
                  <ImageIcon className="w-4 h-4" />
                </button>
                <button className="p-1.5 rounded-full hover:bg-[#E1EDE5]">
                  <FileText className="w-4 h-4" />
                </button>
                <button className="p-1.5 rounded-full hover:bg-[#E1EDE5]">
                  <Paperclip className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Add description toggle */}
          <button
            type="button"
            onClick={() => setShowDescription((prev) => !prev)}
            className="flex items-center gap-2 text-xs font-medium text-[#3A643B]"
          >
            <PlusCircle className="w-4 h-4" />
            {showDescription ? "Hide Description" : "Add Description"}
          </button>

          {showDescription && (
            <div>
              <textarea
                rows={3}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Describe symptoms, lifestyle or anything that helps experts answer better."
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-[#3A643B]/15 focus:border-[#3A643B]"
              />
            </div>
          )}

          {/* anonymous toggle */}
          <div className="flex items-center justify-between pt-1">
            <label className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer">
              <input
                type="checkbox"
                checked={isAnonymous}
                onChange={(e) => setIsAnonymous(e.target.checked)}
                className="w-4 h-4 rounded border-gray-300 text-[#3A643B] focus:ring-[#3A643B]"
              />
              Ask anonymously
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskQuestionModal;
