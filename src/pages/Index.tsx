
import React from 'react';
import Navbar from '@/components/Navbar';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <Breadcrumb />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="space-y-12 py-8">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-tight">
                About The Free Forum
              </h1>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg md:text-xl leading-relaxed">
                The Free Forum is a peaceful, constructive social movement dedicated to fostering 
                open discussions, critical thinking, and meaningful debates. We believe that real progress 
                comes from dialogue—challenging ideas, refining perspectives, and embracing diverse viewpoints.
              </p>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="leading-relaxed">
                At The Free Forum, we create a space where individuals can engage in structured debates, 
                share insights, and collaborate on solutions to pressing societal issues. Whether it's 
                philosophy, politics, science, or culture, we encourage respectful discourse that goes 
                beyond surface-level arguments.
              </p>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="leading-relaxed">
                We stand for intellectual freedom, constructive criticism, and the power of conversation 
                to shape a better future. In an era of division and misinformation, The Free Forum is a 
                reminder that debate is not about winning or losing—it's about understanding.
              </p>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="leading-relaxed">
                Join us, speak up, and be part of the movement.
              </p>
            </div>
            
            <div className="flex justify-center pt-4">
              <Button className="rounded-full px-8 py-6 h-auto text-base bg-black hover:bg-gray-800 text-white">
                Join the movement
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
