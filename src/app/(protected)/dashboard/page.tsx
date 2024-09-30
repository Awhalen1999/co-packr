"use client";

import Link from "next/link";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import { ListItem } from "@/components/list-item"; 
import { Luggage, MapPin } from "lucide-react"; 

export default function DashboardPage() {
  // Mock data for the lists
  const mockLists = [
    {
      title: "Palm Springs",
      date: "June 22–28, 2023",
      icon: Luggage,
      backgroundColor: "bg-blue-200"
    },
    {
      title: "New York",
      date: "September 15–20, 2023",
      icon: MapPin,
      backgroundColor: "bg-green-300"
    }
  ];

  return (
    <ContentLayout title="Dashboard">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Dashboard</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Main content with padding */}
      <div className="p-10 border border-white">
        <h1 className="text-2xl font-semibold mb-6">Created Lists</h1>

        {/* Render mock lists */}
        <div className="space-y-4 mb-6">
          {mockLists.map((list, index) => (
            <ListItem
              key={index}
              title={list.title}
              date={list.date}
              Icon={list.icon}
              backgroundColor={list.backgroundColor}
              onClick={() => console.log(`Navigating to ${list.title}`)}
            />
          ))}
        </div>

        {/* Add a New List button */}
        <Button className="w-full gap-2">
          <CirclePlus />
          Add a New List
        </Button>
      </div>
    </ContentLayout>
  );
}
