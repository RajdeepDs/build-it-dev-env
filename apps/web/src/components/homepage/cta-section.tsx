"use client";

import { Button } from "@muse/ui";
import { Icons } from "@muse/ui/icons";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function CTASection(): JSX.Element {
  return (
    <section className="container flex flex-col items-center text-center">
      <div className="flex flex-col items-center">
        <motion.div
          className="flex justify-center gap-x-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", type: "tween" }}
          viewport={{ once: true }}
        >
          <Image src="/LogoDark.svg" alt="Logo" width={30} height={30} />
          <h1 className="text-xl font-medium">Muse</h1>
        </motion.div>
        <div className="mt-7">
          <motion.h1
            className="text-3xl font-bold leading-tight md:text-4xl"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut", type: "tween" }}
            viewport={{ once: true }}
          >
            Start Building Today!
          </motion.h1>
          <motion.p
            className="text-grey-deep mt-3"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              type: "tween",
              delay: 0.2,
            }}
            viewport={{ once: true }}
          >
            Sign Up for Your Free Muse Account and Experience a{" "}
            <br className="hidden md:block" />
            Streamlined Next.js Development Workflow.
          </motion.p>
        </div>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            type: "tween",
            delay: 0.3,
          }}
          viewport={{ once: true }}
        >
          <Link href="/register">
            <Button className="flex items-center">
              Create an account
              <Icons.ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
      <div className="pb-28" />
    </section>
  );
}
