'use client'

import { useUser } from "@clerk/clerk-react";

import Image from "next/image";
import { PlusCircle } from "lucide-react";

import { Button } from "@/components/ui/button";


const DocumentsPage = () => {
    const { user } = useUser();

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
            <Button>
                <PlusCircle className="w-4 h-4 mr-2"/>
                Create a note
            </Button>
        </div>
     );
}
 
export default DocumentsPage;