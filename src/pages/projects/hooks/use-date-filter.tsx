import {Project, ProjectPeriod} from "@entities/project";
import {LuxonDatePicker} from "@shared/ui/date-picker";
import {Button, Flex, TableColumnType, Tooltip} from "antd";
import {Key} from "react";
import {DateTime} from "luxon";
import {FilterConfirmProps} from "antd/es/table/interface";
import {AiOutlineCalendar} from "react-icons/ai";
import {IoMdInformationCircle} from "react-icons/io";

const {RangePicker} = LuxonDatePicker;

type RangePickerState = [DateTime | null, DateTime | null];

const parseFilterKeyToDate = (key: Key): RangePickerState => {
	const keys = JSON.parse(key as string) as [number | null, number | null];
	return keys.map(d => d ? DateTime.fromMillis(d) : d) as RangePickerState;
};

export function useDateFilter() {
	return function (dataIndex: keyof ProjectPeriod): TableColumnType<Project> {

		const handleReset = (
			setSelectedKeys: (selectedKeys: Key[]) => void,
			confirm: (param?: FilterConfirmProps) => void,
			clearFilters?: () => void
		) => {
			clearFilters && clearFilters();
			setSelectedKeys([]);
			confirm({closeDropdown: true});
		}

		const handleDatePickerChange = (setSelectedKeys: (selectedKeys: Key[]) => void, state: RangePickerState | null) => {
			if (state) {
				const range = state.map(d => d?.toMillis() ?? null);
				const key = JSON.stringify(range);
				setSelectedKeys([key]);
			} else {
				setSelectedKeys([]);
			}
		}

		return {
			filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => (
				<div style={{padding: 8}} onKeyDown={e => e.stopPropagation()}>
					<Flex justify="space-between" align="center">
						<Button type="link"
								onClick={() => handleReset(setSelectedKeys, confirm, clearFilters)}>Сбросить</Button>
						<Button type="link" onClick={() => confirm()}>Применить</Button>
						<Tooltip title="Можно оставить одно из полей пустым">
							<IoMdInformationCircle style={{cursor: 'pointer'}}/>
						</Tooltip>
					</Flex>
					<RangePicker
						placeholder={['От', 'До']}
						onChange={state => handleDatePickerChange(setSelectedKeys, state as RangePickerState | null)}
						allowEmpty={[true, true]}
						value={selectedKeys[0] ? parseFilterKeyToDate(selectedKeys[0]) : [null, null]}/>

				</div>
			),
			onFilter: (value, record) => {
				const [start, end] = parseFilterKeyToDate(value as string);

				if (start && end) {
					return record.period[dataIndex] > start && record.period[dataIndex] < end;
				} else if (start && !end) {
					return record.period[dataIndex] > start;
				} else if (!start && end) {
					return record.period[dataIndex] < end;
				} else return true;
			},
			filterIcon: <AiOutlineCalendar size="1rem"/>
		}
	}
}