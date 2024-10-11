import {ProjectStatuses} from "@shared/enums";
import {Tag} from "@entities/tag";
import {DateTime} from "luxon";

export interface Project {
	id: string;
	title: string;
	description: string;
	period: ProjectPeriod;
	status: ProjectStatuses;
	authorId: string;
	teamId: string;
	tags: Tag[];
}

export interface ProjectPeriod {
	start: DateTime;
	end: DateTime;
}