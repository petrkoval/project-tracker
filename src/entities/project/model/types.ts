import {ProjectStatuses} from "@shared/enums";

export interface Project {
	id: string;
	title: string;
	description: string;
	period: {
		start: Date;
		end: Date;
	};
	status: ProjectStatuses;
	authorId: string;
	teamId: string;
}