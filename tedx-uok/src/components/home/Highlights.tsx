import { Lightbulb, Users, Mic2, Handshake } from "lucide-react";

const whatToExpect = {
  title: "What to Expect",
  items: [
    {
      icon: Mic2,
      title: "Inspiring live speakers",
      description:
        "Hear from thought leaders, innovators, and storytellers who share original ideas and lived experiences that challenge perspectives and spark insight.",
    },
    {
      icon: Lightbulb,
      title: "Curated TED Talks",
      description:
        "Carefully selected TED Talks that complement the event theme and extend conversations beyond the stage.",
    },
    {
      icon: Users,
      title: "Thought-provoking discussions",
      description:
        "Opportunities to reflect, question, and engage in meaningful dialogue inspired by the ideas presented.",
    },
    {
      icon: Handshake,
      title: "A space for connection and collaboration",
      description:
        "An environment that brings together curious minds to connect, exchange perspectives, and build lasting conversations.",
    },
  ],
};

const Highlights = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
            Event Highlights
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {whatToExpect.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            A day filled with inspiration, connection, and transformation.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whatToExpect.items.map((item, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-lg p-8 transition-all duration-300 hover:border-primary/50"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
