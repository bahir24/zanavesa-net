<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'wp-bez-zanavesa' );

/** Имя пользователя MySQL */
define( 'DB_USER', 'wp-admin' );

/** Пароль к базе данных MySQL */
define( 'DB_PASSWORD', 'aCc*EsKib3' );

/** Имя сервера MySQL */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '9x3QD1_N}x8S%%c!1~O$p)uK;4`hDC7fcja#woBvlL8O30nHe%Ih9GPYXI1q`!MX' );
define( 'SECURE_AUTH_KEY',  '#{%<fW1Fj<K3?KpTl.lSwkXM_qYSE-:YDVB*O8jLBju+tSd,Et}Il?g@W|-12~2q' );
define( 'LOGGED_IN_KEY',    'z<<9$p=ILkjAt[*G4u+tEQ],kIyi[Qe4<;Gbp$,xmm$=9?4MDj)RGyD,LlMTgNO;' );
define( 'NONCE_KEY',        'u@e82!X6u4<CsH0T{xZX4{3J+pK}XMNn7A:axb|q*kXtaNzh{Nr>muH+j|6R=(_p' );
define( 'AUTH_SALT',        'x?[,i/~$Mu}y$9,tI`3 (w_g%IN+fV75+O>|K[:RYK m~C4kMV|/sp&zm%zs;9B ' );
define( 'SECURE_AUTH_SALT', 'vmrg=02?nZk[-<|AaX0d@>%(!^Zt-VWrF_l/Ppb{i:Y+hLYZ%Fd>o6+H6i,Ci<G}' );
define( 'LOGGED_IN_SALT',   'GIb=ZJp ]VP|_GYs`XpN)l#{n-rh`Jd6_8$I1^J!=`kSm#=e40R%(BF}5o^jaFmy' );
define( 'NONCE_SALT',       'E)!!#m&8hQMTS]D!~vV@#~b|L/|`u#-=U2D]9wB?v@B~Ktsm#U/qJ!Oi-i&gs#Bt' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once( ABSPATH . 'wp-settings.php' );
