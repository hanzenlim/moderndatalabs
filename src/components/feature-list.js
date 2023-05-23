// import * as React from "react"
import { graphql } from "gatsby"
import { Container, Box, Kicker, Heading, Text } from "./ui"
import Feature from "./feature"
import React, { useState } from 'react';




export default function FeatureList(props) {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    if (activeItem === index) {
      setActiveItem(null);
    } else {
      setActiveItem(index);
    }
  };

  const faqItems = [
    {
      question: 'Why is this data science bootcamp relevant today?',
      answer:
        'It’s ranked among the top fields in LinkedIn’s Emerging Jobs Report for three years running...',
    },
    {
      question: 'Will I earn a certificate?',
      answer:
        'Yes! Upon passing this course, you will receive a signed certificate of completion...',
    },
    {
      question: 'What are the professional backgrounds of data science bootcamp students?',
      answer:
        'DSI students come from all walks of life but share one common mission: They are passionate...',
    },
    {
      question: 'Are there any prerequisites for this data science bootcamp?',
      answer:
        'For your capstone project, you’ll tackle a real-world data problem from end to end. Develop a pitch and problem statement, source and collect relevant data, conduct an exploratory data analysis, and build a predictive model. You’ll document and share your findings through a presentation, technical report, and non-technical summary Throughout this Immersive, you’ll also compile a portfolio of projects designed to reinforce what you’ve learned in each unit. Gain hands-on experience with statistical and machine learning models, Python programming tools, recommender systems, neural networks, and more.',
    },
    {
      question: 'What does my tuition cover?',
      answer:
        'Here are just some of the benefits full-time students can expect at GA: Expert instruction...',
    },
    {
      question: 'What projects will I work on during this data science bootcamp?',
      answer:
        'For your capstone project, you’ll tackle a real-world data problem from end to end...',
    },
    {
      question: 'How does this course relate to GA’s other data programs?',
      answer:
        'This Data Science Immersive course is meant for students who are committed to changing careers...',
    },
    {
      question: 'Which format should I take this data science bootcamp in – on campus or online?',
      answer:
        'It’s up to you! Our Remote courses offer a learning experience that mirrors GA’s on-campus offerings...',
    },
    {
      question: 'What are my financing options?',
      answer:
        'We offer a variety of different financing options, including installment plans and scholarships...',
    },
  ];




  console.log("ggg")
  return (
    <Container width="fullbleed">
      <Box background="muted" radius="large">



          <div className="faq-page" >
            <h2 className="faq-title" style={{
            // backgroundColor:"red",
            marginLeft:"15px"
            
          }}>Frequently Asked Questions</h2>
            <div className="faq-list" style={{
            // backgroundColor:"red",
            marginLeft:"15px"
            
          }}>
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className={`faq-item ${activeItem === index ? 'active' : ''}`}
                  onClick={() => handleItemClick(index)}
                >
                  {activeItem === index ? <span>&#8227;</span> : <span>&#8227;</span>}<span className="faq-question">{item.question}</span>
                  
                  <div >

    
                    
                    <p className="faq-answer" style={{ maxHeight: activeItem === index ? "1000px" : "0",  display: activeItem === index ? "block" : "none"}}>{item.answer}</p>
                  </div>
                  
                </div>
              ))}
            </div>




            <p className="more-questions">
              <a href="https://generalassemb.ly/faq" target="_blank" rel="noopener noreferrer">
                View all FAQs
              </a>
            </p>
          </div>


      </Box>



      
    </Container>
  )
}

export const query = graphql`
  fragment HomepageFeatureListContent on HomepageFeatureList {
    id
    kicker
    heading
    text
    content {
      id
      ...HomepageFeatureContent
    }
  }
`
