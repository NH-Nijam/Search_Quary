'use client'
import React, { useState } from 'react';
import { Users } from '../../public/Users'
import Table from './Table';
const SearchQuary = () => {
    const [quary, setQuary] = useState('')
    const keys = ["firstName", "lastName", "gmail"]
    const Seacrch = (data) => {
        return data.filter((item) =>
            keys.some((key) => item[key].toLowerCase().includes(quary))
        )
    }
    return (
        <div className='mt-20 '>
            <div className='w-full flex justify-center mb-10'>
                <input type="text" placeholder='Search.....' className=' py-2 px-5 ' onChange={e => setQuary(e.target.value)} />
            </div>
            <Table data={Seacrch(Users)} />
        </div>
    );
};

export default SearchQuary;