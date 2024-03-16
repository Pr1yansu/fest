import React from "react";

const RoboSoccerRules: React.FC = () => {
  return (
    <section className="bg-[#020314] text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">
          ROBO SOCCER Rules and Criteria
        </h1>

        <div className="border rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-1">
            General Rules
          </h2>
          <ol className="list-decimal pl-4 description leading-7">
            <li>This is a team event.</li>
            <li>A team can have 2 to 5 members.</li>
            <li>
              A team may comprise members from different colleges. No person
              shall be a member of multiple teams.
            </li>
            <li>
              Teams have to showcase and get their bots measured as per
              specification before the match.
            </li>
            <li>No bots can be shared by two teams.</li>
            <li>
              Robots are not allowed which are constructed using LEGO kits or
              its spare parts or any other readymade mechanism.
            </li>
            <li>
              Use of pneumatics, hydraulics, lethal weapons like projectiles,
              acids, sharp cutters, strong electromagnets, tesla coil, fire, and
              EMP are strictly prohibited.
            </li>
            <li>
              Bots are not allowed to pick or hold the ball with the bot, if
              found faulty may lead to disqualification.
            </li>
            <li>The bot can be wired or wireless.</li>
            <li>
              Intentional Damage to the arena may lead to disqualification of
              the bot.
            </li>
            <li>
              The right spirit of participation is expected from every
              participant.
            </li>
            <li>A team can be disqualified on disciplinary ground.</li>
            <li>The decision of the coordinators will be deemed final.</li>
          </ol>
        </div>

        <div className="border rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-1">
            Bot Specifications
          </h2>
          <ul className="list-disc pl-4 description leading-7">
            <li>Dimension of the bot shouldn’t exceed 30cm x 30cm (L x B)</li>
            <li>Weight of the bot must be below 3 kg, no tolerance.</li>
            <li>Maximum allowed voltage is 18V.</li>
            <li>
              Power of the bot should be fixed throughout the play. Variable
              power is prohibited.
            </li>
            <li>
              For wired bots, pulling wires to alter the movement of the robots
              will not be Tolerated and may lead to disqualification.
            </li>
            <li>
              The robot may have some sort of ball hitting mechanism but the
              robot, as a whole, must comply with the dimension constraints
              throughout its performance.
            </li>
            <li>
              Touching the robot during the competition is strictly prohibited.
            </li>
            <li>Loose weights on the bot are not allowed.</li>
            <li>
              The length of wire attached with wired robots should be at least
              5m.
            </li>
            <li>Unnecessary attack on the opponent bot is not allowed.</li>
          </ul>
        </div>

        <div className="border rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-1">
            Event Details
          </h2>
          <ul className="list-disc pl-4 description leading-7">
            <li>
              Prelims:
              <ul>
                <li>
                  The bot has to score goal by passing through obstacles in the
                  arena
                </li>
                <li>For every Goal scored +50 points will be credited</li>
                <li>For every obstacle touch -10 will be deducted.</li>
                <li>
                  A total of 3 minutes will be given to the robot in the arena
                </li>
                <li>
                  A team can take 2 minutes of technical time out- one time
                  only.
                </li>
                <li>
                  Top scorer teams from the prelims will be qualified to the
                  final round.
                </li>
              </ul>
            </li>
            <li>
              Knockout:
              <ul>
                <li>1v1 play between bots</li>
                <li>1v1 will be chosen through a lottery system.</li>
                <li>
                  The ball will be placed at the center of the arena , bots will
                  be placed in the extreme opposite corners of the arena.
                </li>
                <li>
                  A total of 6 minutes of Game play with 3 minutes of each half
                </li>
                <li>
                  A total of 2 minutes of repair timeout will be given to every
                  team.
                </li>
                <li>In case of a tie golden goal wins</li>
                <li>
                  In case of deadlock between bots for 10 seconds, the position
                  will be reset and back to original.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RoboSoccerRules;
