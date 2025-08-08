import NoteCard from "./NoteCard";



const NoteList = ({ notes, onEdit, onDelete}) => {
  return (
    <div className="w-[90%] max-w-4xl mx-auto mt-12 
                min-h-[500px] 
                flex flex-wrap gap-6 justify-center 
                p-6 bg-white/5 rounded-xl shadow-xl transition-all duration-300">
      {notes.length === 0 ? (
      <div className="w-full flex justify-center items-center h-40">
        <p className="text-white text-lg animate-fade-in">No notes yet. Add one!</p>
      </div>
      ) : (notes.map((note) => (
        <NoteCard
          key={note._id}
          title={note.title}
          content={note.content}
          onEdit={() => onEdit(note)}
          onDelete={() => onDelete(note._id)}
        />
      )))}
    </div>
  );
};

export default NoteList;