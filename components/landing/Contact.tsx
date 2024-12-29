import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const Contact = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="py-16 bg-primary text-primary-foreground"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2 
          variants={itemVariants}
          className="text-4xl font-bold mb-6"
        >
          Ready to Transform Your Marketing?
        </motion.h2>
        <motion.p 
          variants={itemVariants}
          className="text-xl mb-8 text-primary-foreground/90"
        >
          Schedule a personalized consultation to discover how our Multi-Agent AI can revolutionize your marketing strategies.
        </motion.p>
        <motion.div variants={itemVariants}>
          <Card>
            <CardContent className="p-6">
              <form className="max-w-lg mx-auto">
                <motion.div 
                  className="grid md:grid-cols-2 gap-4 mb-4"
                  variants={itemVariants}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Input 
                      type="text" 
                      placeholder="Name" 
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Input 
                      type="email" 
                      placeholder="Email" 
                    />
                  </motion.div>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mb-4"
                >
                  <Textarea 
                    placeholder="Tell us about your marketing challenges"
                    rows={4}
                  />
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="w-full md:w-auto"
                  >
                    Request Consultation
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;