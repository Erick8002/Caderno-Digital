import { Folder, FileText, Plus } from 'lucide-react';

export function Sidebar({ notes, activeNoteId, onSelectNote }) {
  return (
    <aside className="w-64 bg-slate-800 border-r border-slate-700 flex flex-col h-screen p-4 select-none">
      {/* Cabeçalho do App */}
      <div className="flex items-center gap-2 mb-6 px-2">
        <Folder className="w-6 h-6 text-indigo-400" />
        <h1 className="font-bold text-lg text-slate-100 tracking-wide">Meu Caderno</h1>
      </div>

      {/* Botão de Nova Nota */}
      <button className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium text-sm transition-colors mb-6 cursor-pointer">
        <Plus className="w-4 h-4" />
        <span>Nova Folha</span>
      </button>

      {/* Lista de Folhas/Notas */}
      <div className="flex-1 overflow-y-auto space-y-1">
        <span className="text-xs font-semibold text-slate-400 uppercase px-2 tracking-wider">
          Anotações
        </span>

        {notes.map((note) => {
          const isActive = note.id === activeNoteId;
          return (
            <button
              key={note.id}
              onClick={() => onSelectNote(note.id)}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm text-left transition-colors cursor-pointer ${
                isActive
                  ? 'bg-slate-700 text-indigo-300 font-medium'
                  : 'text-slate-400 hover:bg-slate-700/50 hover:text-slate-200'
              }`}
            >
              <FileText className="w-4 h-4 shrink-0" />
              <span className="truncate">{note.title}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}