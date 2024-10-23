// src/components/Breadcrumb.tsx
import React from "react";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex items-center mb-4 text-sm text-gray-600">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <Link href={item.path} className="hover:underline">
            {item.label}
          </Link>
          {index < items.length - 1 && <span className="mx-2">/</span>}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
