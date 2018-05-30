import React from 'react';

class WelcomeText extends React.Component{
    render(){
        return  <div class="span12" id="divMain">

                    <h1>Добро пожаловать</h1>

                    <p><strong>Привет пользователь,</strong> Добро пожаловать на мою первую СПА страницу созданую с помощью библиотеки джаваскрипт - Реакт Дж С..</p>
                    
                    <p>Даная страница являеться тестовой и создана для проверки навіков на практике в использование єтого прекрасного фреймворвка </p>

                    <hr style={ {margin: "45px 0 35px"} } />

        </div>
    }
}

export default WelcomeText;