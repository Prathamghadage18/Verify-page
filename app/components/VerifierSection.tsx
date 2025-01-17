'use client';

import React, { useState } from 'react';

const VerifierSection: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [isVerifying, setIsVerifying] = useState<boolean>(false);

  const handleVerify = () => {
    if (email) {
      setIsVerifying(true);
    }
  };

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

        {/* Input Field with Button Inside */}
        {!isVerifying ? (
          <div
            style={{
              position: 'relative',
              width: '602px',
              height: '64px',
            }}
          >
            <input
              type="email"
              placeholder="Enter an email to verify"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                height: '100%',
                padding: '6px 140px 6px 28px', // Space for the button
                borderRadius: '18px 18px 18px 18px',
                border: '1px solid',
                borderImageSource: 'linear-gradient(90.65deg, #332890 0%, #404B7A 100%)',
                background: 'linear-gradient(90deg, rgba(69, 88, 143, 0.8) 0%, rgba(48, 59, 97, 0.8) 50.5%, rgba(39, 42, 73, 0.8) 100%)',
                color: '#FFFFFF',
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '20px',
                backdropFilter: 'blur(8px)',
                boxShadow: '0px 4px 28px -1px rgba(88, 218, 242, 0.22)',
                outline: 'none',
              }}
            />
            <button
              onClick={handleVerify}
              style={{
                position: 'absolute',
                top: '6px',
                right: '6px',
                width: '124px',
                height: '52px',
                padding: '14px 30px',
                borderRadius: '12px 12px 12px 12px',
                border: '1px solid',
                borderImageSource: 'linear-gradient(180deg, #7AA7EA 0%, #4A2FAC 50%, #4837B0 100%)',
                background: 'linear-gradient(84.11deg, #2D58BD 0%, #3A78D0 55.19%, #1892F5 110.37%)',
                boxShadow: '0px 0px 28px -1px rgba(88, 218, 242, 0.28)',
                color: '#FFFFFF',
                fontSize: '16px',
                fontWeight: 600,
                textAlign: 'center',
                cursor: 'pointer',
                outline: 'none',
              }}
            >
              Verify
            </button>
          </div>
        ) : (
          <div
            style={{
              color: '#A5A9B8',
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: '1.5',
              marginBottom: '20px',
              maxWidth: '700px',
              textAlign: 'center',
            }}
          >
            Verifying your email in real-time...
          </div>
        )}
      </section>

      {/* Footer: Social Proof */}
      <section
        className="text-center py-5"
        style={{
          backgroundColor: '#10162F', // Match main background color
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

export default VerifierSection;