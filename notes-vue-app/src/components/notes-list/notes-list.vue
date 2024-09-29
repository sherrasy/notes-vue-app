<script setup lang="ts">
import { useNotesStore } from '@/stores/notes-data.js';
import { storeToRefs } from 'pinia';
import NoteItem from '../note-item/note-item.vue';

const notesStore = useNotesStore()
const { notes } = storeToRefs(notesStore)
</script>

<template>
  <div class="notes-list__wrapper" v-show="notes.length > 0">
    <div class="notes-list__item" v-for="note in notes" :key="note.id">
      <NoteItem :note="note" />
    </div>
  </div>
</template>
