import {Pencil} from 'lucide-react';

const AddNoteButton = ({ onClick }) => {
    return (
        <div className="w-full flex justify-center mt-6">
      <button
        onClick={onClick}
        className="flex items-center gap-2 bg-gradient-to-br from-blue-500 to-purple-500 hover:saturate-200 hover:-translate-y-1 hover:shadow-[0_0_20px_5px_rgba(139,92,246,0.6)  text-white px-5 py-3 rounded-xl shadow-lg transition duration-200"
      >
        <Pencil className="w-5 h-5" />
        <span className="text-md font-medium">Add Note</span>
      </button>
    </div>
    )
}

export default AddNoteButton;