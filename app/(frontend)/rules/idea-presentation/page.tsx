import React from "react";

const EurekaRules: React.FC = () => {
  return (
    <section className="bg-[#020314] text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Eureka Rules and Criteria</h1>

        <div className="border rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-1">
            General Rules
          </h2>
          <ol className="list-decimal pl-4 description leading-7">
            <li>
              Presentation time will be 5 minutes and 3 minutes for Q & A.
            </li>
            <li>Dress code is either formal or uniform.</li>
            <li>
              Participants are free to choose any technical topic or business
              idea.
            </li>
            <li>Participants must obey the entry time.</li>
            <li>
              Winners will be determined based on accumulated points throughout
              the competition.
            </li>
            <li>Participants may carry a pen drive or laptop.</li>
            <li>Solo, Duo, Trio & Squad are allowed.</li>
          </ol>
        </div>

        <div className="border rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-1">
            Judging Criteria
          </h2>
          <ol className="list-decimal pl-4 description leading-7">
            <li>
              Clarity and Simplicity: Keep your slides clear, concise, and easy
              to understand.
            </li>
            <li>
              Relevance: Ensure that all content included in your presentation
              is relevant to your topic and supports your key messages.
            </li>
            <li>Time: Every extra minute will deduct 5 marks.</li>
            <li>
              Idea Impact: What is the impact of your idea on the audience.
            </li>
            <li>
              Etiquette: During the presentation, maintain eye contact with your
              audience, speak clearly and confidently, and avoid reading
              directly from slides.
            </li>
          </ol>
        </div>

        <div className="border rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-1">
            Additional Information
          </h2>
          <ol className="list-decimal pl-4 description leading-7">
            <li>
              Scoring System: Each criterion will be scored on a predetermined
              scale, and the scores will be totaled to determine the overall
              ranking of the models.
            </li>
            <li>
              Winner Determination:
              <ul className="list-disc pl-4">
                <li>
                  The team with the highest accumulated points will be declared
                  the winner.
                </li>
                <li>
                  In case of a tie, judges may consider additional criteria such
                  as creativity and innovation.
                </li>
              </ul>
            </li>
            <li>
              Disqualification: Any team found wearing casual outfit will be
              disqualified from the competition.
            </li>
            <li>
              Amendments to Rules: The organizing committee reserves the right
              to amend or modify the rules of the competition if necessary. Any
              changes will be communicated to the participants in advance.
            </li>
            <li>
              Decision of Judges:
              <ul className="list-disc pl-4">
                <li>The decision of the judges will be final and binding.</li>
                <li>
                  Judges may provide feedback to participants upon request but
                  will not entertain any disputes regarding scoring or rankings.
                </li>
              </ul>
            </li>
            <li>
              Participation Agreement: By participating in the competition,
              teams agree to abide by the rules and decisions of the organizers
              and judges.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default EurekaRules;
