# Проектная работа №12

Написана регистрация и авторизация в проект Mesto на «Реакте».

## Добавлено...

### 1. Созданы нужные роуты и описаны перенаправления

Вся функциональность приложения будет доступна только авторизованным пользователям

/sign-up — для регистрации пользователя.
/sign-in — для авторизации пользователя.

### 2. Сверстаны и добавлены необходимые компоненты

Login — компонент авторизации пользователя с необходимыми стейт-переменными.
Register — компонент регистрации пользователя с необходимыми стейт-переменными.
HOC ProtectedRoute — этим компонентом защищен роут /, чтобы на него не смогли перейти неавторизованные пользователи.
InfoTooltip — компонент модального окна,который информирует пользователя об успешной (или не очень) регистрации.

Реализована мобильная версия

### 3. Подключена основная функциональность сайта к нашему бэкенду

### 4. Реализована аутентификация пользователя

### 5. Реализована работа с локальным хранилищем и токеном

Настроена работа с localStorage так, чтобы токен сохранялся в нём и использовался при работе с сайтом.
При повторном визите пользователи не должны вновь авторизовываться.
