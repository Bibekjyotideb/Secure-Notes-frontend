import notebook from '../assets/notebook.png';
const logo = notebook;

const AppHeader = () => {
    return(
        <header className="w-full px-6 py-4 flex items-center bg-transparent border-b border-blue-800 transition-all duration-300 ">
            <div className="flex items-center gap-2">
                <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
                <h1 className="text-2xl font-semibold transition-all duration-300 text-white hover:-translate-y-1 hover:text-purple-400">SecureNotes</h1>
            </div>
        </header>
    )
}

export default AppHeader;