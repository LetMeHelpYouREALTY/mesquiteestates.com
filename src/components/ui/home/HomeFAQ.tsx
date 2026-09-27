import { homeFaqs } from "@/data/homeFaq";

export default function HomeFAQ() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-40">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-900 mb-6 text-center">
          Mesquite Real Estate FAQ
        </h2>
        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          Common questions about buying or living in Mesquite, Nevada — answered by your local
          Mesquite Estates resource.
        </p>
        <div className="space-y-6">
          {homeFaqs.map((faq) => (
            <div key={faq.question} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-indigo-900 mb-2">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
