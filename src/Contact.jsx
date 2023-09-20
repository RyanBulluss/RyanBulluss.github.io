import { FaChevronUp, FaChevronDown } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-[100vh] flex flex-col justify-center items-center p-4">
      <h1 className="text-6xl md:text-6xl font-semibold text-fourth pb-8">
        Contact
      </h1>
      <form
        action="https://getform.io/f/1f091172-9696-4ac3-81b2-1aeb2d3f8a69"
        method="POST"
        className="flex flex-col max-w-[600px] w-full"
      >
        <input
          className="p-2 bg-second"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="my-4 p-2 bg-second"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          name="message"
          className="p-2 bg-second"
          placeholder="Message"
          rows="10"
          required
        ></textarea>
        <button
          type="submit"
          className="w-64 mx-auto my-8 bg-gradient-to-r from-fourth to-fifth p-[2px] rounded-lg"
        >
          <div className="flex items-center prevent-select justify-center gap-2 bg-first hover:bg-first/0 p-3 rounded-lg">
            <span>Submit</span>
          </div>
        </button>
      </form>
      <div className="flex justify-center gap-4 h-20 mx-auto">
        <a
          href="#battleship"
          className="bg-second hover:bg-second/50 rounded-full text-2xl w-12 my-4 flex justify-center items-center p-2"
        >
          <FaChevronUp />
        </a>
      </div>
    </div>
  );
}
