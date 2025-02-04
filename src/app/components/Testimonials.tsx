const testimonials = [
  {
    quote: "Puxa Time has made organizing our weekly matches a breeze. No more arguments about team selection!",
    author: "Carlos S., Amateur League Organizer",
  },
  {
    quote: "The 'By Skill' feature ensures our games are always competitive and fun. Highly recommended!",
    author: "Maria L., Football Club Manager",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-puxa-green relative">
      <div className="absolute inset-0 bg-stadium bg-cover bg-center opacity-5" />
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl font-bold text-center text-puxa-white mb-12">What Our Users Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-puxa-white/95 p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
              <p className="font-semibold text-puxa-deepBlue">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

