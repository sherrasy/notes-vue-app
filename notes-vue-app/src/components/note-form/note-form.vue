<script setup lang="ts"></script>

<template>
    <div class="form__wrapper">
        <form>
            <div class="form__input-container">
            <input class="form__input" type="text" autocomplete="off" placeholder="Текст заметки" />
            <span class='form__error'> Заполните поле</span>
            </div>
            <button class='form__button' type='submit'>
                <span class='form__button-text'>Отправить</span>
            </button>
        </form>
    </div>
</template>