import App from '@/components/app/App.vue'
import AddNoteForm from '@/components/note-form/add-note-form.vue'
import NotesList from '@/components/notes-list/notes-list.vue'
import '@/styles/styles.scss'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.component('AddNoteForm', AddNoteForm).component('NotesList', NotesList)
app.mount('#app')
