import React from "react";
import { Link } from "react-router-dom";

export default function Vision() {
  return (
    <div className="min-h-screen bg-[#10161C] text-white">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#FFD700] mb-6">
          The SaintSal™ Vision
        </h1>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto">
          A platform founded on faith, built for execution, and designed to empower.
        </p>
      </section>

      {/* Pillar 1 - Safety-First Execution */}
      <section className="max-w-5xl mx-auto py-8 px-6">
        <h2 className="text-3xl font-bold text-[#FFD700] mb-6">
          Pillar 1 – Safety-First Execution
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          In a world where reckless innovation often leads to catastrophic failures, SaintSal™ stands as a beacon of responsible development. Every feature, every integration, every line of code is crafted with an unwavering commitment to safety. We believe that true power comes not from speed alone, but from the confidence that your platform will never fail you when it matters most. Our HACP™ protocol ensures that safety isn't an afterthought—it's the foundation upon which everything else is built.
        </p>
      </section>

      {/* Pillar 2 - Scalability by Design */}
      <section className="max-w-5xl mx-auto py-8 px-6">
        <h2 className="text-3xl font-bold text-[#FFD700] mb-6">
          Pillar 2 – Scalability by Design
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          SaintSal™ doesn't just accommodate growth—it anticipates it. Our architecture is designed to scale seamlessly from your first client to your thousandth, from simple automations to complex enterprise workflows. We've built a platform that grows with your ambitions, ensuring that success never becomes a limitation. When your business scales, SaintSal™ scales. When your needs evolve, SaintSal™ evolves. This isn't just software—it's a partner in your journey to greatness.
        </p>
      </section>

      {/* Pillar 3 - User-First Experience */}
      <section className="max-w-5xl mx-auto py-8 px-6">
        <h2 className="text-3xl font-bold text-[#FFD700] mb-6">
          Pillar 3 – User-First Experience
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Every interaction with SaintSal™ is designed to elevate your experience, not complicate it. We believe that powerful technology should feel intuitive, that complex workflows should feel natural, and that professional tools should feel personal. Our interface speaks your language, anticipates your needs, and adapts to your workflow. This is technology that serves you, not the other way around.
        </p>
      </section>

      {/* Pillar 4 - Sovereignty & Control */}
      <section className="max-w-5xl mx-auto py-8 px-6">
        <h2 className="text-3xl font-bold text-[#FFD700] mb-6">
          Pillar 4 – Sovereignty & Control
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Your data is yours. Your workflows are yours. Your success is yours. SaintSal™ empowers you with complete control over your digital empire, ensuring that you remain the sovereign ruler of your domain. We provide the tools, you maintain the power. No vendor lock-in, no hidden dependencies, no compromises on your autonomy. This is technology that respects your sovereignty and amplifies your control.
        </p>
      </section>

      {/* Pillar 5 - Divine UX */}
      <section className="max-w-5xl mx-auto py-8 px-6">
        <h2 className="text-3xl font-bold text-[#FFD700] mb-6">
          Pillar 5 – Divine UX
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          There's something sacred about perfectly crafted user experience—when technology transcends utility and becomes art. SaintSal™ delivers interfaces that don't just function, they inspire. Every interaction feels purposeful, every transition feels natural, every outcome feels inevitable. This is user experience elevated to a divine level, where efficiency meets elegance and functionality becomes beautiful.
        </p>
      </section>

      {/* Pillar 6 - Execution > Experimentation */}
      <section className="max-w-5xl mx-auto py-8 px-6">
        <h2 className="text-3xl font-bold text-[#FFD700] mb-6">
          Pillar 6 – Execution > Experimentation
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          While others debate and deliberate, SaintSal™ executes. We believe that perfect execution of a good plan beats perfect planning with poor execution every time. Our platform is built for doers, for builders, for those who understand that results matter more than process. Every feature is battle-tested, every integration is production-ready, every tool is designed for real-world impact. This isn't a sandbox—it's a war room.
        </p>
      </section>

      {/* Final CTA */}
      <section className="max-w-5xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#FFD700] mb-6">
          Join the Vision
        </h2>
        <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
          The future belongs to those who execute with purpose, scale with intention, and build with faith. 
          Join the ranks of professionals who have chosen to dominate their space with SaintSal™.
        </p>
        <Link
          to="/signup"
          className="inline-block bg-[#FFD700] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors"
        >
          Join the Vision →
        </Link>
      </section>

      {/* Bottom Spacing */}
      <div className="h-16"></div>
    </div>
  );
}