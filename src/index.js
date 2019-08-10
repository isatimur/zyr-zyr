import 'core-js/features/map';
import 'core-js/features/set';
import React from 'react';
import ReactDOM from 'react-dom';
import connect from '@vkontakte/vkui-connect';
import App from './App';
import { IS_PLATFORM_IOS, IS_PLATFORM_ANDROID } from '@vkontakte/vkui';

if (IS_PLATFORM_IOS) {
    console.log('Это iPhone!');
} else if (IS_PLATFORM_ANDROID) {
    console.log('Это Android!');
}
// import registerServiceWorker from './sw';

// Init VK  Mini App
connect.send('VKWebAppInit', {});
// Подписывается на события, отправленные нативным клиентом
connect.subscribe((e) => console.log(e));
// Проверяет наличие события
if (connect.supports("VKWebAppResizeWindow"))
// Проверяет, поддерживается ли событие на текущей платформе.
{
    connect.send("VKWebAppResizeWindow", {"width": 800, "height": 1000});
}
// Если вы хотите, чтобы ваше веб-приложение работало в оффлайне и загружалось быстрее,
// расскомментируйте строку с registerServiceWorker();
// Но не забывайте, что на данный момент у технологии есть достаточно подводных камней
// Подробнее про сервис воркеры можно почитать тут — https://vk.cc/8MHpmT
// registerServiceWorker();

ReactDOM.render(<App />, document.getElementById('root'));
