'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Container, Typography, Button, CardContent } from '@mui/material';
import { color, motion } from 'framer-motion';

// Animation variants
const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
const palettes = {
  primary: {
    light: "#4C9F38",
    main: "#4C9F38",
    dark: "#4C9F38",
    contrastText: "#fff"
  },
  secondary: {
    light: "#eecd5e",
    main: "#F7AA28",
    dark: "#d5a916",
    contrastText: "#000"
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export function RecentCausesSection() {
  const pathname = usePathname();
  const [showAll, setShowAll] = useState(false);

  const causesData = [
    {
      title: "First charity activity of this summer",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      goal: 45000,
      raised: 38000,
      description: "Help today because tomorrow you may be the one who needs more helping!",
      category: "Community"
    },
    {
      title: "Build school for poor children",
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      goal: 120000,
      raised: 85000,
      description: "Education is the most powerful weapon which you can use to change the world.",
      category: "Education"
    },
    {
      title: "Building clean-water system for rural poor",
      image: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
      goal: 75000,
      raised: 62000,
      description: "Access to clean water transforms lives and unlocks human potential.",
      category: "Environment"
    },
    {
      title: "Medical Camp for Rural Areas",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      goal: 60000,
      raised: 42000,
      description: "Providing free medical checkups and medicines to underserved communities.",
      category: "Healthcare"
    },
    {
      title: "Women Empowerment Program",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      goal: 80000,
      raised: 55000,
      description: "Empowering women through skill development and education.",
      category: "Women"
    },
    {
      title: "Disaster Relief Fund",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      goal: 150000,
      raised: 92000,
      description: "Supporting communities affected by natural disasters.",
      category: "Emergency"
    }
  ];

  const displayedCauses = showAll || pathname === '/initiatives' ? causesData : causesData.slice(0, 3);

  const handleSeeMore = () => {
    if (pathname === '/initiatives') {
      setShowAll(true);
    } else {
      window.location.href = '/initiatives';
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <Container maxWidth="xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp}>
            <Typography variant="h4" className="!font-bold !mb-4 text-gray-700">
              Recent <span className="" style={{color:palettes.secondary.main}}>Causes</span>
            </Typography>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Typography variant="body1" className="text-gray-600 max-w-2xl !mx-auto">
              Every donation makes a difference. See how your contribution can change lives.
            </Typography>
          </motion.div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {displayedCauses.map((cause, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white w-[300px] flex flex-col justify-between rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={cause.image} 
                  alt={cause.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end !p-6">
                  <Typography variant="h5" className="text-white !font-bold">
                    {cause.title}
                  </Typography>
                  <span className="mt-1 px-2 py-1 bg-amber-500 text-white text-xs font-medium rounded-full self-start">
                    {cause.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="flex flex-col flex-1 gap-4 p-6">
                <Typography variant="body1" className="text-gray-600">
                  {cause.description}
                </Typography>

                <div>
                  <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                    <span>Raised: ${cause.raised.toLocaleString()}</span>
                    <span>Goal: ${cause.goal.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className=" h-2.5 rounded-full" 
                      style={{ width: `${Math.min(100, (cause.raised / cause.goal) * 100)}%`,backgroundColor:palettes.secondary.main }}
                      
                    ></div>
                  </div>
                </div>

                <div className="mt-auto">
                  
<Button
  variant="contained"
  style={{
    backgroundImage:  palettes.secondary.main,
 background:' #363636',
     color: '#fff',
    width: '100%',
    paddingTop: '0.75rem',
    paddingBottom: '0.75rem',
    borderRadius: '9999px', // Tailwind's rounded-full
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  }}
  // onMouseEnter={(e) => {
  //   e.currentTarget.style.backgroundImage = `linear-gradient(to right, ${palettes.secondary.main}, ${palettes.secondary.dark})`;
  // }}
  // onMouseLeave={(e) => {
  //   e.currentTarget.style.backgroundImage = `linear-gradient(to right, ${palettes.secondary.light}, ${palettes.secondary.main})`;
  // }}
  size="large"
  onClick={() => window.location.href = 'https://campaign-template-2.vercel.app/'}
>
  Donate Now
</Button>
                </div>
              </CardContent>
            </motion.div>
          ))}
        </div>

        {(!showAll && pathname !== '/initiatives') && (
          <div className="mt-12 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
            >
              <Button
                variant="text"
                className=" !hover:underline !font-semibold !text-lg inline-flex items-center gap-1"
                onClick={handleSeeMore}
                sx={{color: palettes.secondary.main}}
              >
                See more
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
            </motion.div>
          </div>
        )}
      </Container>
    </section>
  );
}