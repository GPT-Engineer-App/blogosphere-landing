import { Button } from "@/components/ui/button";
import { PenTool, BookOpen, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-gray-800 to-gray-900">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Unleash Your Writing Potential</h1>
        <p className="text-xl text-gray-300 mb-8">Create, share, and inspire with our powerful blogging platform</p>
        <Button size="lg" className="bg-white text-gray-800 hover:bg-gray-100">Start Writing Now</Button>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Platform?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <FeatureCard
            icon={<PenTool className="h-12 w-12 text-gray-700" />}
            title="Intuitive Editor"
            description="Write and format your posts with ease using our user-friendly editor."
          />
          <FeatureCard
            icon={<BookOpen className="h-12 w-12 text-gray-700" />}
            title="Reach Your Audience"
            description="Share your stories with a growing community of readers and writers."
          />
          <FeatureCard
            icon={<Users className="h-12 w-12 text-gray-700" />}
            title="Engage & Grow"
            description="Connect with like-minded individuals and grow your following."
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Ready to Start Your Writing Journey?</h2>
          <p className="text-xl mb-8 text-gray-600">Join thousands of writers who have found their voice on our platform.</p>
          <Button size="lg" className="bg-gray-800 text-white hover:bg-gray-700">Sign Up for Free</Button>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
    {icon}
    <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Index;
