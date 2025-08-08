import { Trash2, Pencil } from "lucide-react";

const NoteCard = ({ title, content, onEdit, onDelete }) => {
  return (
    <div className="w-[45%] min-w-[250px] max-w-[320px] max-h-[150px] 
                bg-white p-4 rounded-xl shadow-md 
                hover:shadow-lg transition duration-300 
                border border-gray-200 flex flex-col justify-between hover:scale-105">
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-sm text-gray-600 line-clamp-3">{content}</p>
      </div>
      <div className="flex justify-end gap-3 mt-4">
        <button
          onClick={onEdit}
          className="text-purple-600 hover:text-purple-800 transition"
        >
          <Pencil size={18} />
        </button>
        <button
          onClick={onDelete}
          className="text-red-500 hover:text-red-700 transition"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
