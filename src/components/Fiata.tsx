import React from 'react';
import fiata from '../assets/fiata-removebg-preview.png';

export default function Fiata() {
  return (
    <div>
        <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
               <img
                    src={fiata}
                    alt="FIATA - International  Federation of Freight Forwarders Associations"
                    className="h-20 w-auto mx-auto  p-3 rounded-full"
                  />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">FIATA Diploma in Freight Forwarding</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The Jordanian Logistics Association (JLA) offers the globally recognized FIATA Diploma in Freight Forwarding, 
              the world's leading qualification for logistics and transport professionals.
            </p>
          </div>
    </div>
  )
}
