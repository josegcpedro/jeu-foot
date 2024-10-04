import React, { useEffect, useState } from 'react';

const Card = ({ setShowCard, setShowButton, score, setScore, questions, setQuestions }) => {
    const [isDisabled, setIsDisabled] = useState(false);
    const [answer, setAnswer] = useState("");
    const [currentQuestion, setCurrentQuestion] = useState(null);

    useEffect(() => {
            const shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
            setCurrentQuestion(shuffledQuestions[0]);
            const remainingQuestions = questions.filter((question) => question !== shuffledQuestions[0]);
            setQuestions(remainingQuestions);
    }, []);

    const verify = (selectedAnswer) => {
        setIsDisabled(true);
        setShowButton(false);
        if (selectedAnswer === currentQuestion.correct_answer) {
            setAnswer("Correct");
            setScore(score + 1);
        } else {
            setAnswer(`Incorrect, la réponse était ${currentQuestion.correct_answer}`);
        }
        setTimeout(() => {
            setShowCard(false);
            setIsDisabled(true);
        }, 2000);
    }

    return (
        <div>
            <div className="flex flex-col rounded-2xl w-[30rem] bg-[#ffffff] shadow-xl">
                <div className="flex flex-col p-8">
                    {currentQuestion && (
                        <>
                            <h1 className="text-3xl text-[#374151] pb-6 text-center">{currentQuestion.question}</h1>
                            <div className="pt-6 flex flex-col space-y-4">
                                {currentQuestion.options.map((option, index) => (
                                    <button
                                        key={index}
                                        onClick={() => verify(option)}
                                        disabled={isDisabled}
                                        className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </>
                    )}
                    <h2 className="pt-6 text-center text-lg text-[#374151]">
                        {answer}
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default Card;