import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Avatar,
  Grid,
  Paper,
  Chip,
  Stack,
  IconButton,
  Divider,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Award,
  Server,
  Cpu,
  Database,
  Shield,
  Zap,
  Sparkles,
  MapPin,
  Briefcase,
  GraduationCap,
  CheckCircle2,
  Phone,
  Calendar,
  Globe,
  ChevronRight,
  User,
} from "lucide-react";
import profile from "./assets/images/profile-pic.jpg";
import nvidiaBadge from "./assets/images/nvidia-agentic-ai-badge.png";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  const sections = ["About", "Skills", "Experience", "Projects", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section.toLowerCase());
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.toLowerCase());
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const skillsData = [
    {
      category: "Languages",
      icon: <Cpu size={20} color="#76b900" />,
      items: ["Java", "Kotlin", "TypeScript", "Shell scripting", "Groovy"],
    },
    {
      category: "Frameworks",
      icon: <Server size={20} color="#06b6d4" />,
      items: ["Spring Boot", "React", "Angular", "Hibernate", "JPA", "Cucumber", "Flyway"],
    },
    {
      category: "Cloud & Infrastructure",
      icon: <Globe size={20} color="#a855f7" />,
      items: ["AWS", "Azure", "Kubernetes (AKS)", "Docker", "LocalStack", "Terraform"],
    },
    {
      category: "Databases & Streaming",
      icon: <Database size={20} color="#76b900" />,
      items: ["PostgreSQL", "Amazon DynamoDB", "Apache Kafka", "Oracle", "MySQL", "MongoDB"],
    },
    {
      category: "CI/CD & Observability",
      icon: <Zap size={20} color="#06b6d4" />,
      items: ["GitHub Actions", "Jenkins", "Bamboo", "BitBucket", "Splunk", "Dynatrace", "SonarQube"],
    },
    {
      category: "Security & Testing",
      icon: <Shield size={20} color="#a855f7" />,
      items: ["OAuth2", "OIDC SCA Flow", "JWT", "RBAC", "ReBAC", "JUnit", "Mockito", "TDD/BDD"],
    },
  ];

  const experienceData = [
    {
      role: "Senior Software Developer",
      company: "Tata Consultancy Services (Oslo, Norway)",
      period: "Sept 2021 — Present",
      client: "Mastercard",
      details: [
        {
          product: "Mastercard Integrated Business (MIB)",
          points: [
            "Designed and developed a unified aggregator engine interfacing with diverse custom bank adapters, enabling ERP systems to retrieve account info and process single/basket payments.",
            "Implemented PSD2-compliant OAuth2/OIDC consent and SCA flows, managing the full consent lifecycle and enforcing TPP role separation across AISP and PISP integrations.",
            "Engineered secure cross-border financial workflows across Norway, Denmark, and Sweden, onboarding new banking infrastructures."
          ]
        },
        {
          product: "Brevgiro",
          points: [
            "Architected and executed the migration of a legacy monolithic application into a scalable microservices architecture.",
            "Developed and maintained microservices to handle the end-to-end processing of Norway's paper-based invoicing solution, validating scanned giro data to execute final payments.",
            "Adopted an API-first approach to microservice design, defining Swagger contracts upfront to ensure consistent integration.",
            "Developed React frontend interfaces for bank and customer support personnel to manage and search invoicing workflows."
          ]
        }
      ]
    },
    {
      role: "Software Developer",
      company: "Tata Consultancy Services (Cape Town, South Africa)",
      period: "Sept 2017 — Sept 2021",
      client: "Sanlam Life Insurance Ltd",
      details: [
        {
          product: "Epsilon",
          points: [
            "Developed and engineered the complete infrastructure for an enterprise-wide DevOps transformation, introducing modern frameworks to eliminate legacy release bottlenecks.",
            "Led the technical migration of legacy systems to modern Spring Boot applications to modernize the backend ecosystem.",
            "Designed and built automated CI/CD pipelines and integrated test automation frameworks to accelerate time-to-market."
          ]
        }
      ]
    }
  ];

  const projectsData = [
    {
      title: "reguassist-ai",
      status: "completed",
      tagline: "Grounded AI for Regulated Knowledge",
      description: "A production-ready, multi-tenant Retrieval-Augmented Generation (RAG) platform for compliance, operations, and support teams in regulated banking and insurance environments.",
      tech: ["Spring Boot 3", "Java 21", "React 19", "TypeScript", "pgvector", "PostgreSQL", "OpenAI API", "Ollama", "Flyway", "Docker"],
      github: "https://github.com/asishjac/reguassist-ai",
      glowClass: "glowing-card"
    },
    {
      title: "chatr",
      status: "completed",
      tagline: "AWS-Native Messaging & Image Moderation",
      description: "A professional-grade messaging application built with a scalable AWS-native architecture, incorporating real-time AI image moderation to detect and scan unsafe content.",
      tech: ["Node.js", "Express", "React", "DynamoDB", "Amazon S3", "Amazon SES", "AWS Rekognition", "Socket.io", "Terraform", "Nginx"],
      github: "https://github.com/asishjac/chatr",
      glowClass: "glowing-card-cyan"
    },
    {
      title: "Distributed-Notification-System",
      status: "completed",
      tagline: "Reactive Event-Driven Notification Engine",
      description: "An event-driven notification gateway showcasing cloud-native execution. Utilizes a reactive gateway to publish notification requests asynchronously for distributed worker delivery.",
      tech: ["Kotlin", "Spring Boot (WebFlux)", "AWS Lambda", "Amazon SQS", "DynamoDB", "PostgreSQL", "R2DBC", "LocalStack", "Terraform"],
      github: "https://github.com/asishjac/Distributed-Notification-System",
      glowClass: "glowing-card"
    },
    {
      title: "event-driven-tweet-processor",
      status: "inprogress",
      tagline: "Streaming Analytics Ingestion Pipeline",
      description: "A highly scalable microservices data pipeline that ingests social streams, publishes event streams into Kafka, indexes data into Elasticsearch, and runs stream processing topologies.",
      tech: ["Java 25", "Spring Boot", "Spring Cloud", "Apache Kafka", "Kafka Streams", "Elasticsearch", "Keycloak", "PostgreSQL", "Prometheus", "ELK Stack"],
      github: "https://github.com/asishjac/event-driven-tweet-processor",
      glowClass: "glowing-card-cyan"
    }
  ];

  return (
    <Box sx={{ minHeight: "100vh", position: "relative" }}>
      {/* Interactive Background */}
      <div className="grid-bg" />

      {/* Glassmorphic Navbar */}
      <AppBar
        position="sticky"
        sx={{
          background: "rgba(11, 15, 25, 0.7)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: "none",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Typography
              variant="h5"
              fontWeight="800"
              onClick={() => scrollTo("home")}
              sx={{
                cursor: "pointer",
                fontFamily: "Outfit",
                letterSpacing: "-0.5px",
                display: "flex",
                alignItems: "center",
                gap: 1
              }}
            >
              <span style={{ color: "#76b900" }}>asish</span>
              <span style={{ color: "#06b6d4" }}>.jacob</span>
            </Typography>
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
              {sections.map((section) => (
                <Button
                  key={section}
                  onClick={() => scrollTo(section)}
                  sx={{
                    color: activeSection === section.toLowerCase() ? "#76b900" : "#94a3b8",
                    fontFamily: "Outfit",
                    fontWeight: 500,
                    textTransform: "none",
                    fontSize: "0.95rem",
                    transition: "color 0.3s",
                    position: "relative",
                    "&:hover": {
                      color: "#76b900",
                      background: "transparent"
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 4,
                      left: "15%",
                      width: "70%",
                      height: "2px",
                      background: "#76b900",
                      transform: activeSection === section.toLowerCase() ? "scaleX(1)" : "scaleX(0)",
                      transformOrigin: "left",
                      transition: "transform 0.3s ease-out-in"
                    }
                  }}
                >
                  {section}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Hero Section */}
      <Container id="home" maxWidth="lg" sx={{ pt: { xs: 8, md: 16 }, pb: { xs: 8, md: 12 } }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={7}>
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
                <Chip
                  icon={<Award size={14} color="#76b900" />}
                  label="NVIDIA Certified Professional"
                  sx={{
                    background: "rgba(118, 185, 0, 0.1)",
                    color: "#76b900",
                    border: "1px solid rgba(118, 185, 0, 0.2)",
                    fontFamily: "Outfit",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    py: 1.5
                  }}
                />
                <Chip
                  label="Senior Developer"
                  sx={{
                    background: "rgba(6, 182, 212, 0.1)",
                    color: "#06b6d4",
                    border: "1px solid rgba(6, 182, 212, 0.2)",
                    fontFamily: "Outfit",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    py: 1.5
                  }}
                />
              </Box>

              <Typography
                variant="h1"
                fontWeight="900"
                sx={{
                  fontFamily: "Outfit",
                  fontSize: { xs: "3rem", sm: "4.2rem", md: "5rem" },
                  lineHeight: 1.1,
                  mb: 2,
                  letterSpacing: "-2px"
                }}
              >
                Building Grounded <br />
                <span className="text-gradient-ai">Agentic AI</span> & <br />
                <span className="text-gradient-cyan">Microservices</span>
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  color: "#94a3b8",
                  mb: 4,
                  fontWeight: 400,
                  fontSize: { xs: "1.1rem", md: "1.3rem" },
                  maxWidth: "600px",
                  lineHeight: 1.6
                }}
              >
                Over 8 years of experience building secure, high-concurrency payment adapters and microservice pipelines at <strong>Mastercard Norway</strong>. Expert in Spring Boot, AWS, Kafka, and Spring AI.
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button
                  variant="contained"
                  onClick={() => scrollTo("projects")}
                  sx={{
                    background: "linear-gradient(135deg, #76b900 0%, #4c7700 100%)",
                    color: "#ffffff",
                    fontFamily: "Outfit",
                    fontWeight: 600,
                    textTransform: "none",
                    px: 4,
                    py: 1.5,
                    borderRadius: "8px",
                    boxShadow: "0 4px 14px 0 rgba(118, 185, 0, 0.4)",
                    fontSize: "1.05rem",
                    "&:hover": {
                      background: "linear-gradient(135deg, #8ad300 0%, #5b8e00 100%)",
                      boxShadow: "0 6px 20px 0 rgba(118, 185, 0, 0.6)"
                    }
                  }}
                >
                  Explore Projects
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => scrollTo("contact")}
                  sx={{
                    borderColor: "rgba(255, 255, 255, 0.15)",
                    color: "#f8fafc",
                    fontFamily: "Outfit",
                    fontWeight: 600,
                    textTransform: "none",
                    px: 4,
                    py: 1.5,
                    borderRadius: "8px",
                    fontSize: "1.05rem",
                    "&:hover": {
                      borderColor: "#76b900",
                      background: "rgba(118, 185, 0, 0.05)"
                    }
                  }}
                >
                  Get In Touch
                </Button>
              </Stack>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={5} sx={{ display: "flex", justifyContent: "center", position: "relative" }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              style={{ position: "relative" }}
            >
              {/* Profile Image Wrapper */}
              <Box
                sx={{
                  position: "relative",
                  width: { xs: 260, sm: 320 },
                  height: { xs: 260, sm: 320 },
                  borderRadius: "24px",
                  overflow: "hidden",
                  border: "2px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(to bottom, transparent, rgba(6,9,19,0.8))",
                    zIndex: 1
                  }
                }}
              >
                <Avatar
                  alt="Asish Jacob"
                  src={profile}
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 0,
                    objectFit: "cover"
                  }}
                />
              </Box>

              {/* Floating Certification Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  bottom: "-25px",
                  right: "-20px",
                  zIndex: 10
                }}
              >
                <Paper
                  sx={{
                    background: "rgba(13, 20, 38, 0.85)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(118, 185, 0, 0.4)",
                    borderRadius: "16px",
                    p: 2,
                    boxShadow: "0 10px 30px rgba(118,185,0,0.25)",
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    maxWidth: "240px"
                  }}
                >
                  <img
                    src={nvidiaBadge}
                    alt="Nvidia Agentic AI Badge"
                    style={{ width: "48px", height: "48px" }}
                  />
                  <Box>
                    <Typography variant="body2" fontWeight="700" color="#76b900" sx={{ fontFamily: "Outfit" }}>
                      AGENTIC AI
                    </Typography>
                    <Typography variant="caption" color="#94a3b8">
                      NVIDIA Certified Professional
                    </Typography>
                  </Box>
                </Paper>
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* About Section */}
      <Box id="about" sx={{ background: "rgba(13, 20, 38, 0.2)", py: 12, borderTop: "1px solid rgba(255,255,255,0.03)" }}>
        <Container maxWidth="lg">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <Typography variant="h3" fontWeight="800" align="center" gutterBottom sx={{ fontFamily: "Outfit", mb: 2 }}>
              Professional Summary
            </Typography>
            <Typography variant="h6" align="center" sx={{ color: "#94a3b8", mb: 6, fontWeight: 300, maxWidth: "700px", mx: "auto" }}>
              Enterprise payment architectures and state-of-the-art AI systems built with execution excellence.
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 4, background: "rgba(20, 30, 55, 0.3)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "16px", height: "100%" }}>
                  <Typography variant="h5" fontWeight="700" color="#76b900" gutterBottom sx={{ fontFamily: "Outfit", display: "flex", alignItems: "center", gap: 1 }}>
                    <Briefcase size={22} /> Background & Focus
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#94a3b8", lineHeight: 1.8, mb: 3 }}>
                    I am a senior developer with a proven ability to design and deliver secure, scalable web and microservice-based applications. In my current role at TCS supporting <strong>Mastercard Norway</strong>, I lead critical migrations and develop payment adapters handling millions of transactions.
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#94a3b8", lineHeight: 1.8 }}>
                    With a B.Tech in Computer Science and Engineering, I bring strong engineering fundamentals combined with modern, proactive architectural leadership. I possess extensive experience across banking, insurance, and compliance domains.
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 4, background: "rgba(20, 30, 55, 0.3)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "16px", height: "100%" }}>
                  <Typography variant="h5" fontWeight="700" color="#06b6d4" gutterBottom sx={{ fontFamily: "Outfit", display: "flex", alignItems: "center", gap: 1 }}>
                    <Sparkles size={22} /> Core Competencies
                  </Typography>
                  <Stack spacing={2} sx={{ mt: 2 }}>
                    {[
                      { title: "Enterprise Payment Adapters", desc: "Aggregator engines, PSD2 compliance, SCA OAuth flows." },
                      { title: "Reactive Microservices", desc: "Spring Boot, Kotlin WebFlux, Kafka stream processing." },
                      { title: "Agentic AI Engineering", desc: "LLMs, RAG frameworks, Spring AI autonomous agents." },
                      { title: "Cloud Dev-Ops Architectures", desc: "Infrastructure as Code with Terraform, AWS, Azure, LocalStack." }
                    ].map((comp, idx) => (
                      <Box key={idx} sx={{ display: "flex", gap: 2 }}>
                        <CheckCircle2 size={20} color="#06b6d4" style={{ flexShrink: 0, marginTop: "4px" }} />
                        <Box>
                          <Typography variant="subtitle1" fontWeight="600" color="#f8fafc" sx={{ fontSize: "0.95rem" }}>
                            {comp.title}
                          </Typography>
                          <Typography variant="body2" color="#94a3b8">
                            {comp.desc}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Skills Section */}
      <Box id="skills" sx={{ py: 12 }}>
        <Container maxWidth="lg">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <Typography variant="h3" fontWeight="800" align="center" gutterBottom sx={{ fontFamily: "Outfit", mb: 2 }}>
              Skills & Tech Stack
            </Typography>
            <Typography variant="h6" align="center" sx={{ color: "#94a3b8", mb: 6, fontWeight: 300, maxWidth: "700px", mx: "auto" }}>
              Multi-language polyglot engineer with hands-on expertise across backend, cloud infrastructure, and AI tools.
            </Typography>

            <Grid container spacing={3}>
              {skillsData.map((skillGroup, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Box className="glowing-card" sx={{ p: 3.5, height: "100%", display: "flex", flexDirection: "column" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}>
                      {skillGroup.icon}
                      <Typography variant="h6" fontWeight="700" sx={{ fontFamily: "Outfit", fontSize: "1.15rem" }}>
                        {skillGroup.category}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {skillGroup.items.map((item, i) => (
                        <Chip
                          key={i}
                          label={item}
                          sx={{
                            background: "rgba(255, 255, 255, 0.04)",
                            border: "1px solid rgba(255, 255, 255, 0.08)",
                            color: "#f8fafc",
                            fontSize: "0.82rem",
                            fontWeight: 500,
                            borderRadius: "6px",
                            "&:hover": {
                              background: "rgba(118, 185, 0, 0.08)",
                              borderColor: "rgba(118, 185, 0, 0.3)"
                            }
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Experience Section */}
      <Box id="experience" sx={{ background: "rgba(13, 20, 38, 0.2)", py: 12, borderTop: "1px solid rgba(255,255,255,0.03)" }}>
        <Container maxWidth="lg">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <Typography variant="h3" fontWeight="800" align="center" gutterBottom sx={{ fontFamily: "Outfit", mb: 2 }}>
              Professional History
            </Typography>
            <Typography variant="h6" align="center" sx={{ color: "#94a3b8", mb: 8, fontWeight: 300, maxWidth: "700px", mx: "auto" }}>
              Years of experience delivering reliable financial products for international clients.
            </Typography>

            <Box sx={{ position: "relative", "&::before": { content: '""', position: "absolute", left: { xs: "16px", md: "50%" }, top: 0, bottom: 0, width: "2px", background: "rgba(255,255,255,0.08)" } }}>
              {experienceData.map((exp, idx) => (
                <Box
                  key={idx}
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: idx % 2 === 0 ? "row" : "row-reverse" },
                    mb: 8,
                    position: "relative"
                  }}
                >
                  {/* Circle Pin */}
                  <Box
                    sx={{
                      position: "absolute",
                      left: { xs: "16px", md: "50%" },
                      top: "24px",
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      background: idx === 0 ? "#76b900" : "#06b6d4",
                      transform: "translateX(-50%)",
                      boxShadow: idx === 0 ? "0 0 10px #76b900" : "0 0 10px #06b6d4",
                      zIndex: 2
                    }}
                  />

                  {/* Spacer Column */}
                  <Box sx={{ flex: 1, display: { xs: "none", md: "block" } }} />

                  {/* Timeline Card */}
                  <Box sx={{ flex: 1.2, pl: { xs: 5, md: idx % 2 === 0 ? 6 : 0 }, pr: { xs: 0, md: idx % 2 === 0 ? 0 : 6 } }}>
                    <Paper
                      sx={{
                        p: 4,
                        background: "rgba(20, 30, 55, 0.45)",
                        backdropFilter: "blur(8px)",
                        border: `1px solid ${idx === 0 ? "rgba(118, 185, 0, 0.15)" : "rgba(6, 182, 212, 0.15)"}`,
                        borderRadius: "16px",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                      }}
                    >
                      <Stack direction="row" justifyContent="space-between" alignItems="start" flexWrap="wrap" gap={1} sx={{ mb: 2 }}>
                        <Box>
                          <Typography variant="h5" fontWeight="800" sx={{ fontFamily: "Outfit", color: "#f8fafc" }}>
                            {exp.role}
                          </Typography>
                          <Typography variant="subtitle1" fontWeight="600" color={idx === 0 ? "#76b900" : "#06b6d4"}>
                            {exp.company}
                          </Typography>
                        </Box>
                        <Chip
                          label={exp.period}
                          size="small"
                          sx={{
                            background: "rgba(255,255,255,0.06)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            color: "#94a3b8",
                            fontFamily: "Outfit",
                            fontWeight: 600
                          }}
                        />
                      </Stack>

                      <Typography variant="body2" sx={{ color: "#64748b", mb: 3, textTransform: "uppercase", tracking: "1px", fontWeight: 700 }}>
                        Client: {exp.client}
                      </Typography>

                      <Divider sx={{ mb: 3, opacity: 0.3 }} />

                      {exp.details.map((prod, pIdx) => (
                        <Box key={pIdx} sx={{ mb: pIdx < exp.details.length - 1 ? 4 : 0 }}>
                          <Typography variant="h6" fontWeight="700" color="#f8fafc" sx={{ fontFamily: "Outfit", fontSize: "1.05rem", mb: 1.5, display: "flex", alignItems: "center", gap: 1 }}>
                            <ChevronRight size={16} color={idx === 0 ? "#76b900" : "#06b6d4"} /> Product: {prod.product}
                          </Typography>
                          <ul style={{ margin: 0, paddingLeft: "20px", color: "#94a3b8", listStyleType: "circle" }}>
                            {prod.points.map((pt, ptIdx) => (
                              <li key={ptIdx} style={{ marginBottom: "8px", fontSize: "0.92rem", lineHeight: 1.6 }}>
                                {pt}
                              </li>
                            ))}
                          </ul>
                        </Box>
                      ))}
                    </Paper>
                  </Box>
                </Box>
              ))}
            </Box>

            {/* International & Agile Experience */}
            <Box sx={{ mt: 10 }}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Paper sx={{ p: 4, background: "rgba(20, 30, 55, 0.25)", border: "1px solid rgba(255,255,255,0.04)", borderRadius: "16px" }}>
                    <Typography variant="h6" fontWeight="800" sx={{ fontFamily: "Outfit", color: "#76b900", mb: 2, display: "flex", alignItems: "center", gap: 1.5 }}>
                      <Globe size={22} /> International Experience
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#94a3b8", lineHeight: 1.7 }}>
                      Consulted and delivered software solutions globally, working on-site as an IT specialist in <strong>Cape Town, South Africa</strong> (supporting Sanlam Insurance) and in <strong>Oslo, Norway</strong> (delivering payment adaptations directly for Mastercard).
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper sx={{ p: 4, background: "rgba(20, 30, 55, 0.25)", border: "1px solid rgba(255,255,255,0.04)", borderRadius: "16px" }}>
                    <Typography variant="h6" fontWeight="800" sx={{ fontFamily: "Outfit", color: "#06b6d4", mb: 2, display: "flex", alignItems: "center", gap: 1.5 }}>
                      <User size={22} /> Agile Leadership
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#94a3b8", lineHeight: 1.7 }}>
                      Agile team player with deep expertise in Scrum ceremonies. Actively guides team members through code reviews, peer programming, and technical mentorship. Skilled in orchestrating Jira, Confluence, and CI/CD operations for delivery agility.
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box id="projects" sx={{ py: 12 }}>
        <Container maxWidth="lg">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <Typography variant="h3" fontWeight="800" align="center" gutterBottom sx={{ fontFamily: "Outfit", mb: 2 }}>
              Featured Repositories
            </Typography>
            <Typography variant="h6" align="center" sx={{ color: "#94a3b8", mb: 8, fontWeight: 300, maxWidth: "700px", mx: "auto" }}>
              Explore production-grade open source projects representing custom implementations on Git.
            </Typography>

            <Grid container spacing={4}>
              {projectsData.map((project, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Box className={project.glowClass} sx={{ p: 4, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <Box>
                      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2.5 }}>
                        <Typography variant="h5" fontWeight="800" sx={{ fontFamily: "Outfit", color: "#f8fafc" }}>
                          {project.title}
                        </Typography>
                        <Chip
                          label={project.status === "completed" ? "Completed" : "In Progress"}
                          size="small"
                          color={project.status === "completed" ? "success" : "warning"}
                          sx={{
                            fontFamily: "Outfit",
                            fontWeight: 600,
                            borderRadius: "6px",
                            fontSize: "0.78rem"
                          }}
                        />
                      </Stack>

                      <Typography variant="subtitle2" fontWeight="700" color={project.glowClass === "glowing-card" ? "#76b900" : "#06b6d4"} sx={{ mb: 2, fontFamily: "Outfit" }}>
                        {project.tagline}
                      </Typography>

                      <Typography variant="body2" sx={{ color: "#94a3b8", mb: 4, lineHeight: 1.7 }}>
                        {project.description}
                      </Typography>
                    </Box>

                    <Box>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8, mb: 3.5 }}>
                        {project.tech.map((t, idx) => (
                          <Chip
                            key={idx}
                            label={t}
                            size="small"
                            sx={{
                              background: "rgba(255,255,255,0.03)",
                              border: "1px solid rgba(255,255,255,0.06)",
                              color: "#94a3b8",
                              fontSize: "0.78rem",
                              borderRadius: "4px"
                            }}
                          />
                        ))}
                      </Box>
                      <Button
                        href={project.github}
                        target="_blank"
                        variant="text"
                        endIcon={<ExternalLink size={16} />}
                        sx={{
                          color: "#f8fafc",
                          textTransform: "none",
                          fontFamily: "Outfit",
                          fontWeight: 600,
                          p: 0,
                          fontSize: "0.95rem",
                          "&:hover": {
                            color: project.glowClass === "glowing-card" ? "#76b900" : "#06b6d4",
                            background: "transparent"
                          }
                        }}
                      >
                        Inspect Repository
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" sx={{ py: 12 }}>
        <Container maxWidth="lg">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <Typography variant="h3" fontWeight="800" align="center" gutterBottom sx={{ fontFamily: "Outfit", mb: 2 }}>
              Get In Touch
            </Typography>
            <Typography variant="h6" align="center" sx={{ color: "#94a3b8", mb: 8, fontWeight: 300, maxWidth: "700px", mx: "auto" }}>
              Interested in collaboration? Let's connect and discuss cloud applications or autonomous AI agents.
            </Typography>

            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} md={8}>
                <Paper
                  sx={{
                    p: 5,
                    background: "rgba(13, 20, 38, 0.45)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "20px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                  }}
                >
                  <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="h6" fontWeight="700" gutterBottom sx={{ fontFamily: "Outfit", mb: 3 }}>
                        Contact Details
                      </Typography>
                      <Stack spacing={3.5}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                          <Avatar sx={{ background: "rgba(118, 185, 0, 0.1)", border: "1px solid rgba(118,185,0,0.2)" }}>
                            <Mail size={18} color="#76b900" />
                          </Avatar>
                          <Box>
                            <Typography variant="caption" color="#64748b">
                              EMAIL
                            </Typography>
                            <Typography variant="body2" color="#f8fafc" fontWeight="600">
                              <a href="mailto:asishjac@gmail.com">asishjac@gmail.com</a>
                            </Typography>
                          </Box>
                        </Box>

                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                          <Avatar sx={{ background: "rgba(6, 182, 212, 0.1)", border: "1px solid rgba(6,182,212,0.2)" }}>
                            <Phone size={18} color="#06b6d4" />
                          </Avatar>
                          <Box>
                            <Typography variant="caption" color="#64748b">
                              PHONE
                            </Typography>
                            <Typography variant="body2" color="#f8fafc" fontWeight="600">
                              +47 46224319
                            </Typography>
                          </Box>
                        </Box>

                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                          <Avatar sx={{ background: "rgba(168, 85, 247, 0.1)", border: "1px solid rgba(168,85,247,0.2)" }}>
                            <MapPin size={18} color="#a855f7" />
                          </Avatar>
                          <Box>
                            <Typography variant="caption" color="#64748b">
                              LOCATION
                            </Typography>
                            <Typography variant="body2" color="#f8fafc" fontWeight="600">
                              Oslo, Norway
                            </Typography>
                          </Box>
                        </Box>
                      </Stack>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Typography variant="h6" fontWeight="700" gutterBottom sx={{ fontFamily: "Outfit", mb: 3 }}>
                        Profiles & Media
                      </Typography>
                      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                        <Button
                          href="https://github.com/asishjac"
                          target="_blank"
                          variant="contained"
                          startIcon={<Github size={18} />}
                          sx={{
                            background: "rgba(255,255,255,0.06)",
                            color: "#f8fafc",
                            border: "1px solid rgba(255,255,255,0.1)",
                            textTransform: "none",
                            fontFamily: "Outfit",
                            fontWeight: 600,
                            flex: 1,
                            py: 1.5,
                            "&:hover": {
                              background: "rgba(118, 185, 0, 0.1)",
                              borderColor: "#76b900"
                            }
                          }}
                        >
                          GitHub
                        </Button>
                        <Button
                          href="https://www.linkedin.com/in/asish-jacob/"
                          target="_blank"
                          variant="contained"
                          startIcon={<Linkedin size={18} />}
                          sx={{
                            background: "rgba(255,255,255,0.06)",
                            color: "#f8fafc",
                            border: "1px solid rgba(255,255,255,0.1)",
                            textTransform: "none",
                            fontFamily: "Outfit",
                            fontWeight: 600,
                            flex: 1,
                            py: 1.5,
                            "&:hover": {
                              background: "rgba(6, 182, 212, 0.1)",
                              borderColor: "#06b6d4"
                            }
                          }}
                        >
                          LinkedIn
                        </Button>
                      </Stack>
                      <Box sx={{ mt: 4, p: 2.5, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "12px", textAlign: "center" }}>
                        <Typography variant="caption" color="#94a3b8">
                          Born on May 7, 1994. Graduated with distinction in Computer Science. Consulted in Norway & South Africa.
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          background: "rgba(6, 9, 19, 0.9)",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          py: 4,
          textAlign: "center"
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2" color="#64748b">
            © {new Date().getFullYear()} Asish Jacob. All Rights Reserved. Custom Dark Developer Portfolio Redesign.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}