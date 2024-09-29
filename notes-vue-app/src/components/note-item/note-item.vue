<script setup lang="ts">
import type { Note } from '@/types/note.type.js';
import { toRefs } from 'vue';

const props = defineProps<{note:Note}>()
const {id, text, isDone} = props.note;
</script>

<template>
    <div class="note__container" :class="{'task-done':isDone}">
        <p class="note__text">{{text}}</p>
        <div class="note__controls">
            <button class="note__button note-btn-edit"> Редактировать</button>
            <button class="note__button note-btn-delete"> Удалить</button>
            <button class="note__button note-btn-done"> {{ isDone ? 'Не готово' : 'Выполнено' }}</button>
        </div>
    </div>
</template>