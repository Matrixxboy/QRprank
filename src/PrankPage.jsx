import React, { useState, useEffect } from "react";

const PrankPage = () => {
    const [clicked, setClicked] = useState(false);
    const [randomNumbers, setRandomNumbers] = useState<number[]>([]);

    useEffect(() => {
        const numbers = Array.from({ length: 30 }, () => Math.floor(Math.random() * 10000));
        setRandomNumbers(numbers);
    }, []);

    return (
        <div className="h-screen flex items-center justify-center bg-black text-green-500 text-center p-6 relative overflow-hidden">
            {/* Cyber Security Background */}
            <div className="absolute inset-0 bg-black overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-20" 
                     style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?hacking,cyber')" }}>
                </div>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-wrap animate-move">
                    {randomNumbers.map((num, i) => (
                        <span key={i} className="text-green-500 text-xs sm:text-sm opacity-50 animate-blink absolute"
                              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}>
                            0x{num.toString(16)}
                        </span>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full max-w-md bg-gray-900 p-6 rounded-lg shadow-lg border border-green-500 animate-pulse relative z-10 flex flex-col items-center justify-center min-h-[300px]">
                <div className="absolute inset-0 bg-green-500 opacity-10 blur-2xl"></div>
                
                <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 glitch text-center flex items-center justify-center min-h-[100px]" 
                    data-text="🚨 There is Nothing Free! 🚨">
                    🚨 There is Nothing Free! 🚨
                </h1>

                <p className="text-base sm:text-lg mb-4 animate-bounce text-center">
                    Don't scan every QR code. You've been tricked! 😆
                </p>

                {!clicked ? (
                    <button
                        className="mt-4 px-6 py-2 bg-green-500 text-black font-bold rounded-lg hover:bg-red-500 hover:text-white transition transform hover:scale-110 shadow-lg w-full sm:w-auto"
                        onClick={() => setClicked(true)}
                    >
                        Click Me!
                    </button>
                ) : (
                    <div className="mt-4 p-4 border border-red-400 rounded bg-gray-800 animate-shake w-full sm:w-auto text-center">
                        <p className="text-md text-red-500 font-bold text-lg sm:text-xl">See? You're really dumb! 🤦‍♂️</p>
                        <p className="text-sm text-gray-300 mt-2">Don't click anything next time! 😂</p>
                    </div>
                )}
            </div>

            <style>
                {`
                    @keyframes shake {
                        0%, 100% { transform: translateX(0); }
                        25% { transform: translateX(-5px); }
                        50% { transform: translateX(5px); }
                        75% { transform: translateX(-5px); }
                    }
                    .animate-shake { animation: shake 0.3s ease-in-out infinite; }

                    .glitch {
                        position: relative;
                        color: white;
                        font-weight: bold;
                        display: inline-block;
                    }
                    .glitch::before, .glitch::after {
                        content: attr(data-text);
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                        background: black;
                        overflow: hidden;
                    }
                    .glitch::before {
                        left: 2px;
                        text-shadow: -2px 0 red;
                        clip: rect(0, 900px, 0, 0);
                        animation: glitch 1s infinite linear alternate-reverse;
                    }
                    .glitch::after {
                        left: -2px;
                        text-shadow: -2px 0 blue;
                        clip: rect(0, 900px, 0, 0);
                        animation: glitch 1s infinite linear alternate;
                    }

                    @keyframes glitch {
                        0% { clip: rect(42px, 9999px, 44px, 0); }
                        25% { clip: rect(12px, 9999px, 20px, 0); }
                        50% { clip: rect(22px, 9999px, 30px, 0); }
                        75% { clip: rect(52px, 9999px, 60px, 0); }
                        100% { clip: rect(72px, 9999px, 80px, 0); }
                    }

                    @keyframes blink {
                        0%, 100% { opacity: 0.2; }
                        50% { opacity: 1; }
                    }
                    .animate-blink {
                        animation: blink 1.5s infinite alternate;
                    }

                    @keyframes move {
                        0% { transform: translateY(0); }
                        50% { transform: translateY(-10px); }
                        100% { transform: translateY(0); }
                    }
                    .animate-move {
                        animation: move 4s infinite ease-in-out;
                    }
                `}
            </style>
        </div>
    );
};

export default PrankPage;
