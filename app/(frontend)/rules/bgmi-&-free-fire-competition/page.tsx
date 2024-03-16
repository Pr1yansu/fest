import React from "react";

const DigitalArenaRules: React.FC = () => {
  return (
    <section className="bg-[#020314] text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">
          Digital Arena Rules and Regulations
        </h1>

        <div className="border rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-1">
            Rules for BGMI
          </h2>
          <ol className="list-decimal pl-4 description leading-7">
            <li>Only mobile phones are allowed, no Emulators.</li>
            <li>
              Teaming with other players will result in a permanent ban from
              Tournaments.
            </li>
            <li>
              Players must use the BGMI Mobile Username provided in the
              registration form for the tournament. Any change in username
              should be reported to support at least 4 hours before the match
              time.
            </li>
            <li>Never share the room code with non-registered players.</li>
            <li>
              Unregistered players entering the room will be banned from
              Tournaments.
            </li>
            <li>
              All players must install the newest version of the game in order
              to participate in BGMI Online Tournament. Any update must be
              installed before the tournament starts to minimize delays.
            </li>
            <li>
              Players are not allowed to use any hacks or any other
              software/tool which gives them undue advantage.
            </li>
            <li>
              Players are not allowed to use any 3rd party applications that
              will enhance or change the default gameplay.
            </li>
            <li>
              All players are encouraged to record the whole match, including
              the mobile console with another filming device. Players must turn
              off the microphone function, and turn on the speaker and change
              the voice channel to All in case of any urgent announcement from
              the spectator and organizer team.
            </li>
          </ol>
        </div>

        <div className="border rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-1">
            Rules for Free Fire
          </h2>
          <ol className="list-decimal pl-4 description leading-7">
            <li>Players must register their Garena Free Fire Username.</li>
            <li>
              Players are not permitted to use a substitute at any point in a
              match.
            </li>
            <li>
              Participants are expected to settle their differences in a
              respectful manner and without resorting to violence, threats, or
              intimidation (physical or non-physical).
            </li>
            <li>Ranking will be done according to the Point System.</li>
            <li>
              Teaming up with other players/squads in a tournament will lead to
              disqualification and/or players will be banned from the platform
              for a certain duration.
            </li>
            <li>
              Players found using hacks and/or mods will be disqualified from
              the tournament and/or players will be banned from the platform for
              a certain duration.
            </li>
            <li>Player Revival Not Allowed.</li>
          </ol>
          <p className="italic">
            [Ranking will be given according to the point table]
          </p>
        </div>
      </div>
    </section>
  );
};

export default DigitalArenaRules;
