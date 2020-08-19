import Vue from 'vue';
import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';

export default function ({ app, isDev }) {
	if (!isDev) {
		Raven
			.config('https://f06d6a9f35dd42808fcb297ebb9f499c@sentry.io/2693467')
			.addPlugin(RavenVue, Vue)
			.install();
	}
}