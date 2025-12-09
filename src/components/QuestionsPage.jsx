import React, { useState } from "react";
import {
  MoreVertical,
  Heart,
  MessageCircle,
  Bookmark,
  ChevronDown,
  Send,
} from "lucide-react";
import { initialQuestions } from "../data/questions"; // 👈 adjust path if needed
import ForumHeroSection from "./ForumHeroSection";


const QuestionsPage = () => {
  const [activeTab, setActiveTab] = useState("questions");
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    details: "",
    anonymous: false,
  });

  // Initial sample data
const [questions, setQuestions] = useState(initialQuestions);


  const currentUser = {
    name: "Priya Singh",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  };

  const handleSubmit = () => {
    if (!formData.title.trim()) {
      alert("Please enter a question title");
      return;
    }

    // Create new question object
    const newQuestion = {
      id: questions.length + 1,
      author: formData.anonymous ? "Anonymous" : currentUser.name,
      avatar: formData.anonymous ? null : currentUser.avatar,
      timeAgo: "Just now",
      title: formData.title,
      body: formData.details || "No additional details provided.",
      repliesCount: 0,
      replyPreviewCount: 0,
      likes: 0,
      replies: 0,
      saves: 0,
      answers: [],
    };

    // Add new question to the beginning of the list
    setQuestions([newQuestion, ...questions]);

    // Reset form
    setFormData({ title: "", details: "", anonymous: false });
    setShowForm(false);
  };

  return (
    <div className="min-h-screen  py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
          {/* Header */}
          <div className="border-b border-gray-200">
            {/* User Info & CTA */}
            <div className="flex items-center justify-between px-6 pt-5 pb-4">
              <div className="flex items-center gap-3">
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="text-sm font-medium text-gray-900">
                  {currentUser.name}
                </span>
              </div>
              <button
                onClick={() => setShowForm(!showForm)}
                className="bg-[#3A643B] hover:bg-[#2d4f2e] text-white px-6 py-2.5 rounded-md text-sm font-medium transition-colors shadow-md"
              >
                Ask Question
              </button>
            </div>

            {/* Tabs */}
            <div className="px-6">
              <div className="flex mb-2 justify-center gap-8 relative">
                <button
                  onClick={() => setActiveTab("questions")}
                  className={`pb-3 text-sm font-medium transition-colors relative ${
                    activeTab === "questions"
                      ? "text-gray-900"
                      : "text-gray-400"
                  }`}
                >
                  Questions
                  {activeTab === "questions" && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3A643B]" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab("thoughts")}
                  className={`pb-3 text-sm font-medium transition-colors relative ${
                    activeTab === "thoughts"
                      ? "text-gray-900"
                      : "text-gray-400"
                  }`}
                >
                  Thoughts
                  {activeTab === "thoughts" && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3A643B]" />
                  )}
                </button>
              </div>
              <div className="h-px bg-gray-200 -mt-px" />
            </div>
          </div>

          {/* Ask Question Form */}
          {showForm && (
            <div className="bg-gray-50 border-b border-gray-200 px-6 py-5">
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">
                    Question title
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    placeholder="Ask your Ayurveda related question..."
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#3A643B]/20 focus:border-[#3A643B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">
                    Details (optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.details}
                    onChange={(e) =>
                      setFormData({ ...formData, details: e.target.value })
                    }
                    placeholder="Share symptoms, lifestyle, or any context that helps experts answer better."
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#3A643B]/20 focus:border-[#3A643B]"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <label className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.anonymous}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          anonymous: e.target.checked,
                        })
                      }
                      className="w-4 h-4 rounded border-gray-300 text-[#3A643B] focus:ring-[#3A643B]"
                    />
                    Ask anonymously
                  </label>

                  <button
                    onClick={handleSubmit}
                    className="bg-[#3A643B] hover:bg-[#2d4f2e] text-white px-5 py-2 rounded-full text-xs font-medium transition-colors flex items-center gap-2"
                  >
                    Post Question
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Content */}
          <div className="px-6 py-6">
            {activeTab === "questions" ? (
              <div className="space-y-6">
                {questions.length > 0 ? (
                  <>
                    {questions.map((question) => (
                      <QuestionCard key={question.id} question={question} />
                    ))}

                    {/* Load More */}
                    <div className="flex justify-center pt-6">
                      <button className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-[#3A643B] transition-colors">
                        Load More
                        <ChevronDown className="w-4 h-4" />
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="py-16 text-center">
                    <p className="text-sm text-gray-400">
                      No questions yet. Be the first to ask!
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div className="py-16 text-center">
                <p className="text-sm text-gray-400">
                  No thoughts yet. Be the first to share your experience.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const QuestionCard = ({ question }) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [localLikes, setLocalLikes] = useState(question.likes);
  const [localSaves, setLocalSaves] = useState(question.saves);

  const handleLike = () => {
    if (liked) {
      setLocalLikes(localLikes - 1);
    } else {
      setLocalLikes(localLikes + 1);
    }
    setLiked(!liked);
  };

  const handleSave = () => {
    if (saved) {
      setLocalSaves(localSaves - 1);
    } else {
      setLocalSaves(localSaves + 1);
    }
    setSaved(!saved);
  };

  return (
    <article className="border-b border-gray-100 pb-6 last:border-0">
      {/* Question Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          {question.avatar ? (
            <img
              src={question.avatar}
              alt={question.author}
              className="w-12 h-12 rounded-full object-cover border border-gray-200"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="text-gray-700"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
                  fill="currentColor"
                />
              </svg>
            </div>
          )}
          <div>
            <div className="font-medium text-sm text-gray-900">
              {question.author}
            </div>
            <div className="text-xs text-gray-400">{question.timeAgo}</div>
          </div>
        </div>
        <button className="p-1 hover:bg-gray-50 rounded-full transition-colors">
          <MoreVertical className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      {/* Question Content */}
      <div className="mb-3">
        <h3 className="text-sm font-semibold text-gray-900 mb-2">
          Question: {question.title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {question.body}
        </p>
      </div>

      {/* Replies Info */}
      {question.answers && question.answers.length > 0 && (
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          <span>Replies • {question.replyPreviewCount} reply</span>
          <button className="text-[#3A643B] font-semibold hover:underline">
            View All {question.repliesCount} Replies
          </button>
        </div>
      )}

      {/* Answer Card */}
      {question.answers && question.answers.length > 0 && (
        <div className="bg-[#F0F6F3] rounded-2xl p-4 mb-4">
          {question.answers.map((answer) => (
            <div key={answer.id}>
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <img
                    src={answer.avatar}
                    alt={answer.author}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-sm text-gray-900">
                      {answer.author}
                    </div>
                    <div className="text-xs text-gray-400">{answer.timeAgo}</div>
                  </div>
                </div>
                <button className="p-1 hover:bg-[#E1EDE5] rounded-full transition-colors">
                  <MoreVertical className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                {answer.body}
              </p>

              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1.5 text-[#3A643B]">
                  <span className="text-base">💚</span>
                  <span>{answer.likes}</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-500">
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{answer.replies}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Question Footer */}
      <div className="flex items-center justify-center gap-10 pt-4 border-t border-gray-100">
        <button
          onClick={handleLike}
          className={`flex items-center gap-2 text-xs transition-colors ${
            liked ? "text-red-500" : "text-gray-500 hover:text-[#3A643B]"
          }`}
        >
          <Heart className={`w-4 h-4 ${liked ? "fill-red-500" : ""}`} />
          <span>{localLikes} Likes</span>
        </button>
        <button className="flex items-center gap-2 text-xs text-gray-500 hover:text-[#3A643B] transition-colors">
          <MessageCircle className="w-4 h-4" />
          <span>{question.replies} Reply</span>
        </button>
        <button
          onClick={handleSave}
          className={`flex items-center gap-2 text-xs transition-colors ${
            saved ? "text-[#3A643B]" : "text-gray-500 hover:text-[#3A643B]"
          }`}
        >
          <Bookmark className={`w-4 h-4 ${saved ? "fill-[#3A643B]" : ""}`} />
          <span>{localSaves} Saves</span>
        </button>
      </div>
    </article>
  );
};

export default QuestionsPage;