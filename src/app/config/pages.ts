import { ConfigModel } from '../core/interfaces/config';

export class PagesConfig implements ConfigModel {
	public config: any = {};

	constructor() {
		this.config = {
			'/': {
				page: {
					title: 'Dashboard',
					desc: 'Latest updates and statistic charts'
				}
			},
			socios: {
				am: {
					page: { title: 'Guardar', desc: '' }
				},
				tabla: {
					page: { title: 'Baja-Modificacion', desc: '' }
				}
			},
			'user-management': {
				page: { title: 'User Management', desc: '' }
			},
			'audit-log': {
				page: { title: 'Audit Log', desc: '' }
			},
			builder: {
				page: { title: 'Layout Builder', desc: 'Layout builder' }
			},
			header: {
				actions: {
					page: { title: 'Actions', desc: 'actions example page' }
				}
			},
			profile: {
				page: { title: 'User Profile', desc: '' }
			},
			404: {
				page: { title: '404 Not Found', desc: '', subheader: false }
			}
		};
	}
}
