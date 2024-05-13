'use client'

import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";
import { useTheme } from "next-themes";
import { useEdgeStore } from "@/lib/edgestore";
import { PartialBlock } from "@blocknote/core";


interface EditorProps {
    onChange: (value: string) => void;
    initialContent?: string;
    editable?: boolean;
};

const Editor = ({
    onChange,
    initialContent,
    editable,
}: EditorProps) => {
    const { resolvedTheme } = useTheme();
    const { edgestore } = useEdgeStore();

    const handleUpload = async (file: File) => {
        const response = await edgestore.publicFiles.upload({
            file
        })

        return response.url;
    };

    
    const onEditorContentChange = (editor: any) => {
        onChange(JSON.stringify(editor.topLevelBlcoks, null, 2))
    }

    const editor = useCreateBlockNote({
    initialContent: 
        initialContent 
        ? JSON.parse(initialContent) as PartialBlock[] 
        : undefined,
    uploadFile:handleUpload,    
  });

    return(
        <div>
            <BlockNoteView
               editor={editor}
               editable={editable}
               theme={resolvedTheme === "dark" ? "dark" : "light"}
               onChange={() => {
                onChange(JSON.stringify(editor.document, null, 2))
               }}
            />
        </div>
    )
}

export default Editor;