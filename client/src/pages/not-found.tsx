import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md shadow-2xl border-0 rounded-2xl transition-all duration-300 bg-white dark:bg-zinc-900">
        <CardContent className="pt-8 pb-10 text-center">
          <div className="flex justify-center mb-4">
            <AlertCircle className="h-10 w-10 text-red-500" />
          </div>

          <h1 className="text-3xl font-bold text-black dark:text-white">
            404 — Page Not Found
          </h1>

          <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
            This page doesn’t exist. Maybe you forgot to add it to the router?
          </p>

          <div className="mt-6">
            <Link href="/">
              <Button className="rounded-full px-6 text-sm" variant="outline">
                Go back home
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}