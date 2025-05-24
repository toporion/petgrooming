import React from 'react';
import member1 from '../assets/member1.jpg';
import member2 from '../assets/member2.jpg';
import member3 from '../assets/member3.jpg';
import member4 from '../assets/member4.jpg';

const OurTeam = () => {
    const teamMembers = [
        { name: "John Doe", image: member1 },
        { name: "Jane Smith", image: member2 },
        { name: "Mike Johnson", image: member3 },
        { name: "Emily Davis", image: member4 },
    ];

    return (
        <div>
            <div>
                <h1 className="text-4xl font-bold text-center mt-16">Meet Our Team</h1>
                <p className="text-center text-lg mb-8">
                    We are a team of passionate pet lovers dedicated to providing the best care for your furry friends.
                </p>
            </div>
            <div className="flex justify-center gap-8 flex-wrap">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="relative group w-60 h-60 rounded-lg overflow-hidden shadow-lg"
                    >
                        {/* Member Image */}
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                        />
                        {/* Hover Effect */}
                        <div className="absolute inset-0 bg-yellow-500 bg-opacity-70 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                            <p className="text-white text-lg font-bold animate-bounce">
                                {member.name}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurTeam;