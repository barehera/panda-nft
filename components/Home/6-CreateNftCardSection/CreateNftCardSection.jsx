import React from "react";

const CreateNftCardSection = () => {
  return (
    <section className="px-6 lg:px-12 xl:px-28 my-20 lg:my-40">
      <article className="py-12 bg-primary rounded-2xl flex flex-col items-center justify-center p-6 md:p-12 xl:p-24 text-center">
        <h3 className="text-white text-2xl lg:text-5xl font-bold mb-6">
          Create Your Own NFT!
        </h3>
        <p className="text-white text-sm lg:text-base mb-10">
          We have a large scale group to support each other in this game, Join
          us to get the news as soon as possible and follow our latest
          announcements!
        </p>
        <button className="bg-white text-primary text-sm lg:text-lg font-semibold px-10 h-8 lg:h-16 rounded-2xl">
          Join Comunity Now
        </button>
      </article>
    </section>
  );
};

export default CreateNftCardSection;
