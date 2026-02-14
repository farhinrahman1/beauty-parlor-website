'use client'

import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      role: 'Bride',
      content: 'My bridal makeover was absolutely stunning! The makeup artist understood my vision perfectly and made me feel confident on my special day. Highly recommend!',
      rating: 5,
      image: '👰',
    },
    {
      id: 2,
      name: 'Emma Thompson',
      role: 'Regular Customer',
      content: 'I visit Luxe Beauty Parlor every month for my hair treatments. The staff is incredibly professional and the results are always impeccable. Best salon experience!',
      rating: 5,
      image: '✨',
    },
    {
      id: 3,
      name: 'Jessica Davis',
      role: 'Spa Enthusiast',
      content: 'The spa treatments here are absolutely relaxing and rejuvenating. The therapists are skilled and the ambiance is perfect. I feel like a new person after every visit!',
      rating: 5,
      image: '💆',
    },
  ]

  return (
    <section id="testimonials" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who have experienced the Luxe Beauty difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300"
            >
              {/* Rating Stars */}
              <div className="flex gap-2 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-bold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
