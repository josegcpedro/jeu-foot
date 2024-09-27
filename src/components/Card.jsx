import React, { useState } from 'react';
import Data from '../data/Data';

const Card = ({ setShowCard, setShowButton, score, setScore }) => {
    const [isDisabled, setIsDisabled] = useState(false);
    const [answer, setAnswer] = useState("");



    const verify = (selectedAnswer) => {
        setIsDisabled(true);
        setShowButton(false);
        if (selectedAnswer === "Cristiano Ronaldo") {
            setAnswer("Correct");
            setScore(score + 1);
        } else {
            setAnswer(`Incorrect la réponse était Cristiano Ronaldo`);
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
                    <div className="text-3xl text-[#374151] pb-6 text-center">Joueurs</div>
                    <div className="text-lg text-[#374151] pb-6 text-center">Quel joueur a le plus de buts marqué ??</div>
                    <div className="pt-6 flex flex-col space-y-4">
                        <button disabled={isDisabled} onClick={() => verify("Lionel Messi")} className="bg-[#7e22ce] text-[#ffffff] font-bold text-base p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform">Lionel Messi</button>
                        <button disabled={isDisabled} onClick={() => verify("Cristiano Ronaldo")} className="bg-[#7e22ce] text-[#ffffff] font-bold text-base p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform">Cristiano Ronaldo</button>
                        <button disabled={isDisabled} onClick={() => verify("Michel Platini")} className="bg-[#7e22ce] text-[#ffffff] font-bold text-base p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform">Michel Platini</button>
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