import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Transform Your Marketing?
        </h2>
        <p className="text-xl mb-8 text-primary-foreground/90">
          Schedule a personalized consultation to discover how our Multi-Agent AI can revolutionize your marketing strategies.
        </p>
        <Card>
          <CardContent className="p-6">
            <form className="max-w-lg mx-auto">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <Input 
                  type="text" 
                  placeholder="Name" 
                />
                <Input 
                  type="email" 
                  placeholder="Email" 
                />
              </div>
              <Textarea 
                placeholder="Tell us about your marketing challenges"
                className="mb-4"
                rows={4}
              />
              <Button size="lg" variant="secondary">
                Request Consultation
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact; 