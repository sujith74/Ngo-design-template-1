'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Container, Typography, Grid, CardContent, IconButton,  Divider, } from '@mui/material';
import {  People, Handshake, MonetizationOn, ArrowForward, Facebook, Twitter, LinkedIn, YouTube, Instagram, Favorite, VolunteerActivism, LocationOn, Email, Phone,  ArrowBack, ArrowForwardIos } from '@mui/icons-material';

const JoyfulMindsWebsite = () => {

  const [currentSlide, setCurrentSlide] = useState(0);


  // const currencies = ['USD', 'INR', 'EUR', 'GBP'];

  
  const slides = [
    {
      bgImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
      subtitle: "YOUR CONTRIBUTION CAN HELP A SOLUTION",
      title: "Better Life for",
      highlight: "People",
      description: "Help today because tomorrow you may be the one who needs helping! Forget what you can get and see what you can give."
    },
    {
      bgImage: "url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80')",
      subtitle: "JOIN OUR MISSION TODAY",
      title: "Transforming",
      highlight: "Communities",
      description: "Together we can create lasting change. Your support makes real impact in people's lives every single day."
    },
    {
      bgImage: "url('https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80')",
      subtitle: "EVERY DONATION MATTERS",
      title: "Hope for",
      highlight: "Children",
      description: "Small acts, when multiplied by millions of people, can transform the world. Be part of something bigger."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  

  // Animation variants
  // const fadeInUp = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: { opacity: 1, y: 0 }
  // };

  // const staggerContainer = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.1
  //     }
  //   }
  // };
  const navLinks = {
    Home: "/",
    About: "https://about-us-two-indol.vercel.app/",
    Causes: "#causes",
    Report: "#report",
    Pages: "#pages",
    Contact: "#contact"
  };

  const features = [
    {
      icon: <People className="text-2xl text-amber-500" />,
      title: "Become A Volunteer",
      description: "Join passionate volunteers making an impact globally.",
      action: "Join Today"
    },
    {
      icon: <MonetizationOn className="text-2xl text-amber-500" />,
      title: "Fundraising",
      description: "Support causes through impactful donations.",
      action: "Donate Now"
    },
    {
      icon: <Handshake className="text-2xl text-amber-500" />,
      title: "Corporate Partnership",
      description: "Partner with us for meaningful business alignment.",
      action: "Partner With Us"
    },
    {
      icon: <VolunteerActivism className="text-2xl text-amber-500" />,
      title: "Sponsor A Child",
      description: "Change a child's life with your sponsorship.",
      action: "Sponsor Now"
    }
  ];
  
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  
  // const scaleIn = {
  //   hidden: { opacity: 0, scale: 0.8 },
  //   visible: {
  //     opacity: 1,
  //     scale: 1,
  //     transition: {
  //       duration: 0.5
  //     }
  //   }
  // };
  

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-2 text-xs sm:text-sm">
  <Container maxWidth="xl" className="!flex flex-col sm:!flex-row justify-between items-center gap-2 sm:!gap-0 px-4">
    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 w-full sm:w-auto justify-between sm:justify-start">
      <motion.div 
        whileHover={{ scale: 1.05 }} 
        className="flex items-center whitespace-nowrap min-w-max"
      >
        <Email className="text-amber-400 mr-1 sm:mr-2" fontSize="small" />
        <span>help@joyfulminds.com</span>
      </motion.div>
      <motion.div 
        whileHover={{ scale: 1.05 }} 
        className="flex items-center whitespace-nowrap min-w-max"
      >
        <Phone className="text-amber-400 mr-1 sm:mr-2" fontSize="small" />
        <span>+1 800 785 6748</span>
      </motion.div>
    </div>
    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 w-full sm:w-auto justify-between sm:justify-start">
      <motion.a 
        href="#" 
        className="hover:text-amber-400 flex items-center whitespace-nowrap min-w-max"
        whileHover={{ y: -2 }}
      >
        <Favorite className="mr-1" fontSize="small" />
        <span>My Account</span>
      </motion.a>
      <motion.div whileHover={{ scale: 1.05 }} className="w-full sm:w-auto min-w-[100px]">
        <Button 
          variant="contained" 
          className="bg-amber-400 hover:bg-amber-500 text-gray-900 px-3 sm:px-4 py-0.5 sm:py-1 rounded-full font-bold shadow-md text-xs sm:text-sm w-full sm:w-auto"
          size="small"
        >
          Register
        </Button>
      </motion.div>
    </div>
  </Container>
</div>
      {/* Main Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/90 backdrop-blur-md shadow-sm py-3 sticky top-0 z-50"
      >
        <Container maxWidth="xl" className="flex justify-between items-center">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <img src="https://crowdera-platform.s3.ap-south-1.amazonaws.com/CDRA/campaign-assets/0eb4c68e-785f-4f51-a735-37faa46fbeff_thumbnail_0fff8a35-a963-4bf1-8c42-3c98f5b15207_thumbnail_30e11477-9362-4975-b9dc-ab8dbca65e4a_thumbnail_Joyful Minds logo v4.png" alt="Joyful Minds" className="h-10" />
            {/* <Typography variant="h5" className="font-bold ml-2 bg-gradient-to-r from-gray-800 to-amber-500 bg-clip-text text-transparent">
              Joyful <span className="text-amber-500">Minds</span>
            </Typography> */}
          </motion.div>
          
          <nav className="hidden lg:flex space-x-8">
  {Object.entries(navLinks).map(([label, link]) => (
    <motion.a
      key={label}
      href={link}
      className="text-gray-800 hover:text-amber-500 font-medium relative group"
      whileHover={{ y: -2 }}
      target={link.startsWith("http") ? "_blank" : "_self"} // opens external links in new tab
      rel={link.startsWith("http") ? "noopener noreferrer" : ""}
    >
      {label}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
    </motion.a>
  ))}
</nav>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="contained" 
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-2 rounded-full shadow-lg"
              startIcon={<Favorite />}
            >
              Donate Now
            </Button>
          </motion.div>
        </Container>
      </motion.header>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0 flex">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentSlide ? 1 : 0,
              scale: index === currentSlide ? 1 : 1.05
            }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: slide.bgImage,
              zIndex: index === currentSlide ? 1 : 0
            }}
          />
        ))}
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
      
      {/* Content */}
      <div className="relative h-full z-20 flex items-center">
        <Container maxWidth="xl" className="relative h-full flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="w-full md:w-1/2 lg:w-2/5"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Typography 
                  variant="subtitle1" 
                  className="text-amber-500 !mb-4 font-bold tracking-wider animate-pulse"
                >
                  {slides[currentSlide].subtitle}
                </Typography>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Typography 
                  variant="h2" 
                  className="!font-bold text-5xl md:text-6xl lg:text-7xl !mb-6 leading-tight text-gray-800"
                >
                  {slides[currentSlide].title} <span className="text-amber-500">{slides[currentSlide].highlight}</span>
                </Typography>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Typography 
                  variant="body1" 
                  className="text-gray-600 !mb-8 text-lg max-w-lg"
                >
                  {slides[currentSlide].description}
                </Typography>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <Button 
                  variant="contained" 
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-full shadow-lg text-lg transform hover:scale-105 transition-transform"
                  size="large"
                >
                  Make Donation
                </Button>
                <Button 
                  variant="outlined" 
                  className="border-2 border-amber-500 text-amber-500 hover:bg-amber-50 px-8 py-4 rounded-full text-lg transform hover:scale-105 transition-transform"
                  endIcon={<ArrowForward />}
                  size="large"
                >
                  Read More
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </Container>
      </div>
      
      {/* Navigation */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30 flex items-center gap-4">
        <button 
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/30 hover:bg-white/50 backdrop-blur-sm transition-all"
        >
          <ArrowBack className="text-gray-700" />
        </button>
        
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-amber-500 w-6' : 'bg-white/50'}`}
            />
          ))}
        </div>
        
        <button 
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/30 hover:bg-white/50 backdrop-blur-sm transition-all"
        >
          <ArrowForward className="text-gray-700" />
        </button>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 hidden md:block"
      >
       <Typography variant="caption" className="text-gray-600 flex items-center gap-1 m">
  Scroll down <ArrowForwardIos className="text-xs transform rotate-90" />
</Typography>
      </motion.div>
    </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
  <Container maxWidth="xl">
    <Grid container spacing={4} justifyContent="center">
      {[
        { value: "250+", label: "Volunteers" },
        { value: "$1.2M", label: "Funds Raised" },
        { value: "85+", label: "Projects" },
        { value: "32", label: "Countries" }
      ].map((stat, index) => (
        <Grid item xs={6} sm={3} key={index}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="text-center p-6 rounded-xl  hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <Typography variant="h2" className="!font-bold text-amber-400 !mb-2">
              {stat.value}
            </Typography>
            <Typography variant="h6" className="!font-medium text-white">
              {stat.label}
            </Typography>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  </Container>
</section>

      {/* Features Section */}
      <section className="py-20 bg-white">
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
          How You Can <span className="text-amber-500">Help</span>
        </Typography>
      </motion.div>
      <motion.div variants={fadeInUp}>
        <Typography variant="body1" className="text-gray-600 max-w-2xl !mx-auto">
          The secret to happiness lies in helping others. Never underestimate the difference YOU can make.
        </Typography>
      </motion.div>
    </motion.div>

    <Slider {...sliderSettings}>
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          whileHover={{ y: -6 }}
          className="px-3"
        >
          <div className="bg-gray-50 px-4 py-4 text-gray-700 rounded-xl h-full flex flex-col items-center text-center border border-gray-200 hover:border-amber-300 transition-all shadow hover:shadow-md">
            <div className="bg-amber-100/60 w-14 h-14 rounded-full flex items-center justify-center mb-3 border border-amber-200">
              {feature.icon}
            </div>
            <Typography variant="subtitle1" className="!font-semibold !mb-2">
              {feature.title}
            </Typography>
            <Typography variant="body2" className="text-gray-600 !mb-3 text-sm leading-relaxed">
              {feature.description}
            </Typography>
            <Button 
              variant="text" 
              className="text-amber-500 hover:bg-amber-50 !font-medium !text-sm"
              endIcon={<ArrowForward />}
            >
              {feature.action}
            </Button>
          </div>
        </motion.div>
      ))}
    </Slider>
  </Container>
</section>

      {/* Recent Causes */}
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
        <Typography variant="h4" className="!font-bold !mb-4 text-gray-700 ">
          Recent <span className="text-amber-500">Causes</span>
        </Typography>
      </motion.div>
      <motion.div variants={fadeInUp}>
        <Typography variant="body1" className="text-gray-600 max-w-2xl !mx-auto">
          Every donation makes a difference. See how your contribution can change lives.
        </Typography>
      </motion.div>
    </motion.div>

    <div className="flex flex-wrap justify-center gap-6">
      {[
        {
          title: "First charity activity of this summer",
          image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          goal: 45000,
          raised: 38000,
          description: "Help today because tomorrow you may be the one who needs more helping!"
        },
        {
          title: "Build school for poor children",
          image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
          goal: 120000,
          raised: 85000,
          description: "Education is the most powerful weapon which you can use to change the world."
        },
        {
          title: "Building clean-water system for rural poor",
          image: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
          goal: 75000,
          raised: 62000,
          description: "Access to clean water transforms lives and unlocks human potential."
        }
      ].map((cause, index) => (
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
        className="bg-gradient-to-r from-amber-400 to-amber-600 h-2.5 rounded-full" 
        style={{ width: `${Math.min(100, (cause.raised / cause.goal) * 100)}%` }}
      ></div>
    </div>
  </div>

  <div className="mt-auto">
  
<Button 
  variant="contained" 
  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 w-full py-3 rounded-full shadow-md"
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

    <div className="mt-12 text-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <Button
          variant="text"
          className="!text-amber-600 !hover:underline !font-semibold !text-lg inline-flex items-center gap-1"
        >
          See more
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Button>
      </motion.div>
    </div>
  </Container>
</section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <Container maxWidth="xl" className="text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Typography variant="h3" className="!font-bold !mb-6">
                Ready to Make a <span className="text-amber-400">Difference</span>?
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography variant="body1" className="text-gray-300 !mb-8 max-w-2xl !mx-auto text-lg">
                Join thousands of others who are helping to create positive change in the world.
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
              <Button 
                variant="contained" 
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full shadow-lg text-lg"
                size="large"
              >
                Donate Now
              </Button>
              <Button 
                variant="outlined" 
                className="border-white text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg"
                size="large"
              >
                Become Volunteer
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <Container maxWidth="xl">
          <Grid container spacing={8}>
            <Grid item xs={12} md={4}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true }}
              >
                <div className="flex items-center !mb-6">
                  <img src="https://crowdera-platform.s3.ap-south-1.amazonaws.com/CDRA/campaign-assets/0eb4c68e-785f-4f51-a735-37faa46fbeff_thumbnail_0fff8a35-a963-4bf1-8c42-3c98f5b15207_thumbnail_30e11477-9362-4975-b9dc-ab8dbca65e4a_thumbnail_Joyful Minds logo v4.png" alt="Joyful Minds" className="h-10" />
                  {/* <Typography variant="h5" className="!font-bold ml-2">
                    Joyful <span className="text-amber-500">Minds</span>
                  </Typography> */}
                </div>
                <Typography variant="body1" className="text-gray-400 !mb-6">
                  We are a nonprofit organization dedicated to helping those in need around the world through various programs and initiatives.
                </Typography>
                <div className="flex space-x-4">
                  {[Facebook, Twitter, Instagram, LinkedIn, YouTube].map((Icon, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ y: -3, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <IconButton className="text-gray-400 hover:text-amber-500">
                        <Icon />
                      </IconButton>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Grid>
            
            <Grid item xs={12} sm={6} md={2}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true }}
              >
                <Typography variant="h6" className="!font-bold !mb-6 text-white">
                  Quick Links
                </Typography>
                <ul className="space-y-3">
                  {['Home', 'About Us', 'Causes','Report','LogIn', 'Contact'].map((item) => (
                    <li key={item}>
                      <motion.a 
                        href="#" 
                        className="text-gray-400 hover:text-amber-500 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        {item}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true }}
              >
                <Typography variant="h6" className="!font-bold !mb-6 text-white">
                  Recent Posts
                </Typography>
                <ul className="space-y-4">
                  {[
                    "First charity activity of this summer",
                    "Big charity: build school for poor children",
                    "Building clean-water system for rural poor"
                  ].map((post) => (
                    <li key={post}>
                      <motion.a 
                        href="#" 
                        className="text-gray-400 hover:text-amber-500 transition-colors flex items-start"
                        whileHover={{ x: 5 }}
                      >
                        <ArrowForward className="text-amber-500 mr-2 mt-1" fontSize="small" />
                        <span>{post}</span>
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Grid>
            
            <Grid item xs={12} md={3}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true }}
              >
                <Typography variant="h6" className="!font-bold !mb-6 text-white">
                  Contact Us
                </Typography>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <LocationOn className="text-amber-500 mr-3 mt-1" />
                    <span className="text-gray-400">123 Charity Street, Humanitarian City</span>
                  </li>
                  <li className="flex items-start">
                    <Phone className="text-amber-500 mr-3 mt-1" />
                    <span className="text-gray-400">+1 800 785 6748</span>
                  </li>
                  <li className="flex items-start">
                    <Email className="text-amber-500 mr-3 mt-1" />
                    <span className="text-gray-400">help@joyfulminds.com</span>
                  </li>
                </ul>
              </motion.div>
            </Grid>
          </Grid>
          
          <Divider className="!my-8 bg-gray-700" />
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center"
          >
            <Typography variant="body2" className="text-gray-500 !mb-4 md:mb-0">
              © {new Date().getFullYear()} Joyful Minds. All rights reserved.
            </Typography>
            <div className="flex space-x-6">
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-amber-500"
                whileHover={{ y: -2 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-amber-500"
                whileHover={{ y: -2 }}
              >
                Terms of Service
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-amber-500"
                whileHover={{ y: -2 }}
              >
                Sitemap
              </motion.a>
            </div>
          </motion.div>
        </Container>
      </footer>
      </div>
    
    
                  
    //               <CardContent>
    //                 <Typography variant="body1" className="text-gray-600 mb-4">
    //                   {cause.description}
    //                 </Typography>
                    
    //                 <div className="mb-4">
    //                   <div className="w-full bg-gray-200 rounded-full h-2">
    //                     <div 
    //                       className="bg-amber-500 h-2 rounded-full" 
    //                       style={{ width: `${Math.min(100, (cause.raised / cause.goal) * 100)}%` }}
    //                     ></div>
    //                   </div>
    //                   <div className="flex justify-between mt-2 text-sm">
    //                     <span>Raised: ${cause.raised.toLocaleString()}</span>
    //                     <span>Goal: ${cause.goal.toLocaleString()}</span>
    //                   </div>
    //                 </div>
                    
    //                 <Button 
    //                   variant="contained" 
    //                   className="bg-amber-500 hover:bg-amber-600 w-full py-2 rounded-full"
    //                 >
    //                   Donate Now
    //                 </Button>
    //               </CardContent>
    //             </motion.div>
    //           </Grid>
    //         ))}
    //       </Grid>
    //     </Container>
    //   </section>

    //   {/* Our History & Mission */}
    //   <section className="py-20 bg-white">
    //     <Container maxWidth="lg">
    //       <Grid container spacing={8}>
    //         <Grid item xs={12} md={6}>
    //           <Typography variant="h4" className="font-bold mb-2">
    //             Our <span className="text-amber-500">History</span>
    //           </Typography>
    //           <Typography variant="body1" className="text-gray-600 mb-6">
    //             The secret to happiness lies in helping others. Never underestimate the difference YOU can make in the lives of the poor, the abused and the helpless.
    //           </Typography>
    //           <Button 
    //             variant="outlined" 
    //             className="border-amber-500 text-amber-500 hover:bg-amber-50"
    //             endIcon={<ArrowForward />}
    //           >
    //             Read More
    //           </Button>
    //         </Grid>
            
    //         <Grid item xs={12} md={6}>
    //           <Typography variant="h4" className="font-bold mb-2">
    //             Our <span className="text-amber-500">Mission</span>
    //           </Typography>
    //           <Typography variant="body1" className="text-gray-600 mb-6">
    //             The secret to happiness lies in helping others. Never underestimate the difference YOU can make in the lives of the poor, the abused and the helpless.
    //           </Typography>
    //           <Button 
    //             variant="outlined" 
    //             className="border-amber-500 text-amber-500 hover:bg-amber-50"
    //             endIcon={<ArrowForward />}
    //           >
    //             Read More
    //           </Button>
    //         </Grid>
    //       </Grid>
    //     </Container>
    //   </section>

    //   {/* Featured Project */}
    //   <section className="py-20 bg-gray-50">
    //     <Container maxWidth="lg">
    //       <div className="bg-white rounded-xl shadow-lg overflow-hidden">
    //         <Grid container>
    //           <Grid item xs={12} md={6} className="relative">
    //             <img 
    //               src="https://cdn.pixabay.com/photo/2016/11/08/05/20/sunset-1807524_1280.jpg" 
    //               alt="Featured Project" 
    //               className="w-full h-full object-cover"
    //             />
    //             <div className="absolute inset-0 flex items-center justify-center">
    //               <motion.div 
    //                 whileHover={{ scale: 1.1 }}
    //                 className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center cursor-pointer"
    //               >
    //                 <PlayArrow className="text-white text-2xl" />
    //               </motion.div>
    //             </div>
    //           </Grid>
              
    //           <Grid item xs={12} md={6} className="p-8">
    //             <Typography variant="h4" className="font-bold mb-4">
    //               Featured project to build a School
    //             </Typography>
    //             <Typography variant="body1" className="text-gray-600 mb-6">
    //               The secret to happiness lies in helping others. Never underestimate the difference YOU can make in the lives of the poor, the abused and the helpless.
    //             </Typography>
                
    //             <div className="bg-amber-50 p-4 rounded-lg mb-6">
    //               <div className="flex justify-between mb-2">
    //                 <span className="font-bold">Goal: $450,000</span>
    //                 <span className="font-bold">Raised: $55,000</span>
    //               </div>
    //               <div className="w-full bg-gray-200 rounded-full h-2">
    //                 <div className="bg-amber-500 h-2 rounded-full" style={{ width: '12%' }}></div>
    //               </div>
    //             </div>
                
    //             <Button 
    //               variant="contained" 
    //               className="bg-amber-500 hover:bg-amber-600 px-8 py-3 rounded-full shadow-lg"
    //             >
    //               Donate Now
    //             </Button>
    //           </Grid>
    //         </Grid>
    //       </div>
    //     </Container>
    //   </section>

    //   {/* Volunteers Section */}
    //   <section className="py-20 bg-white">
    //     <Container maxWidth="lg">
    //       <div className="text-center mb-16">
    //         <Typography variant="h4" className="font-bold mb-4">
    //           Meet Our <span className="text-amber-500">Volunteers</span>
    //         </Typography>
    //         <Typography variant="body1" className="text-gray-600 max-w-2xl mx-auto">
    //           Help today because tomorrow you may be the one who needs more helping!
    //         </Typography>
    //       </div>
          
    //       <Grid container spacing={6}>
    //         {[
    //           { 
    //             name: "Nick Peterson", 
    //             role: "Program Lead", 
    //             image: "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg" 
    //           },
    //           { 
    //             name: "Emma Anderson", 
    //             role: "Education Lead", 
    //             image: "https://cdn.pixabay.com/photo/2022/10/17/15/02/photography-7527978_1280.jpg" 
    //           },
    //           { 
    //             name: "Michael Clark", 
    //             role: "Support Lead", 
    //             image: "https://cdn.pixabay.com/photo/2020/12/23/03/14/men-5853759_1280.jpg" 
    //           },
    //           { 
    //             name: "Casey Henderson", 
    //             role: "Regional Lead", 
    //             image: "https://cdn.pixabay.com/photo/2021/10/14/11/04/castle-6708761_1280.jpg" 
    //           }
    //         ].map((volunteer, index) => (
    //           <Grid item xs={6} sm={3} key={index}>
    //             <motion.div
    //               whileHover={{ y: -10 }}
    //               className="text-center"
    //             >
    //               <Avatar 
    //                 src={volunteer.image}
    //                 alt={volunteer.name}
    //                 className="w-32 h-32 mx-auto mb-4 border-4 border-white shadow-lg"
    //                 sx={{ width: 128, height: 128 }}
    //               />
    //               <Typography variant="h6" className="font-bold text-gray-800">
    //                 {volunteer.name}
    //               </Typography>
    //               <Typography variant="body2" className="text-amber-500">
    //                 {volunteer.role}
    //               </Typography>
    //             </motion.div>
    //           </Grid>
    //         ))}
    //       </Grid>
    //     </Container>
    //   </section>

    //   {/* Stats Section */}
    //   <section className="py-16 bg-amber-500 text-white">
    //     <Container maxWidth="lg">
    //       <Grid container spacing={4} className="text-center">
    //         {[
    //           { value: "1,176", label: "Volunteer Around The World" },
    //           { value: "5,519", label: "People Impacted" },
    //           { value: "3d", label: "No goal requirements" }
    //         ].map((stat, index) => (
    //           <Grid item xs={12} md={4} key={index}>
    //             <motion.div
    //               whileHover={{ scale: 1.05 }}
    //               className="p-6"
    //             >
    //               <Typography variant="h3" className="font-bold mb-2">
    //                 {stat.value}
    //               </Typography>
    //               <Typography variant="body1">
    //                 {stat.label}
    //               </Typography>
    //             </motion.div>
    //           </Grid>
    //         ))}
    //       </Grid>
    //     </Container>
    //   </section>

    //   {/* Volunteer CTA */}
    //   <section className="py-20 bg-white">
    //     <Container maxWidth="lg">
    //       <div className="bg-gray-50 rounded-xl p-8 md:p-12 text-center">
    //         <Typography variant="h4" className="font-bold mb-4">
    //           Become a Volunteer?
    //         </Typography>
    //         <Typography variant="body1" className="text-gray-600 max-w-3xl mx-auto mb-8">
    //           Join your hand with us for a better life and beautiful future. The secret to happiness lies in helping others. Never underestimate the difference YOU can make.
    //         </Typography>
            
    //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
    //           {[
    //             "We are friendly to each other",
    //             "It's an opportunity to help poor children",
    //             "Joining is totally free"
    //           ].map((item, index) => (
    //             <motion.div
    //               key={index}
    //               whileHover={{ y: -5 }}
    //               className="bg-white p-4 rounded-lg shadow-sm"
    //             >
    //               <Typography variant="body1">{item}</Typography>
    //             </motion.div>
    //           ))}
    //         </div>
            
    //         <Button 
    //           variant="contained" 
    //           className="bg-amber-500 hover:bg-amber-600 px-8 py-3 rounded-full shadow-lg"
    //         >
    //           Join Now
    //         </Button>
    //       </div>
    //     </Container>
    //   </section>

    //   {/* Footer */}
    //   <footer className="bg-gray-900 text-white pt-16 pb-8">
    //     <Container maxWidth="lg">
    //       <Grid container spacing={6} className="mb-12">
    //         <Grid item xs={12} md={4}>
    //           <div className="flex items-center mb-6">
    //             <img src="/logo-white.png" alt="Joyful Minds" className="h-10" />
    //             <Typography variant="h6" className="font-bold ml-2">
    //               Joyful <span className="text-amber-400">Minds</span>
    //             </Typography>
    //           </div>
    //           <Typography variant="body2" className="text-gray-400 mb-6">
    //             Your contribution can help a solution.
    //           </Typography>
    //           <div className="flex space-x-3">
    //             {[Facebook, Twitter, LinkedIn, YouTube, Instagram].map((Icon, index) => (
    //               <motion.a
    //                 key={index}
    //                 href="#"
    //                 className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-500 transition-colors"
    //                 whileHover={{ y: -3 }}
    //               >
    //                 <Icon className="text-white" />
    //               </motion.a>
    //             ))}
    //           </div>
    //         </Grid>
            
    //         <Grid item xs={6} md={2}>
    //           <Typography variant="h6" className="font-bold mb-6">Home</Typography>
    //           <ul className="space-y-3">
    //             {['About', 'Causes', 'Event', 'Pages', 'Blog', 'Contact'].map((item) => (
    //               <li key={item}>
    //                 <a href="#" className="text-gray-400 hover:text-amber-400">{item}</a>
    //               </li>
    //             ))}
    //           </ul>
    //         </Grid>
            
    //         <Grid item xs={6} md={3}>
    //           <Typography variant="h6" className="font-bold mb-6">Contact Us</Typography>
    //           <ul className="space-y-3 text-gray-400">
    //             <li>123 Charity Street, New York, NY 10001</li>
    //             <li>+1 800 785 6748</li>
    //             <li>help@joyfulminds.com</li>
    //           </ul>
    //         </Grid>
            
    //         <Grid item xs={12} md={3}>
    //           <Typography variant="h6" className="font-bold mb-6">Newsletter</Typography>
    //           <Typography variant="body2" className="text-gray-400 mb-4">
    //             Subscribe to our newsletter to get updates about our services.
    //           </Typography>
    //           <div className="flex">
    //             <TextField
    //               variant="outlined"
    //               placeholder="Your Email"
    //               size="small"
    //               className="bg-white rounded-r-none flex-grow"
    //               value={email}
    //               onChange={(e) => setEmail(e.target.value)}
    //             />
    //             <Button 
    //               variant="contained" 
    //               className="bg-amber-500 hover:bg-amber-600 rounded-l-none"
    //             >
    //               Submit
    //             </Button>
    //           </div>
    //         </Grid>
    //       </Grid>
          
    //       <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
    //         <Typography variant="body2" className="text-gray-400 mb-4 md:mb-0">
    //           © 2025 Joyful Minds. All Rights Reserved. Powered by NextJS
    //         </Typography>
    //         <div className="flex space-x-4">
    //           <a href="#" className="text-gray-400 hover:text-amber-400 text-sm">Terms of Service</a>
    //           <a href="#" className="text-gray-400 hover:text-amber-400 text-sm">Privacy Policy</a>
    //         </div>
    //       </div>
    //     </Container>
    //   </footer>
    // </div>
  );
};

export default JoyfulMindsWebsite;