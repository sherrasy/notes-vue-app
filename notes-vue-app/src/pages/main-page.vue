<script setup lang="ts">
import NoteForm from '@/components/note-form/note-form.vue'
import NotesList from '@/components/notes-list/notes-list.vue'
</script>

<template>
    <div class="main-page">
    <h1 class="main-page__title">My notes</h1>
    <div class="main-page__content">
        <NoteForm/>
        <NotesList/>
    </div>
    </div>
</template>