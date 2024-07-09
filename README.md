# Задачи
Дизайнеры компании предоставили Вам макет первого экрана главной страницы в формате psd. \
https://yadi.sk/i/m5qDjh0Vf5vSug (формат psd выбран специально).


## Вам нужно сделать:
1. Сверстать первый экран главной страницы
2. Реализовать Front на Vue.js/React.js
3. Реализовать Back на Python Django (возможно реализовать на bitrix или wordpress, в таком случае Front на HTML/CSS. Больший приоритет будет отдаваться соискателям со стеком Vue.js/React.js Python Django)
4. Сделать адаптивную верстку для планшета и телефона. (Да, в PSD нет этих версий, Вы должны сами расставить элементы интерфейса так, чтобы все выглядело гармонично).
5. Через админ панель должна быть возможность редактировать контент блоков преимуществ и управлять пунктами меню.
5. Готовое задание загрузить с помощью формы по ссылке https://b24-iu5stq.bitrix24.site/send-test/?b24form_user=2.7745-1721114584-41d35a401080d30071137b175665b6a564bb98127d440271a8015d2973881024
(вам необходимо выгрузить результат на любой хостинг и отправить ссылку на развернутое на хостинге тестовое)

## О работе
 - Проект имеет отдельно загруженные шрифты (`spacex/frontend/src/fonts`)
 - Stack: TS, React, Django, DRF, Webpack 
 - в корне проекта необходимо создать файл `.env` и разместить `DJ_SECRET_KEY: < ключ от вашей CMS Django>`

API меню \
![Статиска](img/menu.png) 

Статичтика \
![Статиска](img/statistic.png)

Desctop страница \
![Статиска](img/page.png)

Mobill страница \
![Статиска](img/mobill.png)

### Чтоб развернуть проект комманд
 - `cd spacex/frontend`
 - `npm install package.json` или`yarn add package.json`
 - `yarn build` или `npm run build` сборка проекта.
 - `yarn server:front` или `npm run server:front` запускаем сервер для работы с фронтом.
 - `yarn watchs` или `npm run watchs` отслеживаем изменения файлов и перезапускаем сервер.
 -  `py manage.py makemigrations` & `py manage.py migrate` создаем базу данные.
 -  `py manage.py runserver` запускаем django.



Note: Если потребуется API `http://127.0.0.1:8000/api/v1/statistic/` 

#### Корректируем настройки для работы на фронт
##### Webpack
```js
    // сейчас
    output: {
        path: path.resolve(__dirname, '../static/spacex/javascripts'), 
        filename: 'main-[id]-[hash].js', // filename: 'main-[id]-[hash].js',
    
        clean: true,
    },

    // сделать
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main-[id]-[hash].js', // filename: 'main-[id]-[hash].js',
    
        clean: true,
  },
```

```js
    // сейчас
    {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: '../pic/[name][ext]',
        },
    },
    {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: '../fonts/[name][ext]'  // [hash][ext][query]'
        }
    },
    
    // сделать
    {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'pic/[name][ext]',
        },
    },
    {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'  // [hash][ext][query]'
        }
    },
    
```

```js
    // сейчас
    new MiniCssExtractPlugin({
        filename: '../css/style.css'
    }),
    
    // сделать
    new MiniCssExtractPlugin({
        filename: 'css/style.css'
    }),
```

CMD
    `ssh-keygen` - СОЗДАЕМ ПУБЛИЧНЫЙ + ПРИВАТНЫЙ КЛЮЧ ДЛЯ РАБОТЫ С СЕРВЕРОМ НА  ssl илли там ssh
        видим путь по умолчани (с найзванием файла ) где буте распологаться файл. (можно и указать свое расположение)
        При создании нудо будет ввести пароль (запросит) Можно и без пароля
        Ключ говорит, что подключение конкретно с нашего компа

    Копируем ключ (команда) / `id_rsa` и `id_rsa.pub` имя файла
    `cat ~/.ssh/id_rsa.pub`
    Копируем и ключ надо разместить на сервере
    - заказать/сохздать сервер (работаем с ubuntu)

    После добавления сервера на почту поступят доступы.
    В CMD подключаемся к серверу
    `ssh root@185.46.10.33` IP берем из почты Имя для рут берем из письмя

    Python проверяем версию `python3 --version`
    Git проверяем версию `Git --version`
    Далее устанавливаем
    Обновляем список доступных репозиторием для `apt` пакетного менеджера `sudo apt update` -
        обновляются места для установки нужных нам пакетов
    Подтягиваем самые последние версии `sudo apt upgrade` (минут 15-20 занимает)
    Для установки `venv` от python `sudo apt install python-venv`
    `sudo apt install python3-pip`
    `sudo apt install postgresql` По установки сработает запуск или руками `sudo systemctl start postgresql`. 
    Проверяем запустился ли. 
        `sudo systemctl status postgresql` Смотрим статус `Active` 
    
    Из GIT-репозитория (HTTPS-ссылка или на сервере настроить SSH и работать через него)  или проекта django на локальном столе
    В cmd проверяем место положение `pwd`
    `git clone < ссылка >` заходим в папку
    Создаем виртуальное окружение `python3 -m venv env` или  `python3.10 -m venv env`
        `python3.10` нужначя нам версия 
        `env` название/имя виртуального окружения
    `ls` команда чтоб видеть что создалось (похоже идим все файлы , типа `dir`)
    `source env/bin/activate` виртуального окружения активируем
    В `env` устанавливаем `pip install -r requirements.txt`
    Смотрим, что установилось из requirements.txt  `pip freeze`
    
    Далее надо создать БД
    `sudo su postgres` - переключились на юзера `postgres`
    Заходим в панел psql `psql`
        `CREATE USER <имя пользователя из системы который создавали (под которым работаем (root)) WITH SUPERUSER>
        `ALTER USER <имя нашего пользователя> WITH PASSWORD '123'`
        `CREATE DATABASE <для имени базы берем имя нашего пользователя (root)>`
        `\q` - выходим из psql так как все сделали тут
    `exit` выходим из самой БД возвращаемся к пользователю сервера
    Через пользователю сервера заходим в psql опять `psql
        `CREATE DATABASE < название базы данных для проектаю например - spacex>`
        `\q` - выходим из psql
    
    После настройки БД настраиваем settings
    `nano stocks_products/settings.py` открываем файл настроект django-проекта (клавиши CTR+S, CTR+X выйти)
   
```py
#  settings.py
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'spacex', # <указанное нами имя ДБ>,
        'USER': 'на юзер который создавали для БД',
        'PASSWORD': '123',   #'PASSWORD который создавали для БД',
        'HOST': '127.0.0.1',
        'PORT': '5432',
        # 'TEST': {
        #     'NAME': 'db_spacex_test'
        # }
    }
}

ALLOWED_HOSTS = ['185.46.10.33']

на кeg.ru (облачный хостинг)) проект для django 
superuser: spacex
PASS: spacex
```
    Далее делаем миграции `python manage.py migrate`
    Далее пробуем запустить сервер проекта `python manage.py runserver`

    Далее в браузере вставляем ip нашего сервера (может не работать значит запуск прошел на localhost)
    Note: кажется при timout  в 1 минуту сервер автоматом обрывает соединение
    Останавливаем (какойто) наш сервер. Переходим в папку проекта `ssh <пользователь для сервера>@185.46.10.33`
    `cd dj-homworks/<переходим в папку проекта>`
    Запускаем окружение `source env/bin/activate`
    Запускаем порект на новом IP `python manage.py runserver 0.0.0.0:8000
    Note: `fuser -k 8000/tcp` если забыли остановить проект и надо освободить нащ порт, просто убиваем процесс на нужном порту
    В браузере адрес `185.45.10.33.8000`

NOTE: Эта развертка на сервере 1. не безопаснаяб не поддерживает высокую нагрузку

    Вместо `root` создаем нового пользователя `adduser workaholic` (pfsw: 123 от workaholic)
    Команда `usermod  <имя нового пользователя> -aG sudo`
    `-aG` - права пользователя
    `sudo` - имя группы (группа супер юзеров)
    Переподключаемся под новым user ``ssh <имя нового полбхователя>@185.46.10.33``
    

    Если забыли указать ключ ssh. CMD `ls .shh/authorized_keys`
    `nano .shh/authorized_keys` - открыть через текстовый редактор. Открываем файл гже будут храница ключи хранящие доступ к файловому серверу
    Можно записать ключ для подключения к серверу `ssh-rsa ..ключ.. ...имя компьютера..`


```txt
(env) root@194-67-68-102:~/sagirov# nano /etc/systemd/system/gunicorn.service
```
```cmd
 GNU nano 6.2                              /etc/systemd/system/gunicorn.service                                       
[Unit]
Description=gunicorn service
After=network.target

[Service]
User=root
Group=www-data
WorkingDirectory=/root/sagirov
ExecStart=/root/sagirov/env/bin/gunicorn --access-logfile - \
 --workers=3 \
 --bind unix:/root/sagirov/project.sock project.wsgi:application

[Install]
WantedBy=multi-user.target
```

```txt
(env) root@194-67-68-102:~/sagirov# which gunicorn
(env) root@194-67-68-102:~/sagirov# sudo systemctl start gunicorn
(env) root@194-67-68-102:~/sagirov# sudo systemctl enable gunicorn
(env) root@194-67-68-102:~/sagirov# sudo systemctl status gunicorn

http://194.67.68.102:8000/
http://194.67.68.102:8000/admin/
L/: spacex
P/: spacex
C:\Users\tryd0\AppData\Local\Docker\wsl

ls > list.txt # все данные записываем в новый файл
cat < list.txt # берем данные из list.txt и направляем в cat
cat >> list.txt # добавили строки
Hallo word 


export SECKRET_KEY = 1 # задаем ГЛОБАЛЬНУЮ переменную пока не покинем cmd 
```



 nano /etc/systemd/system/gunicorn.service

Используйте команду which, чтобы найти путь к исполняемому файлу Gunicorn:
bash
which gunicorn
