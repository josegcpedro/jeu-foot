import React, { useState } from 'react';
import Card from './Card';


    const Ballon = ({ score, setScore,questions, setQuestions }) => {
    const [showCard, setShowCard] = useState(false);
    const [showButton, setShowButton] = useState(true);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            {showCard ? (
                <>
                    <button
                        onClick={() => setShowCard(false)}
                        className="bg-red-600 text-white font-bold py-2 px-4 rounded-full shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-300 transform hover:scale-105 w-10 h-10 flex items-center justify-center"
                    >
                        X
                    </button>
                    <Card setShowCard={setShowCard} setShowButton={setShowButton} score={score} setScore={setScore} questions={questions} setQuestions={setQuestions} />
                </>
            ) : (
                showButton && (
                    <button
                        onClick={() => setShowCard(true)}
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 transform hover:scale-105"
                    >
                        CLIQUEZ
                    </button>
                )
            )}
        </div>
    );
}

export default Ballon;