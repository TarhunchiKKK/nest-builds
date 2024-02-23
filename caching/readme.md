В модуле persons используется кэщирование с помощью объекта Cache.

В модуле products используется кэширование с помощью CacheInterceptor.

Для использования Redis нужны пакеты:
-  redis@3.1.2
-  cache-manager-redis-store@2.0.0
С другими версиями этих пакетов не работало.

Перед запуском сервера нужно запустить Redis.

Запуск Redis:
``sudo service redis-server start``

Выключение Redis:
``sudo service redis-server stop``