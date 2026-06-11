const KnowledgeHub = () => {
  return (
    <section id="knowledge-hub" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Knowledge <span className="gradient-text">Hub</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Insights, articles, and thought leadership on organization development
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-[504px] rounded-lg overflow-hidden shadow-medium bg-background">
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7470757904627695616"
              height="613"
              width="504"
              frameBorder="0"
              allowFullScreen
              title="Embedded post"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeHub;
