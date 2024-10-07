# notes-vue-app

Приложение для работы с заметками, поддерживает следующие функции:

- просмотр таблицы заметок. Данные сохраняются в localStorage и получаются из него, если они есть;
  
- добавление новой заметки при нажатии на кнопку "Отправить";

    <details>
    <summary> 👀 Показать </summary>
    <p>
        <img src="https://github.com/user-attachments/assets/01844bb3-6291-4d09-ba97-803ddc5f660c" width='700'>
        <img src="https://github.com/user-attachments/assets/fef9f42c-e8d6-4f9a-8fb4-ffea71bb2b77" width='700'>
        <img src="https://github.com/user-attachments/assets/30ccc7f3-a732-45b3-b1a0-d6a8c5f82fb1"  width='700'>

    </p>
    </details>


- редактирование заметки по нажатию на кнопку "Редактировать". Кнопка не доступна если заметка помечена выполненной;


    <details>
    <summary> 👀 Показать </summary>
    <p>
        <img src="https://github.com/user-attachments/assets/3c2d1390-5955-4781-8587-281a3a62263f" width='700'>
        <img src="https://github.com/user-attachments/assets/16dba471-a9ca-4d10-9256-18a9e1e8cabb"  width='700'>
        <img src="https://github.com/user-attachments/assets/22c085e7-5b81-4652-a4ed-102fb515373a"  width='700'>
    </p>
    </details>
    
- удаление заметки;

- отметка заметки готовой (вычеркивается).

    <details>
    <summary> 👀 Показать </summary>
    <p>
        <img src="https://github.com/user-attachments/assets/1cec5a2e-a42f-4dc6-9e5c-a9b0774e68d7" width='700'>
        <img src="https://github.com/user-attachments/assets/750ea70b-9df4-4cc9-96e6-a112bb8cc194"  width='700'>
    </p>
    </details>


### Запуск приложения

```bash
cd notes-vue-app
npm i
npm run dev
```

Приложение будет доступно на `http://localhost:4001/notes-vue-app`
