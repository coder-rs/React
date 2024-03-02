import { useRef } from "react";
export default function Answers({
  answer,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  const shuffleAnswers = useRef();
  shuffleAnswers.current = answer;
  shuffleAnswers.current.sort(() => Math.random() - 0.5);
  return (
    <ul id="answers">
      {shuffleAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = "";
        if (answerState && isSelected) {
          cssClass = "selected";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = { answerState };
        }
        return (
          <li key={answer} className="answer">
            <button onClick={() => onSelect(answer)} className={cssClass}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
