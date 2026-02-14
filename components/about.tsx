'use client'

import { Award, Users, Star } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Award,
      title: 'Expert Professionals',
      description: 'Our team consists of certified and experienced beauty specialists trained in the latest techniques.',
    },
    {
      icon: Star,
      title: 'Premium Quality',
      description: 'We use only high-quality, luxury products and equipment for the best results.',
    },
    {
      icon: Users,
      title: 'Customer Care',
      description: 'Your satisfaction is our priority. We provide personalized care for every client.',
    },
  ]

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Welcome to Luxe Beauty Parlor
            </h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Established with a vision to provide exceptional beauty services, Luxe Beauty Parlor is a sanctuary of elegance and sophistication. Our commitment to excellence has made us a trusted destination for beauty enthusiasts.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With over a decade of experience, our expert team combines traditional beauty wisdom with cutting-edge techniques to deliver transformative results. We believe that beauty is not just about appearance—it's about feeling confident and radiant in your own skin.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-secondary/30 rounded-2xl p-8 border border-border">
              <h3 className="text-5xl font-bold text-primary mb-2">10+</h3>
              <p className="text-lg text-muted-foreground">Years of Excellence</p>
            </div>
            <div className="bg-secondary/30 rounded-2xl p-8 border border-border">
              <h3 className="text-5xl font-bold text-primary mb-2">5000+</h3>
              <p className="text-lg text-muted-foreground">Happy Customers</p>
            </div>
            <div className="bg-secondary/30 rounded-2xl p-8 border border-border">
              <h3 className="text-5xl font-bold text-primary mb-2">20+</h3>
              <p className="text-lg text-muted-foreground">Expert Staff Members</p>
            </div>
            <div className="bg-secondary/30 rounded-2xl p-8 border border-border">
              <h3 className="text-5xl font-bold text-primary mb-2">4.9★</h3>
              <p className="text-lg text-muted-foreground">Customer Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
