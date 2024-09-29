<script setup lang="ts">
import { useNotesStore } from '@/stores/notes-data.js';
import type { Note } from '@/types/note.type.js';
import { ref } from 'vue';
import EditNoteForm from '../note-form/edit-note-form.vue';

const notesStore = useNotesStore()
const props = defineProps<{ note: Note }>()
const isEditing = ref(false)

const handleEditing = () => (isEditing.value = !isEditing.value)
const handleUpdateDone = () => {
  notesStore.updateNote({ ...props.note, isDone: !props.note.isDone })
}
const handleDelete = () => notesStore.removeNote(props.note.id)
</script>

<template>
  <div
    class="note__container"
    :class="{ 'task-done': props.note.isDone, 'edit-active': isEditing }"
  >
    <EditNoteForm :note="note" @change-view="handleEditing" v-if="isEditing" />
    <p class="note__text" v-else>{{ props.note.text }}</p>
    <div class="note__controls">
      <button class="note__button note-btn-edit" @click="handleEditing">
        {{ isEditing ? 'Отменить ввод' : 'Редактировать' }}
      </button>
      <button class="note__button note-btn-delete" @click="handleDelete">Удалить</button>
      <button class="note__button note-btn-done" @click="handleUpdateDone">
        {{ props.note.isDone ? 'Не готово' : 'Выполнено' }}
      </button>
    </div>
  </div>
</template>
