import React from 'react';

const Table = ({data}) => {
    // const {firstname,lastname, gamil} =user;
    return (

        <table className='border w-full text-center'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map(item => (
                        <tr key={item.id} item={item}>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.gmail}</td>

                        </tr>
                    ))
                }
            </tbody>
        </table>

    );
};

export default Table;