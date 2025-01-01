import React, { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ClientInquiryForm = React.lazy(
  () => import("@/components/clientInquiryForm")
);

export default function ClientInquiryPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative w-full h-[50vh] z-10">
        <div className="relative w-full h-[100%]">
          <img
            src="/image/landscape_bg.webp"
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="flex items-center justify-evenly h-[50vh] ">
            <div className="w-[1px] h-[100px] bg-gradient-to-b from-transparent via-white to-transparent animate-gradient-flow z-50" />
            <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent animate-gradient-flow-late z-50" />
            <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent animate-gradient-flow z-50" />
            <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent animate-gradient-flow-late z-50" />
            <div className="w-[1px] h-[100px] bg-gradient-to-b from-transparent via-white to-transparent animate-gradient-flow z-50" />
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-black/60 flex items-end justify-center p-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Client Inquiry
          </h1>
        </div>
      </div>
      <main className="container relative z-50 -mt-72 mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            DROP US A MESSAGE FOR ANY QUERY
          </h2>
          <p className="text-lg text-gray-400">
            We're here to help. Fill out the form below, and we'll get back to
            you as soon as possible.
          </p>
        </div>

        <div className="bg-card rounded-lg shadow-lg p-6 md:p-8 max-w-4xl mx-auto   ">
          <Suspense
            fallback={
              <div className="flex flex-col gap-y-4">
                <Skeleton className="w-[800px] h-[20px]" />
                <Skeleton className="w-[800px] h-[20px]" />
                <Skeleton className="w-[800px] h-[20px]" />
                <Skeleton className="w-[800px] h-[20px]" />
                <Skeleton className="w-[800px] h-[20px]" />
                <Skeleton className="w-[800px] h-[30px]" />
                <Skeleton className="w-[800px] h-[50px]" />
                <Skeleton className="w-[800px] h-[60px]" />
                <Skeleton className="w-[800px] h-[60px]" />
              </div>
            }
          >
            <ClientInquiryForm />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
