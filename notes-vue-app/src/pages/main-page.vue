<script setup lang="ts">
import AddNoteForm from '@/components/note-form/add-note-form.vue'
import NotesList from '@/components/notes-list/notes-list.vue'
</script>

<template>
  <div class="main-page">
    <h1 class="main-page__title">My notes</h1>
    <div class="main-page__content">
      <AddNoteForm />
      <NotesList />
    </div>
  </div>
</template>
