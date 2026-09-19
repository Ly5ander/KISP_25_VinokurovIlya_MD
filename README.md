# Конспект с Expo

## Структура и организация процессов
**Этапы жизненного цикла:** Вся документация разделена по шагам работы над приложением. Раздел **Develop** содержит инструменты для написания кода и навигации, **Review** отвечает за совместное тестирование, **Deploy** описывает публикацию в магазины, а **Monitor** отслеживает работу сервисов в продакшене.

**Формат для ИИ-агентов:** Текст страниц адаптирован для чтения языковыми моделями (LLM). Если добавить расширение *.md* к любому URL-адресу документации, она откроется в виде чистого Markdown-файла.

## Возможности платформы и SDK
**Универсальный код:** Разработчик пишет один проект на JavaScript/TypeScript, который работает на Android, iOS и в веб-браузерах.

**Файловый роутинг:** Модуль **Expo Router** строит навигацию между экранами приложения автоматически на основе структуры папок и файлов проекта.

**Компоненты SDK:** Платформа предоставляет встроенные модули для доступа к функциям устройств. В качестве примеров в документации выделены модули Image (изображения), **Camera** (камера) и **Notifications** (уведомления).

**Тестирование без установки:** Инструмент **Expo Snack** позволяет запускать и проверять код приложения прямо в браузере без настройки локального окружения.

## Интеграция с искусственным интеллектом (AI)
**Инструменты для агентов:** В документацию добавлен отдельный блок по работе с ИИ. Он содержит руководства по **Expo Skills**, **MCP Server**, готовые наборы инструментов (**Agent toolkits**) и разделы для интеграции с **LLM.**

**Примеры реализации:** На сайте представлены готовые проекты для изучения, среди которых есть пример интеграции **API Routes + Open AI.**

## Консольные команды и автоматизация (CLI)
*npx create-expo-app@latest* — Команда для создания и инициализации нового чистого проекта.

*npx testflight* — Эксклюзивная команда для iOS, которая загружает готовую сборку приложения на платформу TestFlight.

*npx eas-cli deploy* — Инструмент для развертывания и публикации веб-версии вашего приложения.

**Сервис EAS Workflows:** Используется для настройки автоматического CI/CD цикла, позволяя собирать и выпускать релизы напрямую через GitHub.


# Конспект Expo tutorial

## 1. Introduction (Введение)

**Expo** — это экосистема поверх React Native, упрощающая создание, сборку и развертывание кроссплатформенных приложений (Android, iOS, Web) из единой кодовой базы.

**Expo Go** — мобильное приложение-песочница для мгновенного тестирования кода на реальном устройстве через QR-код без локальной настройки Android Studio/Xcode.

import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


## 2. Create your first app (Создание первого приложения)

**Инициализация:** Проект создается командой *npx create-expo-app@latest*.

**Запуск сервера:** Команда *npx expo start* поднимает Metro Bundler и выводит QR-код в терминал.

**Архитектура:** По умолчанию современный шаблон создает структуру папки *src/app* для файлового роутинга.

1. Импорт *StyleSheet* от *react-native* и создать a *styles* Возражает, чтобы определить наши пользовательские стили.
2. Добавить a *styles.container.backgroundColor* собственность для *View* с ценностью #25292e. Это меняет цвет фона.
3. Заменить значение по умолчанию *Text* с "Домашний экран".
4. Добавить a *styles.text.color* собственность для *Text* с ценностью #fff (белый) для изменения цвета текста.

import { Text, View,  StyleSheet } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});


## 3. Add navigation (Добавление навигации)

### Добавить новый экран в стек
import { Text, View, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});

1. Добавить a *Stack.Screen /* Компонент и a *options* реквизит для обновления заголовка */about* Маршрут.
2. Обновить */index* Название маршрута на *Home* путем добавления *options* Прокв.

import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="about" options={{ title: 'About' }} />
    </Stack>
  );
}


### Навигация между экранами

1. Импортировать Link компонент из expo-router внутри src/app/index.tsx.
2. Добавить a Link компонент после Text компонент и пропуск href реквизит с /about Маршрут.
3. Добавить стиль fontSize, textDecorationLine, и color к Link компонент. Он принимает тот же реквизит, что и *Text* компонент.

import { Text, View, StyleSheet } from 'react-native';
 import { Link } from 'expo-router'; 

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home screen</Text>
      <Link href="/about" style={styles.button}>
        Go to About screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});


### Добавить не найденный маршрут

1. Создать новый файл с именем +not-found.tsx внутри src/приложение Каталог для добавления NotFoundScreen компонент.
2. Добавить options реквизит от Stack.Screen для отображения пользовательского заголовка экрана для этого маршрута.
3. Добавить a Link Компонент для перехода к / Маршрут, который является нашим запасным маршрутом.

import { View, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops! Not Found' }} />
      <View style={styles.container}>
        <Link href="/" style={styles.button}>
          Go back to Home screen!
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});




**Expo Router:** Файловая система определяет экраны (файл *index.tsx* равен пути */*).

**Stack Navigator:** Организует навигацию по принципу стопки карт (*Stack*). Каждый новый экран открывается поверх предыдущего свайпом или анимацией.

**Tab Navigator:** Реализует нижнюю панель вкладок. Для группировки папка оборачивается в круглые скобки (*tabs*), чтобы исключить её название из адресной строки URL.

**Компонент** *Link*: Используется для перехода: *Link href="/about">Перейти</Link*.

**404:** Файл *+not-found.tsx* перехватывает любые несуществующие маршруты.

## 4. Build a screen (Создание экрана)

**Базовые UI-компоненты:**
*View* — контейнер-блок (аналог *div* в веб-разработке).
*Text* — текстовый компонент (любая строка обязана быть внутри него).
*Pressable* или *TouchableOpacity* — компоненты-обертки для обработки нажатий.

**Стилизация:** Используется встроенный *StyleSheet.create()*. Стили основаны на модели **Flexbox**, где направление по умолчанию выставлено как *flexDirection:* *'column'* (вертикально).

## 5. Use an image picker (Использование Image Picker)

**Библиотека:** *expo-image-picker*.

**Доступ к галерее:** Требует асинхронного запроса разрешений у операционной системы: *typescriptconst [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();*

**Выбор фото:** Метод *launchImageLibraryAsync()* открывает системную галерею и возвращает объект с URI выбранного изображения для последующего отображения в компоненте *Image*.

## 6. Create a modal (Создание модального окна)

**Компонент *Modal*:** Стандартный компонент React Native для всплывающих окон поверх основного интерфейса.

**Управление:** Состояние видимости контролируется через логический стейт (например, *const [isVisible, setIsVisible] = useState(false))*.

**Свойства:** Атрибут *animationType="slide"* задает анимацию появления снизу, а *transparent={true}* позволяет делать полупрозрачный размытый или затемненный фон.

## 7. Add gestures (Добавление жестов)

**Инструментарий:** *react-native-gesture-handler* и *react-native-reanimated*.

**Связка компонентов:** Для работы жестов все приложение необходимо обернуть в *GestureHandlerRootView*.

**Реализация:** Компоненты вроде *PanGestureHandler* (для перетаскивания) или *TapGestureHandler* (для тапов) отслеживают координаты пальца, а Reanimated плавно обновляет положение объекта в обход основного потока JavaScript.

## 8. Take a screenshot (Создание скриншота)

**Библиотека:** *react-native-view-shot*.

**Принцип действия:** Компонент захватывает переданную область интерфейса (через *ref*) и конвертирует её в локальную ссылку-изображение (URI).

**Сохранение в галерею:** Полученный URI передается в модуль *expo-media-library* с помощью функции *MediaLibrary.saveToLibraryAsync(localUri)*.

## 9. Handle platform differences (Обработка межплатформенных различий)

**Модуль** *Platform:* Позволяет писать разветвления в коде в зависимости от ОС: *typescriptconst padding = Platform.OS === 'ios' ? 20 : 10;*

**Расширения файлов:** Metro автоматически выберет нужный файл, если дать ему специфичное расширение: *Button.ios.tsx*, *Button.android.tsx* или *Button.web.tsx.*

## 10. Configure status bar, splash screen and app icon (Настройка системных элементов)

**Status Bar:** Компонент *StatusBar style="light" /* управляет цветом системных иконок (время, батарея) в верхней части экрана.

**Конфигурация** (*app.json*): Глобальный файл настроек проекта, где задаются:
*icon* — квадратная иконка приложения (1024x1024px).
*splash* — параметры экрана загрузки (фоновый цвет и логотип).
*adaptiveIcon* — специфические настройки адаптивных иконок для Android.

## 11. Learning resources (Ресурсы для обучения)

**Дальнейшие шаги:**
Изучение **EAS (Expo Application Services)** для облачной сборки бинарников (*.apk*, *.aab*, *.ipa*) без наличия macOS.
Работа с нативными модулями через конфигурационные плагины (Config Plugins).
Интеграция с базами данных (SQLite, Firebase, Supabase).