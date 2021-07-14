// JOVO APP CONFIGURATION

// types
import { Config } from 'jovo-framework/dist/src/App';

const config: Config = {
	logging: true,

	intentMap: {
		'Default Fallback Intent': 'Unhandled',
	},

	db: {
		FileDb: {
			pathToFile: './../../db/db.json',
		},
	},
};

export = config; // MUST export config this way to keep db.json path correct
