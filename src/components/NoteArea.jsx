import { Calendar, Tag } from 'lucide-react';

export function NoteArea({ activeNote, onUpdateNote }) {
  if (!activeNote) {
    return (
      <main className="flex-1 bg-slate-900 flex items-center justify-center text-slate-500">
        Selecione uma nota na barra lateral.
      </main>
    );
  }

  return (
    <main className="flex-1 bg-slate-900 p-8 flex flex-col h-screen overflow-y-auto">
      {/* Cabeçalho da Nota */}
      <div className="mb-6 border-b border-slate-800 pb-4">
        <input
          type="text"
          value={activeNote.title}
          onChange={(e) => onUpdateNote({ ...activeNote, title: e.target.value })}
          className="w-full bg-transparent text-3xl font-bold text-slate-100 focus:outline-none mb-3"
          placeholder="Título da folha..."
        />
        
        <div className="flex items-center gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            <span>{activeNote.updatedAt}</span>
          </div>
          <div className="flex items-center gap-1">
            <Tag className="w-3.5 h-3.5" />
            <span>{activeNote.subject}</span>
          </div>
        </div>
      </div>

      {/* Editor de Texto Simples */}
      <textarea
        value={activeNote.content}
        onChange={(e) => onUpdateNote({ ...activeNote, content: e.target.value })}
        className="flex-1 w-full bg-transparent text-slate-300 resize-none focus:outline-none leading-relaxed text-base"
        placeholder="Comece a escrever suas anotações aqui..."
      />
    </main>
  );
}