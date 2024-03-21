// Вы разрабатываете веб-страницу для отображения расписания занятий в спортивном клубе. Каждое занятие имеет название, время проведения, максимальное количество участников и текущее количество записанных участников.

// 1. Создайте веб-страницу с заголовком "Расписание занятий" и областью для отображения занятий.

// 2. Загрузите информацию о занятиях из предоставленных JSON-данных. Каждое занятие должно отображаться на странице с указанием его названия, времени проведения, максимального количества участников и текущего количества записанных участников.

// 3. Пользователь может нажать на кнопку "Записаться" для записи на занятие. Если максимальное количество участников уже достигнуто, кнопка "Записаться" становится неактивной.

// 4. После успешной записи пользователя на занятие, обновите количество записанных участников и состояние кнопки "Записаться".

// 5. Запись пользователя на занятие можно отменить путем нажатия на кнопку "Отменить запись". После отмены записи, обновите количество записанных участников и состояние кнопки.

// 6. Все изменения (запись, отмена записи) должны сохраняться и отображаться в реальном времени на странице.

// 7. При разработке используйте Bootstrap для стилизации элементов.

const classesData = [
    {
        name: 'CrossFit',
        time: '14:00',
        max: 6,
        current: 5
    },
    {
        name: 'INTERVAL TRAINING',
        time: '16:00',
        max: 12,
        current: 10
    },
    {
        name: 'Step',
        time: '18:00',
        max: 10,
        current: 10
    }
]

let listClasses = document.querySelector('.classes');

classesData.forEach(data => {
    const item =  createElement(data.name, data.time, data.max, data.current);
    listClasses.append(item);
})

function createElement(name, time, max, current) {
    const li = document.createElement('li');

    const liName = document.createElement('h2');
    liName.textContent = name;

    const liTime = document.createElement('h3');
    liTime.textContent = time;

    const liMax = document.createElement('p');
    liMax.classList.add('max');
    const liMaxText = document.createElement('p');
    liMaxText.textContent = 'Максимальное количество участников:';
    liMax.textContent = max;

    const liCurrent = document.createElement('p');
    liCurrent.classList.add('current');
    const liCurrentText = document.createElement('p');
    liCurrentText.textContent = 'Текущее количество участников:';
    liCurrent.textContent = current;

    const signUp = document.createElement('button');
    signUp.classList.add('signUp');
    signUp.textContent = 'Записаться';

    const cancel = document.createElement('button');
    cancel.classList.add('cancel');
    cancel.textContent = 'Отменить запись';

    li.append(liName);
    li.append(liTime);
    li.append(liMaxText);
    li.append(liMax);
    li.append(liCurrentText);
    li.append(liCurrent);

    if (liMax.textContent == liCurrent.textContent) {
        signUp.disabled = true;
        cancel.disabled = true;
        const newError = document.createElement('h3');
        newError.textContent = 'Все места заняты. Запись недоступна!';
        li.append(newError);
    }

    li.append(signUp);
    li.append(cancel);
    
    return li;
}

listClasses.addEventListener('click', event => {
    if(event.target.textContent === 'Записаться') {
        const item = event.target.closest('li');
        const current = item.querySelector('.current');
        const signUp = item.querySelector('.signUp');
        const cancel = item.querySelector('.cancel');

        current.textContent++;
        signUp.disabled = true;
        cancel.disabled = false;
    }

    if(event.target.textContent === 'Отменить запись') {
        const item = event.target.closest('li');
        const current = item.querySelector('.current');
        const signUp = item.querySelector('.signUp');
        const cancel = item.querySelector('.cancel');
        current.textContent--;
        signUp.disabled = false;
        cancel.disabled = true;
    }
})


