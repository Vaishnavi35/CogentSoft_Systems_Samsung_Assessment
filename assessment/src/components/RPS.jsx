import React, {useState} from 'react';

const choices = ['stone', 'paper', 'scissors'];

const getRandomChoice = () => choices[Math.floor(Math.random() * choices.length)];

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) return 'draw';
    if (
        (userChoice === 'stone' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'stone')
    ) {
        return 'user';
    }
    return 'computer';
};

export default function RPS() {
    const [userChoice, setUserChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [result, setResult] = useState('');

    const handleUserChoice = (choice) => {
        const computerChoice = getRandomChoice();
        const gameResult = determineWinner(choice, computerChoice);

        setUserChoice(choice);
        setComputerChoice(computerChoice);
        setResult(gameResult === 'draw' ? "It's a draw!" : `${gameResult === 'user' ? 'You win!' : 'Computer wins!'}`);
    };

    return (
        <div>
            <h1>Stone, Paper, Scissors</h1>
            <div style={{display: 'flex', gap: '8px'}}>
                {choices.map(choice => (
                    <button key={choice} onClick={() => handleUserChoice(choice)}>
                        {choice.toUpperCase()}
                    </button>
                ))}
            </div>
            {userChoice && computerChoice && (
                <div>
                    <p>You chose: {userChoice}</p>
                    <p>Computer chose: {computerChoice}</p>
                    <p>{result}</p>
                </div>
            )}
        </div>
    );
};

