import React from 'react';

const Navbar: React.FC = () => {
    return (
        <div className="Navbar w-full max-w-[1200px] px-4 md:px-8 py-4 mx-auto">
            <div className="Item w-full flex justify-between items-center">
                <div className="Bio text-black text-2xl font-medium font-['Inter']">BIO</div>
                <div className="About text-black text-2xl font-medium font-['Inter']">ABOUT</div>
                <div className="Projects text-black text-2xl font-medium font-['Inter']">PROJECTS</div>
                <div className="Contact text-black text-2xl font-medium font-['Inter']">CONTACT</div>
            </div>
            <div className="Line1 w-full h-[0px] border-2 border-black"></div>
        </div>
    );
};

export default Navbar;