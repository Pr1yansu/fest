import React from "react";

const PosterMakingRules: React.FC = () => {
  return (
    <section className="bg-[#020314] text-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">
          Poster Making Competition Rules
        </h1>

        <div className="border rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-1">
            Rules and Guidelines
          </h2>
          <ol className="list-decimal pl-4 description leading-7">
            <li>
              Topic and Theme: The topic and theme should be clearly stated at
              the top of the poster.
            </li>
            <li>
              Originality: The poster should be original and either handmade or
              printed.
            </li>
            <li>
              Length: The poster should be simple and short, with ample details
              but written in about 50 words.
            </li>
            <li>
              Layout: The poster should be broken into columns, with the tops of
              the columns aligned with each other, and the sections in each
              column left justified.
            </li>
            <li>
              Legibility: The poster should be legible and not cluttered with
              text.
            </li>
            <li>
              Organization and Flow: The poster's components should be organized
              in a logical flow.
            </li>
            <li>
              Content: The poster should provide sufficient background
              information, and the research being communicated should be easy to
              understand.
            </li>
            <li>
              Lettering and Diagrams: All lettering and diagrams should be large
              enough to be read from a minimum of 2 feet.
            </li>
            <li>Poster Size: A1</li>
            <li>Plagiarism: Plagiarism is not allowed.</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default PosterMakingRules;
