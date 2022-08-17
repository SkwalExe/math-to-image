const vscode = require('vscode');

const remote = "https://latex.codecogs.com/svg.image?";

function genHtml(url, style = null) {
    return `<img src="${url}" ${style ? "style=" + '"' + style + '"' : ""}/>`;
}

function renderMath(math, inline) {

    var defaultColor = vscode.workspace.getConfiguration().get('math-to-image.color') || 'White';
    var imgStyle = vscode.workspace.getConfiguration().get('math-to-image.style') || null;

    var encodedMath = encodeURIComponent(math);
    var url = remote + (inline ? "\\small%20" : "") + "\\color{" + defaultColor + "}" + encodedMath;
    return genHtml(url, imgStyle);

}

function activate(context) {

    vscode.CompletionItem("math-to-image", vscode.CompletionItemKind.Snippet).insertText = "$$$1$$";

    let disposable = vscode.commands.registerCommand('math-to-image.mathToImage', function () {
        var editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No editor is active.');
            return; // No open text editor
        }
        var selection = editor.selection;


        var text = editor.document.getText(selection);
        if (text.length == 0) {
            vscode.window.showErrorMessage('No text selected.');
            return;
        }

        var selectionStart = selection.start;
        var selectionEnd = selection.end;


        var oneLine = /^\$[\s\S]*[\S]+[\s\S]*\$$/;
        var multiLine = /^\$\$[\s\S]*[\S]+[\s\S]*\$\$$/;

        if (multiLine.test(text)) {

            var equation = text.split('\n').slice(1, -1).join('\n');
            editor.edit(function (editBuilder) {
                editBuilder.insert(selectionStart, '<!-- ');
                editBuilder.insert(selectionEnd, ' -->\n' + renderMath(equation, false));

            });
        } else if (oneLine.test(text)) {


            var equation = text.slice(1, -1).trim();
            editor.edit(function (editBuilder) {
                editBuilder.insert(selectionStart, ' <!-- ');
                editBuilder.insert(selectionEnd, ' --> ' + renderMath(equation, true));

            });

        } else {
            vscode.window.showErrorMessage('Selection doesn\'t starts and ends with $ or $$');
        }

    });

    context.subscriptions.push(disposable);
}

function deactivate() { }

module.exports = {
    activate,
    deactivate
}