<script setup lang="ts">
import { useNotesStore } from '@/stores/notes-data.js';
import type { Note } from '@/types/note.type.js';
import { checkValidity } from '@/utils/helpers.js';
import { ref } from 'vue';

const props = defineProps<{ note: Note }>()
const emit = defineEmits(['change-view'])
const notesStore = useNotesStore()
const isValid = ref<boolean>(true)
const noteText = ref<string>(props.note.text)
const inputRef = ref<HTMLInputElement>()

const handleResetInvalid = () => {
  if (!isValid.value) {
    isValid.value = true
  }
}

const handleFormSubmit = () => {
  const dataValid = checkValidity(noteText.value)
  isValid.value = dataValid
  if (dataValid) {
    const updatedNote = { ...props.note, text: noteText.value }
    notesStore.updateNote(updatedNote)
    emit('change-view')
  } else {
    inputRef.value?.focus()
  }
}
</script>

<template>
  <div class="form__wrapper edit-note-form">
    <form method="post" action="/" @submit.prevent="handleFormSubmit">
      <div class="form__input-container">
        <input
          class="form__input"
          :class="{ invalid: !isValid }"
          type="text"
          autocomplete="off"
          placeholder="Текст заметки"
          v-model="noteText"
          @blur="handleResetInvalid"
          ref="inputRef"
        />
        <span class="form__error"> Заполните поле</span>
      </div>
      <button class="form__button" type="submit">
        <span class="form__button-text">Сохранить</span>
      </button>
    </form>
  </div>
</template>
