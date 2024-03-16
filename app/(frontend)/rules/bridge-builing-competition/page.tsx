import Image from "next/image";
import React from "react";

const PaperBridgeRules: React.FC = () => {
  return (
    <section className="bg-[#020314] text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">
          Paper Bridge Building Competition Rules
        </h1>

        <div className="border rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-1">
            Constructional Details
          </h2>
          <ul className="list-disc pl-4 description leading-7">
            <li>50 Nos. of A4 sheets will be provided.</li>
            <li>The bridge must be able to span a gap of at least 40 cm.</li>
            <li>The bridge must not be taped to the table.</li>
            <li>
              The bridge must support itself without anything else holding it.
            </li>
            <li>The bridge must not touch down on the "river".</li>
            <li>The bridge must not exceed 125 mm in width.</li>
            <li>The bridge must be at least 450 mm long.</li>
            <li>
              The bridge must have a single span of 1.2 meters, with no
              additional supports in the middle.
            </li>
            <li>
              The bridge must be made using only A4 paper, Glue/fevicol, and
              string.
            </li>
            <li>The total mass of the bridge shall not exceed 1.5 kg.</li>
            <li>The bridge must be able to hold a maximum of 2 kg of paper.</li>
            <li>
              The bridge must be evaluated by 50% marking on the largest load
              withstood and 50% marking on truss explanation.
            </li>
            <li>A hole should be made where the load can be hung.</li>
            <li>No extra materials can't be used.</li>
          </ul>
        </div>

        <div className="border rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-1">
            Testing and Judging
          </h2>
          <p className="description leading-7">
            Your bridge will be tested to destruction by hanging more and more
            weights from the center of the span until it collapses. The winning
            bridge will be decided according to four criteria:
          </p>
          <ol className="list-decimal pl-4 description leading-7">
            <li>Maximum weight supported before collapse</li>
            <li>Efficient use of materials</li>
            <li>Elegance of design</li>
            <li>
              Your ability to describe how the materials are transferring the
              forces in the bridge
            </li>
          </ol>
        </div>

        <Image
          width={800}
          height={500}
          src="/assets/bridge-rule.png"
          alt="Paper Bridge"
          className=" shadow-md mb-8 object-contain object-left aspect-video"
        />
      </div>
    </section>
  );
};

export default PaperBridgeRules;
