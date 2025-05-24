import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Appointment = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [selectedDate, setSelectedDate] = useState(null);

    const onSubmit = (data) => {
        console.log({ ...data, date: selectedDate });
        alert('Appointment submitted successfully!');
    };

    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 bg-gray-100 p-6 rounded-lg shadow-lg">
            {/* Calendar Section */}
            <div className="w-full md:w-1/2">
                <h2 className="text-xl font-bold mb-4 text-center">Select a Date</h2>
                <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    inline
                    className="border rounded-lg"
                />
                {!selectedDate && <p className="text-red-500 text-sm mt-2 text-center">Date is required</p>}
            </div>

            {/* Form Section */}
            <div className="w-full md:w-1/2">
                <h2 className="text-xl font-bold mb-4 text-center">Book an Appointment</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Name</label>
                        <input
                            type="text"
                            {...register('name', { required: 'Name is required' })}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input
                            type="email"
                            {...register('email', { required: 'Email is required' })}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Message</label>
                        <textarea
                            {...register('message')}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="4"
                            placeholder="Enter your message (optional)"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Appointment;