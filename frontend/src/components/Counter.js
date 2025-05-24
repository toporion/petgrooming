import React, { useEffect, useState } from 'react';
import counterImg from '../assets/groomax-counter.jpg';

const Counter = () => {
    const stats = [
        { id: 1, label: 'Happy Clients', target: 1500 },
        { id: 2, label: 'Pets Groomed', target: 3000 },
        { id: 3, label: 'Years of Experience', target: 10 },
        { id: 4, label: 'Awards Won', target: 25 },
    ];

    const [counts, setCounts] = useState(stats.map(() => 0));

    useEffect(() => {
        const intervalIds = stats.map((stat, index) => {
            const increment = Math.ceil(stat.target / 100); // Increment value
            return setInterval(() => {
                setCounts((prevCounts) => {
                    const newCounts = [...prevCounts];
                    if (newCounts[index] < stat.target) {
                        newCounts[index] = Math.min(newCounts[index] + increment, stat.target);
                    }
                    return newCounts;
                });
            }, 30); // Animation speed
        });

        return () => {
            intervalIds.forEach((id) => clearInterval(id));
        };
    }, [stats]);

    return (
        <div
            className="w-full bg-cover bg-center py-20"
            style={{ backgroundImage: `url(${counterImg})` }}
        >
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-black">
                {stats.map((stat, index) => (
                    <div
                        key={stat.id}
                        className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg"
                    >
                        <p className="text-5xl font-bold">{counts[index]}</p>
                        <p className="text-lg font-semibold mt-2">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Counter;