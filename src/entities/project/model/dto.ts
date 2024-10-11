import {ProjectStatuses} from "@shared/enums";
import {Tag} from "@entities/tag";

export interface ProjectDTO {
	id: string;
	title: string;
	description: string;
	period: ProjectPeriodDTO;
	status: ProjectStatuses;
	author_id: string;
	team_id: string;
	tags: Tag[];
}

export interface ProjectPeriodDTO {
	start: number;
	end: number;
}