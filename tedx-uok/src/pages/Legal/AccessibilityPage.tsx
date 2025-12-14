export default function AccessibilityPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20 space-y-6">
      <h1 className="text-3xl font-bold text-white">
        Accessibility Statement
      </h1>

      <p className="text-white">
        TEDxUoK is committed to ensuring accessibility for all attendees,
        including individuals with disabilities.
      </p>

      <ul className="list-disc pl-6 text-white space-y-2">
        <li>Wheelchair accessible venue</li>
        <li>Reserved seating for accessibility needs</li>
        <li>Clear signage and staff assistance</li>
        <li>Keyboard-navigable website</li>
        <li>Readable contrast and semantic HTML</li>
      </ul>

      <p className="text-white">
        For specific accessibility requests, please contact the TEDxUoK
        organizing team in advance.
      </p>
    </main>
  );
}