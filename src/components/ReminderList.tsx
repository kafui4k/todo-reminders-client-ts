import React from 'react';

import Reminder from '../models/reminder';

interface ReminderListProps {
    items: Reminder[];
    onRemoveReminder: (id: number) => void;
}

function ReminderList({items, onRemoveReminder}: ReminderListProps) {
    return (
        <div>
            <ul className='list-group'>
                {items.map((item) => (
                    <li className='list-group-item' key={item.id}>
                        {item.title}
                        <button
                            className='btn btn-outline-danger mx-2 rounded-pill'
                            onClick={() => onRemoveReminder(item.id)}
                        >
                            delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ReminderList;
