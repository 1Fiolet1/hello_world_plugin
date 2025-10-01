const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    let disposable = vscode.commands.registerCommand('hello-world.sayHello', function () {
        console.log('Hello World!');
        vscode.window.showInformationMessage('Hello World!');
    });

    context.subscriptions.push(disposable);

    const button = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    button.text = '$(megaphone) Hello World';
    button.tooltip = 'Click to say Hello World';
    button.command = 'hello-world.sayHello';
    button.show();
    context.subscriptions.push(button);

    
    console.log('Hello World extension is now active!');
}

function deactivate() {
    console.log('Hello World extension is now deactivated.');
}

module.exports = {
    activate,
    deactivate
};

