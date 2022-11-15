// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

const langOptions = require('./languageOptions');
const voiceOptions = require('./voiceOptions');
const styleOptions = require('./styleOptions');
const emphasisOptions = require('./emphasisOptions');
const cmds = require('./commands');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
 function activate(context) {
	const commands = vscode.commands;
	const window = vscode.window;

	console.log('Congratulations, your extension "Azure-ssml-tags" is now active! 🎉');

	for (const { command, tag, close } of cmds.simple) {
	context.subscriptions.push(
		commands.registerCommand(command, function () {
				surroundWith(tag, close);
			})
		);
	};

	const breakCmd = commands.registerCommand('extension.ssml-break', function () {
		presentInputNumberBox(function(selection) {
			selection && surroundWith(`<break time="${selection}ms" />`, '');
		});
	});
	context.subscriptions.push(breakCmd);

	const voice = commands.registerCommand('extension.ssml-voice', function () {
		presentOptions(voiceOptions, function({ selection, quickPick }) {
			surroundWith(`<voice name="${selection}">\n`, `\n</voice>`);
			quickPick.hide();
		});
	});	
	context.subscriptions.push(voice);
	
	const emphasis = commands.registerCommand('extension.ssml-emphasis', function () {
		presentOptions(emphasisOptions, function({ selection, quickPick }) {
			surroundWith(`<emphasis level="${selection}">`, `</emphasis>`);
			quickPick.hide();
		});
	});	
	context.subscriptions.push(emphasis);

	const style = commands.registerCommand('extension.ssml-style', function () {
		presentOptions(styleOptions, function({ selection, quickPick }) {
			surroundWith(`<mstts:express-as style="${selection}" styledegree="0">`, `</mstts:express-as>`);
			quickPick.hide();
		});
	});
	context.subscriptions.push(style);

	const lang = commands.registerCommand('extension.ssml-lang', function () {
		presentOptions(langOptions, function({ selection, quickPick }) {
			surroundWith(`<lang xml:lang="${selection}">`, `</lang>`);
			quickPick.hide();
		});
	});
	context.subscriptions.push(lang);


	function surroundWith(tag, closeTag) {
		const editor = vscode.window.activeTextEditor;
		const selections = editor.selections;

		const selectedTexts = selections.map(s => editor.document.getText(s));
		const logs = selectedTexts.map(s => `${tag}${s}${closeTag}`);

		editor.edit(editBuilder => {
			for (let i = 0; i < selectedTexts.length; i++) {
				editBuilder.replace(selections[i], logs[i]);
			}
		});
	};

	function presentInputNumberBox(callback) {
		window.showInputBox({
			value: '',
			placeHolder: 'time in seconds',
			validateInput: text => Number(text) ? null : 'must be a number',
		}).then(callback);
	};

	// function presentInputBox(callback) {
	// 	window.showInputBox().then(callback);
	// };

	function presentOptions(options, callback) {
		const quickPick = window.createQuickPick();
		quickPick.items = options.map(label => ({ label }));
		quickPick.onDidChangeSelection(selected => {
			callback({ selection: selected[0].label, quickPick });
		});
		quickPick.onDidHide(() => quickPick.dispose());
		quickPick.show();
	};
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
