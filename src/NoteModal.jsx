import {useState, useEffect} from 'react';

const NoteModal = ({ isOpen, onClose, onSave, onEdit}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        if(onEdit){
            setTitle(onEdit.title);
            setContent(onEdit.content);
        } 
    }, [onEdit]);

    useEffect(() => {
    if (!isOpen) {
        setTitle('');
        setContent('');
    }
    }, [isOpen]);

    if(!isOpen) return null;

    const handleSave = () => {
  if (title.trim() === "" && content.trim() === "") return;

  const noteData = { title, content };

  if (onEdit) {
    onSave({ ...noteData, _id: onEdit._id }); 
  } else {
    onSave(noteData);
  }

  onClose(); 
};


    
    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
        <div className="bg-white w-[90%] max-w-md p-6 rounded-xl shadow-2xl">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
            {onEdit ? "Edit Note" : "Add Note"}
            </h2>
            <input
            type="text"
            placeholder="Title" required
            className="w-full text-black border border-gray-300 rounded-lg p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
            rows={6}
            placeholder="Write your note here..."
            className="w-full border text-black border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <div className="flex justify-end gap-3">
            <button 
                onClick={onClose}
                className="px-4 py-2 bg-red-400 rounded-lg hover:bg-red-500 transition"
            >
                Cancel
            </button>
            <button
                onClick={handleSave}
                className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-700 transition"
            >
                Save
            </button>
            </div>
        </div>
        </div>    
    )
}
export default NoteModal;