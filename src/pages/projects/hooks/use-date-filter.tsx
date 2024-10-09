import {Project, ProjectPeriod} from "@entities/project";
import {LuxonDatePicker} from "@shared/ui/date-picker";
import {Button, Flex, Select, Space, TableColumnType} from "antd";
import {Key, useState} from "react";
import {DateTime} from "luxon";
import {FilterConfirmProps} from "antd/es/table/interface";
import {AiOutlineCalendar} from "react-icons/ai";

enum SelectOptions {
	before,
	after,
	equals
}

const options = [
	{
		value: SelectOptions.before,
		label: 'До'
	},
	{
		value: SelectOptions.after,
		label: 'После'
	},
	{
		value: SelectOptions.equals,
		label: 'Равно'
	},
];

export function useDateFilter() {
	return function (dataIndex: keyof ProjectPeriod): TableColumnType<Project> {
		const [date, setDate] = useState<DateTime | null>(null);
		const [selectOption, setSelectOption] = useState(SelectOptions.after);

		const handleReset = (
			confirm: (param?: FilterConfirmProps) => void,
			clearFilters?: () => void
		) => {
			clearFilters && clearFilters();
			setDate(null);
			confirm({closeDropdown: true});
		}

		const handleSelectChange = (value: SelectOptions) => {
			setSelectOption(value);
		}

		const handleDatePickerChange = (setSelectedKeys: (selectedKeys: Key[]) => void, date: DateTime) => {
			if (date) setSelectedKeys([date.toMillis()]);
			setDate(date);
		}

		return {
			filterDropdown: ({setSelectedKeys, confirm, clearFilters}) => (
				<div style={{padding: 8}} onKeyDown={e => e.stopPropagation()}>
					<Space.Compact block>
						<LuxonDatePicker onChange={date => handleDatePickerChange(setSelectedKeys, date)}
										 value={date}
										 placeholder="Введите дату"/>
						<Select options={options} onChange={handleSelectChange} value={selectOption}/>
					</Space.Compact>
					<Flex justify="space-between">
						<Button type="link" onClick={() => confirm()}>Применить</Button>
						<Button type="link" onClick={() => handleReset(confirm, clearFilters)}>Сбросить</Button>
					</Flex>
				</div>
			),
			onFilter: (value, record) => {
				switch (selectOption) {
					case SelectOptions.after:
						return record.period[dataIndex] > DateTime.fromMillis(value as number);
					case SelectOptions.before:
						return record.period[dataIndex] < DateTime.fromMillis(value as number);
					case SelectOptions.equals:
						return +record.period[dataIndex].startOf('day') === value;
				}
			},
			filterIcon: <AiOutlineCalendar size="1rem"/>
		}
	}
}