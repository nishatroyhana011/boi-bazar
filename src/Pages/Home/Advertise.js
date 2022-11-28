import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertiseCard from '../cards/AdvertiseCard';

const Advertise = () => {

    const { data: Advertise = [], } = useQuery({
        queryKey: ['allbooks'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allbooks`)
            const data = await res.json()
            return data;
        }
    })

    return (

        <div className='my-20'>
            {
                Advertise.length ? <>
                    <h1 className="text-5xl text-orange-600 font-bold">Newly Arrived!</h1>
                    <hr className='w-1/12 mx-auto mb-10 mt-5' />
                    <div className='grid grid-cols-3 m-12 mx-auto gap-4 w-5/6'>
                        {
                            Advertise.map(book => <AdvertiseCard book={book} key={book._id}></AdvertiseCard>)
                        }
                    </div>
                </> : <>
                <div></div>
                </>
            }

        </div>
    );
};

export default Advertise;