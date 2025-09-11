export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
              <h2 className="text-2xl font-bold mb-4">Loading Trade Escrow</h2>
              <p className="text-muted-foreground">
                Please wait while we prepare your secure trading environment...
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
