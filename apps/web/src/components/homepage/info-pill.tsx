"use client";
import * as Icons from "@muse/ui/icons";
import { motion } from "framer-motion";

export default function InfoPill(): JSX.Element {
  return (
    <motion.div
      className="bg-grey/10 hover:bg-grey/20 border-grey/30 group flex w-fit cursor-pointer items-center justify-center gap-2 rounded-full border px-2 py-[2px] transition-colors duration-150 ease-linear"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-grey text-sm">Introducing Muse</h1>
      <Icons.ChevronRight className="h-4 w-4" />
    </motion.div>
  );
}
