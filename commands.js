module.exports = {
  simple: [
		{
			command: 'extension.ssml-speak',
			tag: '<speak  version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="https://www.w3.org/2001/mstts" xml:lang="en-US">\n',
			close: '\n</speak>',
		},
		{
			command: 'extension.ssml-p',
			tag: '<p>',
			close: '</p>',
		},
		{
			command: 'extension.ssml-s',
			tag: '<s>',
			close: '</s>',
		},
		{
			command: 'extension.ssml-prosody',
			tag: '<prosody volume="+0.00%" rate="+0.00%" pitch="default">\n',
			close: '\n</prosody>',
		},
		{
			command: 'extension.ssml-audio',
			tag: '<audio src="https://contoso.com/opinionprompt.wav"/>',
			close: '',
		},
		
	],
}