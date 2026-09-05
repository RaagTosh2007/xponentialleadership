const keyClients = [
  "CreditAccess Grameen",
  "Swiggy",
  "Ramco Systems",
  "MiQ",
  "HCLTech",
  "Booking Holdings",
  "Adobe",
  "Avanti Feeds",
  "Agratas (Tata)",
];

const otherOrganisations = [
  "Motorola",
  "Oracle",
  "Dr. Reddy's",
  "Asian Paints",
  "Swiss Re",
  "Deloitte",
  "Tech Mahindra",
  "Vodafone",
  "Tibco Software",
  "Clarks",
  "Lufthansa",
  "DBS",
  "BP",
  "SABMiller",
  "Deutsche Bank",
  "Indian Immunologicals",
  "CSC",
  "Snackstreet",
  "Trafasa",
  "HP",
];

const Clients = () => {
  return (
    <section id="clients" className="py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Clients</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Key clients across technology, BFSI, manufacturing and consulting.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {keyClients.map((client) => (
            <span
              key={client}
              className="px-5 py-2.5 rounded-lg bg-gradient-card border border-border/50 text-sm font-medium shadow-soft"
            >
              {client}
            </span>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold text-accent mb-3">
            We have made a positive difference to people at
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {otherOrganisations.map((org) => (
              <span
                key={org}
                className="text-xs px-3 py-1.5 rounded-md bg-background/40 border border-border/50 text-muted-foreground"
              >
                {org}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
