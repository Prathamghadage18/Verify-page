'use client';

import React, { useEffect, useState } from 'react';
import { MdMarkEmailRead } from 'react-icons/md'; // React Icon for the email checkmark icon

const FinalStep: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures the component only runs on the client side
  }, []);

  if (!isClient) {
    return null; // Returns nothing during SSR
  }

  return (
    <div
      style={{
        background: 'radial-gradient(circle at top, #192841, #10162F 75%)',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '500px',
          padding: '30px',
          borderRadius: '20px',
          background: 'linear-gradient(180deg, rgba(10, 23, 50, 0.9) 0%, rgba(20, 32, 60, 0.6) 100%)',
          boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.25)',
          backdropFilter: 'blur(12px)',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Text Section */}
        <div>
          <h1
            style={{
              color: '#FFFFFF',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '28px',
              fontWeight: 600,
              marginBottom: '10px',
            }}
          >
            One last step!
          </h1>
          <p
            style={{
              color: '#A5A9B8',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '16px',
              lineHeight: '1.5',
              marginBottom: '20px',
            }}
          >
            Make sure to sign up before you get your result. <br />
            We promise it won’t take long.
          </p>
          <button
            style={{
              padding: '10px 20px',
              border: 'none',
              borderRadius: '10px',
              background: 'linear-gradient(90deg, #6A5AF9, #00D1FF)',
              color: '#FFFFFF',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '16px',
              fontWeight: 500,
              cursor: 'pointer',
              transition: '0.3s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'linear-gradient(90deg, #4D48D9, #00AEDD)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'linear-gradient(90deg, #6A5AF9, #00D1FF)';
            }}
          >
            Take me in
          </button>
        </div>

        {/* Icon Section */}
        <div>
          <MdMarkEmailRead
            size={80}
            style={{
              color: '#00FF85',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '15px',
              padding: '10px',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FinalStep;


