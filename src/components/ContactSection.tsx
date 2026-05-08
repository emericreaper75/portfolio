import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'motion/react';
import { Mail, MessageSquare, Send, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from 'sonner';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export function ContactSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await addDoc(collection(db, 'messages'), {
        ...values,
        createdAt: serverTimestamp(),
      });
      toast.success('TRANSMISSION_COMPLETE');
      form.reset();
    } catch (error) {
      toast.error('TRANSMISSION_FAILURE');
    }
  }

  return (
    <div className="py-20 bg-[#050505] relative overflow-hidden">
       <div className="absolute inset-0 technical-grid opacity-10 pointer-events-none" />
       
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="system-label text-brand-cyan mb-4 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-brand-cyan"></span> COMM_UPLINK_V3.1
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter italic">
              ESTABLISH_CONNECTION
            </h3>
            <p className="text-[#A0A0A0] text-sm mb-12 leading-relaxed font-sans lowercase tracking-normal max-w-md">
              initiating contact sequence. please provide parameters for collaboration or project inquiries. system responses typically occur within 24 standard business hours.
            </p>

            <div className="space-y-8">
              {[
                { icon: Mail, label: 'EMAIL_STRATUM', value: 'kumarmanoj76631@gmail.com' },
                { icon: MessageSquare, label: 'COMMS_ID', value: 'rec_engineer#1234' },
                { icon: User, label: 'LINKEDIN_NODE', value: 'in/revanth-ece' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-6">
                  <div className="p-4 bg-[#080808] border border-[#1A1A1A] system-label">
                    <item.icon className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <div>
                    <p className="text-[8px] system-label opacity-40 mb-1">{item.label}</p>
                    <p className="text-white text-sm font-bold uppercase">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-[#080808] p-8 border border-[#1A1A1A]"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[8px] system-label opacity-40">PARAM_NAME</FormLabel>
                        <FormControl>
                          <Input placeholder="IDENTIFIER" {...field} className="bg-black border-[#1A1A1A] rounded-none focus-visible:ring-brand-cyan h-10 system-label text-[10px]" />
                        </FormControl>
                        <FormMessage className="text-[8px] system-label" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[8px] system-label opacity-40">PARAM_EMAIL</FormLabel>
                        <FormControl>
                          <Input placeholder="UPLINK_ADDRESS" {...field} className="bg-black border-[#1A1A1A] rounded-none focus-visible:ring-brand-cyan h-10 system-label text-[10px]" />
                        </FormControl>
                        <FormMessage className="text-[8px] system-label" />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[8px] system-label opacity-40">PARAM_SUBJECT</FormLabel>
                      <FormControl>
                        <Input placeholder="TRANSMISSION_TOPIC" {...field} className="bg-black border-[#1A1A1A] rounded-none focus-visible:ring-brand-cyan h-10 system-label text-[10px]" />
                      </FormControl>
                      <FormMessage className="text-[8px] system-label" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[8px] system-label opacity-40">PARAM_MESSAGE</FormLabel>
                      <FormControl>
                        <Textarea placeholder="DETAILED_LOG_CONTENT" {...field} rows={5} className="bg-black border-[#1A1A1A] rounded-none focus-visible:ring-brand-cyan resize-none system-label text-[10px]" />
                      </FormControl>
                      <FormMessage className="text-[8px] system-label" />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-brand-cyan hover:bg-cyan-400 text-black font-bold h-12 rounded-none system-label border-none">
                  {form.formState.isSubmitting ? 'UPLOADING...' : 'INITIATE_UPLINK'}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
