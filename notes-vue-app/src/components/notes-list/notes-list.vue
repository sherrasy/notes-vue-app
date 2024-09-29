<script setup lang="ts">
import { ref } from 'vue';
import NoteItem from '../note-item/note-item.vue';
import { useNotesStore } from '@/stores/notes-data.js';

const notesStore = useNotesStore();
const notes =  notesStore.notes;

</script>

<template>
        <div class="notes-list__wrapper">
                <div class="notes-list__item" v-for="note in notes" :key="note.id">
                        <NoteItem :note="note" />
                </div>
        </div>
</template>