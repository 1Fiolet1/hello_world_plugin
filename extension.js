const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    // Регистрация команды "hello-world.sayHello"
    let disposable = vscode.commands.registerCommand('hello-world.sayHello', function () {
        // Вывод "Hello World" в консоль и уведомление
        console.log('Hello World!');
        vscode.window.showInformationMessage('Hello World!');
    });

    // Добавление команды в подписки
    context.subscriptions.push(disposable);

    // Создание кнопки в нижней панели (Status Bar)
    const button = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    button.text = '$(megaphone) Hello World'; // Текст кнопки с иконкой
    button.tooltip = 'Click to say Hello World'; // Всплывающая подсказка
    button.command = 'hello-world.sayHello'; // Команда, вызываемая при нажатии
    button.show(); // Отображение кнопки
    context.subscriptions.push(button);

    // Вывод сообщения в консоль при активации расширения
    console.log('Hello World extension is now active!');
}

function deactivate() {
    console.log('Hello World extension is now deactivated.');
}

module.exports = {
    activate,
    deactivate
};
