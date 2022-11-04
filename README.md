# Шабоны и исходники

1. Собранная верстка находиться в папке `app`
2. Для шаблонизации используется движок **twig**, исходники тут `source/html`

# Gulp 4 таск ранер

## Начало работы

1. Установить [Node.js](https://nodejs.org/en/) последнюю LTS версию
2. Обновить npm `npm install -g npm`
3. Установить [gulpjs 4](http://gulpjs.com/) `npm install -g gulp` и [browsersync](http://browsersync.io) `npm install -g browser-sync`
4. В консоли перейти в директорию с проектом с помощью команды cd путь/до/шаблона
5. Запустить команду npm install
6. После этого можно запустить дефолтную задачу командой gulp (в директории с шаблоном)

## Задачи

Все задачи находятся в папке [gulp/tasks](gulp/tasks), файл [gulp/app.js](gulp/app.js) отвечает за конфигурацию задач.

### Список задач

1. `npm run start` - стандартная задача, запускает сборку проекта, а так же отслеживание файлов и локальный сервер
2. `npm run build` - запускает только сборку проекта в css/js не добавляется карта исходников,
3. `npm run html` - файл [gulpfile.babel.js/tasks/html.js](gulpfile.babel.js/tasks/html.js) отвечает за сборку twig файлов, забирая исходники из этой папки **source/html**, собирает в один html файл и отправляет в папку **app**.
4. `npm run sass` - запускает генерацию из source/sass/*.scss файлов в css и отправляет их в папку **/css**, генерируются только файлы в корне и без префикса _ в имени (т.е. файл _test.scss останется нетронутым, а файл test.scss сгенерируется в файл test.css). Настройки сжатия генерируемых файлов находится в файле [gulpfile.babel.js/config/app.js](gulpfile.babel.js/config/app.js). Подробнее о типах сжатия на сайте [sass-lang.com](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#output_style). Так же в папке **/css/map** создается карта css (source map), она помогает найти где находятся css свойства в оригинальных scss файлах (поддержку карт нужно выключить в настройках инструментов разработчиков [Chrome](https://developer.chrome.com/devtools/docs/settings)/[FireFox](https://developer.mozilla.org/en-US/docs/Tools/Debugger/How_to/Use_a_source_map)), поэтому имеет смысл загружать на сервер и css и исходники scss.
5. `npm run images` - файл [gulpfile.babel.js/tasks/images.js](gulpfile.babel.js/tasks/images.js) отвечает за сжатие изображений, эта задаче берет файлы из папки **source/images/assets** сжимает их и переносит в папку **images/** структура папок сохраняется
6. `npm run sprite` - задача генерирует спрайты из svg в папке **source/images/sprite** и сохраняет их в папку **/images/** при этом генерирует файл с scss переменными в [source/sass/helpers/_sprite.scss](source/sass/helpers/_sprite.scss). Настройки в файле [gulpfile.babel.js/config/app.js](gulpfile.babel.js/config/app.js)
7. `npm run js` - задача генерирует javascript в dev режиме **source/js**
8. `npm run test` - задача запуска тестов Jest
8. `npm run test:watch` - задача запуска отслеживания тестов Jest
8. `npm run test:coverage` - задача запуска отображения покрытия тестов Jest