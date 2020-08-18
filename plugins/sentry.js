import Vue from 'vue';
import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';

export default function ({ app, isDev }) {
	if (!isDev) {
		Raven
			.config('https://e81ca568b8f24db6992d89f5f332f2b5@sentry.****.com/76')
			.addPlugin(RavenVue, Vue)
			.install();
	}
}