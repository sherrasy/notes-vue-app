import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Note } from '@/types/note.type'

export const useNotesStore = defineStore(
  'notesData',
  () => {
    const notes = ref<Note[]>([])

    function addNote(note: Note) {
      notes.value = [...notes.value, note]
    }

    function updateNote(updatedNote: Note) {
      const noteId = notes.value.findIndex((note) => note.id === updatedNote.id)
      if(noteId !==-1) {
        notes.value[noteId] = { ...notes.value[noteId], ...updatedNote };
      }
    }

    function removeNote(id: number) {
      notes.value = notes.value.filter((note) => note.id !== id)
    }

    return { notes, addNote, updateNote, removeNote }
  },
  {
    persist: true
  }
)
