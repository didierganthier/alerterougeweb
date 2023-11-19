// components/BloodRequestCard.tsx

import React from 'react';

interface BloodRequest {
    patientName: string;
    bloodType: string;
    urgency: string;
    dateTime: string;
}

interface BloodRequestCardProps {
    request: BloodRequest;
}

const BloodRequestCard: React.FC<BloodRequestCardProps> = ({ request }) => {
    const { patientName, bloodType, urgency, dateTime } = request;

    return (
        <div className="bg-white p-4 shadow-md rounded-md mb-4 flex">
            {/* Left Box for Blood Type and Urgency */}
            <div className="bg-gray-700 flex-shrink-0 rounded-xl mr-4">
                <div className="bg-gray-700 rounded-xl text-white text-center">
                    <div className='bg-red-500 rounded-b-2xl rounded-t-lg'>{urgency}</div>
                    <div className="text-6xl p-4 font-bold mb-1 bg-gray-700 rounded-md">{bloodType}</div>
                </div>
            </div>

            {/* Right Column for Name and Date */}
            <div>
                <h2 className="text-2xl font-semibold mb-2">{patientName}</h2>
                <p>{dateTime}</p>
                {/* Add other relevant information */}
                {/* <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-2">
          Donate Now
        </button> */}
            </div>
        </div>
    );
};

export default BloodRequestCard;
