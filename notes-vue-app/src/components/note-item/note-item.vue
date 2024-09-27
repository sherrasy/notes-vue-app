<script setup lang="ts">
import type { Note } from '@/types/note.type.js';

defineProps<{note:Note}>()
</script>

<template>
    <div class="note__container task-done">
        <p class="note__text ">{{note.text}}</p>
        <div class="note__controls">
            <button class="note__button note-btn-edit"> Редактировать</button>
            <button class="note__button note-btn-delete"> Удалить</button>
            <button class="note__button note-btn-done"> Выполнено</button>
        </div>
    </div>
</template>