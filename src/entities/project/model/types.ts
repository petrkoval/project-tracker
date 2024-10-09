import {ProjectStatuses} from "@shared/enums";
import {DateTime} from "luxon";

export interface Project {
	id: string;
	title: string;
	description: string;
	period: {
		start: DateTime;
		end: DateTime;
	};
	status: ProjectStatuses;
	authorId: string;
	teamId: string;
}