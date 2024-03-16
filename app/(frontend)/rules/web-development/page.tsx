import React from "react";

const WebDerbyRules: React.FC = () => {
  return (
    <section className="bg-[#020314]">
      <div className="container mx-auto px-4 py-8  text-white">
        <h1 className="text-4xl font-bold mb-8">
          Web Derby Rules and Criteria
        </h1>

        <div className="border rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-1 ">
            General Rules
          </h2>
          <ol className="list-decimal pl-4 description leading-7">
            <li>The competition will consist of three rounds.</li>
            <li>The total duration of the competition will be 3 hours.</li>
            <li>
              Participants must obey the specified time limits for each round.
            </li>
            <li>
              All teams are expected to maintain integrity and avoid cheating.
              Volunteers will monitor participants' activities.
            </li>
            <li>
              Winners will be determined based on accumulated points throughout
              the competition.
            </li>
            <li>Participants may carry their own laptop.</li>
            <li>Solo, Duo & Trio groups are allowed.</li>
          </ol>
        </div>

        <div className="border rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-1 ">
            Round s and Time Allocation
          </h2>
          <ol className="list-decimal pl-4 description leading-7">
            <li>
              <strong>Round 1: Basic Web Development MCQ Round</strong>
              <ul className="list-disc pl-4">
                <li>Time: 20 minutes</li>
                <li>
                  Format: Multiple Choice Questions (MCQs) conducted on an
                  online platform.
                </li>
                <li>
                  Each team will answer 20 questions related to basic web
                  development concepts.
                </li>
              </ul>
            </li>
            <li>
              <strong>Round 2: Design Concept</strong>
              <ul className="list-disc pl-4">
                <li>Time: 20 minutes</li>
                <li>
                  Participants must create a single-page or section design based
                  on a given design concept (e.g., Masonry Grid, Glass morphism,
                  Neu morphism, Carousels, Card, Skeleton, Bento Grid etc).
                </li>
              </ul>
            </li>
            <li>
              <strong>Round 3: Final Website Development</strong>
              <ul className="list-disc pl-4">
                <li>Time: 2 hours</li>
                <li>
                  Participants will develop a full website front-end, including
                  animations and styles, based on a provided Figma file. The
                  file will serve as a prototype, and participants must follow
                  its design and animation guidelines.
                </li>
                <li>
                  Tech stacks allowed: HTML, CSS, Bootstrap, JavaScript, React,
                  Tailwind CSS, Next.js, Material UI, ShadCN, or any other
                  frameworks/libraries.
                </li>
              </ul>
            </li>
          </ol>
        </div>

        <div className="border rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-1 ">
            Judging Criteria
          </h2>
          <ol className="list-decimal pl-4 description leading-7">
            <li>
              <strong>Aesthetics: </strong>
              <ul className="list-disc pl-4">
                <li>Visual appeal and consistency.</li>
                <li>Readability of content.</li>
              </ul>
            </li>
            <li>
              <strong>Web System and Functionality: </strong>
              Functionality and interactivity of the website.
            </li>
            <li>
              <strong>Optimization: </strong>
              Efficient use of resources (e.g., images, scripts) for faster
              loading times.
            </li>
            <li>
              <strong>Likeness: </strong>
              Faithfulness to the original design concept (figma file).
            </li>
            <li>
              <strong>Responsiveness: </strong>
              Responsiveness across different devices and screen sizes. (minimum
              2 devices)
            </li>
            <li>
              <strong>Animation: </strong>
              Accurate or proper animation will consist more points.
            </li>
          </ol>
        </div>

        <div className="border rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-1 ">
            Additional Information
          </h2>
          <ol className="list-decimal pl-4 description leading-7">
            <li>
              <strong>Scoring System: </strong>
              <ul className="list-disc pl-4">
                <li>Round 1: Maximum points = 20</li>
                <li>Round 2: Maximum points = 20</li>
                <li>Round 3: Maximum points = 60</li>
              </ul>
            </li>
            <li>
              <strong>Winner Determination: </strong>
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
              <strong>Disqualification: </strong>
              Any team found violating the rules or engaging in cheating will be
              disqualified from the competition.
            </li>
            <li>
              <strong>Amendments to Rules: </strong>
              The organizing committee reserves the right to amend or modify the
              rules of the competition if necessary. Any changes will be
              communicated to the participants in advance.
            </li>
            <li>
              <strong>Decision of Judges: </strong>
              <ul className="list-disc pl-4">
                <li>The decision of the judges will be final and binding.</li>
                <li>
                  Judges may provide feedback to participants upon request but
                  will not entertain any disputes regarding scoring or rankings.
                </li>
              </ul>
            </li>
            <li>
              <strong>Participation Agreement: </strong>
              By participating in the competition, teams agree to abide by the
              rules and decisions of the organizers and judges.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default WebDerbyRules;
