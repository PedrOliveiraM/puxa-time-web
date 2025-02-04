const testimonials = [
  {
    quote:
      "Puxa Time has made organizing our weekly matches a breeze. No more arguments about team selection!",
    author: "Carlos S., Amateur League Organizer",
  },
  {
    quote:
      "The 'By Skill' feature ensures our games are always competitive and fun. Highly recommended!",
    author: "Maria L., Football Club Manager",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-puxa-green py-20">
      <div className="bg-stadium absolute inset-0 bg-cover bg-center opacity-5" />
      <div className="container relative mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-puxa-white">
          What Our Users Say
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-lg bg-puxa-white/95 p-6 shadow-lg"
            >
              <p className="mb-4 italic text-gray-600">"{testimonial.quote}"</p>
              <p className="font-semibold text-puxa-deepBlue">
                {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
