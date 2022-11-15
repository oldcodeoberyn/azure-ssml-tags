# ssml-tags


Speed up the format of ssml docs. Just select any text and `cmd + p` > `{command}` to surround text with propper ssml tags.

Select HTML as the language for the file for more pleasure.

## Available commands
`SSML: speak`: Surrounds selected text with `speak` tags.

`SSML: voice`: Surrounds selected text with `voice` tags with available options. [only provide `zh-CN` options now, could edit voiceOptions.js to add other options]

`SSML: style`: Surrounds selected text with `style` tags with available options. 

`SSML: prosody`: Surrounds selected text with `style` tags with `volume`, `rate`, `pitch`. 

`SSML: emphasis`: Surrounds selected text with `emphasis` of choice .

`SSML: p`: Surrounds selected text with `p` tags.

`SSML: s`: Surrounds selected text with `s` tags.

`SSML: break`: Inserts single tag of break, allows to input duration in seconds.

`SSML: lang`: Surrounds selected text with language of choice.

`SSML: audio`: Surrounds selected text with `audio` tags. 




## Release Notes


Uses SSML Specs from [Azure Cognitive-services](https://learn.microsoft.com/en-us/azure/cognitive-services/speech-service/speech-synthesis-markup)

### 0.0.1
Initial release
Support speak, voice, style, prosdy, break, p, s, emphasis, lang, audio tags
Support multiple selections
