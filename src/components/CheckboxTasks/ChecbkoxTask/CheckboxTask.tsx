import React, { useState } from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { parseTrelloDateToCalendarDate } from "../../../helpers/utils";

interface CheckboxTaskProps {
    task: any,
    key?: number,
    onChange: any
}

const CheckboxTask: React.FC<CheckboxTaskProps> = ({
    task,
    key,
    onChange
}) => {

    const [state, setState] = useState(task.state);

    const handleChange = (event: any) => {
        const newState = event.target.checked ? "complete" : "incomplete";
        setState(newState);
        onChange(task.idCard, task.id, newState);
    };

    console.log(task)

    return (
        <>
            {task &&
            <div key={key} className="flex justify-between items-center">
                <div>
                    <FormControlLabel 
                        control={<Checkbox defaultChecked={state === "complete" ? true : false} />} 
                        label={task.name}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    {parseTrelloDateToCalendarDate(task.due)}
                </div>
            </div>
            }
        </>
    )
}

export default CheckboxTask;