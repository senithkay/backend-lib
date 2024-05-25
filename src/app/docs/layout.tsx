'use client';
import PersistentDrawerLeft from "@/components/MIUI/persistDrawer";
import React from "react";


export default function AppLayOut({ children }: { children: React.ReactNode }) {
    return (
        <PersistentDrawerLeft>
            {children}
        </PersistentDrawerLeft>
    );
}