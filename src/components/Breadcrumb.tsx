
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { 
  Breadcrumb as BreadcrumbUI,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator 
} from '@/components/ui/breadcrumb';

const Breadcrumb = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-6 flex items-center justify-between">
      <div className="text-gray-500">
        <span className="text-sm font-medium">Welcome to The Free Forum</span>
      </div>
      
      <BreadcrumbUI>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage>Home</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </BreadcrumbUI>
    </div>
  );
};

export default Breadcrumb;
