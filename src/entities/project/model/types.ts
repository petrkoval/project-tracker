import {ProjectStatuses} from "@shared/enums";
import {DateTime} from "luxon";

export interface Project {
	id: string;
	title: string;
	description: string;
	period: ProjectPeriod;
	status: ProjectStatuses;
	authorId: string;
	teamId: string;
}

export interface ProjectPeriod {
	start: DateTime;
	end: DateTime;
}