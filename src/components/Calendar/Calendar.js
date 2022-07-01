import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calendar = () => {
    return (
        <div className='my-5'>
            <div className='flex flex-col justify-center items-center'>
                <DayPicker />
            </div>
        </div>
    );
};

export default Calendar;