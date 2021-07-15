import { App } from 'jovo-framework';
import { JovoDebugger } from 'jovo-plugin-debugger';
import { FileDb } from 'jovo-db-filedb';
import { GoogleAssistant } from 'jovo-platform-googleassistantconv';

// ------------------------------------------------------------------
// APP INITIALIZATION
// ------------------------------------------------------------------

const app = new App();

// prettier-ignore
app.use(
  new GoogleAssistant(),
  new JovoDebugger(),
  new FileDb(),
);

// ------------------------------------------------------------------
// APP LOGIC
// ------------------------------------------------------------------

app.setHandler({
	LAUNCH() {
		return this.toIntent('HelloWorldIntent');
	},

	HelloWorldIntent() {
		this.ask("Hello World! What's your name?", 'Please tell me your name.');
	},

	MyNameIsIntent() {
		// this.$googleAction!.htmlResponse({
		// 	data: {
		// 		state: 'MyNameIsIntent',
		// 		text: 'Hey ' + this.$inputs.name.value + ', nice to meet you!',
		// 	},
		// 	suppressMic: false,
		// 	url: 'https://linr.app/',
		// });

		this.tell('Hey ' + this.$inputs.name.value + ', nice to meet you!');
	},
});

export { app };
