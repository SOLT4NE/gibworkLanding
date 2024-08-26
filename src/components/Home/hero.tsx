import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Card, CardContent } from "~/components/ui/card"
import { Bitcoin, Search, Briefcase, TrendingUp } from "lucide-react"

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <motion.section
      className="w-full py-12 md:py-24 lg:py-16 bg-gradient-to-br rounded-lg from-indigo-900 via-purple-900 to-indigo-800 text-white relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            "radial-gradient(circle, rgba(99,0,238,0.3) 0%, rgba(0,0,0,0) 50%)",
            "radial-gradient(circle, rgba(99,0,238,0.3) 100%, rgba(0,0,0,0) 100%)"
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center">
          <motion.div className="space-y-2" variants={itemVariants}>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Discover Web3 Job Opportunities
            </h1>
            <p className="mx-auto max-w-[700px] text-zinc-200 md:text-xl dark:text-zinc-100">
              Connect with innovative projects and shape the future of decentralized technology.
            </p>
          </motion.div>
          <motion.div className="w-full max-w-sm space-y-2" variants={itemVariants}>
            <form onSubmit={(e) => e.preventDefault()} className="flex space-x-2">
              <Input
                className="flex-1 bg-white/10 text-white placeholder:text-zinc-300 focus:ring-2 focus:ring-purple-400 transition-all duration-300"
                placeholder="Search for jobs"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button type="submit" className="bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </motion.div>
            </form>
          </motion.div>
          <motion.div className="flex flex-wrap justify-center gap-4 mt-8" variants={itemVariants}>
            <AnimatedCard icon={<Briefcase className="h-6 w-6 text-purple-400" />} title="30+" description="Active Jobs" />
            <AnimatedCard icon={<Bitcoin className="h-6 w-6 text-purple-400" />} title="50+" description="Blockchain Projects" />
            <AnimatedCard icon={<TrendingUp className="h-6 w-6 text-purple-400" />} title="$9k+" description="Total Compensation" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

const AnimatedCard = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(139, 92, 246)" }}
    className="bg-white/10 border-white/20 rounded-lg overflow-hidden transition-all duration-300"
  >
    <Card>
      <CardContent className="flex items-center space-x-4 p-4">
        {icon}
        <div className="space-y-1">
          <motion.p
            className="text-sm font-medium leading-none"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {title}
          </motion.p>
          <p className="text-sm text-purple-500">{description}</p>
        </div>
      </CardContent>
    </Card>
  </motion.div>
)