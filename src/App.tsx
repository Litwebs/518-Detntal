const App = () => (
  <main className="flex min-h-screen items-center justify-center bg-background px-6 py-16">
    <section aria-labelledby="maintenance-heading" className="w-full max-w-xl text-center">
      <img
        src={`${import.meta.env.BASE_URL}518.jpg`}
        alt="518 Dental"
        className="mx-auto mb-10 h-24 w-auto max-w-full object-contain"
      />
      <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
        We'll be back soon
      </p>
      <h1 id="maintenance-heading" className="text-4xl font-semibold leading-tight sm:text-5xl">
        Our website is currently under maintenance
      </h1>
      <p className="mt-6 text-base leading-relaxed text-muted-foreground">
        We're making some updates to our website. Thank you for your patience.
        Please contact our team for appointments or enquiries.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href="tel:01706527127"
          className="rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          Call 01706 527127
        </a>
        <a
          href="mailto:admin@518dental.co.uk"
          className="break-all rounded-lg border border-border px-6 py-3 font-medium underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          admin@518dental.co.uk
        </a>
      </div>
      <p className="mt-10 text-sm text-muted-foreground">
        518A Bury Road, Rochdale, OL11 4DQ
      </p>
    </section>
  </main>
);

export default App;
