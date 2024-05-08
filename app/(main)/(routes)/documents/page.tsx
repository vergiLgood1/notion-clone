'use client'

import { useUser } from "@clerk/clerk-react";

import { toast } from "sonner";
import Image from "next/image";
import { PlusCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";


const DocumentsPage = () => {
    const { user } = useUser();
    const create = useMutation(api.documents.create);

    const onCreate = () => {
        const promise = create({ title: "untitled" });

        toast.promise(promise, {
            loading: "Creating a new note...",
            success: "New note created!",
            error: "Failed to create a new note",
        });
    };

    return ( 
        <div className="h-full flex flex-col justify-center items-center space-y-4">
            <Image
             src="/assets/images/empty.png"
             height="300"
             width="300"
             alt="empty"
             className="dark:hidden"
            
            />
            <Image
             src="/assets/images/empty-dark.png"
             height="300"
             width="300"
             alt="empty"
             className="hidden dark:block"
            
            />

            <h2 className="text-lg font-medium">
                Welcome to {user?.firstName}&apos;s Jotion
            </h2>
            <Button onClick={onCreate}>
                <PlusCircle className="w-4 h-4 mr-2"/>
                Create a note
            </Button>
        </div>
     );
}
 
export default DocumentsPage;  