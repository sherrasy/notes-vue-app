import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Note } from '@/types/note.type'

export const useNotesStore = defineStore('notesData', () => {
  const notes = ref<Note[]>([{ id: 1, text: 'note-1', isDone:false }, { id: 2, text: 'note-2', isDone:true }, { id: 3, text: 'note-3', isDone:false }])

  return { notes }
})
