'use client';

import React, { useState, useEffect } from 'react';

const Verifying: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isClient, setIsClient] = useState(false);

  // Ensure client-side rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Simulate progress for the progress bar
  useEffect(() => {
    if (!isClient) return; // Avoid running progress logic on the server

    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 5 : 100));
    }, 150);

    return () => clearInterval(interval);
  }, [isClient]);

  return (
    <div
      style={{
        background: 'radial-gradient(circle at top, #192841, #10162F 75%)',
        minHeight: '100vh',
      }}
    >
      {/* Hero Section */}
      <section
        className="text-center py-5"
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100vh - 60px)', // Full-page hero minus navbar height
        }}
      >
        {/* Verifier Logo */}
        <img
          src="/logo.png"
          alt="Verifier Logo"
          style={{
            width: '150px',
            height: '40px',
            position: 'absolute',
            top: '26px',
            left: '70px',
          }}
        />

        {/* Hero Heading */}
        <h1
          style={{
            background: 'linear-gradient(180deg, #EBEBEB 0%, #A3A3A3 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: '48px',
            fontWeight: 700,
            lineHeight: '1.2',
            marginBottom: '20px',
          }}
        >
          Email Checker <br /> <span style={{ color: '#285CFF' }}>and Verifier</span>
        </h1>

        {/* Hero Subtitle */}
        <p
          style={{
            color: '#A5A9B8',
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: '1.5',
            marginBottom: '40px',
            maxWidth: '700px',
            textAlign: 'center',
          }}
        >
          Reduce bounce rate and improve your email marketing <br /> performance with our verifier.
        </p>

        {/* Verification Message */}
        <p
          style={{
            width: '278px',
            height: '20px',
            marginBottom: '20px',
            fontFamily: 'Montserrat',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '19.5px',
            letterSpacing: '0.02em',
            textAlign: 'center',
            color: '#E0E0E0',
          }}
        >
          Verifying your email in real-time...
        </p>

        {/* Progress Bar Container */}
        <div
          style={{
            position: 'relative',
            width: '380px',
            height: '10px',
            borderRadius: '40px',
            background: 'linear-gradient(180deg, rgba(40, 14, 66, 0.72) 0%, rgba(34, 29, 71, 0.32) 100%)',
            boxShadow: '0px 0px 7px 0px #FFFFFF47 inset, 0px 2px 36px 4px #38EBEB47',
            overflow: 'hidden',
            backdropFilter: 'blur(12px)',
          }}
        >
          {/* Progress Bar */}
          {isClient && (
            <div
              style={{
                width: `${progress}%`, // Only update width on the client
                height: '100%',
                background: 'linear-gradient(90deg, #3A78D0, #1892F5)',
                transition: 'width 0.15s ease-in-out', // Smooth progress bar animation
              }}
            ></div>
          )}
        </div>
      </section>

      {/* Footer: Social Proof */}
      <section
        className="text-center py-5"
        style={{
          backgroundColor: '#10162F',
          paddingTop: '40px',
          paddingBottom: '40px',
        }}
      >
        <p
          className="mb-4"
          style={{
            fontFamily: 'Poppins',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '20px',
            textAlign: 'center',
            color: '#A5A9B8',
          }}
        >
          Modern companies are using{' '}
          <span
            style={{
              fontFamily: 'Poppins',
              fontSize: '16px',
              fontWeight: 600,
              lineHeight: '20px',
              color: '#FFFFFF',
            }}
          >
            Verifier
          </span>
        </p>

        <div
          className="d-flex justify-content-center align-items-center mx-auto"
          style={{
            width: '700px',
            height: '34px',
          }}
        >
          <img
            src="/logo 1.png"
            alt="Sentry Ecom Logo"
            style={{ height: '34px', marginRight: '40px' }}
          />
          <img
            src="/logo 2.png"
            alt="XLR Media Logo"
            style={{ height: '34px', marginRight: '40px' }}
          />
          <img
            src="/logo 3.png"
            alt="Outreach Clerk Logo"
            style={{ height: '34px', marginRight: '40px' }}
          />
          <img
            src="/logo 4.png"
            alt="CG Logo"
            style={{ height: '34px', marginRight: '40px' }}
          />
          <img
            src="/logo 5.png"
            alt="ACExMedia Logo"
            style={{ height: '34px' }}
          />
        </div>
      </section>
    </div>
  );
};

export default Verifying;
