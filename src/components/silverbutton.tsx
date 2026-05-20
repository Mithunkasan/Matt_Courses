"use client"

import { motion } from "framer-motion"
import { Award, Youtube } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface SilverPlayButtonProps {
  image?: string
  subscriberCount?: string
  channelName?: string
  video?: string
}

export default function SilverPlayButton({
  video = "play2.mp4",
  subscriberCount = "100K+",
  channelName = "Your Channel",
}: SilverPlayButtonProps) {
  return (
    <div className="bg-[#072655] rounded-xl p-8 shadow-xl">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Silver Play Button Image */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative bg-gradient-to-br from-gray-200 to-white p-2 rounded-xl shadow-2xl"
          >
            <video
              src={video|| "/placeholder.svg"}
  
              className="w-64 h-64 object-contain"
            />
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 0 rgba(255,255,255,0.4)",
                  "0 0 20px rgba(255,255,255,0.6)",
                  "0 0 0 rgba(255,255,255,0.4)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="absolute inset-0 rounded-xl"
            />
          </motion.div>

          {/* YouTube Icon */}
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
            className="absolute -top-4 -right-4 bg-red-600 rounded-full p-3 shadow-lg"
          >
            <Youtube className="w-6 h-6 text-white" />
          </motion.div>
        </motion.div>

        <div className="text-center md:text-left">
          <Badge className="mb-4 bg-white/20 text-white border-white/30 text-lg px-4 py-2">
            <Award className="w-5 h-5 mr-2" />
            YouTube Achievement
          </Badge>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Silver Play Button
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-white/80 text-lg mb-6"
          >
            Awarded to {channelName} for surpassing {subscriberCount} subscribers
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-white/70"
          >
            <p>
              This prestigious award recognizes the hard work, creativity, and dedication that went into building a
              thriving YouTube community.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
