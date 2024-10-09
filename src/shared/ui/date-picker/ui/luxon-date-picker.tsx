import {DatePicker} from "antd";
import {DateTime} from "luxon";
import luxonGenerateConfig from 'rc-picker/lib/generate/luxon';

export const LuxonDatePicker = DatePicker.generatePicker<DateTime>(luxonGenerateConfig);
