<script setup lang="ts">
import { ref } from 'vue';

const isValid = ref<boolean>(true)
const noteText = ref<string>('')

const checkValidity = (value:string) =>{
    if(value.length > 0 && value.trim() !== ''){
        return true
    }
    return false;
}

const handleFormSubmit = (evt:Event)=>{
    evt.preventDefault();
    isValid.value = checkValidity(noteText.value);
}

</script>

<template>
    <div class="form__wrapper">
        <form method='post' action='/' @submit='handleFormSubmit'>
            <div class="form__input-container" >
            <input class="form__input" :class="{invalid:!isValid }" type="text" autocomplete="off" placeholder="Текст заметки" v-model="noteText" />
            <span class='form__error'> Заполните поле</span>
            </div>
            <button class='form__button' type='submit'>
                <span class='form__button-text'>Отправить</span>
            </button>
        </form>
    </div>
</template>