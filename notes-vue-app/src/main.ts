import '@/styles/styles.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/components/app/App.vue'
import NoteForm from '@/components/note-form/note-form.vue'
import NoteItem from '@/components/note-item/note-item.vue'
import NotesList from '@/components/notes-list/notes-list.vue'

const app = createApp(App)

app.use(createPinia())
app.component('NoteForm', NoteForm).component('NoteItem', NoteItem).component('NotesList', NotesList);
app.mount('#app')
