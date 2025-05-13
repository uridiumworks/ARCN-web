"use client";

import React, { useEffect } from "react";
import Banner from "@/components/Careers/Banner";
import Open from "@/components/Careers/Open";
import Journal from "@/components/Shared/Journal";
import { useRouter } from "next/navigation"; // ✅ FIXED

const Career = () => {
    const router = useRouter();

    useEffect(() => {
        router.push("/"); // ✅ This works in App Router
    }, []);

    return (
        <section>
            <Banner />
            <Open />
            <Journal />
        </section>
    );
};

export default Career;
