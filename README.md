#### Привет, здесь задание Миколае Ариона для **Avito Tech**!

--- 

## Запуск приложение

```bash
$ cd server
$ npm run start
```

--- 

## Есть пару моментов, которые хочется сразу сообщить:

- Язык сайта - английский (в задании не указано)
- в папке client - React приложение, а в server - Nest приложение.
- Nest приложение раздает статику и запускается на 3001 порту (апи доступно по :3001/api)

---

## Выполненные задания + пояснения в скобках рядом

### Главная страница

- Показывает игры
    - Игры можно отфильтровать по платформе и жанру (например, шутер)
    - Игры можно отсортировать по дате релиза, популярности и тд
- Каждая игра в списке содержит:
    - название
    - дата релиза (в российском формате)
    - издатель
    - жанр
    - картинка
- По клику на игру происходит переход на страницу игры
- На загрузку игр показывать индикатор загрузки **(skeleton)**
- Если не получилось получить данные, необходимо сообщить пользователю

### Страница игры

- Должна содержать (в любом порядке/виде):
    - название
    - дата релиза (в российском формате)
    - издатель
    - разработчик
    - жанр
    - картинка/постер
    - карусель скриншотов
    - системные требования
- На странице должна быть кнопка для возврата к списку игр
- На загрузку игры показывать индикатор загрузки **(skeleton)**
- Если не получилось получить данные, необходимо сообщить пользователю

## Технические требования

- С приложением должно быть удобно работать, как с мобильного экрана, так и с десктопа (адаптивный интерфейс)
- Приложение разработано с помощью React 18+ и Redux / Redux Toolkit **(использовал RTK)**
- Использован [Free-To-Play Games API](https://www.freetogame.com/api-doc) (не важно с или без CORS). Вызовы API и
  обработка данных от него производятся напрямую с фронтенда (кроме случая, если вы сделаете опциональное задание про
  Node.JS). **(Сделано задание с сервером)**
- Роутинг выполнен с использованием [React Router v6](https://reactrouter.com/en/main)
- Фреймворк UI любой на ваше усмотрение (
  например, [Ant Design](https://ant.design/), [Semantic UI](https://react.semantic-ui.com/), [Element UI](http://elemental-ui.com/))
  **(использовал Ant Design)**
- Пакетный менеджер `npm`
- Приложение должно запускаться по адресу `localhost:3001` командой `npm start` **(React приложение и Nest приложение
  запускаются на localhost:3001)**
- При переходах по ссылкам страница не перезагружается
- Если карточка игры была открыта, то она должна быть доступна при последующих открытиях (перезагрузках) страницы без
  дополнительного запроса в течение 5 минут
- Исходный код решения должен быть выложен с вашего аккаунта на [Github](http://github.com/)

## Опциональные задания

- Использование TypeScript
- Учитывать, что список игр может содержать тысячи тайтлов
- При неудачном запросе должно быть три попытки повторного запроса
- При переходе со страницы на страницу запросы, относящиеся к старой странице, должны прерываться (
  отменяться/прекращаться)
- Бэкенд для хостинга статики и API для инкапсуляции внешних запросов на Node.JS
- Покрытие кода юнит-тестами