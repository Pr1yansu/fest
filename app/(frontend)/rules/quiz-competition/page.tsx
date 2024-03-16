import React from "react";

const QuizRules: React.FC = () => {
  return (
    <section className="bg-[#020314] text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Quiz Rules and Regulations</h1>

        <div className="border rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-1">
            Basic Rules of the Competition
          </h2>
          <ol className="list-decimal pl-4 description leading-7">
            <li>
              Only team entries are allowed, and each team shall consist of two
              persons. There is no limit to teams from a single institution.
            </li>
            <li>
              The decision of the quiz-master will be final and will not be
              subjected to any change.
            </li>
            <li>
              Participants shall not be allowed to use mobile or other
              electronic instruments during the quiz time.
            </li>
            <li>
              The questions shall be in the form of multiple choice, true/false
              statement, specific answer question, etc.
            </li>
            <li>
              Audience/Supporters shall not give any hints or clues to the
              competitors.
            </li>
            <li>
              Replacement of any participant of a team is not allowed after
              registration.
            </li>
          </ol>
        </div>

        <div className="border rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-1">Rounds</h2>
          <p>Preliminary Round (or Elimination Round):</p>
          <ul className="list-disc pl-4 description leading-7">
            <li>
              Each team will be given a set of question papers containing 25
              multiple choice objective type questions.
            </li>
            <li>Time limit: 25 minutes.</li>
            <li>Each question will carry 1 mark.</li>
            <li>
              Only top 6 teams will be selected for the final or stage rounds.
            </li>
            <li>
              In case of a tie between 2 or more teams, further 5 questions will
              be asked for final selection.
            </li>
          </ul>
          <p>Final Quiz/Stage Round:</p>
          <ol className="list-decimal pl-4 description leading-7">
            <li>Consists of multiple rounds covering various topics.</li>
            <li>Each correct answer is awarded 10 marks.</li>
            <li>Response time for each question is 30 seconds.</li>
            <li>No pass option.</li>
            <li>Team discussion is allowed.</li>
            <li>
              In the rapid-fire round, 10 marks will be awarded for each correct
              answer, and 5 marks will be deducted for each wrong answer.
            </li>
          </ol>
        </div>

        <div className="border rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-1">
            Surprise Round
          </h2>
          <p>
            In case of a tie in the final round, a surprise round will be
            conducted.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuizRules;
