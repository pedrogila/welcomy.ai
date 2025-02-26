
import { MessageCircle, Star, Calendar, Bot, ChartBar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-heading font-bold text-gray-900">
            Welcomy.ai
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
              Pricing
            </a>
            <Button variant="ghost" className="text-gray-900">
              Login
            </Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-gray-900 mb-6 animate-fade-up">
              Revolutionize Guest Communications
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Automate your property management communications with AI-powered responses that feel personal and authentic.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <Button size="lg" className="w-full sm:w-auto">
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50" id="features">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center text-gray-900 mb-12">
            Powerful Features for Property Managers
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fade-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <feature.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-xl font-heading font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center text-gray-900 mb-12">
            Trusted by Property Managers
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.author}
                className="bg-white p-8 rounded-xl border border-gray-100 animate-fade-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gray-200" />
                  <div>
                    <h4 className="font-heading font-semibold">{testimonial.author}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold text-white mb-6">
            Ready to Transform Your Guest Communications?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join property managers who are saving time and delighting guests with Welcomy.ai
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-primary hover:bg-gray-100"
          >
            Start Your Free Trial
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-gray-400">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-heading font-semibold mb-4">Welcomy.ai</h3>
              <p className="text-sm">
                AI-powered guest communications platform for modern property managers.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-white transition-colors">
                    How It Works
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/careers" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-sm">© 2024 Welcomy.ai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const features = [
  {
    icon: Bot,
    title: "AI-Powered Automation",
    description:
      "Let AI handle routine guest inquiries with personalized, context-aware responses available 24/7.",
  },
  {
    icon: MessageCircle,
    title: "Smart Messaging",
    description:
      "Engage with guests across multiple channels while maintaining consistent, professional communication.",
  },
  {
    icon: Calendar,
    title: "Scheduling Assistant",
    description:
      "Automate check-in/check-out processes and coordinate cleaning services effortlessly.",
  },
  {
    icon: ChartBar,
    title: "Analytics Dashboard",
    description:
      "Get actionable insights into guest satisfaction and communication performance.",
  },
  {
    icon: Star,
    title: "Review Management",
    description:
      "Automatically follow up with guests post-stay to encourage positive reviews.",
  },
];

const testimonials = [
  {
    author: "Sarah Johnson",
    role: "Property Manager, Luxury Stays",
    content:
      "Welcomy.ai has transformed how we handle guest communications. The AI responses are incredibly natural, and our guest satisfaction scores have never been higher.",
  },
  {
    author: "Michael Chen",
    role: "Director, Urban Rentals Co",
    content:
      "The time savings are incredible. What used to take hours of back-and-forth communication is now handled automatically by Welcomy.ai.",
  },
];

export default Index;
