import React, { useEffect, useState } from 'react';
import Data from '../data/data.json';

const Card = ({ setShowCard, setShowButton, score, setScore }) => {
    const [isDisabled, setIsDisabled] = useState(false);
    const [answer, setAnswer] = useState("");
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(Data);
    }, []);

    const verify = (selectedAnswer) => {
        setIsDisabled(true);
        setShowButton(false);
        if (selectedAnswer === items[0].correct_answer) {
            setAnswer("Correct");
            setScore(score + 1);
        } else {
            setAnswer(`Incorrect`);
        }
        setTimeout(() => {
            setShowCard(false);
            setIsDisabled(false);
        }, 2000);
    }

    return (
        <div>
            <div className="flex flex-col rounded-2xl w-[30rem] bg-[#ffffff] shadow-xl">
                <div className="flex flex-col p-8">
                    <h1>
                        {items.length > 0 && (
                            <div>
                                <h1>{items[0].question}</h1>
                            </div>
                        )}
                    </h1>
                    <div className="pt-6 flex flex-col space-y-4">
                        {items.length > 0 && items[0].options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => verify(option)}
                                disabled={isDisabled}
                                className="py-2 px-4 bg-blue-500 text-white rounded-lg"
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    <h1 className="pt-6 text-center text-lg text-[#374151]">
                    </h1>
                    <h2 className="pt-6 text-center text-lg text-[#374151]">
                        {answer}
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default Card;