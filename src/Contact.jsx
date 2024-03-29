

export default function Contact() {
  return (
    <div className="min-h-[100vh] flex flex-col justify-center items-center gap-16 p-4 pt-8 snap">
      <h1 className="text-6xl md:text-6xl font-semibold text-fourth pb-8"
      data-aos="fade-zoom-in"
      data-aos-duration={1000}
      data-aos-delay={500}>
        Contact
      </h1>
      <form
        action="https://getform.io/f/1f091172-9696-4ac3-81b2-1aeb2d3f8a69"
        method="POST"
        className="flex flex-col max-w-[600px] w-full z-20"
      >
        <input
          className="p-2 bg-second"
          type="text"
          placeholder="Name"
          name="name"
          required
          data-aos="fade-zoom-in"
          data-aos-duration={1000}
          data-aos-delay={750}
        />
        <input
          className="my-4 p-2 bg-second"
          type="email"
          placeholder="Email"
          name="email"
          required
          data-aos="fade-zoom-in"
          data-aos-duration={1000}
          data-aos-delay={1000}
        />
        <textarea
          name="message"
          className="p-2 bg-second"
          placeholder="Message"
          rows="8"
          required
          data-aos="fade-zoom-in"
          data-aos-duration={1000}
          data-aos-delay={1250}
        ></textarea>
        <button
          type="submit"
          className="w-64 mx-auto my-8 bg-gradient-to-r from-fourth to-fifth p-[2px] rounded-lg"
          data-aos="fade-zoom-in"
          data-aos-duration={1000}
          data-aos-delay={1500}
        >
          <div className="flex items-center prevent-select justify-center gap-2 bg-first hover:bg-first/0 p-3 rounded-lg">
            <span>Submit</span>
          </div>
        </button>
      </form>
    </div>
  );
}
