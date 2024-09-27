<script setup lang="ts">
import { ref } from 'vue';
import NoteItem from '../note-item/note-item.vue';

const notes = ref([{ id: 1, text: 'note-1', isDone:false }, { id: 2, text: 'note-2', isDone:true }, { id: 3, text: 'note-3', isDone:false }])
</script>

<template>
        <div class="notes-list__wrapper">
                <div class="notes-list__item" v-for="note in notes" :key="note.id">
                        <NoteItem :note="note" />
                </div>
        </div>
</template>